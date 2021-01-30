const drums = new Howl({
    "src": [
        "./sounds/drums808.webm",
        "./sounds/drums808.mp3"
      ],
      "sprite": {
        "clap": [
          0,
          1073.922902494331
        ],
        "closed": [
          3000,
          102.0408163265305
        ],
        "crash": [
          5000,
          2838.639455782313
        ],
        "kick": [
          9000,
          995.5555555555549
        ],
        "open": [
          11000,
          789.4784580498869
        ],
        "snare": [
          13000,
          181.08843537414998
        ]
      }
});

const drumkit = document.querySelector('.drumkit');
function playDrum(event){
    if (event.target.classList.contains('pad')) {
        event.preventDefault();
        let soundToPlay = event.target.dataset.sound;
        drums.play(soundToPlay);
    }
}
function setViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setViewportHeight();
window.addEventListener('resize', () => {
    setTimeout(setViewportHeight, 100);
});

drumkit.addEventListener('click',playDrum);
drumkit.addEventListener('touchstart',playDrum);
