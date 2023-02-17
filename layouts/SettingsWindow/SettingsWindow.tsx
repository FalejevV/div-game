import { useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import TextField from "components/TextField/TextField";
import ToggleAnimations from "components/ToggleAnimations/ToggleAnimations";
import { useRef, useState } from "react";
import { SettingsButtonsContainer, SettingsGetSaveButton, SettingsLoadButton, SettingsLoadContainer, SettingsResetProgress, SettingsWindowContainer } from "./SettingsWindow.styled";
import CryptoJS from "crypto-js";


function SettingsWindow(){
    
    let menuDataSelector = useAppSelector((state:RootState) => state.menuData);
    let userDataSelector = useAppSelector((state:RootState) => state.userData);
    let divDataSelector = useAppSelector((state:RootState) => state.divData);
    let helperDataSelector = useAppSelector((state:RootState) => state.helperData);

    const [resetClicks, setResetClicks] = useState(5);
    let loadInputRef = useRef(null);
    
    function resetClick() {
        if(resetClicks > 1){
            setResetClicks(prev => prev -= 1);
        }else{
            document.cookie = `divGame=""; expires=Fri, 31 Dec 1970 23:59:59 GMT;path=/;SameSite=Lax`;
            window.location.reload();
        }
    }

    function copyProgress(){
        var cipherText = CryptoJS.AES.encrypt(JSON.stringify({
            div :   divDataSelector,
            helper: helperDataSelector,
            user:   userDataSelector
        }), process.env.customKey || "ass").toString();
        navigator.clipboard.writeText(cipherText);
    }

    function loadProgress(){
        if(loadInputRef && loadInputRef.current){
            console.log(loadInputRef.current);
            let inputField = loadInputRef.current as HTMLInputElement;
            if (inputField.value.trim() !== ""){
                console.log(inputField.value);
                document.cookie = `divGame=${inputField.value.trim()}; expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=Lax`;
                window.location.reload();
            }
        }
    }
    return(
        <SettingsWindowContainer istoggled={menuDataSelector.settings ? 1 : undefined}>
            <ToggleAnimations />
            <SettingsLoadContainer>
                <TextField reff={loadInputRef} title = "Load progress" name="load" placeholder="Progress key here"/>
                <SettingsLoadButton onClick={loadProgress}>Load</SettingsLoadButton>
            </SettingsLoadContainer>
            <SettingsButtonsContainer>
                <SettingsGetSaveButton onClick={copyProgress}>Copy progress key to clipboard</SettingsGetSaveButton>
                <SettingsResetProgress onClick={resetClick}>Reset progress ({resetClicks} {resetClicks > 1 ? "clicks" : "click!"})</SettingsResetProgress>
            </SettingsButtonsContainer>
        </SettingsWindowContainer>
    )
}

export default SettingsWindow;