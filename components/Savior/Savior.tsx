import { useAppDispatch } from "app/hooks";
import { toggleScene } from "app/slices/divData";
import { BrightBackgroundContainer, DarkSaviorText, GlueImage, ReturnButton, SaviorContainer, ShineImage, TextSaviorContainer, WhiteSaviorText } from "./SaviorStyled";


function Savior(){
    let dispatch = useAppDispatch();

    function hideScene(){
        dispatch(toggleScene(false));
    }

    return(
        <SaviorContainer>
            <ShineImage src={"/img/shine.png"} />
            <GlueImage src={"/img/glue.png"} />
            <TextSaviorContainer>
                <WhiteSaviorText>GLUE</WhiteSaviorText>
            </TextSaviorContainer>

            <BrightBackgroundContainer>
                <TextSaviorContainer>
                    <DarkSaviorText delay="15s">DIV will be centered</DarkSaviorText>
                    <DarkSaviorText delay="18s">FOREVER</DarkSaviorText>
                    <ReturnButton onClick={hideScene}>return</ReturnButton>
                </TextSaviorContainer>
            </BrightBackgroundContainer>
        </SaviorContainer>
    )
}

export default Savior;