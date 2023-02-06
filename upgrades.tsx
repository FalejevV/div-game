import { IUpgrade } from "interface";


const upgrades:IUpgrade[] = [
    {
        imageAlt:"Key upgrade",
        imageSrc:"/img/shop/EnterUpgrage.png",
        text:"DIV price increase",
        level:"keyLevel",
        price:5,
        priceMultiplier:1.84
    },

    {
        imageAlt:"Inteligence",
        imageSrc:"/img/shop/LightBulbUpgradeIcon.png",
        text:"Progress increase",
        level:"failLevel",
        price:25,
        priceMultiplier:94.72
    },

    {
        imageAlt:"Workers",
        imageSrc:"/img/shop/UpgradeIncomeIcon.png",
        text:"More money from workers",
        level:"helperLevel",
        price:150,
        priceMultiplier:12.12
    }
]

export const keyLevelImages:{
    default:string,
    press:string,
}[] = [
    {
        default:"/img/enter.png",
        press:"/img/enter-press.png"
    },
    {
        default:"/img/enterupgrades/Bronse-enter.png",
        press:"/img/enterupgrades/Bronse-enter-press.png"
    }
]


export default upgrades;