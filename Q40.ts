////defined the make album function
function make_album(artist_name:string , album_title:string , tracks?: number){
let album: {
    singer:string
    title:string
    track?: number
} = {
    singer: artist_name,
    title: album_title,
};
if(tracks !== undefined){
album.track = tracks;
}
return album;
}
///calling three function and creating 3 variable with different values
let album1 = make_album("atif aslam" , "album title 1")
///print the value of our object created my function
console.log(album1);