# Trabalho - Cloud DevOps

# Cloud DevOps — Orchestrating Containers and Microservices (Loja Veloz)

Este repositório contém a parte prática do trabalho de **Cloud DevOps**, com foco em **microsserviços**, **containerização**, **orquestração**, **CI (GitHub Actions)** e **Infraestrutura como Código (Terraform)**.

O projeto simula uma aplicação chamada **Loja Veloz**, dividida em três microsserviços:

- **Pedidos**
- **Pagamentos**
- **Estoque**

---

## Objetivo

O objetivo do projeto é aplicar os conceitos de DevOps e Cloud, demonstrando:

- Arquitetura baseada em **microsserviços**
- **Dockerfiles** para cada serviço
- Orquestração local com **Docker Compose**
- Orquestração em cluster com **Kubernetes**
- Pipeline de CI com **GitHub Actions**
- Estrutura de IaC com **Terraform**

---

## Arquitetura

Cada microsserviço é independente e expõe uma API simples HTTP retornando JSON com status.

Portas utilizadas:

| Serviço     | Porta |
|-------------|-------|
| pedidos     | 3000  |
| pagamentos  | 3001  |
| estoque     | 3002  |

---

## Estrutura do Projeto

```txt
trabalho-devOps/
│
├─ services/
│   ├─ pedidos/
│   │   ├─ Dockerfile
│   │   └─ index.js
│   ├─ pagamentos/
│   │   ├─ Dockerfile
│   │   └─ index.js
│   └─ estoque/
│       ├─ Dockerfile
│       └─ index.js
│
├─ k8s/
│   ├─ pedidos-deployment.yaml
│   ├─ pedidos-service.yaml
│   ├─ pagamentos-deployment.yaml
│   ├─ pagamentos-service.yaml
│   ├─ estoque-deployment.yaml
│   ├─ estoque-service.yaml
│   ├─ configmap.yaml
│   ├─ secret.yaml
│   └─ hpa.yaml
│
├─ infra/
│   └─ terraform/
│       ├─ main.tf
│       ├─ outputs.tf
│       └─ variables.tf
│
├─ .github/
│   └─ workflows/
│       └─ ci.yml
│
└─ docker-compose.yml
```

---

## ✅ Requisitos

Antes de rodar o projeto, é necessário ter instalado:

- Docker Desktop
- Kubernetes habilitado no Docker Desktop
- kubectl
- Terraform
- Git

---

## Execução com Docker Compose (Local)

### 1) Subir os containers

Na raiz do projeto:

```bash
docker compose up -d --build
```

### 2) Verificar containers

```bash
docker ps
```

### 3) Testar os serviços

```bash
curl http://localhost:3000
curl http://localhost:3001
curl http://localhost:3002
```

---

## ☸️ Execução com Kubernetes (Docker Desktop)

### 1) Confirmar cluster ativo

```bash
kubectl config use-context docker-desktop
kubectl get nodes
```

### 2) Aplicar manifests do Kubernetes

Na raiz do projeto:

```bash
kubectl apply -f k8s/
```

### 3) Verificar pods e services

```bash
kubectl get pods
kubectl get svc
```

### Acesso aos serviços no Kubernetes (Port Forward)

#### Pedidos

```bash
kubectl port-forward service/pedidos-service 3000:3000
```

#### Pagamentos

```bash
kubectl port-forward service/pagamentos-service 3001:3001
```

#### Estoque

```bash
kubectl port-forward service/estoque-service 3002:3002
```

---

## 🏗️ Terraform (Infraestrutura como Código)

A estrutura Terraform está localizada em:

```
infra/terraform/
```

Comandos:

```bash
cd infra/terraform
terraform init
terraform validate
```
