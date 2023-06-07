console.log("Welcome")

// Initialized the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('ProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Smooth Waters", filepath: "Albums/1.mp3", coverpath: "Albums/1.jpg" },
    { songName: "MadiRFAN", filepath: "Albums/2.mp3", coverpath: "Albums/2.jpg" },
    { songName: "Lofi Study", filepath: "Albums/3.mp3", coverpath: "Albums/3.jpg" },
    { songName: "Order", filepath: "Albums/4.mp3", coverpath: "Albums/4.jpg" },
    { songName: "Just Relax", filepath: "Albums/5.mp3", coverpath: "Albums/5.jpg" },
]

// To change the name of the songs
// songItem.forEach((element)=>{
//  console.log(element,i);
//     element.getElementsByTagName("img")[0].src = songs[i].coverpath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

// })


// Handle play / pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    ProgressBar.value = progress;
})

ProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (ProgressBar.value * audioElement.duration) / 100;

})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();

        songIndex = parseInt(e.target.id);

        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${songIndex + 1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
});


// next button
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 5) {
        songIndex = 0
    }
    else {
        songIndex += 1
    }
    audioElement.src = `${songIndex + 1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();

    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})


// Previous button
document.getElementById('next').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1
    }
    audioElement.src = `${songIndex + 1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();

    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})


