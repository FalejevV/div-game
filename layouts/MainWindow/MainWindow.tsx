import MenuButtons from "layouts/MenuButtons";
import { MainContainer, MainWrapped } from "./MainWindow.styled";
import DivObject from "components/DivObject/DivObject";
import ProgressBar from "components/ProgressBar/ProgressBar";
import DivButton from "components/DivButton/DivButton";
import ShopWindow from "layouts/ShopWindow/ShopWindow";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import { useEffect } from "react";
import helpers from "helpers";
import { IHelper } from "interface";
import { setMoney } from "app/slices/userData";
import HelpersDisplay from "layouts/HelpersDisplay/HelpersDisplay";
import Savior from "components/Savior/Savior";
import SettingsWindow from "layouts/SettingsWindow/SettingsWindow";


function MainWindow(){

    let helperDataSelector = useAppSelector((state:RootState) => state.helperData);
    let userDataSelector = useAppSelector((state:RootState) => state.userData);
    let divDataSelector = useAppSelector((state:RootState) => state.divData);
    let dispatch = useAppDispatch();

    let timeout:any;
    useEffect(() => {
        payWorkers();
        function payWorkers(){
            timeout = setTimeout(() => {
                let totalPay = 0;
                for (const [key, value] of Object.entries(helperDataSelector)) {
                    let foundHelper:IHelper | undefined = helpers.find(helper => helper.helper === key) || undefined;
                    if(foundHelper !== undefined){
                        totalPay += foundHelper.DPS * value;
                    }
                }
                dispatch(setMoney(Math.floor(totalPay + (totalPay * userDataSelector.helperLevel * 0.15))));
            payWorkers();
            
        },1000);
        };

        return () => {
            clearTimeout(timeout);
        }
    },[helperDataSelector, userDataSelector]);

    return(
        <MainWrapped>
            <MainContainer>
                <ShopWindow />
                <SettingsWindow />
                <MenuButtons />
                <DivObject />
                <ProgressBar />
                <DivButton />
            </MainContainer>

            <HelpersDisplay />

            {divDataSelector.showScene && <Savior />}
        </MainWrapped>
    )
}

export default MainWindow;