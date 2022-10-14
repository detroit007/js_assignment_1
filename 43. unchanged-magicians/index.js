let magicians = [ "Tom", "Harry", "Mike", "Tim" ];

const make_great = () =>{
    let great_magicians = magicians;
    great_magicians.forEach((item)=> console.log(`The Great ${item}`))
}

const showMagcians = () =>{
    for(const magician of magicians){
        console.log(magician);
    }
}

make_great()
showMagcians()