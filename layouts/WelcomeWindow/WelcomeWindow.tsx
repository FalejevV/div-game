import Cookies from "js-cookie";
import { WWButtonText, WWContainer, WWText, WWTitle, WWWrapper } from "./WelcomeWindow.styled";



function WelcomeWindow(props:{
    setWelcomeWindowDisplay:Function,
}){
    return(
        <WWWrapper>
            <WWContainer>
                <WWTitle>World needs your help!</WWTitle>
                <WWText>
                    There are a lot of requests all over the world to center the <u><b>DIV</b></u>! If you don't <u><b>INTERVENE</b></u> at this moment, the whole <u><b> WORLD WILL FALL</b></u>!
                </WWText>
                <WWButtonText onClick={() => {props.setWelcomeWindowDisplay(2); Cookies.set('welcome-was-shown', '2');}}>I am ready!</WWButtonText>
            </WWContainer>
        </WWWrapper>
    )
}

export default WelcomeWindow;