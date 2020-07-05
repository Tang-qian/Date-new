var i = 0;
var oPlayEy = document.getElementsByClassName("PlayEy")[0];
var oPlay = document.getElementsByClassName("Play")[0];
var audios = document.getElementById('audios');
document.getElementById("audios").volume = 0.5; 
oPlay.onclick = function() {
	var seii = setInterval(function() {
		(i == 360) ? i = 0 : i++;
		oPlayEy.style.transform = "rotate(" + i + "deg)";
		if(audios.paused) {
			clearInterval(seii)
		}
	}, 30);
	if(audios.paused) {
		audios.play();
		oPlay.style.backgroundImage = "url(img/play.png)";
		oPlay.style.width = 32 + "px";
		oPlay.style.height = 32 + "px";
	} else {
		audios.pause();
		oPlay.style.backgroundImage = "url(img/pause.png)";
		oPlay.style.width = 29 + "px";
		oPlay.style.height = 36 + "px";
	}
}