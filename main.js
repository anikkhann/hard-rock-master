 //work of search button & get 10 song title, album title, artist name
 const searchButton = document.getElementById("search-button");
 searchButton.addEventListener("click", function(){
 const textBox = document.getElementById("text-box").value;
 fetch(`https://api.lyrics.ovh/suggest/${textBox}`)
 .then(res => res.json())
 .then(data => { 
        
     //get songtitle,albumtitle,artistname from api for 1st search box   
     const songTitle0 = document.getElementById("song-title0").innerText=data.data[0].title;
     const albumTitle0 = document.getElementById("album-title0").innerText=data.data[0].album.title;
     const singerName0 = document.getElementById("singer-name0").innerText=data.data[0].artist.name;
     
     
     //get songtitle,albumtitle,artistname from api for 2nd search box 
     const songTitle1 = document.getElementById("song-title1").innerText=data.data[1].title;
     const albumTitle1 = document.getElementById("album-title1").innerText=data.data[1].album.title;
     const singerName1 = document.getElementById("singer-name1").innerText=data.data[1].artist.name;
     //get songtitle,albumtitle,artistname from api for 3rd search box 
     const songTitle2 = document.getElementById("song-title2").innerText=data.data[2].title;
     const albumTitle2 = document.getElementById("album-title2").innerText=data.data[2].album.title;
     const singerName2 = document.getElementById("singer-name2").innerText=data.data[2].artist.name;

     //get songtitle,albumtitle,artistname from api for 3rd search box 
     const songTitle3 = document.getElementById("song-title3").innerText=data.data[3].title;
     const albumTitle3 = document.getElementById("album-title3").innerText=data.data[3].album.title;
     const singerName3 = document.getElementById("singer-name3").innerText=data.data[3].artist.name;
     //get songtitle,albumtitle,artistname from api for 4th search box 
     const songTitle4 = document.getElementById("song-title4").innerText=data.data[4].title;
     const albumTitle4 = document.getElementById("album-title4").innerText=data.data[4].album.title;
     const singerName4 = document.getElementById("singer-name4").innerText=data.data[4].artist.name;
     //get songtitle,albumtitle,artistname from api for 5th search box 
     const songTitle5 = document.getElementById("song-title5").innerText=data.data[5].title;
     const albumTitle5 = document.getElementById("album-title5").innerText=data.data[5].album.title;
     const singerName5 = document.getElementById("singer-name5").innerText=data.data[5].artist.name;
     //get songtitle,albumtitle,artistname from api for 6th search box 
     const songTitle6 = document.getElementById("song-title6").innerText=data.data[6].title;
     const albumTitle6 = document.getElementById("album-title6").innerText=data.data[6].album.title;
     const singerName6 = document.getElementById("singer-name6").innerText=data.data[6].artist.name;
     //get songtitle,albumtitle,artistname from api for 7th search box 
     const songTitle7 = document.getElementById("song-title7").innerText=data.data[7].title;
     const albumTitle7 = document.getElementById("album-title7").innerText=data.data[7].album.title;
     const singerName7 = document.getElementById("singer-name7").innerText=data.data[7].artist.name;
     //get songtitle,albumtitle,artistname from api for 8th search box 
     const songTitle8 = document.getElementById("song-title8").innerText=data.data[8].title;
     const albumTitle8 = document.getElementById("album-title8").innerText=data.data[8].album.title;
     const singerName8 = document.getElementById("singer-name8").innerText=data.data[8].artist.name;
     //get songtitle,albumtitle,artistname from api for 9th search box 
     const songTitle9 = document.getElementById("song-title9").innerText=data.data[9].title;
     const albumTitle9 = document.getElementById("album-title9").innerText=data.data[9].album.title;
     const singerName9 = document.getElementById("singer-name9").innerText=data.data[9].artist.name;

    //work of search button & get 10 song title, album title, artist name End.

     //work for get lyrics with title pressing first button
     
     const lyricsButton0 = document.getElementById("lyrics-button0");
     lyricsButton0.addEventListener("click", function(){
     fetch(`https://api.lyrics.ovh/v1/${singerName0}/${songTitle0}`)
     .then(res => res.json())
     .then(data => {
          document.getElementById("lyrics-title").innerText=`${textBox}`;
          document.getElementById("lyrics").innerText = data.lyrics;
         
     });
 });
    //work for get lyrics with title pressing second button

     const lyricsButton1 = document.getElementById("lyrics-button1");
     lyricsButton1.addEventListener("click", function(){
     fetch(`https://api.lyrics.ovh/v1/${singerName1}/${songTitle1}`)
     .then(res => res.json())
     .then(data => {
          document.getElementById("lyrics-title").innerText=`${textBox}`;
          document.getElementById("lyrics").innerText = data.lyrics;
         
     });
 });
    //work for get lyrics with title pressing third button
     const lyricsButton2 = document.getElementById("lyrics-button2");
     lyricsButton2.addEventListener("click", function(){
     fetch(`https://api.lyrics.ovh/v1/${singerName2}/${songTitle2}`)
     .then(res => res.json())
     .then(data => {
          document.getElementById("lyrics-title").innerText=`${textBox}`;
          document.getElementById("lyrics").innerText = data.lyrics;

     });
 });
    //work for get lyrics with title pressing fourth button
     const lyricsButton3 = document.getElementById("lyrics-button3");
     lyricsButton3.addEventListener("click", function(){
     fetch(`https://api.lyrics.ovh/v1/${singerName3}/${songTitle3}`)
     .then(res => res.json())
     .then(data => {
          document.getElementById("lyrics-title").innerText=`${textBox}`;
          document.getElementById("lyrics").innerText = data.lyrics;
         
     });
 });
    //work for get lyrics with title pressing fifth button
     const lyricsButton4 = document.getElementById("lyrics-button4");
     lyricsButton4.addEventListener("click", function(){
     fetch(`https://api.lyrics.ovh/v1/${singerName4}/${songTitle4}`)
     .then(res => res.json())
     .then(data => {
          document.getElementById("lyrics-title").innerText=`${textBox}`;
          document.getElementById("lyrics").innerText = data.lyrics;
         
     });
 });
    //work for get lyrics with title pressing sixth button
    const lyricsButton5 = document.getElementById("lyrics-button5");
     lyricsButton5.addEventListener("click", function(){
     fetch(`https://api.lyrics.ovh/v1/${singerName5}/${songTitle5}`)
     .then(res => res.json())
     .then(data => {
          document.getElementById("lyrics-title").innerText=`${textBox}`;
          document.getElementById("lyrics").innerText = data.lyrics;
         
     });
 });
    //work for get lyrics with title pressing seventh button
     const lyricsButton6 = document.getElementById("lyrics-button6");
     lyricsButton6.addEventListener("click", function(){
     fetch(`https://api.lyrics.ovh/v1/${singerName6}/${songTitle6}`)
     .then(res => res.json())
     .then(data => {
          document.getElementById("lyrics-title").innerText=`${textBox}`;
          document.getElementById("lyrics").innerText = data.lyrics;
         
     });
 });
    //work for get lyrics with title pressing eighth button
     const lyricsButton7 = document.getElementById("lyrics-button7");
     lyricsButton7.addEventListener("click", function(){
     fetch(`https://api.lyrics.ovh/v1/${singerName7}/${songTitle7}`)
     .then(res => res.json())
     .then(data => {
          document.getElementById("lyrics-title").innerText=`${textBox}`;
          document.getElementById("lyrics").innerText = data.lyrics;
         
     });
 });
    //work for get lyrics with title pressing nineth button
     const lyricsButton8 = document.getElementById("lyrics-button8");
     lyricsButton8.addEventListener("click", function(){
     fetch(`https://api.lyrics.ovh/v1/${singerName8}/${songTitle8}`)
     .then(res => res.json())
     .then(data => {
          document.getElementById("lyrics-title").innerText=`${textBox}`;
          document.getElementById("lyrics").innerText = data.lyrics;
         
     });
 });
    //work for get lyrics with title pressing tenth button
     const lyricsButton9 = document.getElementById("lyrics-button9");
     lyricsButton9.addEventListener("click", function(){
     fetch(`https://api.lyrics.ovh/v1/${singerName9}/${songTitle9}`)
     .then(res => res.json())
     .then(data => {
          document.getElementById("lyrics-title").innerText=`${textBox}`;
          document.getElementById("lyrics").innerText = data.lyrics;
         
     });
 });



     });

 });

   //work for get lyrics with title End.


