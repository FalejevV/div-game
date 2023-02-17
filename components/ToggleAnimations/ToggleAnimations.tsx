import { useAppDispatch, useAppSelector } from "app/hooks";
import { toggleSmooth } from "app/slices/divData";
import { RootState } from "app/store";
import { ToggleAnimCheckbox, ToggleAnimContainer, ToggleAnimText } from "./ToggleAnimations.styled";



function ToggleAnimations(){
    let divDataSelector = useAppSelector((state:RootState) => state.divData);
    let dispatch = useAppDispatch();
    return(
        <ToggleAnimContainer onClick={() => dispatch(toggleSmooth())} >
            <ToggleAnimText>{divDataSelector.smoothMove ? "Smooth animations" : "Instant animations"}</ToggleAnimText>
            <ToggleAnimCheckbox istoggled={divDataSelector.smoothMove ? 1 : undefined}></ToggleAnimCheckbox>
        </ToggleAnimContainer>
    )
}

export default ToggleAnimations;