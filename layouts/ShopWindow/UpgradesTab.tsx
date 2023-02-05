import { nanoid } from "@reduxjs/toolkit";
import UpgradeItem from "components/UpgradeItem/UpgradeItem";
import styled from "styled-components";
import upgrades from "upgrades";

const UpgradesContainer = styled.div`
    width:100%;
    height:100%;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    flex: 1 auto;
    display: flex;
    flex-direction: column;
    gap:15px;
`

function UpgradesTab(){
    return(
        <UpgradesContainer>
            {upgrades.map(upgrade => <UpgradeItem price={upgrade.price} key={nanoid()}priceMultiplier={upgrade.priceMultiplier} level={upgrade.level} imageAlt={upgrade.imageAlt} imageSrc={upgrade.imageSrc} text={upgrade.text} />)}
        </UpgradesContainer>
    )
}


export default UpgradesTab;