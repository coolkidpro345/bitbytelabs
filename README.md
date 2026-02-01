
# BitByteLabs Company Website

This is the official BitByteLabs company website, built with Node.js, Express, and a modern static frontend. It is containerized with Docker and ready for scalable deployment on Kubernetes.

## Features
- Node.js backend (Express)
- Responsive, tech-inspired frontend (HTML, CSS, JS)
- Docker compatible
- Kubernetes manifests for 4 replicas (high availability)
- Cloudflare-style error page if all servers are down

## Getting Started

### Local Development
1. Install dependencies:
	```bash
	npm install
	```
2. Start the server:
	```bash
	npm start
	```
3. Visit [http://localhost:3000](http://localhost:3000)

### Run Tests
```bash
npm test
```

### Docker
Build and run the container:
```bash
docker build -t bitbytelabs .
docker run -p 3000:3000 bitbytelabs
```

### Kubernetes
Deploy with 4 replicas:
```bash
kubectl apply -f k8s.yaml
```

## Simulate All Servers Down
Set the environment variable `ALL_SERVERS_DOWN=1` to show the error page:
```bash
ALL_SERVERS_DOWN=1 npm start
```

---
© 2026 BitByteLabs. All rights reserved.
