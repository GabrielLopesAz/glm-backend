-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: glm
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `banco`
--

DROP TABLE IF EXISTS `banco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banco` (
  `IDBANCO` int unsigned NOT NULL AUTO_INCREMENT,
  `CODBANCO` varchar(50) NOT NULL DEFAULT '0',
  `NOMEBANCO` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `SIGLABANCO` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`IDBANCO`),
  KEY `CODBANCO` (`CODBANCO`),
  KEY `NOMEBANCO` (`NOMEBANCO`)
) ENGINE=InnoDB AUTO_INCREMENT=172 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Listagem de bancos';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banco`
--

LOCK TABLES `banco` WRITE;
/*!40000 ALTER TABLE `banco` DISABLE KEYS */;
INSERT INTO `banco` VALUES (1,'0','Banco Bankpar S.A.',NULL),(2,'1','Banco do Brasil S.A.',NULL),(3,'3','Banco da Amazônia S.A.',NULL),(4,'4','Banco do Nordeste do Brasil S.A.',NULL),(5,'12','Banco Standard de Investimentos S.A.',NULL),(6,'14','Natixis Brasil S.A. Banco Múltiplo',NULL),(7,'19','Banco Azteca do Brasil S.A.',NULL),(8,'21','BANESTES S.A. Banco do Estado do Espírito Santo',NULL),(9,'24','Banco de Pernambuco S.A. – BANDEPE',NULL),(10,'25','Banco Alfa S.A.',NULL),(11,'29','Banco Banerj S.A.',NULL),(12,'31','Banco Beg S.A.',NULL),(13,'33','Banco Santander (Brasil) S.A.',NULL),(14,'36','Banco Bradesco BBI S.A.',NULL),(15,'37','Banco do Estado do Pará S.A.',NULL),(16,'39','Banco do Estado do Piauí S.A. – BEP',NULL),(17,'40','Banco Cargill S.A.',NULL),(18,'41','Banco do Estado do Rio Grande do Sul S.A.',NULL),(19,'44','Banco BVA S.A.',NULL),(20,'45','Banco Opportunity S.A.',NULL),(21,'47','Banco do Estado de Sergipe S.A.',NULL),(22,'62','Hipercard Banco Múltiplo S.A.',NULL),(23,'63','Banco Ibi S.A. Banco Múltiplo',NULL),(24,'64','Goldman Sachs do Brasil Banco Múltiplo S.A.',NULL),(25,'65','Banco Bracce S.A.',NULL),(26,'66','Banco Morgan Stanley S.A.',NULL),(27,'69','BPN Brasil Banco Múltiplo S.A.',NULL),(28,'70','BRB – Banco de Brasília S.A.',NULL),(29,'72','Banco Rural Mais S.A.',NULL),(30,'73','BB Banco Popular do Brasil S.A.',NULL),(31,'74','Banco J. Safra S.A.',NULL),(32,'75','Banco CR2 S.A.',NULL),(33,'76','Banco KDB S.A.',NULL),(34,'077-9','Banco Intermedium S.A.',NULL),(35,'78','BES Investimento do Brasil S.A.-Banco de Investimento',NULL),(36,'79','JBS Banco S.A.',NULL),(37,'081-7','Concórdia Banco S.A.',NULL),(38,'082-5','Banco Topázio S.A.',NULL),(39,'083-3','Banco da China Brasil S.A.',NULL),(40,'84','Unicred Norte do Paraná',NULL),(41,'085-x','Cooperativa Central de Crédito Urbano-CECRED',NULL),(42,'086-8','OBOE Crédito Financiamento e Investimento S.A.',NULL),(43,'087-6','Cooperativa Unicred Central Santa Catarina',NULL),(44,'088-4','Banco Randon S.A.',NULL),(45,'089-2','Cooperativa de Crédito Rural da Região de Mogiana',NULL),(46,'090-2','Cooperativa Central de Economia e Crédito Mutuo das Unicreds',NULL),(47,'091-4','Unicred Central do Rio Grande do Sul',NULL),(48,'092-2','Brickell S.A. Crédito, financiamento e Investimento',NULL),(49,'094-2','Banco Petra S.A.',NULL),(50,'96','Banco BM&F de Serviços de Liquidação e Custódia S.A',NULL),(51,'097-3','Cooperativa Central de Crédito Noroeste Brasileiro Ltda.',NULL),(52,'098-1','Credicorol Cooperativa de Crédito Rural',NULL),(53,'099-x','Cooperativa Central de Economia e Credito Mutuo das Unicreds',NULL),(54,'104','Caixa Econômica Federal',NULL),(55,'107','Banco BBM S.A.',NULL),(56,'168','HSBC Finance (Brasil) S.A. – Banco Múltiplo',NULL),(57,'184','Banco Itaú BBA S.A.',NULL),(58,'204','Banco Bradesco Cartões S.A.',NULL),(59,'208','Banco BTG Pactual S.A.',NULL),(60,'212','Banco Matone S.A.',NULL),(61,'213','Banco Arbi S.A.',NULL),(62,'214','Banco Dibens S.A.',NULL),(63,'215','Banco Comercial e de Investimento Sudameris S.A.',NULL),(64,'217','Banco John Deere S.A.',NULL),(65,'218','Banco Bonsucesso S.A.',NULL),(66,'222','Banco Credit Agricole Brasil S.A.',NULL),(67,'224','Banco Fibra S.A.',NULL),(68,'225','Banco Brascan S.A.',NULL),(69,'229','Banco Cruzeiro do Sul S.A.',NULL),(70,'230','Unicard Banco Múltiplo S.A.',NULL),(71,'233','Banco GE Capital S.A.',NULL),(72,'237','Banco Bradesco S.A.',NULL),(73,'241','Banco Clássico S.A.',NULL),(74,'243','Banco Máxima S.A.',NULL),(75,'246','Banco ABC Brasil S.A.',NULL),(76,'248','Banco Boavista Interatlântico S.A.',NULL),(77,'249','Banco Investcred Unibanco S.A.',NULL),(78,'250','Banco Schahin S.A.',NULL),(79,'254','Paraná Banco S.A.',NULL),(80,'263','Banco Cacique S.A.',NULL),(81,'265','Banco Fator S.A.',NULL),(82,'266','Banco Cédula S.A.',NULL),(83,'300','Banco de La Nacion Argentina',NULL),(84,'318','Banco BMG S.A.',NULL),(85,'320','Banco Industrial e Comercial S.A.',NULL),(86,'341','Itaú Unibanco S.A.',NULL),(87,'356','Banco Real S.A.',NULL),(88,'366','Banco Société Générale Brasil S.A.',NULL),(89,'370','Banco WestLB do Brasil S.A.',NULL),(90,'376','Banco J. P. Morgan S.A.',NULL),(91,'389','Banco Mercantil do Brasil S.A.',NULL),(92,'394','Banco Bradesco Financiamentos S.A.',NULL),(93,'399','HSBC Bank Brasil S.A. – Banco Múltiplo',NULL),(94,'409','Unibanco – União de Bancos Brasileiros S.A.',NULL),(95,'412','Banco Capital S.A.',NULL),(96,'422','Banco Safra S.A.',NULL),(97,'453','Banco Rural S.A.',NULL),(98,'456','Banco de Tokyo-Mitsubishi UFJ Brasil S.A.',NULL),(99,'464','Banco Sumitomo Mitsui Brasileiro S.A.',NULL),(100,'473','Banco Caixa Geral – Brasil S.A.',NULL),(101,'477','Citibank N.A.',NULL),(102,'479','Banco ItaúBank S.A',NULL),(103,'487','Deutsche Bank S.A. – Banco Alemão',NULL),(104,'488','JPMorgan Chase Bank',NULL),(105,'492','ING Bank N.V.',NULL),(106,'494','Banco de La Republica Oriental del Uruguay',NULL),(107,'495','Banco de La Provincia de Buenos Aires',NULL),(108,'505','Banco Credit Suisse (Brasil) S.A.',NULL),(109,'600','Banco Luso Brasileiro S.A.',NULL),(110,'604','Banco Industrial do Brasil S.A.',NULL),(111,'610','Banco VR S.A.',NULL),(112,'611','Banco Paulista S.A.',NULL),(113,'612','Banco Guanabara S.A.',NULL),(114,'613','Banco Pecúnia S.A.',NULL),(115,'623','Banco Panamericano S.A.',NULL),(116,'626','Banco Ficsa S.A.',NULL),(117,'630','Banco Intercap S.A.',NULL),(118,'633','Banco Rendimento S.A.',NULL),(119,'634','Banco Triângulo S.A.',NULL),(120,'637','Banco Sofisa S.A.',NULL),(121,'638','Banco Prosper S.A.',NULL),(122,'641','Banco Alvorada S.A.',NULL),(123,'643','Banco Pine S.A.',NULL),(124,'652','Itaú Unibanco Holding S.A.',NULL),(125,'653','Banco Indusval S.A.',NULL),(126,'654','Banco A.J.Renner S.A.',NULL),(127,'655','Banco Votorantim S.A.',NULL),(128,'707','Banco Daycoval S.A.',NULL),(129,'719','Banif-Banco Internacional do Funchal (Brasil)S.A.',NULL),(130,'721','Banco Credibel S.A.',NULL),(131,'724','Banco Porto Seguro S.A.',NULL),(132,'734','Banco Gerdau S.A.',NULL),(133,'735','Banco Pottencial S.A.',NULL),(134,'738','Banco Morada S.A.',NULL),(135,'739','Banco BGN S.A.',NULL),(136,'740','Banco Barclays S.A.',NULL),(137,'741','Banco Ribeirão Preto S.A.',NULL),(138,'743','Banco Semear S.A.',NULL),(139,'744','BankBoston N.A.',NULL),(140,'745','Banco Citibank S.A.',NULL),(141,'746','Banco Modal S.A.',NULL),(142,'747','Banco Rabobank International Brasil S.A.',NULL),(143,'748','Banco Cooperativo Sicredi S.A.',NULL),(144,'749','Banco Simples S.A.',NULL),(145,'751','Dresdner Bank Brasil S.A. – Banco Múltiplo',NULL),(146,'752','Banco BNP Paribas Brasil S.A.',NULL),(147,'753','NBC Bank Brasil S.A. – Banco Múltiplo',NULL),(148,'755','Bank of America Merrill Lynch Banco Múltiplo S.A.',NULL),(149,'756','Banco Cooperativo do Brasil S.A. – BANCOOB',NULL),(150,'757','Banco KEB do Brasil S.A.',NULL),(151,'M10','Banco Moneo S.A.',NULL),(152,'M11','Banco IBM S.A.',NULL),(153,'M20','Banco Toyota do Brasil S.A.',NULL),(154,'M21','Banco Daimlerchrysler S.A.',NULL),(155,'M03','Banco Fiat S.A.',NULL),(156,'M12','Banco Maxinvest S.A.',NULL),(157,'M22','Banco Honda S.A.',NULL),(158,'M13','Banco Tricury S.A.',NULL),(159,'M14','Banco Volkswagen S.A.',NULL),(160,'M23','Banco Volvo (Brasil) S.A.',NULL),(161,'M15','Banco BRJ S.A.',NULL),(162,'M06','Banco de Lage Landen Brasil S.A.',NULL),(163,'M24','Banco PSA Finance Brasil S.A.',NULL),(164,'M07','Banco GMAC S.A.',NULL),(165,'M16','Banco Rodobens S.A.',NULL),(166,'M08','Banco Citicard S.A.',NULL),(167,'M17','Banco Ourinvest S.A.',NULL),(168,'M18','Banco Ford S.A.',NULL),(169,'M09','Banco Itaucred Financiamentos S.A.',NULL),(170,'M19','Banco CNH Capital S.A.',NULL),(171,'M19','Banco CNH Capital S.A.',NULL);
/*!40000 ALTER TABLE `banco` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-10 23:26:18
