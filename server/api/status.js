// Serverless function for requesting data from the official website

const request = require("request");

module.exports = (req, res) => {
  request(
    "https://www.githubstatus.com/",
    { json: true },
    (error, response, body) => {
      const components = body.components;
      const description = body.status.description;
      res.setHeader("access-control-allow-origin", "*");
      res.setHeader("access-control-allow-methods", "GET,OPTIONS");
      res.json({
        description,
        components,
      });
    }
  );
};
