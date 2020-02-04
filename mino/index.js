// more-or-less the example code from the hapi-pino repo
const hapi = require("@hapi/hapi");


async function start() {
  const server = hapi.server({
    host: "0.0.0.0",
    port: process.env.PORT || 5000
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
    handler(){
      return { mino: true };
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