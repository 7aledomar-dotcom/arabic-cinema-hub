// CVN-QDrama — Arabic Cinema Hub
// Nuvio provider scaffold. Uses the documented CommonJS getStreams contract.
// Connect this to a catalogue/playback API you are authorized to access.
// This template deliberately does not scrape pages or extract protected streams.

function getStreams(tmdbId, mediaType, season, episode) {
  if (!tmdbId || ["tv"].indexOf(mediaType) === -1) {
    return Promise.resolve([]);
  }

  // TODO: Replace with your authorized API request and normalize its response.
  // Return objects in the Nuvio format, for example:
  // {
  //   name: "CVN-QDrama",
  //   title: "Title / Episode",
  //   url: "https://your-authorized-domain.example/video/master.m3u8",
  //   quality: "Auto"
  // }
  return Promise.resolve([]);
}

module.exports = { getStreams };
