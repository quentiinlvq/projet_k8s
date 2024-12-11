CREATE DATABASE IF NOT EXISTS projet_k8s;
USE projet_k8s;

-- Import du dump SQL
SOURCE /docker-entrypoint-initdb.d/dump.sql;
