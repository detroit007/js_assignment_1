let names = [ "Zubair", "Usama", "Nafees"];
console.log(names[1], "is not coming to dinner.");

names[1] = "Noman";


const showMessage = () =>{
    for(const name of names){
        let invitations = `Hi ${name}, I would like to inivite you to dinner tonight.`;
        console.log(invitations);
    }
}

showMessage()