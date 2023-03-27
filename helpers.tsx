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
        price:1500,
        priceMultiplier:1.36,
        imageAlt:"mouse helper",
        imageSrc:"/img/helpers/mouse.png",
        DPS:190
    },
    {
        text:"More bugs...",
        helper:"bugHorde",
        price:65000,
        priceMultiplier:1.36,
        imageAlt:"bug horde helper",
        imageSrc:"/img/helpers/bugs.png",
        DPS:1557
    },
    {
        text:"Cat",
        helper:"cat",
        price:750000,
        priceMultiplier:1.36,
        imageAlt:"cat helper",
        imageSrc:"/img/helpers/cat.png",
        DPS:55669
    },
    {
        text:"Junior dev.",
        helper:"juniorDeveloper",
        price:25000000,
        priceMultiplier:1.16,
        imageAlt:"junior dev helper",
        imageSrc:"/img/helpers/junior.png",
        DPS:468500
    },
    {
        text:"Senior dev.",
        helper:"seniorDeveloper",
        price:99000000,
        priceMultiplier:1.36,
        imageAlt:"senior dev helper",
        imageSrc:"/img/helpers/senior.png",
        DPS:6850100
    },
    {
        text:"AI",
        helper:"AI",
        price:8500000000,
        priceMultiplier:1.36,
        imageAlt:"AI helper",
        imageSrc:"/img/helpers/ai.png",
        DPS:38550200
    },
    {
        text:"Unknown gem",
        helper:"unknownGem",
        price:99000000000,
        priceMultiplier:1.36,
        imageAlt:"Unknown gem helper",
        imageSrc:"/img/helpers/unknown-gem.gif",
        DPS:198554568
    },
    {
        text:"Mystic",
        helper:"mystic",
        price:1000000000000,
        priceMultiplier:1.865,
        imageAlt:"Mystic helper",
        imageSrc:"/img/helpers/mystic.gif",
        DPS:999999999
    },
]

export const helperActionGifs:string[]= [
    "/img/helpers-action/bug-action.gif",
    "/img/helpers-action/mouse-action.gif",
    "/img/helpers-action/bughorde-action.gif",
    "/img/helpers-action/cat-action.gif",
    "/img/helpers-action/junior-action.gif",
    "/img/helpers-action/senior-action.gif",
    "/img/helpers-action/ai-action.gif",
    "/img/helpers-action/gem-action.gif",
    "/img/helpers-action/mystic-action.gif",
]

export const unknownHelperImage = '/img/helpers/unknown.png'

export default helpers;