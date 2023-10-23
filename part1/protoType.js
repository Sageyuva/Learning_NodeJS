// Undestandig Prototype in node js
// Prototypes are used to add additional functions to objects
function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name)

    }

}

var yuva = new User();
var Sage = new User();

yuva.name = "Yuvaraj";
Sage.name = "SageGaming"

yuva.giveLife(Sage);
console.log("Now  yuva is with " + yuva.life + " Life");
console.log("Now  sage is with " + Sage.life + " Life");


User.prototype.upperCut = function(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + "  damaged " + targetPlayer.name)
}

Sage.upperCut(yuva);
console.log("Now  yuva is with " + yuva.life + " Life");
console.log("Now  sage is with " + Sage.life + " Life");