class Playlist {
    constructor() {
        this.playlists = [];
    }

    addEntry(playlist, artist, song, genre, album) {
        const entry = { playlist, artist, song, genre, album };
        this.playlists.push(entry);
    }

    getEntries() {
        return this.playlists;
    }
}

export default Playlist;

import Playlist from './playlistModule.js';

const playlistManager = new Playlist();

document.getElementById('playlist-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const playlist = document.getElementById('playlist').value;
    const artist = document.getElementById('artist').value;
    const song = document.getElementById('song').value;
    const genre = document.getElementById('genre').value;
    const album = document.getElementById('album').value;

    playlistManager.addEntry(playlist, artist, song, genre, album);

    console.log(playlistManager.getEntries());

    // Optionally, clear the form fields
    event.target.reset();
});