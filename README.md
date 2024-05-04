# Job Management

- Asp.Net Core (.NET 8.0)
- React 18
- TypeScript
- Postgres
- Entity Framework Core

### Backend Docker image build

```
docker build --build-arg ConnectionStrings__pg="Host=job-mvp-postgres-svc.job-mvp-ns.svc.cluster.local;Port=5432;Database=mydb;Username=myuser;Password=mypassword;" -t umesh2645/job_mvp_backend .
```

### Frontend Docker image build

```
docker build --build-arg NODE_ENV=production --build-arg REACT_APP_BASE_URL=http://localhost:30003/api --build-arg REACT_APP_VERSION=1.0.0 -t umesh2645/job_mvp_frontend .
```

## Docker compose commands

```
docker compose up -d --build
```

## Final run all

```
kubectl apply -f 1-postgres-volumes.yaml
kubectl apply -f 2-postgres-deployment-svc.yaml
kubectl apply -f 3-backend.deployment-svc.yaml
kubectl apply -f 4-frontend.deployment-svc.yaml
```

### Other K8s debug commands

```
kubectl delete all --all --all-namespaces
kubectl create ns job-mvp-ns
kubectl config set-context --current --namespace=job-mvp-ns

kubectl create secret generic postgres-credentials --from-literal=username=myuser --from-literal=password=mypassword
kubectl create configmap postgres-init-script --from-file=init.sql

kubectl get secrets
kubectl get secret postgres-credentials -o jsonpath='{.data}'


kubectl apply -f 1....
kubectl get pv
kubectl get pvc

kubectl describe svc job-mvp-backend-svc
-- check clusterip of postgres which is needed to connect by backend on resolving
kubectl get svc job-mvp-backend-svc -n job-mvp-ns

kubectl scale deployment job-mvp-backend --replicas=0

kubectl delete all --all --all-namespaces
docker system prune



```
