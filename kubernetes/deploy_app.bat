@echo off
chcp 65001
cls
echo ================================================
echo 🚀 Deploying Kubernetes resources...
echo ================================================
echo.

:: Étape 1 : ConfigMaps
echo [1/5] 🔧 Deploying ConfigMaps...
kubectl apply -f configmaps/backend-configmap.yaml
if %ERRORLEVEL%==0 (
    echo ✅ ConfigMaps deployed successfully!
) else (
    echo ❌ Error deploying ConfigMaps!
)
echo ----------------------------------------------

:: Étape 2 : Secrets
echo [2/5] 🔑 Deploying Secrets...
kubectl apply -f secrets/mysql-secret.yaml
if %ERRORLEVEL%==0 (
    echo ✅ Secrets deployed successfully!
) else (
    echo ❌ Error deploying Secrets!
)
echo ----------------------------------------------

:: Étape 3 : Storage
echo [3/5] 📦 Deploying Storage...
kubectl apply -f storage/mysql-persistentvolume.yaml
kubectl apply -f storage/mysql-persistentvolumeclaim.yaml
if %ERRORLEVEL%==0 (
    echo ✅ Storage deployed successfully!
) else (
    echo ❌ Error deploying Storage!
)
echo ----------------------------------------------

:: Étape 4 : Services
echo [4/5] 🌐 Deploying Services...
kubectl apply -f services/mysql-service.yaml
kubectl apply -f services/backend-service.yaml
kubectl apply -f services/frontend-service.yaml
if %ERRORLEVEL%==0 (
    echo ✅ Services deployed successfully!
) else (
    echo ❌ Error deploying Services!
)
echo ----------------------------------------------

:: Étape 5 : Deployments
echo [5/5] 🚀 Deploying Deployments...
kubectl apply -f deployments/mysql-deployment.yaml
kubectl apply -f deployments/backend-deployment.yaml
kubectl apply -f deployments/frontend-deployment.yaml
if %ERRORLEVEL%==0 (
    echo ✅ Deployments deployed successfully!
) else (
    echo ❌ Error deploying Deployments!
)
echo ----------------------------------------------

echo ================================================
echo 🎉 Deployment completed successfully!
echo ================================================

pause
