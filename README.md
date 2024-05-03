# Job Management

- Asp.Net Core (.NET 8.0)
- React 18
- TypeScript
- Postgres
- Entity Framework Core

### Frontend Docker image build

```
docker build --build-arg NODE_ENV=production --build-arg REACT_APP_BASE_URL=http://localhost:30003/api --build-arg REACT_APP_VERSION=1.0.0 -t umesh2645/job_mvp_frontend .
```

### Backend Docker image build

```
docker build --build-arg ConnectionStrings__pg="Host=myhost;Port=5432;Database=mydb;Username=myuser;Password=mypassword;" -t umesh2645/job_mvp_backend .
```

## Docker compose commands

`docker compose up -d --build`

## K8s commands

kubectl delete --all all
kubectl create ns job-mvp-ns
kubectl config set-context --current --namespace=job-mvp-ns

kubectl create secret generic postgres-credentials --from-literal=username=myuser --from-literal=password=mypassword
kubectl get secrets
kubectl get secret postgres-credentials -o jsonpath='{.data}'

kubectl create configmap postgres-init-script --from-file=init.sql
kubectl apply -f 1....
kubectl get pv
kubectl get pvc

kubectl describe svc job-mvp-backend-svc
-- check clusterip of postgres which is needed to connect by backend on resolving
kubectl get svc job-mvp-backend-svc -n job-mvp-ns

kubectl scale deployment job-mvp-backend --replicas=0

--
