function inch_feet(inches){
    const feet = inches/12;
    return feet;
}

const nafsiInch = 60;
const nafsiFeet = inch_feet(nafsiInch);
console.log(nafsiFeet);

const nabilInch =100;
const nabilFeet =inch_feet(nabilInch);
console.log(nabilFeet);