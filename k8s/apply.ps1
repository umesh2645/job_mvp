kubectl apply -f 1-postgres-volumes.yaml
kubectl apply -f 2-postgres-deployment-svc.yaml
kubectl apply -f 3-backend.deployment-svc.yaml
kubectl apply -f 4-frontend.deployment-svc.yaml