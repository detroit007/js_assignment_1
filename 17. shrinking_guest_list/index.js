let names = [ "Zubair", "Usama", "Nafees"];

console.log("I can invite only two persons on dinner.");

console.log(names[1], "is not coming to dinner.");

names[1] = "Noman";
names.unshift("Usman")
names.splice(2, 0, "Hasseb")
names.push("Ahmed")


console.log(names.pop(), "I'm sorry I can’t invite you to dinner.");
console.log(names.pop(), "I'm sorry I can’t invite you to dinner.");
console.log(names.pop(), "I'm sorry I can’t invite you to dinner.");
console.log(names.pop(), "I'm sorry I can’t invite you to dinner.");

const showMessage = () =>{
    for(const name of names){
        let invitations = `Hi ${name}, I would like to inivite you to dinner tonight.`;
        console.log(invitations);
    }
}

showMessage();

names = [];

console.log(names);