class VideoLoader {
    #players = new Array(5);

    onYouTubeIframeAPIReady() {
        this.#players[0] = new YT.Player('first-video', { videoId: 'ipAnwilMncI', playerVars: { controls: 0 } });
        this.#players[1] = new YT.Player('second-video', { videoId: 'pvoBLOxf78w', playerVars: { controls: 0 } });
        this.#players[2] = new YT.Player('third-video', { videoId: 'tbYvl0dofb4', playerVars: { controls: 0 } });
        this.#players[3] = new YT.Player('fourth-video', { videoId: 'kqYDlxw28qg', playerVars: { controls: 0 } });
        this.#players[4] = new YT.Player('fifth-video', { videoId: 'ic8j13piAhQ', playerVars: { controls: 0 } });
    }
}