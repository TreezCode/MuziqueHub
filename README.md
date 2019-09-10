# MuziqueHub

Demo: [MuziqueHub](https://project-3-music-app.herokuapp.com).

## About 📖
MuziqueHub is a MERN stack web application designed for connecting users to information on their favorite artists.

## How to Use 🤔
After searching for a band or musician the user is provided with a short biography, images, social media links and even music videos.
<img src= "https://media.giphy.com/media/kGilbQs5xJg4ZWVYwG/giphy.gif" alt="Artist Search" width="75%">
 
They can also search by artist or location to find relevant concerts.
<img src= "https://media.giphy.com/media/lRvnnZpJQSJgsLBb7D/giphy.gif" alt="Concert Search" width="75%">
 
The app is available to anyone but only after logging in the user will be able to save favorites to their own personal feed.
<img src= "https://media.giphy.com/media/S6HhmrC3mfmkzcBVSe/giphy.gif" alt="Favorites Feed" width="75%">

## How it Works 🔨
1. On the Home page, users will be presented with ablilty to search for an artist. 

2. The resulting data will include the artist's biography, links to social media, photos, and videos.

3. Once account is created, the user will be granted the ability to save search results to the Favorites page 

4. On the Concerts page, the user can search separately for live performance information by searching for an artist.

The `Game.js` component contains a majority of the applications core functionality.

A method for shuffling an array of image URLS is created here and called in the initial state of the component.
```
shuffleArray() {
    // Create copy of current array to modify by value
    const newArr = images.slice();
    // Create new array to store shuffled data
    const shuffledArr = [];
    // Loop thru newArr and get random index based on current length then splice val from newArr and push to shuffledArr
    while (newArr.length > 0) {
        shuffledArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
    }
    return shuffledArr;
}
```

The current *this* is bound to the *checkClicked* method and then called in a click event that is attached to each image.
```
checkClicked(guess) {
    // Create copy of wasClicked array to modify by value
    const prevState = this.state.wasClicked.slice();
    // Shuffle images
    const shuffle = this.shuffleArray();
    // Track score
    let score = this.state.score;
    let highScore = this.state.highScore;
    // If user guess is not found in wasClicked
    if (!this.state.wasClicked.includes(guess)) {
        // Store clicked items
        prevState.push(guess);
        // Handle score
        if(score === highScore) {
            score ++;
            highScore++;
        } else {
            score++;
        }
        // Hanlde correct state
        this.setState({
            score: score,
            highScore: highScore,
            navMessage: "Correct",
            navMsgColor: "success",
            allCharacters: shuffle,
            wasClicked: prevState,
            shake: false,
        });
        return setTimeout(() => this.setState({ navMsgColor: "" }), 500);
    }
    // If user guess is found in wasClicked
    if (this.state.wasClicked.includes(guess)) {
        // Hanlde score
        let score = 0;
        // Handle incorrect state
        this.setState({
            score: score,
            highScore: highScore,
            navMessage: "Incorrect",
            navMsgColor: "fail",
            allCharacters: shuffle,
            wasClicked: [],
            shake: true,
            flip: true
        });
        return setTimeout(() => this.setState({ navMsgColor: "", flip: false }), 500)
    }
}
```

## Pre-Requisites ✔️
To power this app locally, you'll need to a install a couple `NPM Packages`. Downloading the following Node packages is crucial for this applications functionality.

* Axios `npm i axios`
* Bcrypt `npm i bcrypt`
* Concurrently `npm i concurrently`
* Connect-Flash `npm i connect-flash`
* Dotevn `npm i dotenv`
* Express `npm i express`
* Express-Session `npm i express-session` Express-Validation `npm i express-validation`
* If-Env `npm i if-env` Moment `npm i moment`
* Mongoose `npm i mongoose`
* Nodemon `npm i nodemon`
* Passport `npm i passport`
* Passport-Local `npm i passport-local`
* Path `npm i path`

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
* VS Code

## Creators ✋
*** Joey Kubalak *** - [TreezCode](https://github.com/TreezCode)
<br>

*** Kyle Knox *** - [KyleK86](https://github.com/KyleK86)
<br>

*** Amanda Dovel *** - [amandadovel](https://github.com/amandadovel)
<br>
 
## Acknowledgments 🌟
[SongKick](https://www.songkick.com)

[TheAudioDB](https://www.theaudiodb.com/)