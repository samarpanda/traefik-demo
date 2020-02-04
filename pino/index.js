// more-or-less the example code from the hapi-pino repo
const hapi = require("@hapi/hapi");
const axios = require('axios')
const MINO_URL = process.env.MINO_API_SERVICE || "http://localhost:5000";

async function start() {
  const server = hapi.server({
    host: "0.0.0.0",
    port: process.env.PORT || 4000
  });

  server.route({
    method: "GET",
    path: "/",
    handler() {
      return { success: true};
    }
  });

  server.route({
    method: "GET",
    path: "/mino",
    handler: (req, h) => {
      return axios.get(MINO_URL)
      .then((res) => {
        const response = h.response(res.data);
        response.type('text/plain');
        return response;
      })
    }
  });

  await server.register({
    plugin: require("hapi-pino"),
    options: {
      prettyPrint: true
    }
  });

  await server.start();

  return server;
}

start().catch(err => {
  console.log(err);
  process.exit(1);
});