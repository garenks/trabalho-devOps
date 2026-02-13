# Trabalho - Cloud DevOps (Parte prática)

## Rodar com Docker Compose
```bash
docker compose up --build
```

Links:
- http://localhost:3000 (pedidos)
- http://localhost:3001 (pagamentos)
- http://localhost:3002 (estoque)

## Kubernetes (Docker Desktop)
Ative Kubernetes no Docker Desktop e rode:

```bash
kubectl config use-context docker-desktop
kubectl get nodes
kubectl apply -f k8s/
kubectl get pods
kubectl get svc
kubectl get hpa
```

## GitHub Actions
Workflow em `.github/workflows/ci.yml` (build com docker compose).

## Terraform
Arquivos em `infra/terraform/`.

```bash
terraform init
terraform validate
terraform plan
```
