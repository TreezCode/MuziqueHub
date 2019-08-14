const router = require("express").Router();
const axios = require("axios");
const db = require("../../models/");
require('dotenv').config();
const apiKey = process.env.REACT_APP_AUDIODB_APIKEY;

// Search TheAudioDB API for artist
router.get("/search", (req, res) => {
    const artistName = req.query.artistName.replace(/\s/g, "+");
    let artistData;
    axios.get(`https://www.theaudiodb.com/api/v1/json/${apiKey}/search.php?s=${artistName}`)
        .then(results => results.data.artists.map(result => {
            // === create artist object with original api call data
            let artist = {
                artistId: result.idArtist,
                artistName: result.strArtist,
                label: result.strLabel,
                genre: result.strGenre,
                website: result.strWebsite,
                facebook: result.strFacebook,
                twitter: result.strTwitter,
                biography: result.strBiographyEN,
                country: result.strCountry ,
                artistThumb: result.strArtistThumb ,
                artistLogo: result.strArtistLogo,
                artistFanart: result.strArtistFanart,
                artistFanart2: result.strArtistFanart2,
                artistFanart3: result.strArtistFanart3
            }
            artistData = artist;
            return artistData;
        }))
        .then(mappedResults => {
            // === use the created artist object to perform music video api call
            let artistId = mappedResults[0].artistId;
            let videos = [];
            axios.get(`https://www.theaudiodb.com/api/v1/json/${apiKey}/mvid.php?i=${artistId}`)
                .then(results => {
                    if (results.data.mvids) {
                        // If music videos available create video object and nest it within the artist object
                        results.data.mvids.map(result => {
                            let video = {
                                vidLink: result.strMusicVid,
                                vidThumb: result.strTrackThumb,
                                vidTrack: result.strTrack
                            }
                            video.vidLink = video.vidLink.replace("watch?v=", "embed/") // modification for iframe compatability
                            videos.push(video);
                            artistData.musicVideos = videos;
                            return artistData;              
                        })
                        res.json([artistData]);
                    } else {
                        // If no music videos available send artist data to front end
                        res.json([artistData]);
                    }
                })
        })
        .catch(err => res.status(422).json(err));
});

// Save artist to the database
router.post("/", (req, res) => {
    db.Favorites
        .create(req.body)
        .then(dbArtist => res.json(dbArtist))
        .catch(err => res.status(422).json(err))
});

module.exports = router;