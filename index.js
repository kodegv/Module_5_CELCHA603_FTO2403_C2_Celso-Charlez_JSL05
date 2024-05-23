// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlists = {};

    for (const guardian in guardians) {
        const preferredGenre = guardians[guardian];
        playlists[guardian] = songs.filter(song => song.genre === preferredGenre);
    }

    return playlists;
}

// Function to display playlists on the site
function displayPlaylists(playlists) {
    const playlistsDiv = document.getElementById('playlists');

    for (const guardian in playlists) {
        const guardianDiv = document.createElement('div');
        guardianDiv.classList.add('playlist');

        const guardianTitle = document.createElement('h2');
        guardianTitle.textContent = `${guardian}'s Playlist:`;
        guardianDiv.appendChild(guardianTitle);

        const songList = document.createElement('ul');

        playlists[guardian].forEach(song => {
            const songItem = document.createElement('li');
            songItem.classList.add('song');

            const songTitle = document.createElement('span');
            songTitle.classList.add('song-title');
            songTitle.textContent = song.title;

            songItem.appendChild(songTitle);
            songItem.appendChild(document.createTextNode(` by ${song.artist}`));
            songList.appendChild(songItem);
        });

        guardianDiv.appendChild(songList);
        playlistsDiv.appendChild(guardianDiv);
    }
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);

