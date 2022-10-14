let names = [ "Zubair", "Usama", "Nafees"];
console.log(names[1], "is not coming to dinner.");

names[1] = "Noman";
names.unshift("Usman")
names.splice(2, 0, "Hasseb")
names.push("Ahmed")

const showMessage = () =>{
    for(const name of names){
        let invitations = `Hi ${name}, I would like to inivite you to dinner tonight.`;
        console.log(invitations);
    }
}

showMessage()