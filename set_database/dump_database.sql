-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: projet_k8s
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article_tags`
--

DROP TABLE IF EXISTS `article_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article_tags` (
  `id` int NOT NULL AUTO_INCREMENT,
  `article_id` int NOT NULL,
  `tag_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `article_id` (`article_id`),
  KEY `tag_id` (`tag_id`),
  CONSTRAINT `article_tags_ibfk_1` FOREIGN KEY (`article_id`) REFERENCES `articles` (`article_id`),
  CONSTRAINT `article_tags_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`tag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_tags`
--

LOCK TABLES `article_tags` WRITE;
/*!40000 ALTER TABLE `article_tags` DISABLE KEYS */;
INSERT INTO `article_tags` VALUES (1,1,1),(2,1,3),(3,1,6),(5,2,6),(6,2,7),(7,3,4),(8,3,1),(10,4,10),(11,4,11),(12,5,1),(13,5,8),(14,6,4),(15,6,1),(16,7,6),(17,7,7),(18,8,1),(19,8,7);
/*!40000 ALTER TABLE `article_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `article_id` int NOT NULL AUTO_INCREMENT,
  `source_id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text,
  `publish_date` datetime NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`article_id`),
  KEY `source_id` (`source_id`),
  CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`source_id`) REFERENCES `data_sources` (`source_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,1,'Cybersecurity Threats in 2024','This article discusses the major cybersecurity threats in 2024.','2024-01-10 00:00:00','https://example.com/cybersecurity-2024','2024-12-01 14:40:56','2024-12-01 14:40:56'),(2,2,'Finance Trends for 2024','A look at the financial trends and investment opportunities in 2024.','2024-01-15 00:00:00','https://example.com/finance-trends-2024','2024-12-01 14:40:56','2024-12-01 14:40:56'),(3,3,'Malware Attacks: How to Prevent Them','A guide to preventing malware attacks and securing your systems.','2024-02-05 00:00:00','https://example.com/malware-prevention','2024-12-01 14:40:56','2024-12-01 14:40:56'),(4,1,'Understanding Phishing Attacks','An in-depth guide on recognizing phishing emails and how to protect yourself.','2024-03-10 00:00:00','https://example.com/understanding-phishing','2024-12-01 17:10:21','2024-12-01 17:10:21'),(5,2,'Defending Against Insider Threats','This article explores the risks posed by insiders and how organizations can mitigate them.','2024-03-15 00:00:00','https://example.com/defending-insider-threats','2024-12-01 17:10:21','2024-12-01 17:10:21'),(6,3,'Top Malware Types in 2024','A comprehensive overview of the most dangerous malware families in the year 2024.','2024-04-05 00:00:00','https://example.com/top-malware-2024','2024-12-01 17:10:21','2024-12-01 17:10:21'),(7,1,'Network Security Best Practices','Key strategies for securing your network against various cyber threats.','2024-04-10 00:00:00','https://example.com/network-security-best-practices','2024-12-01 17:10:21','2024-12-01 17:10:21'),(8,2,'The Future of Cybersecurity in 2025','Exploring the upcoming trends and technologies that will shape cybersecurity in the next decade.','2024-05-01 00:00:00','https://example.com/future-of-cybersecurity-2025','2024-12-01 17:10:21','2024-12-01 17:10:21');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articletag`
--

DROP TABLE IF EXISTS `articletag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articletag` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `article_id` int NOT NULL,
  `tag_id` int NOT NULL,
  PRIMARY KEY (`article_id`,`tag_id`),
  KEY `tag_id` (`tag_id`),
  CONSTRAINT `articletag_ibfk_1` FOREIGN KEY (`article_id`) REFERENCES `articles` (`article_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `articletag_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`tag_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articletag`
--

LOCK TABLES `articletag` WRITE;
/*!40000 ALTER TABLE `articletag` DISABLE KEYS */;
/*!40000 ALTER TABLE `articletag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data_sources`
--

DROP TABLE IF EXISTS `data_sources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `data_sources` (
  `source_id` int NOT NULL AUTO_INCREMENT,
  `source_type` enum('rss','scraping','api') NOT NULL,
  `source_name` varchar(255) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `description` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`source_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_sources`
--

LOCK TABLES `data_sources` WRITE;
/*!40000 ALTER TABLE `data_sources` DISABLE KEYS */;
INSERT INTO `data_sources` VALUES (1,'rss','Cybersecurity News','https://cybernews.com/rss','Latest updates and news on cybersecurity.','2024-11-30 17:27:43','2024-11-30 17:27:43'),(2,'scraping','ThreatPost','https://threatpost.com/','Breaking security news, analysis, and opinions.','2024-11-30 17:27:43','2024-11-30 17:27:43'),(3,'api','Dark Reading API',NULL,'API for accessing in-depth cybersecurity insights.','2024-11-30 17:27:43','2024-11-30 17:27:43'),(4,'rss','Security Weekly','https://securityweekly.com/feed/','Podcasts and blogs on cybersecurity topics.','2024-11-30 17:27:43','2024-11-30 17:27:43'),(5,'scraping','Krebs on Security','https://krebsonsecurity.com/','Security blog by Brian Krebs covering cyber threats.','2024-11-30 17:27:43','2024-11-30 17:27:43');
/*!40000 ALTER TABLE `data_sources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `followed_topics`
--

DROP TABLE IF EXISTS `followed_topics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `followed_topics` (
  `follow_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `topic_name` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`follow_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `followed_topics_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `followed_topics`
--

LOCK TABLES `followed_topics` WRITE;
/*!40000 ALTER TABLE `followed_topics` DISABLE KEYS */;
INSERT INTO `followed_topics` VALUES (1,1,'cybersecurity','2024-11-30 17:32:57','2024-11-30 17:32:57'),(2,1,'phishing','2024-11-30 17:32:57','2024-11-30 17:32:57'),(3,2,'malware','2024-11-30 17:32:57','2024-11-30 17:32:57'),(4,2,'network security','2024-11-30 17:32:57','2024-11-30 17:32:57'),(5,3,'insider threats','2024-11-30 17:32:57','2024-11-30 17:32:57'),(6,3,'zero trust','2024-11-30 17:32:57','2024-11-30 17:32:57'),(7,4,'financial sector','2024-11-30 17:32:57','2024-11-30 17:32:57'),(8,4,'cyberattack','2024-11-30 17:32:57','2024-11-30 17:32:57'),(9,5,'holidays','2024-11-30 17:32:57','2024-11-30 17:32:57'),(10,5,'scams','2024-11-30 17:32:57','2024-11-30 17:32:57');
/*!40000 ALTER TABLE `followed_topics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `tag_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`tag_id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (3,'attack'),(7,'best practices'),(1,'cybersecurity'),(8,'insider threats'),(4,'malware'),(6,'network security'),(10,'phishing'),(11,'scams');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `role` enum('user','admin') DEFAULT 'user',
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin@admin.fr','admin','admin','2024-11-30 17:24:23'),(2,'quentin','quentin@quentin.fr','quentin','user','2024-11-30 17:24:23'),(3,'robin','robin@robin.fr','robin','user','2024-11-30 17:24:23'),(4,'lucas','lucas@lucas.fr','lucas','user','2024-11-30 17:24:23'),(5,'eliott','eliott@eliott.fr','eliott','user','2024-11-30 17:24:23');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-01 17:51:29
