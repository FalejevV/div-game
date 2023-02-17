export interface IPosition{
    left:number,
    top:number,
}

export interface IDiv{
    left:number,
    top:number,
    fails:number,
    smoothMove:boolean,
    showScene:boolean,
}

export interface ICount{
    count:number,
}

export interface IToggle{
    istoggled: 1 | undefined
}

export interface IUser{
    money:number,
    failLevel:number,
    keyLevel:number,
    helperLevel:number,
    savior:number,
}

export interface IHelpers{
    bug:number,
    mouse:number,
    bugHorde:number,
    cat:number,
    juniorDeveloper:number,
    seniorDeveloper:number,
    AI:number,
    unknownGem:number,
    mystic:number,
}

export interface IButton{
    image?:string,
    isToggled?:boolean
}

export interface IUpgrade{
    imageAlt:string,
    imageSrc:string,
    text:string,
    level:keyof IUser,
    price:number,
    priceMultiplier:number,
    priceText?:string,
    oneTimer?:boolean
}


export interface IHelper{
    text:string,
    helper:keyof IHelpers,
    price:number,
    priceMultiplier:number,
    imageAlt:string,
    imageSrc:string,
    DPS:number,
}
