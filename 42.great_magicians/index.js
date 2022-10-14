let magicians = [ "Tom", "Harry", "Mike", "Tim" ];

const make_great = () =>{
    magicians.forEach((item, index)=> magicians[index] = `The Great ${item}`)
}

const showMagcians = () =>{
    for(const magician of magicians){
        console.log(magician);
    }
}

make_great()
showMagcians()