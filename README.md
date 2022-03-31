# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Jeffrey Liu

Time spent:
- 4 hours and 25 minutes (For first demo)
- 7 hours and 38 minuties (In total)

Link to project:   
Live Website: https://abyssinian-agate-spade.glitch.me  
Code: https://glitch.com/edit/#!/abyssinian-agate-spade

## Required Functionality

The following **required** functionality is complete:

* [✔] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [✔] "Start" button toggles between "Start" and "Stop" when clicked. 
* [✔] Game buttons each light up and play a sound when clicked. 
* [✔] Computer plays back sequence of clues including sound and visual cue for each button
* [✔] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [✔] User wins the game after guessing a complete pattern
* [✔] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [✔] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [✔] Buttons use a pitch (frequency) other than the ones in the tutorial
* [✔] More than 4 functional game buttons
* [✔] Playback speeds up on each turn
* [✔] Computer picks a different pattern each time the game is played
* [✔] Player only loses after 3 mistakes (instead of on the first mistake)
* [✔] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [✔] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [✔] When the program plays its clue sequence, a "squirrel" pops up in the button when the button is lit. 
- [✔] Make the "Start" and "Stop" Button way more fancier. (Add a little sauce of Cyberpunk and Mystery!) 

## Video Walkthrough (GIF)


If you recorded multiple GIFs for all the implemented features, you can add them here:

### 1. Users loss three times and lost the game  
![](https://github.com/CoderJeffrey/CodePath-Memory-Game/blob/main/Failure_Update.gif)  
### 2. Users Win the Game    
![](https://github.com/CoderJeffrey/CodePath-Memory-Game/blob/main/Success_Demo_Update.gif)  
### 3. Users Win the Game but made two mistakes   
![](https://github.com/CoderJeffrey/CodePath-Memory-Game/blob/main/Success_Demo_After_failing_twice_Update.gif)  
### 4. Users Just click the buttons but didn't start the game    
![](https://github.com/CoderJeffrey/CodePath-Memory-Game/blob/main/Without-Starting-The-Game_Update.gif)  

### 5. Users stop the game without playing
![](https://github.com/CoderJeffrey/CodePath-Memory-Game/blob/main/User_Quit_The_Game_Without_Playing_Update.gif)  

### 6. Users loss because the time runs out
![](https://github.com/CoderJeffrey/CodePath-Memory-Game/blob/main/Time_Run_Out.gif)  

## Reflection Questions
1. *If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.* 
      
StackOverflow (https://stackoverflow.com/questions/4622808/html-changing-colors-of-specific-words-in-a-string-of-text)   
W3School (https://www.w3schools.com/jsref/met_win_setinterval.asp)

2. *What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)* 
     
The greatest challenge happened when I attempted to add a new feature to the program. My plan was to have a picture of a "squirrel" pop out of the button when the "computer-clues" lit up. (To make the game more animated!) However, the squirrel image I embedded was too large that it covered the color of the button.    
    
At first, I tried to zoom out the image of "Squirrel" to make it smaller. However, when I zoomed the image, the position of the "lit" button shifted. I found it incompatible to keep the original alignment of the lit button and to zoom my added image.   
    
I thought the problem lies in the setting for the image, then I changed multiple settings and features of the button (e.g. margin/ padding), however, the problem was not solved. Then I took some time reflecting on this bug: is this a problem with the embedded image or with the buttons? I tested my programs by modifying the settings of the buttons and the images for many times, and I finally discovered that the ultimate culprit was the default layout of the buttons. As a result, I quickly learned different button layout formats from W3Schools and applied the correct layout. Eventually, I fixed my problem.


3. *What questions about web development do you have after completing your submission? (recommended 100 - 300 words)*
       
After finishing my program, a question roused in my mind: “Will web-designing  be as simple as painting on papers someday?” I have used HTML, CSS, and JS before to create a web-application with my teammates that utilized  ML (Machine Learning) image recognition model to recognize the food users took picture at and used related search features to recommend food recipes for users. However, in that process I discovered that the Web Development languages are not flexible and they are always prone to little bugs, like the ones related to my layout of buttons. I believe that the future of Web Development should be like an artistic experience, meaning that the developer should only focused on the overall aesthetics and visual effect of the page.    
    
I was thus excited to learn more about Glitch, a user-friendly platform that not only hints developers on how to construct website components, but also displays a real-time web-page for users to check the output of their code in time. I expect that this creation will fundamentally change my experience in the web development process. In the future, I hope to see more ancillary web development tools that will make the development process easy, flexible and artistic.


4. *If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)*
     
If I got more time, I would make this game more difficult. At the start of the game, users would be able to specify the level of difficulty they prefer (e.g., Easy/Medium/Hard). I would assign different lengths of "patterns" and "Clue Hold Time" to the program based on their choices. For example, if the user selects "easy mode," the length of the "pattern" array will be reduced to three and the reduction of "Clue Hold Time" will be thirty each time in playClueSequencec(), which means that the program is going to be simple and slow. On the other hand, if he/she selects the hard mode, I would increase the pattern length to seven, add two more buttons, and reduce the  "Clue Hold Time" by  one hundred each time, making the game experience more challenging.    
     
Another thing I would change is to add a ticking clock to the program and to place a "Best-Performance-Board" on the top-right corner of the program. The board will serve as a hall of fame, recording the top 5 game clearance time for the Easy/ Medium/ Hard Modes. Users can compare their scores to their previous performances , making the game more exciting and engaging.   
     
Finally, I would add more audio clips from various genres, such as jazz, blues, and hip hop, as background music of the buttons. ( The number of audio clips for each genre corresponds to the total number of buttons.) Then, at the start of the program, the user will be able to select their favorite music genres, and they will play with even greater fun.   



## Interview Recording URL Link

[My 5-minute Interview Recording](https://usc.zoom.us/rec/share/BhLeanMZi59gNzlyF13f4g-LjS_XHvmwdoc9bCp_ASEmeveEqGKSMzZe5raHxi0.0pbPz_jMh1NvmsMR?startTime=1648542878000)


## License

    Copyright [Jeffrey Liu]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
