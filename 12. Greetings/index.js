let names = [ "Zubair", "Usama", "Nafees", "Faisal", "Asad" ];

const showMessage = () =>{
    for(const name of names){
        let greetings = `Hi ${name}, Be consistent in your studies.`;
        console.log(greetings);
    }
}

showMessage()