let currentlyPlayingAudio = null;
let videoPlayer = document.getElementById('videoPlayer');

function playMusic(divID) {
    const songs = [
        '../media/audio/song1.mp3',
        '../media/audio/song2.mp3',
        '../media/audio/song3.mp3',
        '../media/audio/song4.mp3',
        '../media/audio/song5.mp3',
        '../media/audio/song6.mp3',
        '../media/audio/song7.mp3',
        '../media/audio/song8.mp3',
        '../media/audio/song9.mp3',
        '../media/audio/song10.mp3'
    ];

    const videos = [
        '../media/vid/video1.mp4',
        '../media/vid/video2.mp4',
        '../media/vid/video3.mp4',
        '../media/vid/video4.mp4',
        '../media/vid/video5.mp4',
        '../media/vid/video6.mp4',
        '../media/vid/video7.mp4',
        '../media/vid/video8.mp4',
        '../media/vid/video9.mp4',
        '../media/vid/video10.mp4'
    ];

    const divNumber = parseInt(divID.replace('rectangle', ''));
    const audioSrc = songs[divNumber - 1];

    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }

    const audio = new Audio('../audio/' + audioSrc);
    audio.play();

    currentlyPlayingAudio = audio;

 
    videoPlayer.src = videos[divNumber - 1];
}

const rectangles = document.querySelectorAll('.rectangle');

rectangles.forEach(rectangle => {
    rectangle.addEventListener('click', () => {
        playMusic(rectangle.id);
    });
});
