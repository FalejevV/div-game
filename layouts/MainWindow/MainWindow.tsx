import MenuButtons from "layouts/MenuButtons";
import { MainContainer } from "./MainWindow.styled";
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


function MainWindow(){

    let helperDataSelector = useAppSelector((state:RootState) => state.helperData);
    let userDataSelector = useAppSelector((state:RootState) => state.userData);
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
                dispatch(setMoney(totalPay + (totalPay * userDataSelector.helperLevel * 0.15)));
            payWorkers();
            
        },1000);
        };

        return () => {
            clearTimeout(timeout);
        }
    },[helperDataSelector]);

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