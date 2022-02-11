DROP DATABASE IF EXISTS m2l ;
CREATE DATABASE m2l;
use m2l;
CREATE TABLE coach(
   id_coach INT AUTO_INCREMENT NOT NULL,
   PRIMARY KEY(id_coach)
);

CREATE TABLE statut_inscription(
   id_statut_inscription INT AUTO_INCREMENT NOT NULL,
   nom VARCHAR(255),
   PRIMARY KEY(id_statut_inscription)
);

CREATE TABLE commentaire(
   id_commentaire INT AUTO_INCREMENT NOT NULL,
   commentaire VARCHAR(255),
   PRIMARY KEY(id_commentaire)
);

CREATE TABLE candidat(
   id_candidat INT AUTO_INCREMENT NOT NULL,
   id_coach INT NOT NULL,
   PRIMARY KEY(id_candidat),
   FOREIGN KEY(id_coach) REFERENCES coach(id_coach)
);

CREATE TABLE seance_test(
   id_seance_test INT AUTO_INCREMENT NOT NULL,
   date_seance DATE NOT NULL,
   id_coach INT NOT NULL,
   PRIMARY KEY(id_seance_test),
   FOREIGN KEY(id_coach) REFERENCES coach(id_coach)
);

CREATE TABLE utilisateur(
   id_utilisateur INT AUTO_INCREMENT NOT NULL,
   nom VARCHAR(255) NOT NULL,
   prenom VARCHAR(255) NOT NULL,
   ddn DATE NOT NULL,
   sexe VARCHAR(1) NOT NULL,
   adresse VARCHAR(255) NOT NULL,
   cp INT NOT NULL,
   ville VARCHAR(255),
   pays VARCHAR(255),
   mobile VARCHAR(15) NOT NULL,
   email VARCHAR(255) NOT NULL,
   psswd VARCHAR(255) NOT NULL,
   PRIMARY KEY(id_utilisateur)
);

CREATE TABLE inscription(
   id_commentaire INT AUTO_INCREMENT NOT NULL,
   id_utilisateur INT NOT NULL,
   id_seance_test INT NOT NULL,
   id_statut_inscription INT NOT NULL,
   FOREIGN KEY(id_commentaire) REFERENCES commentaire(id_commentaire),
   FOREIGN KEY(id_utilisateur) REFERENCES utilisateur(id_utilisateur),
   FOREIGN KEY(id_seance_test) REFERENCES seance_test(id_seance_test),
   FOREIGN KEY(id_statut_inscription) REFERENCES statut_inscription(id_statut_inscription)
);


