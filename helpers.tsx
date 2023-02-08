import { IHelper } from "interface";



const helpers:IHelper[] = [
    {
        text:"A bug.",
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
        price:79,
        priceMultiplier:1.56,
        imageAlt:"mouse helper",
        imageSrc:"/img/helpers/mouse.png",
        DPS:3
    },
    {
        text:"More bugs...",
        helper:"bugHorde",
        price:433,
        priceMultiplier:1.66,
        imageAlt:"bug horde helper",
        imageSrc:"/img/helpers/bugs.png",
        DPS:17
    },
    {
        text:"Cat",
        helper:"cat",
        price:1590,
        priceMultiplier:1.76,
        imageAlt:"cat helper",
        imageSrc:"/img/helpers/cat.png",
        DPS:37
    },
    {
        text:"Junior dev.",
        helper:"juniorDeveloper",
        price:11000,
        priceMultiplier:1.80,
        imageAlt:"junior dev helper",
        imageSrc:"/img/helpers/junior.png",
        DPS:95
    },
    {
        text:"Senior dev.",
        helper:"seniorDeveloper",
        price:55000,
        priceMultiplier:1.86,
        imageAlt:"senior dev helper",
        imageSrc:"/img/helpers/senior.png",
        DPS:292
    },
    {
        text:"AI",
        helper:"AI",
        price:100000,
        priceMultiplier:1.865,
        imageAlt:"AI helper",
        imageSrc:"/img/helpers/AI.png",
        DPS:1900
    },
    {
        text:"Unknown gem",
        helper:"unknownGem",
        price:2500000,
        priceMultiplier:1.865,
        imageAlt:"Unknown gem helper",
        imageSrc:"/img/helpers/unknown-gem.gif",
        DPS:11000
    },
    {
        text:"Mystic",
        helper:"mystic",
        price:8500000,
        priceMultiplier:1.865,
        imageAlt:"Mystic helper",
        imageSrc:"/img/helpers/mystic.gif",
        DPS:65000
    },


]

export const unknownHelperImage = '/img/helpers/unknown.png'

export default helpers;