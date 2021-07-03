const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist")
const title = document.getElementById("title")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

const songs=[
{
	name: "fitoor",
	title: "Fitoor",
	artist:"Arijit Singh",
},
{
	name: "veerzara",
	title: "Tere Liye",
	artist:"Lata Ji",
},
{
	name: "vilen_chidiya",
	title: "Chidiya",
	artist:"Vilen",
},
{
	name: "falaktak",
	title: "Falak Tak",
	artist:"Udit Ji",
},
]


play.addEventListener("click",()=>{
	music.play();

	play.classList.replace("fa-play","fa-pause");
	img.classList.add("anime");
});

let isPlaying=false;

const playMusic = ()=>{
	isPlaying = true;
	music.play();
	play.classList.replace("fa-play","fa-pause");
	img.classList.add("anime");
};
const pauseMusic = () =>{
	isPlaying = false;
	music.pause();
	play.classList.replace("fa-pause","fa-play");
	img.classList.remove("anime");
};

play.addEventListener("click",()=>{
	if (isPlaying) {
		pauseMusic();
	}
	else {
		playMusic();
	}
});

const loadSong = (songs)=>{
	title.textContent = songs.title;
	artist.textContent = songs.artist;
	music.src = "music/"+ songs.name + ".mp3";
	img.src = "img/" + songs.name + ".jpg";

};
 loadSong(songs[2]);


let songIndex = 0;

	const nextSong = () => {
	songIndex = (songIndex + 1)% songs.length;
	loadSong(songs[songIndex]);
	playMusic();
};

	const prevSong = () =>{
	songIndex = (songIndex - 1 + songs.length)% songs.length;
	loadSong(songs[songIndex]);
	playMusic();
};

next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);







//}













