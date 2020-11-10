var songs = [
    'Welcomtotheblackparade.mp3',
    'PianoMan.mp3'
]
var audio = new Audio('Welcomtotheblackparade.mp3');
function playAudio()
{
    audio.play();
}

function pauseAudio()
{
    audio.pause();
}

function PianomanAudio()
{
    audio.pause();
    audio = new Audio('PianoMan.mp3');
}

function blackparadeAudio()
{
    audio.pause();
    audio = new Audio('Welcomtotheblackparade.mp3');
    
}