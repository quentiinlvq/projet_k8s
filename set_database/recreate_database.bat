@echo off
chcp 65001
cd /d %~dp0
setlocal enabledelayedexpansion

set MYSQL_USER=your_user
set MYSQL_PASSWORD=your_password
set MYSQL_HOST=localhost
set DB_NAME=projet_k8s
set DUMP_FILE=".\dump_database.sql"

echo %DATE%
echo %TIME%

echo Suppression de la base de données %DB_NAME%...
call mysql -u %MYSQL_USER% -p%MYSQL_PASSWORD% -h %MYSQL_HOST% --execute "DROP DATABASE IF EXISTS %DB_NAME%;"

echo Création de la base de données %DB_NAME%...
call mysql -u %MYSQL_USER% -p%MYSQL_PASSWORD% -h %MYSQL_HOST% --execute "CREATE DATABASE %DB_NAME%;"

echo Chargement du dump dans la base de données %DB_NAME%...
call mysql -u %MYSQL_USER% -p%MYSQL_PASSWORD% -h %MYSQL_HOST% %DB_NAME% < %DUMP_FILE%

echo Base de données %DB_NAME% recréée et données insérées avec succès à partir de %DUMP_FILE%
echo %DATE%
echo %TIME%

pause
