var playing = false;
var progressbar = document.getElementById('progress-bar')
var volumebar = document.getElementById('volume-bar')
var audio = document.getElementById('audio')
var playbutton = document.getElementById('play')

$(document).ready(function(){
    $('.container').hide();
    $('.clicktoplay').fadeIn();
});


$('.clicktoplay').click(function(){
    audio.play()
    audio.volume=.5;
    progressbar.value = 0;
    volumebar.value = 50;
    $('.clicktoplay').fadeOut().promise().done(function(){
        $('.container').fadeIn();
    })
})


$('#play').click(function (){
    playing ? Pause() : Play();
});

function Pause(){
    audio.pause();
    playbutton.innerHTML = '<button id="play">Play</button>';
    playing = false;
}

function Play(){
    audio.play();
    playbutton.innerHTML = '<button id="play">Pause</button>';
    playing = true;
}

$('#progress-bar').change(function() {
    let seek = audio.duration * (progressbar.value / 100);
    audio.currentTime = seek;
});

$('#audio').on('timeupdate', function() {
    var duration = this.duration;
    var currentTime = this.currentTime;
    var progress = (currentTime / duration) * 100;
    progressbar.value = progress;
});

$('#volume-bar').change(function() {
    audio.volume = this.value/100;
});