import { DivObjectBoardContainer, DivObjectItself } from "./DivObject.styled";
import { useAppSelector } from "app/hooks";
import { RootState } from "app/store";


function DivObject(){
    let divData = useAppSelector((state:RootState) => state.divData);
    return(
        <DivObjectBoardContainer>
            <DivObjectItself istoggled={divData.smoothMove ? 1 : undefined} left={divData.left} top={divData.top}/>
        </DivObjectBoardContainer>  

    )
}

export default DivObject;