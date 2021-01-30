const drums = new Howl({
    "src": [
        "./sounds/drums.webm",
        "./sounds/drums.mp3"
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

drumkit.addEventListener('click', () => {
    if (event.target.classList.contains('pad')) {
        let soundToPlay = event.target.dataset.sound;
        drums.play(soundToPlay);
    }
})