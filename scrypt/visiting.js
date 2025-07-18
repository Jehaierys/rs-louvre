function arrangeVisitingListeners() {
    const panoramas = fetchPanoramas();
    arrangeMouseEnterListeners(panoramas);
    arrangeMouseLeaveListeners(panoramas);
}

function arrangeMouseEnterListeners(panoramas) {
    for (let i = 0; i < panoramas.length; ++i) {
        panoramas.item(i).addEventListener('mouseenter', function (event) {
            const panorama = event.currentTarget;
            const bar = fetchBar(panorama);
            bar.animate(
                [
                    { width: '100%' }
                ],
                {
                    duration: 500,
                    fill: 'forwards',
                    easing: 'ease'
                }
            );
        });
    }
}

function arrangeMouseLeaveListeners(panoramas) {
    for (let i = 0; i < panoramas.length; ++i) {
        panoramas.item(i).addEventListener('mouseleave', function (event) {
            const panorama = event.currentTarget;
            const bar = fetchBar(panorama);
            bar.animate(
                [
                    { width: '300px' }
                ],
                {
                    duration: 500,
                    fill: 'forwards',
                    easing: 'ease'
                }
            );
        });
    }
}

function fetchBar(panorama) {
    return panorama.getElementsByClassName('panorama-bar').item(0);
}

function fetchPanoramas() {
    const visiting = document.getElementById('visiting');
    return visiting.getElementsByClassName('panorama');
}

arrangeVisitingListeners();