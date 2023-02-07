import { IHelper } from "interface";



const helpers:IHelper[] = [
    {
        text:"Another bug...",
        helper:"bug",
        price:15,
        priceMultiplier:1.36,
        imageAlt:"bug helper",
        imageSrc:"/img/helpers/bug.png",
        DPS:1
    },
    {
        text:"Mouse",
        helper:"mouse",
        price:40,
        priceMultiplier:1.36,
        imageAlt:"mouse helper",
        imageSrc:"/img/helpers/mouse.png",
        DPS:3
    },
    {
        text:"More bugs...",
        helper:"bugHorde",
        price:150,
        priceMultiplier:1.36,
        imageAlt:"bug horde helper",
        imageSrc:"/img/helpers/bugs.png",
        DPS:17
    },
    {
        text:"Cat",
        helper:"cat",
        price:450,
        priceMultiplier:1.36,
        imageAlt:"cat helper",
        imageSrc:"/img/helpers/cat.png",
        DPS:37
    }

]

export const unknownHelperImage = '/img/helpers/unknown.png'

export default helpers;