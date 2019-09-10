# MuziqueHub

Demo: [MuziqueHub](https://project-3-music-app.herokuapp.com).
## About 📖
MuziqueHub is a MERN stack web application designed for connecting users to information on their favorite artists.

## How to Use 🤔
After searching for a band or musician the user is provided with a short biography, images, social media links and even music videos.
<br>
<img src= "https://media.giphy.com/media/kGilbQs5xJg4ZWVYwG/giphy.gif" alt="Artist Search" width="75%">
<hr>
 
They can also search by artist or location to find relevant concerts.
<br>
<img src= "https://media.giphy.com/media/lRvnnZpJQSJgsLBb7D/giphy.gif" alt="Concert Search" width="75%">
<hr>
 
The app is available to anyone but only after logging in the user will be able to save favorites to their own personal feed.
<br>
<img src= "https://media.giphy.com/media/S6HhmrC3mfmkzcBVSe/giphy.gif" alt="Favorites Feed" width="75%">
<hr>

## How it Works 🔨
The application uses two seperate API's to retrieve data.
1. TheAudioDB API 
*A community Database of audio artwork and data*
```
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
                website: "http://" + result.strWebsite, // concat http:// for link compatability
                facebook: "http://" + result.strFacebook, // concat http:// for link compatability
                twitter: "http://" + result.strTwitter, // concat http:// for link compatability
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
```

2. SongKick API 
*Gives easy access to the biggest live music database in the world*
```
router.get("/search" , (req, res) => {
    const artistName = req.query.artistName.replace(/\s/g, "+");
    axios.get(`https://api.songkick.com/api/3.0/events.json?artist_name=${artistName}&per_page=10&apikey=${apiKey}`)
        .then(results => songkickParse(results))
        .then(mappedResults => res.json(mappedResults))
        .catch(err => res.status(422).json(err));
});
```
## Pre-Requisites ✔️
To power this app locally, you'll need to a install a couple `NPM Packages`. Downloading the following Node packages is crucial for this applications functionality.

* Axios `npm i axios`
* Bcrypt `npm i bcrypt`
* Concurrently `npm i concurrently`
* Connect-Flash `npm i connect-flash`
* Dotevn `npm i dotenv`
* Express `npm i express`
* Express-Session `npm i express-session`
* Express-Validation `npm i express-validation`
* If-Env `npm i if-env` 
* Moment `npm i moment`
* Mongoose `npm i mongoose`
* Nodemon `npm i nodemon`
* Passport `npm i passport`
* Passport-Local `npm i passport-local`
* Path `npm i path`
* React `npm i react`
* React-Dom `npm i react-dom`
* React-Router-Dom `npm i react-router-dom`

--or--

Shorthand `npm i` (short-hand)

## Getting Started Locally🏁
These instructions will get you a copy of the project up and running on your local machine for grading and testing purposes. 

1. Clone repository. Click on the clone button next to the repository (clone with SSH). 
2. Open Terminal and git clone (paste) into directory of your choice. 
3. Open folder in VS Code. 
4. Obtain api keys from theaudiodb and SongKick, then place them in your own .env file.
5. Install all neccessary npm packages by opening your terminal, navigating to the directory, and typing `npm i`.
6. Type `NPM Start` to run application.
7. The chosen port should automatically open in your browser and ENJOY!

## Technologies Used 💻
* CSS3
* Express
* HTML5
* Javascript ES6
* MongoDB
* Node.js
* PassportJS
* ReactJS
* Studio3T
* VS Code

## Creators ✋
*** Amanda Dovel *** - [amandadovel](https://github.com/amandadovel)
<br>

*** Joey Kubalak *** - [TreezCode](https://github.com/TreezCode)
<br>

*** Kyle Knox *** - [KyleK86](https://github.com/KyleK86)
<br>

## Acknowledgments 🌟
[SongKick](https://www.songkick.com)

[TheAudioDB](https://www.theaudiodb.com/)