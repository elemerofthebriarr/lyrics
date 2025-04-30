

function falanfilan(){
    const songname = document.querySelector("#songname").value
    const artist = document.querySelector("#artist").value
    console.log(songname, artist)


    const url = `https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(songname)}`
 
    

    try {

        fetch(url).then(response => response.json()).then(function(data){document.querySelector("#lyrics").innerHTML = data.lyrics})

      } catch (error) {
        console.error(error.message);
      }
}