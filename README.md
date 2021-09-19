# Github Status

This is a small web application which scrapes the github status website at https://status.github.com using `request` npm package which actually returns the data on the webpage as a json response.

The **client** and the **server** folder are separate here.

### Client

For the client, plain HTML, CSS ( [Milligram CSS](https://milligram.io) ), JavaScript

#### Development -

You can use any static file server for the client side files.

`live-server` or `http-server` works fine.

Use `http-server` or `live-server` command to start the server in the `client` directory.

If you do not have them installed, install with `npm`

```sh
$ npm install -g live-server
```

or

```sh
$ npm install -g http-server
```

### Server

Well the server is more like _serverless_, but it may be modified to be used with [express](https://expressjs.com) or similar.

In the server, I am using [Vercel Serverless functions](https://vercel.com/docs/serverless-functions/introduction) and that;s probably why one might find it confusing as to what is happening in the server.

#### Development -

This is hosted on [Vercel](https://vercel.com/) hence we use their cli to spin up a development server locally.

You can run `npm start` in the `server` folder.
You will need Vercel CLI installed on your machine first, install that with,

```sh
$ npm install -g vercel
```

### Idea

https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/GitHub-Status-App.md

Here was where i got the idea from!!
