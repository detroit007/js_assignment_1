let names = [ "Zubair", "Usama", "Nafees"];

const showMessage = () =>{
    for(const name of names){
        let invitations = `Hi ${name}, I would like to inivite you to dinner tonight.`;
        console.log(invitations);
    }
}

showMessage()