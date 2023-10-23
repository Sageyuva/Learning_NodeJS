//understanding reference to objects



const yuvaraj = {
    name: "yuvaraj",
    surnmae: "Dhammure"
}
const gouri = yuvaraj;
gouri.surnmae = "arikeri";
console.log(yuvaraj)