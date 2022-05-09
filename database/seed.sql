use m2l;
-- insert data in coach table
INSERT INTO coach (id_coach, nom)
VALUES (1, 'Martin matin');
INSERT INTO coach (id_coach, nom)
VALUES (2, 'Speko');
INSERT INTO coach (id_coach, nom)
VALUES (3, 'Jean-Michel');
-- insert data in seance_test table
INSERT INTO seance_test (id_seance_test, date_seance, id_coach)
VALUES (1, '2012-06-23', 1);
INSERT INTO seance_test (id_seance_test, date_seance, id_coach)
VALUES (2, '2014-05-22', 2);
INSERT INTO seance_test (id_seance_test, date_seance, id_coach)
VALUES (3, '2022-06-23', 3);
INSERT INTO seance_test (id_seance_test, date_seance, id_coach)
VALUES (4, '2012-06-21', 2);
INSERT INTO seance_test (id_seance_test, date_seance, id_coach)
VALUES (5, '2012-12-23', 2);
INSERT INTO seance_test (id_seance_test, date_seance, id_coach)
VALUES (6, '2012-03-23', 2);

-- insert data in statut_inscription table
INSERT INTO statut_inscription (id_statut_inscription, nom)
VALUES (1, 'En cours');
INSERT INTO statut_inscription (id_statut_inscription, nom)
VALUES (2, 'Valider');
INSERT INTO statut_inscription (id_statut_inscription, nom)
VALUES (3, 'Refuser');


--insert data in commentaire table
INSERT INTO commentaire (id_commentaire, commentaire)
VALUES (1, 'Admis');

-- insert data in utilisateur table
INSERT INTO utilisateur (id_utilisateur, nom, prenom, ddn, sexe, adresse, cp, ville, pays, mobile, email, psswd)
VALUES (1, "Lapert" , "Joseph", "2000-02-12", "m", "08 rue de la pierre", "95200", "Sarcelles", "France", "0612345678", "lapert@example.com", SHA2("jojo1", 256)),
(2, "Sy Choan" , "Tommy", "1980-02-12", "m", "08 rue de la mairie", "93200", "Aulnay", "France", "0612345678", "tommy@example.com", SHA2("jojo1", 256)),
(3, "Vallet" , "Yann", "1979-02-12", "m", "08 rue de la roue", "92200", "Chatillon", "France", "0612345678", "yann@example.com", SHA2("jojo1", 256)),
(4, "Zegdhoudi" , "momo", "2026-02-12", "m", "08 rue du mur", "93000", "Bobigny", "France", "0612345678", "momo@example.com", SHA2("jojo1", 256)),
(5, "Saulnier" , "Guillaume", "2010-02-12", "m", "08 rue du poirier", "77200", "Meaux", "France", "0612345678", "guigui@example.com", SHA2("jojo1", 256)),
(6, "Khoudou" , "Nordine", "1987-02-12", "m", "27 rue de la fortune", "91200", "Trappe", "France", "0612345678", "nono@example.com", SHA2("jojo1", 256));


-- insert data in inscription table
INSERT INTO inscription (id_utilisateur, id_seance_test, id_statut_inscription)
VALUES (1, 1 , 1);
INSERT INTO inscription (id_utilisateur, id_seance_test, id_statut_inscription)
VALUES (2, 1, 1);
INSERT INTO inscription (id_utilisateur, id_seance_test, id_statut_inscription)
VALUES (3, 1, 1);
INSERT INTO inscription (id_utilisateur, id_seance_test, id_statut_inscription)
VALUES (4, 4, 1);
INSERT INTO inscription (id_utilisateur, id_seance_test, id_statut_inscription)
VALUES (5, 1, 1);
INSERT INTO inscription (id_utilisateur, id_seance_test, id_statut_inscription)
VALUES (6, 1, 1);