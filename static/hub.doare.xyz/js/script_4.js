let audio = null;
let playing = false;
let playpause = document.getElementById('play-pause');
let root = document.documentElement;
let songname = document.getElementById('name');
let next = document.getElementById('next');
let prev = document.getElementById('previous');

let discord = $('.discord')
let github = $('.github')
let youtube = $('.youtube')
let namemc = $('.namemc')

let index = 0;

function load(index){
    songname.textContent = `${songlist[index].artist} - ${songlist[index].name}`;
    audio = new Audio(songlist[index].path);
    audio.load();
    audio.addEventListener('ended', nextTrack)
    audio.volume = .03;
    Play()
};

songlist = [
    {"name":"Love Again"
    ,"artist":"The Kid LAROI",
    "path":"../static/hubdoarexyz/music/love-again.mp3",
    },
    {
    "name":"Always Do",
    "artist":"The Kid LAROI",
    "path":"../static/hubdoarexyz/music/always-do.mp3",
    },
    {
    "name":"Bye Bye",
    "artist":"Juice WRLD",
    "path":"../static/hubdoarexyz/music/bye-bye.mp3",
    },
    {
    "name":"Understand",
    "artist":"BoyWithUke",
    "path":"../static/hubdoarexyz/music/understand.mp3"

    }
]

$('document').ready(function() {
    $('.main-container').hide()
    $('.pre-load').show()
});

$('.pre-load').click(function() {
    $(this).fadeOut(1000).next().delay(250)
    $('.main-container').fadeIn(1000)
    $('.btn-screen').animate({'zoom': 0, 'visibility':0}, 1000)
    load(index)
    playing = true

    window.requestAnimationFrame(progress_animation);
});

function progress_animation(){
    var currentTime = audio.currentTime;
    var duration = audio.duration;
    $('#progbar').stop(true, true).animate({ 'width': (currentTime + .25) / duration * 100 + '%' }, 250, 'linear');
    window.requestAnimationFrame(progress_animation);
    
};

$('#play-pause').click(function (){
    playing ? Pause() : Play();
});

function nextTrack(){
    if (index < songlist.length - 1) {
        index++;
    } else {
        index = 0;
    }
    Pause()
    load(index);
};

function prevTrack(){
    if (index > 0) {
        index--;
    } else {
        index = songlist.length - 1;
    }
    Pause()
    load(index);
};

function Play() {
    audio.play();
    playing = true;
    playpause.innerHTML = '<i class="fa-solid fa-pause"></i>';
};

function Pause() {
    audio.pause();
    playing = false;
    playpause.innerHTML = '<i class="fa-solid fa-play"></i>';
};

$(discord).click(function() {
    window.open('https://discord.gg/mDsmhnCWkv')
});

$(github).click(function() {
    window.open('https://github.com/doorholderdoare')
});

$(youtube).click(function() {
    window.open('https://www.youtube.com/channel/UCXTJ00ZIZ0V6CPzaoR-4GYQ')
});

$(namemc).click(function() {
    window.open('https://namemc.com/profile/DOARE.1')
});