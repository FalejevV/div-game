import { useAppDispatch } from "app/hooks";
import { setPosition } from "app/slices/divData";
import { useEffect, useState } from "react";
import { DivBittonContainer, DivButtonImage, DivButtonImagePress } from "./DivButton.styled";
import enterImage from "../../public/img/enter.png";
import enterImagePressed from "../../public/img/enter-press.png";

function DivButton(){
    
    let dispatch = useAppDispatch();
    const [debounce,setDebounce] = useState(false);
    const [keyPress, setKeyPress] = useState(false);
    
    useEffect(() => {
        addEventListener("keypress", function (e:KeyboardEvent) {
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

    function moveDiv(){
        if(debounce){
            return;
        }
        setDebounce(true);
        setTimeout(() => {
            setDebounce(false);
        }, 100);
        let randomLeft = Math.floor(Math.random() * (85 - 10) + 10);
        let randomTop = Math.floor(Math.random() * (85 - 10) + 10);
        dispatch(setPosition({left:randomLeft, top:randomTop}));
    }

    return(
        <DivBittonContainer toggle={keyPress} onClick={moveDiv}>
            <DivButtonImage alt='enter-button' width="240" height="120" src={enterImage}/>
            <DivButtonImagePress alt='enter-button' width="240" height="120" src={enterImagePressed} />
        </DivBittonContainer>
    )
}

export default DivButton;