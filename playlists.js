class Playlist {
  constructor(
    title, // title is a 'string' corresponding to the name of the playlist
    songs, // songs is an array of Songs
    playlists // playlists is an array of nested Playlists. Note that playlists cannot have circular references to other playlists
  ) {
    this.title = title || "N/A";
    this.songs = songs || [];
    this.playlists = playlists || [];
  }
}

class Song {
  constructor(
    name, // name is a 'string' corresponding to the name of the song
    artist, // artist is a 'string' corresponding to the name of the artist who performed the song. For the purposes of this problem, you can assume that every song only has a single artist..
    duration // duration is a 'number' (integer) corresponding to the duration of the song in seconds
  ) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
  }
}

const walkThisWaySong = new Song("Walk This Way", "Run DMC", 310);
const itsTrickySong = new Song("It's Tricky", "Run DMC", 183);
const rockTheBellsSong = new Song("Rock the Bells", "LL Cool J", 240);
const changesSong = new Song("Changes", "2Pac", 269);

const runDmcPlaylist = new Playlist(
  "Run DMC list",
  [walkThisWaySong, itsTrickySong],
  []
);
const eightiesPlaylist = new Playlist(
  "1980s",
  [rockTheBellsSong],
  [runDmcPlaylist]
);
const ninetiesPlaylist = new Playlist("1990s", [changesSong], []);
const twentyTwentiesPlaylist = new Playlist("2020s", [], []);

const oldSchoolHipHopPlaylist = new Playlist(
  "Old School Hip Hop",
  [],
  [eightiesPlaylist, ninetiesPlaylist, twentyTwentiesPlaylist]
);

/*
    Given a reference to a playlist node and a string of text containing an artist name, write a function that returns whether or not there is a song within the playlist that is performed by the given artist.

    Note that the song can be contained anywhere in the playlist, including nested playlists.

    The function should return true if there is a song performed by the specified artist, and false otherwise.
  */

//iterate over every playlist within playlist array
// for every song, check to see if the artistName arg corresponds to a song within the song array.
//playlist.playlists.forEach(playlist => {

// //})
// playlists: [playlist1, playlist2, playlist3]
// playlist1: [playlist4, playlist5]

// queue = [playlist.playlists]

// queue = [1990s, 2020s]

//while(queue.length > 0) {
//   let current = queue.shift() // 1980s
//   let songs = []
//
//   songs.push(current.songs)
//
//   if(current.playlists) {
// queue.push(current.playlists)
// }
//
// }

// [oldSchoolHipHopPlaylist.playlists]

function playlistContainsArtist(playlist) {
  let playlistQueue = [...playlist.playlists];
  let allSongs = [];

  while (playlistQueue.length > 0) {
    let currentPlaylist = playlistQueue.shift();

    allSongs.push(...currentPlaylist.songs);
    playlistQueue.push(...currentPlaylist.playlists);
  }

  // for(let i = 0; i < allSongs.length; i++) {
  //   if(allSongs[i].artist === artistName) {
  //     return true
  //   }
  // }

  // return false

  let sum = 0;
  for (let i = 0; i < allSongs.length; i++) {
    sum += allSongs[i].duration;
  }
  return sum;
}

// === Test Cases ===
// ==================
// Case 1: Deeply nested playlist
//
console.log(playlistContainsArtist(oldSchoolHipHopPlaylist));
// -- expected output: 1002
// -----------------------------------------------------------------
// Case 2: Empty playlist
//
console.log(playlistContainsArtist(twentyTwentiesPlaylist));
// -- expected output: 0

// === Test Cases ===
// ==================
// Case 1: Artist does not exist in playlist
//
// console.log(playlistContainsArtist("Britney Spears", oldSchoolHipHopPlaylist))
// // -- expected output: false
// // -----------------------------------------------------------------
// // Case 2: Artist exists in deeply nested playlist
// //
// console.log(playlistContainsArtist("2Pac", oldSchoolHipHopPlaylist))
// // -- expected output: true
// // -----------------------------------------------------------------
// // Case 3: Artist exists in immediate playlist
// //
// console.log(playlistContainsArtist("Run DMC", oldSchoolHipHopPlaylist))
// // -- expected output: true
// // -----------------------------------------------------------------
// // Case 4: Artist does not exist in empty playlist
// //
// console.log(playlistContainsArtist("LL Cool J", twentyTwentiesPlaylist))
// // -- expected output: false
// // -----------------------------------------------------------------
// // Case 5: Empty string artist name
// //
// console.log(playlistContainsArtist("", oldSchoolHipHopPlaylist))
// // -- expected output: false
// // -----------------------------------------------------------------
