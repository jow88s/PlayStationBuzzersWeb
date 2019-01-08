# PlayStationBuzzersWeb
The playstation buzzers are used for determine the fastest one that pushed on the buzzer and displayed in a webapplication

- The [playstation buzzers](https://en.wikipedia.org/wiki/File:Buzz_Buzzer.jpg) are used for answering the question. The fastest player that pushes the big red button is allowed to answer the question.
- The webapplication will show the 4 groups and there score and the timeinterval in milliseconds that the other groups will have when pushed on the big red button. The timeinterval is the time that the 2nd and 3th and 4th are later then the first one have pushed the big red button.
- There are buttons for maniplating the score, increment and decrement and to reset the hightlighting of the fastest one that pushes the big red button.
- Node js is used for reading the wired-usb playstation buzzers and then communication via websockets for updating the webapplication

Many thanks to the creators that made this [project](https://www.hakantuncer.com/2016/09/07/creating-an-online-quiz-game-using-node-dot-js) for reading and parsing the bytestream that the buzzers generate !


## Usage

- clone the repository
- run the command 'nom install'
- you can start the 'backend' and 'webserver' via the command 'npm start'
