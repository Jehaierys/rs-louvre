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