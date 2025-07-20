function arrangeVideoListeners() {
    const video = document.getElementById('section');
    arrangePointListeners(video);
}

function arrangePointListeners(section) {
    const pointHolders = section.getElementsByClassName('point-holder');
    alert(pointHolders.length);
    let point;
    for(let i = 0; i < pointHolders.length; ++i) {
        point = pointHolders.item(i).getElementsByTagName('img');
        point.addEventListener('click', function(event) {

        });
    }

}

function initializeVideoSection() {

}

arrangeVideoListeners();








































let players = {};

function onYouTubeIframeAPIReady() {
    const videos = ['VIDEO_LARGE', 'VIDEO_PETITE_2', 'VIDEO_PETITE_3', 'VIDEO_PETITE_4'];

    for (let i = 0; i < videos.length; ++i) {
        players[i] = new YT.Player(videos[i], {
            videoId: videos[i],
            playerVars: { controls: 0, modestbranding: 1 },
            events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange
            }
        });
    }
}
