# Shotkallar715_playlist
>This challenge was for Hacktoberfest 2022 and I created a music playlist for a local artist.

## Table of contents
* [General info](#general-info)
* [Project Demo](#project-demo)
* [Project Video](#project-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Inspiration](#inspiration)
* [Contact](#contact)
* [License](#license)

## General Info
Users are able to:

- Forward, skip to a certain verse in the song, or refer back to the previous songs.

<div align="center">Welcome to BugView. </div>
<br/>
<div align="center">
<kbd>
Desktop view:
<img width="750" alt="icon" src="https://user-images.githubusercontent.com/100221733/195726467-b8f4cbc7-5cc7-463e-8a9b-736b04255ab0.png">
</kbd>
</div>

## Project Demo
[Click to view site] (https://playlist-ten.vercel.app/)

##Project Video

## Technologies
### Backend Development 


### Frontend Development 
* JavaScript (ES6)
* HTML5
* CSS3

## Setup
To render this project on your computer:
1. Clone the GitHub repository locally to your computer
2. In the command line, type the following:
$open index.html

## Code Example
## JavaScript (ES6)

```js
function setUpdate() {
  let seekPosition = 0;
  if (!isNaN(curr_track.duration)) {
    //isNaN function returns true if the argument is not a number, otherwise it is false
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      curr_track.duration - durationMinutes * 60
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
```

## Features

* Front end user interface utilizing Javascript, HTML, and CSS. 
* Users can fast forward, reverse and pause the song
* Users are able to start and stop a song at a specific time duration


## Status

I would like to add repeat, volume, and random button, along with the artist's social media information. 

## Inspiration

The inspiration derived from a local artist's request to create a music player to instantly play his music for his fans, friends, and family. Instead of using a framework, I wanted to create a music player with HTML, Javascript, and CSS. 

If you loved any of the songs, please check out more from his Youtube link located below.
Artist's Youtube: https://www.youtube.com/c/Shotkallar715

## Contact
Mai Vang

1. Github: https://github.com/vmaineng
2. Medium: https://medium.com/@vmaineng
3. LinkedIn: https://www.linkedin.com/in/mai-vang-software-engineer/
4. Email: vmaineng@gmail.com
