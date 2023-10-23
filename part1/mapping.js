console.log("node js isn  working")
var person = [{
        name: "yuvaraj",
        surname: "dhammure",
        e_mail: "yuvaraj dhamuure"
    },
    {
        name: "gourishankar",
        surname: "arikei",
        e_mail: "garikei@gmail.com"
    }
]
console.log(person.map((e) => {
    return (e);
}))


function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(9, 8))