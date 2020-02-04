## Quick Commands 

1. build the docker `docker build -t my-pino .`
1. Run the container `docker run --init --rm --publish 4000:4000 my-pino`
1. Curl command to verify the response of the service `curl -H Host:pino.docker.localhost http://127.0.0.1:3000`