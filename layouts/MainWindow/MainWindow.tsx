import MenuButtons from "layouts/MenuButtons";
import { MainContainer } from "./MainWindow.styled";
import DivObject from "components/DivObject/DivObject";
import ProgressBar from "components/ProgressBar/ProgressBar";
import DivButton from "components/DivButton/DivButton";
import ShopWindow from "layouts/ShopWindow/ShopWindow";



function MainWindow(){
    return(
        <MainContainer>
            <ShopWindow />
            <MenuButtons />
            <DivObject />
            <ProgressBar />
            <DivButton />
        </MainContainer>
    )
}

export default MainWindow;