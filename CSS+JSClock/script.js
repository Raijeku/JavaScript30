const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360);
    secondHand.style.transform = `rotate(${secondsDegrees+90}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60)*360)
    minuteHand.style.transform = `rotate(${minutesDegrees+90}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours/12)*360)
    hourHand.style.transform = `rotate(${hoursDegrees+90}deg)`;  
}

function setLyrics(){
    const body = this.document.querySelector('body');
    body.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;

    const label = this.document.querySelector('.label');
    label.innerHTML = lyrics[counter%(lyrics.length)];
    counter +=1;
}

function startSong(){
    const audio = document.querySelector('audio');
    audio.play();
    setInterval(setLyrics, 474);
}

var counter=0;
var lyrics = 'buy it, use it, break it, fix it, trash it, change it, mail, upgrade it, charge it, point it, zoom it, press it, snap it, work it, quick, erase it, write it, cut it, paste it, save it, load it, check it, quick, rewrite it, plug it, play it, burn it, rip it, drag and drop it, zip, unzip it, lock it, fill it, curl it, find it, view it, code it, jam, unlock it, surf it, scroll it, pose it, click it cross it, crack it, twitch, update it, name it, read it, tune it, print it, scan it, send it, fax, rename it, touch it, bring it, pay it, watch it, turn it, leave it, stop, format it';
lyrics = lyrics.split(', ');

setInterval(setDate,1000);

const label = this.document.querySelector('.label');
label.addEventListener('click', startSong);
