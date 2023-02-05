export interface IPosition{
    left:number,
    top:number,
}

export interface IDiv{
    left:number,
    top:number,
    fails:number
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
    workerLevel:number,
}

export interface IHelpers{
    bug:number,
    rat:number,
    bugHorde:number,
    forumGuy:number,
    juniorDeveloper:number,
    seniorDeveloper:number,
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
}
