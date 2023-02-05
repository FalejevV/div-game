import { DivObjectBoardContainer, DivObjectItself } from "./DivObject.styled";
import { useAppSelector } from "app/hooks";
import { RootState } from "app/store";


function DivObject(){
    let divData = useAppSelector((state:RootState) => state.divData);
    return(
        <DivObjectBoardContainer>
            <DivObjectItself left={divData.left} top={divData.top}/>
        </DivObjectBoardContainer>  

    )
}

export default DivObject;