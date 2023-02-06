import { useAppDispatch, useAppSelector } from "app/hooks";
import { setFails, setPosition } from "app/slices/divData";
import { useEffect, useState } from "react";
import { DivBittonContainer, DivButtonImage, DivButtonImagePress } from "./DivButton.styled";
import { keyLevelImages } from "upgrades";
import { RootState } from "app/store";
import { setMoney } from "app/slices/userData";

function DivButton(){
    let divDataSelector = useAppSelector((state:RootState) => state.divData);
    let userDataSelector = useAppSelector((state:RootState) => state.userData);

    let dispatch = useAppDispatch();
    const [debounce,setDebounce] = useState(false);
    const [keyPress, setKeyPress] = useState(false);
    const [centered, setCentered] = useState(false);

    // Handle Enter key press on keyboard.(keyPrass state change)
    useEffect(() => {
        addEventListener("keypress", function (e:KeyboardEvent) {
            if(e.key === "Enter"){
                if (e.repeat) {
                    return;
                }
                if(keyPress === false){
                    setKeyPress(true);
                }
            }
        });
        
        addEventListener("keyup", function (e:KeyboardEvent) {
            if(e.key === "Enter"){
                if (e.repeat) {
                    return;
                }
                setKeyPress(false);
            }
        });

        return () => {
            removeEventListener("keypress", function (e:KeyboardEvent) {
                if(e.key === "Enter"){
                    if (e.repeat) {
                        return;
                    }
                    if(keyPress === false){
                        setKeyPress(true);
                    }
                    moveDiv();
                }
            });

            removeEventListener("keyup", function (e:KeyboardEvent) {
                if(e.key === "Enter"){
                    if (e.repeat) {
                        return;
                    }
                    setKeyPress(false);
                }
            });
    
        }
    },[]);
    // Call moveDiv() when keyPress === false.
    useEffect(() => {
        if(keyPress){
            moveDiv();
        }
    },[keyPress]);

    function payDivCentered(){
        let payout = Math.floor(((userDataSelector.keyLevel*1.28)+1) * 5);
        dispatch(setMoney(payout));
    }

    function moveDiv(){
        if(debounce){
            return;
        }
        setDebounce(true);
        setTimeout(() => {
            setDebounce(false);
        }, 25);
        let randomLeft = Math.floor(Math.random() * (75 - 25) + 25);
        let randomTop = Math.floor(Math.random() * (80 - 20) + 20);
        if(randomLeft === 50 && randomTop === 50){
            dispatch(setFails(25));
        }
        let failValue = Math.floor(Math.random() * (userDataSelector.failLevel+1) +1);
        console.log(failValue);
        if(divDataSelector.fails + failValue >= 25 && centered === false){
            dispatch(setFails(divDataSelector.fails + failValue));
            payDivCentered();   
            randomLeft = 50;
            randomTop = 50;
            setCentered(true)
        }else{
            if(divDataSelector.fails + failValue >= 26){
                dispatch(setFails(0));
                setCentered(false);
            }else{
                dispatch(setFails(divDataSelector.fails + failValue));
            }
        }

        dispatch(setPosition({left:randomLeft, top:randomTop}));
    }

    return(
        <DivBittonContainer istoggled={keyPress ? 1 : undefined } onClick={moveDiv}>
            <DivButtonImage alt='enter-button' src={keyLevelImages[userDataSelector.keyLevel]?.default || keyLevelImages[0].default}/>
            <DivButtonImagePress alt='enter-button' width="240" height="120" src={keyLevelImages[userDataSelector.keyLevel]?.press || keyLevelImages[0].press} />
        </DivBittonContainer>
    )
}

export default DivButton;