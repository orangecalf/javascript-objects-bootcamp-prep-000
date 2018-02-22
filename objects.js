var playlist = {artist: 'song'};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {}, playlist, {[artistName]: songTitle})
} 

function removeFromPlaylist(playlist, artistName) {
   return delete Object.assign(playlist, {artistName
   })
   
}