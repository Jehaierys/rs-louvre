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
            bar.classList.remove('panorama-bar-non-hover');
            bar.classList.add('panorama-bar-hover');
        });
    }
}

function arrangeMouseLeaveListeners(panoramas) {
    for (let i = 0; i < panoramas.length; ++i) {
        panoramas.item(i).addEventListener('mouseleave', function (event) {
            const panorama = event.currentTarget;
            const bar = fetchBar(panorama);
            bar.classList.remove('panorama-bar-hover');
            bar.classList.add('panorama-bar-non-hover');
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