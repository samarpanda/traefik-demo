## Traefik demo
> Modern HTTP Reverse proxy and load balacning that makes deploying microservices easy.

## Features 

1. Traefik used as reverse proxy
1. Configure microservices with automatic service discovery
1. Automatic loadbalancing of each service with multiple containers 

## Prerequisites

Docker & GIT needs to be configured

## Quick commands 

1. `docker-compose up -d` - Will start all application together
1. `docker-compose up -d --build` - Rebuild if you have file changes
1. `docker-compose up -d proxy`
1. `docker-compose up -d pino`
1. `docker-compose up -d mino`
1. `docker-compose up -d whoami`
1. `docker-compose up -d --scale whoami=2` - Automatic load-balancing by traefik for two containers for the same service.

## Testing Service 

1. Pino service - `curl -H Host:pino.docker.localhost http://127.0.0.1:3000`
1. Mino service - `curl -H Host:mino.docker.localhost http://127.0.0.1:3000`
1. Inter service communication - `curl -H Host:pino.docker.localhost http://127.0.0.1:3000/mino`

## Request to different services

1. Req to pino serice - `curl -H Host:pino.docker.localhost http://127.0.0.1:3000`
1. Req to whoami service - `curl -H Host:whoami.docker.localhost http://127.0.0.1:3000`

## Internal communication within services

1. Use service name and internal port.

## Traefik internal data links 

1. Service discovery on traefik routes & services - [JSON data link](http://localhost:3001/api/rawdata)
1. [Traefik dashboard](http://localhost:3001/dashboard/#/)
1. Load balancing and reverse proxy with [traefik](https://brainhub.eu/blog/reverse-proxy-traefik/)

## References 

1. [Traefik & containers](https://blog.codecentric.de/en/2017/09/traefik-modern-reverse-proxy/)
1. [Awesome Traefik](https://github.com/containous/traefik/wiki/Awesome-Traefik)

## Communication between microservices

1. [stackoverflow](https://stackoverflow.com/questions/54763936/communication-between-microservices-with-docker-compose-and-traefik)

1. [Containous builds a service mesh on its traefik proxy](https://thenewstack.io/containous-builds-a-service-mesh-on-its-traefik-proxy/)

1. [Simpler service mesh](https://github.com/containous/maesh)

## Docker compose docs

1. [docker-compose 3](https://docs.docker.com/compose/compose-file/)

1. [devhints docker-compose cheatsheet](https://devhints.io/docker-compose)

## Docker

1. [docker-cheat-sheet](https://www.docker.com/sites/default/files/d8/2019-09/docker-cheat-sheet.pdf)

1. `docker network prune` - This will remove all networks not used by at least one container.

## Others 

1. [traefik digitalocean setup](https://www.digitalocean.com/community/tutorials/how-to-use-traefik-as-a-reverse-proxy-for-docker-containers-on-ubuntu-16-04)

1. [Consul & traefik catalogue example](https://m.mattmclaugh.com/traefik-and-consul-catalog-example-2c33fc1480c0)

1. [Using LXD and Ansible to simulate infrastructure](https://dev.to/livioribeiro/using-lxd-and-ansible-to-simulate-infrastructure-2g8l#step-0-planning)