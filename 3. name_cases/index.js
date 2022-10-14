let personName = "Hamza yousaf";

const changeToLowerCase = () =>{
    let lowerCaseName = personName.toLowerCase();
    console.log(lowerCaseName);
}

const changeToUpperCase = () =>{
    let uppercaseName = personName.toUpperCase();
    console.log(uppercaseName);
}

const changeToTitleCase = (str) =>{
    let titleCaseName = [];
    str = str.toLowerCase().split(" ");
    for(let word of str){
        word = word.charAt(0).toUpperCase() + word.slice(1);
        titleCaseName.push(word);
    }
    titleCaseName = titleCaseName.join(" ");
    console.log(titleCaseName);
}

changeToLowerCase();

changeToUpperCase();

changeToTitleCase(personName);