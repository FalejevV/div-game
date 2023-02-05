import { IUpgrade } from "interface";


const upgrades:IUpgrade[] = [
    {
        imageAlt:"Key upgrade",
        imageSrc:"/img/shop/EnterUpgrage.png",
        text:"Expensive keyboard = Expensive DIV",
        level:"keyLevel",
        price:5,
        priceMultiplier:1.23
    },

    {
        imageAlt:"Inteligence",
        imageSrc:"/img/shop/LightBulbUpgradeIcon.png",
        text:"Learn how to google = progress",
        level:"failLevel",
        price:25,
        priceMultiplier:94.72
    }
]


export default upgrades;