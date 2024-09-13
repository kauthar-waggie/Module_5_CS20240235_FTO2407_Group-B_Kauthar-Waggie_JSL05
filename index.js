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
    { title: "Birds of a feather", artist: "Billie Eilish", genre: "Pop" },
    { title: "Die with a smile", artist: "Bruno Mars & Lady Gaga", genre: "Pop" },
    { title: "Lost", artist: "Linkin Park", genre: "Rock" },
    { title: "Crush", artist: "Blake Aaron", genre: "Jazz" },
    { title: "Super Shy", artist: "New Jeans", genre: "K-Pop" },

    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Jazz",
    "Groot" : "K-Pop"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    return Object.keys(guardians).map(guardian => {
        const preferredGenre = guardians[guardian];
        const playlist = songs.filter(song => song.genre === preferredGenre);
        return {
            guardian: guardian,
            playlist: playlist
        };
    });
}
// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
const playlists = generatePlaylist(guardians, songs);
console.log(playlists);

// Starting with a Function to display all Guardians' playlists in the #playlists div
function displayAllGuardiansPlaylists(playlists) {
    const playlistsDiv = document.getElementById("playlists");

    //this creates a new div for each guardians playlist
    playlists.forEach(guardianPlaylist => {
        const guardianDiv = document.createElement("div");
        guardianDiv.classList.add("playlist");

        // This is gonna create a h2 element for the guardian's name (DOM) 
        const guardianName = document.createElement("h2");
        guardianName.textContent = guardianPlaylist.guardian + "'s Playlist";
        guardianDiv.appendChild(guardianName);

        // this creates a ul element for the song list
        const songList = document.createElement("ul");

        // Using Loop to create the playlist and create li elements for each song
        guardianPlaylist.playlist.forEach(song => {
            const songItem = document.createElement("li");
            songItem.classList.add("song");

            const songTitle = document.createElement("span");
            songTitle.classList.add("song-title");

            // Added a span for the song title i can use in css
            const title = document.createElement("span");
            title.classList.add("title")
            title.textContent = song.title;
            songTitle.appendChild(title);

            // Added a span for the artist name for styling class
            const artist = document.createElement("span");
            artist.classList.add("artist");
            artist.textContent = ` by ${song.artist}`;
            songTitle.appendChild(artist);

            songItem.appendChild(songTitle);
            songList.appendChild(songItem);
        });
        
        guardianDiv.appendChild(songList);
        playlistsDiv.appendChild(guardianDiv);
    });
}

const allGuardiansPlaylists = generatePlaylist(guardians, songs);
displayAllGuardiansPlaylists(allGuardiansPlaylists);


