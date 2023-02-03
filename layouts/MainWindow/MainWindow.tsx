import MenuButtons from "layouts/MenuButtons";
import { MainContainer } from "./MainWindow.styled";
import DivObject from "components/DivObject/DivObject";
import ProgressBar from "components/ProgressBar/ProgressBar";
import DivButton from "components/DivButton/DivButton";



function MainWindow(){
    return(
        <MainContainer>
            <MenuButtons />
            <DivObject />
            <ProgressBar />
            <DivButton />
        </MainContainer>
    )
}

export default MainWindow;