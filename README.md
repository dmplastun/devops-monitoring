# DevOps Monitoring Project
Status of Last Deployment
[![Deploy_Devops_Monitoring](https://github.com/dmplastun/devops-monitoring/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/dmplastun/devops-monitoring/actions/workflows/deploy.yml)

## Features
- 🐳 Nginx web server in Docker
- 📊 Prometheus for metrics collection
- 📈 Grafana for visualization
- 🔄 Automated deployment

# DevOps Monitoring Stack (Docker + Nginx + Prometheus + Grafana)

## 📌 Overview

This project, **devops-monitoring**, sets up a **containerized monitoring stack** using Docker, Nginx, Prometheus, and Grafana.
All containers are deployed in a **single Docker network**, ensuring seamless communication between services.
Additionally, an **Nginx-powered portfolio website** is included in the setup, serving static content.
Grafana has been configured with a **predefined Nginx monitoring dashboard** (`NGINX-DASHBOARD.JSON`).

## 🚀 Technologies Used

- **Docker & Docker Compose** – Containerization and orchestration
- **Nginx** – Reverse proxy and portfolio hosting
- **Prometheus** – Metric collection and monitoring
- **Grafana** – Data visualization

## 🏗 Project Structure

```plaintext
devops-monitoring/
│── prometheus/             # Prometheus monitoring setup
│   ├── config/             # Prometheus configuration directory
│   │   ├── prometheus.yml  # Prometheus scrape targets config
│── nginx/                  # Nginx reverse proxy and portfolio site
│   ├── config/             # Nginx configuration directory
│   │   ├── nginx.conf      # Nginx configuration file
│   ├── html/               # Static portfolio website content
│── grafana/                # Grafana visualization setup
│── docker-compose.yml      # Service orchestration file
│── NGINX-DASHBOARD.JSON    # Preconfigured Nginx monitoring dashboard  
│── README.md               # Documentation file
```

## 🛠 Implementation Steps
### 1. Environment Setup

- Installed Docker and Docker Compose on a local machine.
- Created a bridge network (monitor-net) for seamless communication between containers.
- Defined persistent Docker volumes for Prometheus and Grafana data storage.

### 2. Configuring Nginx

- Set up Nginx as a reverse proxy using the nginx.conf file.
- Hosted a static portfolio website inside the html/ directory.
- Configured Prometheus Nginx Exporter for real-time metrics collection.

### 3. Deploying Prometheus for Metrics Collection

- Defined prometheus.yml configuration to scrape metrics from:
    - Nginx Exporter (http://nginx/status)
    - Other containerized services
- Verified Prometheus metric collection via web UI.

### 4. Setting Up Grafana for Visualization

- Connected Grafana to Prometheus as a data source.
- Imported a preconfigured Nginx monitoring dashboard (NGINX-DASHBOARD.JSON).
- Created alert rules to notify on performance anomalies.

### 5. Optimization and Testing

- Simulated system load to analyze dashboard performance.
- Optimized Prometheus scraping intervals for efficient metric collection.
- Documented findings for further scaling possibilities.

## 🔥 How to Run the Project

### 1. Clone the repository:
```bash
git clone <repository_link>
cd devops-monitoring
```

### 2. Start services using Docker Compose:
```bash
docker-compose up -d
```
### 3. Access dashboards and portfolio site:
- Grafana: http://localhost:3000
- Prometheus: http://localhost:9090
- Portfolio website (via Nginx): http://localhost:8081
