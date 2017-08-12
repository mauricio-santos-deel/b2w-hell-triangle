# Hell Triangle
This is a job application challenge. This project will build an Express.js HTTP Server that responds an HTTP POST request resolving the hell triangle challenge.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
In order to build this project from the source code, you will need Node.js (version 6.11.1 or higher) installed.

### Running the app

First of all, let's clone this git repository.
```bash
$ git clone https://github.com/msantos-sw/b2w-hell-triangle.git
```

Now, in your terminal, go to the project path and then, run the command bellow. This will install all node modules necessary.
```bash
$ npm i
```

The app source code is cloned and the dependencies have been installed. Let's start this server! In your terminal run the command bellow.
```bash
$ npm run start
```

## Consuming the hell triangle service
You can use any Http Client to consume the service after starting the server. I used [Advanced REST Client google chrome extension](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo).

To consume the service that will calculate the hell triangle challenge, you must send an HTTP Post Request to the URL http://localhost:3000/api/hell/result. This request must have `Content-Type: application/json header`. And, finally, in the request payload you must send a json with the format bellow:
```
{
  "triangleArray": [[6],[3,5],[9,7,1],[4,6,8,4]]
}    
```

Check in ARC:

![img1](https://user-images.githubusercontent.com/23347207/29242778-6202f038-7f69-11e7-9332-2a6eac87a6e5.png)

The result expected is a json output, in the format bellow.
```
{
    "result": {
        "greaterCombos": [
          [0, 1, 1, 2]
        ],
        "greaterResult": 26
    }
}
```

The greaterCombos array will hold the path that represents the greater sum. For example, in the request above, this is the explanation:

![img2](https://user-images.githubusercontent.com/23347207/29243278-559f38da-7f71-11e7-8639-660e97feed65.png)

  * 0 points to 6 position inside the first array inside triangleArray.
  * 1 points to 5 position inside the second array inside triangleArray.
  * 1 points to 7 position inside the third array inside triangleArray.
  * 2 points to 8 position inside the fourth array inside triangleArray.

### The solution
The hell triangle algorithm will work in 4 steps:
  * Check if the triangle paths are already cached. The paths will be the same for triangles with the same height.
  * If paths are not cached, genetares all possible paths for that triangle. 
  * Use the paths to check which one generates the bigger sum.
  * Return the result.

## Testing the app
The unit and integration tests was developed using mocha anc chai lib. To run the tests, on your terminal, run the command bellow, but, before running the command make sure that the app is not running.
```
npm run test
```
