import { IUpgrade } from "interface";


const upgrades:IUpgrade[] = [
    {
        imageAlt:"Key upgrade",
        imageSrc:"/img/shop/EnterUpgrage.png",
        text:"DIV price increase",
        level:"keyLevel",
        price:5,
        priceMultiplier:1.94
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
    },

    {
        imageAlt:"True savior",
        imageSrc:"/img/shop/Savior.png",
        text:"World savior!",
        level:"savior",
        price:999000000000000,
        priceText:"999 Trillion",
        oneTimer:true,
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
        default:"/img/enterupgrades/Key0.png",
        press:"/img/enterupgrades/Key0-press.png"
    },
    {
        default:"/img/enterupgrades/Key1.png",
        press:"/img/enterupgrades/Key1-press.png"
    },
    {
        default:"/img/enterupgrades/Key2.png",
        press:"/img/enterupgrades/Key2-press.png"
    },
    {
        default:"/img/enterupgrades/Key3.png",
        press:"/img/enterupgrades/Key3-press.png"
    },
    {
        default:"/img/enterupgrades/Key4.png",
        press:"/img/enterupgrades/Key4-press.png"
    },
    {
        default:"/img/enterupgrades/Key5.gif",
        press:"/img/enterupgrades/Key5-press.gif"
    }
    
]


export default upgrades;