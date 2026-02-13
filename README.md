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
|------------|-------|
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

