import { useAppDispatch, useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import ImageButton from "components/ImageButton/ImageButton";
import { SaveButtonContainer, SaveStatusText } from "./SaveButton.styled";
import CryptoJS from "crypto-js";
import { useEffect, useState } from "react";
import { loadDivSlice } from "app/slices/divData";
import { loadHelperSlice } from "app/slices/helperData";
import { loadUserSlice } from "app/slices/userData";
import React from "react";


function SaveButton(){
    let userDataSelector = useAppSelector((state:RootState) => state.userData);
    let divDataSelector = useAppSelector((state:RootState) => state.divData);
    let helperDataSelector = useAppSelector((state:RootState) => state.helperData);
    let [statusText,setStatusText] = useState("");
    let [statusDebounce, setStatusDebounce] = useState(false);
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    let dispatch = useAppDispatch();
    const [buttonToggle, setButtonToggle] = useState(false);

    function saveData(){
        if(buttonToggle){
            return;
        }
        setButtonToggle(true);
        
        var cipherText = CryptoJS.AES.encrypt(JSON.stringify({
            div :   divDataSelector,
            helper: helperDataSelector,
            user:   userDataSelector
        }), process.env.customKey || "ass").toString();
        document.cookie = `divGame=${cipherText}; expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=Lax`;

        setTimeout(() => {
            setStatusText("Saved")!
            setButtonToggle(false);
        },500);
    }

    function getSaveCookie() {
        var match = document.cookie.match(new RegExp('(^| )' + "divGame" + '=([^;]+)'));
        if (match) return match[2];
      }

    useEffect(() => {
        let savedCookie = getSaveCookie();
        if(savedCookie !== undefined){
            let bytes  = CryptoJS.AES.decrypt(savedCookie, process.env.customKey || "ass");
            try{

            
            let originalText = bytes.toString(CryptoJS.enc.Utf8);
            let jsonData = JSON.parse(originalText);
            if(jsonData.div !== undefined && jsonData.helper !== undefined && jsonData.user !== undefined){
                if(jsonData.div.fails !== undefined && jsonData.helper.bug !== undefined && jsonData.user.money !== undefined){
                    dispatch(loadDivSlice(jsonData.div));
                    dispatch(loadHelperSlice(jsonData.helper));
                    dispatch(loadUserSlice(jsonData.user));
                }
            }
            }catch{
                
            }
        }
    },[]);

    useEffect(() => {
        if(statusText.trim() !== "" && statusDebounce === false){
            setStatusDebounce(true);
            setTimeout(() => {
                setStatusText("");
                setStatusDebounce(false);
            },1000);
        }
    },[statusText,statusDebounce]);

    useEffect(() => {
        let autoSave = setInterval(() => {
            if(buttonRef.current){
                buttonRef.current.click()
            }
        },60000);

        return () => {
            clearInterval(autoSave);
        }
    },[]);

    return(
        <SaveButtonContainer>
            <ImageButton reff={buttonRef} title={"Save"} alt={"save"} offImage={"/img/save/save-icon.png"} onImage={"/img/save/save-icon-press.png"} function={() => saveData()} istoggled={buttonToggle} />
            {statusText.trim() !== "" && <SaveStatusText>{statusText}</SaveStatusText>}
        </SaveButtonContainer>
    )
}

export default SaveButton;