// Core Modules are already built in Node js 


//File System Module ---- Allows to read and write custom files

var fs = require('fs');

//Syntax ("PATH","DATA")

fs.writeFileSync("Yuvaraj.txt", "I am yuvaraj passonate mern stack developer");
console.log(fs.readFileSync("Yuvaraj.txt").toString())


//Path module --- used while working with file paths according to OS ---
//  Allows you to normalize path and handle extra slash in path
var path = require("path");

var WebSiteHome = "Desktop/Yuvaraj//Sage/Index.html";
var WebSiteAbout = "Desktop/Yuvaraj//Sage/About.html";
var WebSiteAboutN = path.normalize(WebSiteAbout)
console.log(WebSiteAboutN)
console.log(path.normalize(WebSiteHome));
console.log(path.dirname(WebSiteAbout))
console.log(path.basename(WebSiteAbout))
console.log(path.extname(WebSiteAbout))