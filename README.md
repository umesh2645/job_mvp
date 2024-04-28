# Job Management

- Asp.Net Core (.NET 8.0)
- React 18
- TypeScript
- Postgres
- Entity Framework Core

## Docker compose commands

`docker compose up -d`

kubectl delete --all all

kubectl config set-context --current --namespace=job-mvp-ns

kubectl create secret generic postgres-credentials --from-literal=username=myuser --from-literal=password=mypassword
kubectl get secrets
kubectl get secret postgres-credentials -o jsonpath='{.data}'

kubectl create configmap postgres-init-script --from-file=init.sql

kubectl apply -f .\postgres-volumes.yaml
kubectl get pv
kubectl get pvc

kubectl describe svc job-mvp-backend-svc

kubectl scale deployment job-mvp-backend --replicas=0

--
