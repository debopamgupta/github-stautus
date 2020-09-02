# Github Status

This is a small web application which scrapes the github status website at https://status.github.com using `request` npm package which actually returns the data on the webpage as a json response.

The **client** and the **server** folder are separate here.

#### Client

For the client, plain HTML, CSS ( [Milligram CSS](https://milligram.io) ), JavaScript

#### Server

Well the server is more like _serverless_, but it may be modified to be used with [express](https://expressjs.com) or similar.

In the server, I am using [Vercel Serverless functions](https://vercel.com/docs/serverless-functions/introduction) and that;s probably why one might find it confusing as to what is happening in the server.
