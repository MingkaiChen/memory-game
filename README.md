# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Mingkai Chen**

Time spent: **8** hours spent in total

Link to project: https://glitch.com/edit/#!/meadow-daily-nut

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked.
* [x] Game buttons each light up and play a sound when clicked.
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Turns and mistakes display in the page.
- [x] Show a congratulating modal when the player wins the game.
- [x] Show a cheering modal when the player loses the game. (3 mistakes made)
- [x] Show a time-is-up modal when the player use up the time in a turn.
- [x] Show an alert on each time the player make a mistake. Meanwhile, the game is paused .
- [x] The timer for each turn is shown in text as a count-down.
- [x] The timer for each turn is shown in an animated progress bar.
- [x] Both text timer and progress bar timer are reset when the game ends.
- [x] A pusulating fab on the "End" button to indicate the game is undergoing.
- [x] When the player check the "Chanllenge me!" check box, the texts on play buttons are shuffle so texts don't neccesarily match colors.
- [x] When the player uncheck the "Chanllenge me!" check box, the texts on play buttons are reset so texts match colors.
- [x] On shuffling or reseting button texts, there is a fade-in animtation for highlighting the text changes.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![A normal game](https://files.mingkai.me/gifs/prework_1.gif)
![Three-strikes out and Challenge me!](https://files.mingkai.me/gifs/prework_2.gif)
![Time out](https://files.mingkai.me/gifs/prework_3.gif)
![End and reset](https://files.mingkai.me/gifs/prework_4.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

- I consulted a friend with design backgrond about UI and UX ideas for the project.
- [Bootstrap official document](https://getbootstrap.com/docs/4.0/)
- [W3 tutorial on Bootstrap 4](https://www.w3schools.com/bootstrap4/default.asp)
- [W3 tutorial on JavaScript and HTML DOM Reference](https://www.w3schools.com/jsref/)
- [Rainbow color palette](https://colorswall.com/palette/102)
- StackOverFlow for many implementation questions. i.e.: [Dynamically change the aria-valuenow of a Bootstrap progress-bar in a VueJS component](https://stackoverflow.com/questions/59801740/dynamically-change-the-aria-valuenow-of-a-bootstrap-progress-bar-in-a-vuejs-comp)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
  - The most challenging part I encountered was designing a user-friendly experience and visually-appealing look for the website. Although this is the very first time I touched front-end development, the coding part doesn't feel hard with rich resources online. Because I have participated in competitive programming contests in high school, my programming skill is transferable to most new programming languages. It is my strength and also my weakness. Since I am most passionate about computer systems and other things on the backend, I built them into a comfort zone that I rarely step out of. I haven't thought much about the front-end or the view a user would see. 
  - It was not until I showed my website to a friend that I realized the user experience needed much improvement. In my first version of the code complete site, all elements sat on the top left corner with one single background color. None of these seemingly apparent drawbacks stood out to me, surprisingly. I overcame this challenge by asking my friend with a design background to give me suggestions to improve the site's look and ideas on making the game experience more friendly, like adding a visual indicator for the game timer. I am glad that I reached out to my friend for review, which is probably a good habit.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
  - There is some part of JavaScript I don’t understand thoroughly around its blocking and asynchronous nature. I couldn’t figure out in the project why the front-end timer could not exactly line up with the timer logic in the script (especially when with alert function). There is always a smaller than 1 second lead or lag between the game-stop trigger and the front-end timer. I guess it has to do something with how asynchronous JavaScript and callback function works. But I didn’t have enough time to figure it out exactly. Maybe this is a general challenge in the web development world I would like to learn more about.
  - Another thing I noticed but haven’t figured out is the chord of tone I created performs badly with Chrome browsers. I tested my site on safari, firefox, and Chrome. Only in Chrome does the chord tone sounds jittering with some slight noises. I don’t know how it happens, but I would guess it might be due to how Chrome realizes the sound functionality at a very foundational level.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
  - If I had a few more hours to work project, I would definitely try to figure out how I can solve the two issues I mentioned in question 3. (lag in timer & alert() blocking problem & bad sound performance with Chrome).
  - I also have some game or experience improvement ideas I want to implement. To name a few, I could change the alert prompt to a modal. This part requires additional functions for pausing and resuming the game. I can also give users more options to adjust game difficulties. For example, I can allow users to select how many buttons they want to play with. I can also make the “challenge me” selection even more challenging by shuffling the color order from left to right. I can even make buttons continuously move in random directions while playing the game.

## Interview Recording URL Link

[My 5-minute Interview Recording](https://files.mingkai.me/videos/interview-SITE-program.mp4)

## License

    Copyright Mingkai Chen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
