let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('large-video-container', {
            videoId: 'M7lc1UVf-VE', // замени на нужный ID
            playerVars: {
                controls: 0,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                fs: 0,
            },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    const playPauseBtn = document.getElementById('play-pause');
    const progressBar = document.getElementById('progress');
    const volumeControl = document.getElementById('volume');

    playPauseBtn.addEventListener('click', () => {
        const state = player.getPlayerState();
        if (state === YT.PlayerState.PLAYING) {
            player.pauseVideo();
            playPauseBtn.textContent = 'Play';
        } else {
            player.playVideo();
            playPauseBtn.textContent = 'Pause';
        }
    });

    // Обновление прогресс-бара
    setInterval(() => {
        if (player && player.getDuration) {
            const current = player.getCurrentTime();
            const duration = player.getDuration();
            progressBar.value = (current / duration) * 100;
        }
    }, 500);

    // Перемотка
    progressBar.addEventListener('input', () => {
        const duration = player.getDuration();
        player.seekTo((progressBar.value / 100) * duration, true);
    });

    // Громкость
    volumeControl.addEventListener('input', () => {
        player.setVolume(volumeControl.value);
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        console.log('Видео воспроизводится');
    } else if (event.data === YT.PlayerState.PAUSED) {
        console.log('Видео на паузе');
    } else if (event.data === YT.PlayerState.ENDED) {
        console.log('Видео закончилось');
    }
}

// Дополнительно: пример программного управления
function playVideo() {
    player.playVideo();
}

function pauseVideo() {
    player.pauseVideo();
}