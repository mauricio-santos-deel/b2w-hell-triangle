# Hell Triangle
<h2>Goal</h2>
<p>This is a job application challenge.</p>
<p>This project will build an Express.js HTTP Server that responds an HTTP POST request resolving the hell triangle challenge.</p>

<h2>Getting started</h2>
<p>In order to build this project from the source code, you will need Node.js (version 6.11.1 or higher) installed.</p>

<h2>Running the app</h2>
<p>After cloning this git repository, in your terminal, go to the project path and then, run the command bellow. This will install all node modules necessary.</p>
<code>npm i</code>

<h2>Starting the app</h2>
<p>In your terminal run the command bellow to start the Express Server, and serve the service that will calculate the result for Hell Triangle Challenge</p>
<code>npm run start</code>

<h2>Consuming the hell triangle service</h2>
<p>You can use any Http Client to consume the service after starting the server. I used ARC google chrome extension.</p>
<p>To consume the service that will calculate the hell triangle challenge, you must send an HTTP Post Request to the URL http://localhost:3000/api/hell/result.</p>
<p>This request must have Content-Type: application/json header.</p>
<p>In the request payload you must send a json with the format bellow:</p>
<code>
{
  "triangleArray": [[6],[3,5],[9,7,1],[4,6,8,4]]
}    
</code>
<p>The result expected is a json output, in the format bellow.</p>
<code>
{
    "result": {
        "greaterCombos": [
          [0, 1, 1, 2]
        ],
        "greaterResult": 26
    }
}
</code>
<p>The greaterCombos array will hold the path that represents the greater sum. For example, in the request above, this is the explanation:</p>
<li>0 points to 6 position inside the first array inside triangleArray.</li>
<li>1 points to 5 position inside the second array inside triangleArray.</li>
<li>1 points to 7 position inside the third array inside triangleArray.</li>
<li>2 points to 8 position inside the fourth array inside triangleArray.</li>

<h2>The solution</h2>
<p></p>

<h2>Testing the app</h2>
<p>The unit and integration tests was developed using mocha lib. To run the tests, on your terminal, run the command bellow.</p>
<p>Before running the command make sure that the app is not running.</p>
<code>npm run test</code>