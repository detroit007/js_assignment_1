function make_album(artist_name, album_title, number_of_songs="None"){
    let album = {'artist name': artist_name, 'album_title': album_title}
    
    if (number_of_songs)
        album['number of songs'] = number_of_songs
    return album
}
let musician = make_album('Kanye west', 'Ye')
console.log(musician)
musician = make_album('Kanye west', 'Ye', 13)
console.log(musician)
