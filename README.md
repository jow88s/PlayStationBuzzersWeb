# PlayStationBuzzersWeb
The playstation buzzers are used for determine the fastest one that pushed on the buzzer and displayed in a webapplications

# Requirements
[Node.js](https://www.google.com/search?q=node+js&oq=node+js&aqs=chrome..69i57j69i60l2j0l3.1470j0j7&sourceid=chrome&ie=UTF-8)

- The [playstation buzzers](https://en.wikipedia.org/wiki/Buzz!) [picture one buzz controller](https://en.wikipedia.org/wiki/File:Buzz_Buzzer.jpg) are used for answering the question. The fastest player that pushes the big red button is allowed to answer the question.
- The webapplication will show the 4 groups and there score and the timeinterval in milliseconds that the other groups will have when pushed on the big red button. The timeinterval is the time that the 2nd and 3th and 4th are later then the first one have pushed the big red button.
- There are buttons for maniplating the score, increment and decrement and to reset the hightlighting of the fastest one that pushes the big red button.
- Node js is used for reading the wired-usb playstation buzzers and then communication via websockets for updating the webapplication

Many thanks to the creators that made this [project](https://www.hakantuncer.com/2016/09/07/creating-an-online-quiz-game-using-node-dot-js) for reading and parsing the bytestream that the buzzers generate !


## Usage

- clone the repository
- run the command 'npm install'
- you can start the 'backend' and 'webserver' via the command 'npm start'
- if you get an **error** about 'index.js:59 device.on("data", function(data) {' then you have not connected the playstation buzzers via usb

#### License MIT

#### Author : jow88s@gmail.com
