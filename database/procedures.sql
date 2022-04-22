use m2l;

DELIMITER //

CREATE OR REPLACE PROCEDURE insert_utilisateur (
    IN p_nom VARCHAR(255),
    IN p_prenom VARCHAR(255), 
    IN p_ddn DATE, 
    IN p_sexe VARCHAR(1), 
    IN p_adresse VARCHAR(255), 
    IN p_cp INT, 
    IN p_ville VARCHAR(255),
    IN p_pays VARCHAR(255), 
    IN p_mobile INT, 
    IN p_email VARCHAR(255), 
    IN p_psswd VARCHAR(255)
)
BEGIN
    INSERT INTO utilisateur (nom, prenom, ddn, sexe, adresse, cp, ville, pays, mobile, email, psswd)
    VALUES (p_nom, p_prenom, p_ddn, p_sexe, p_adresse, p_cp, p_ville, p_pays, p_mobile, p_email, SHA2(p_psswd, 512));
END //


CREATE OR REPLACE PROCEDURE delete_utilisateur (
    IN p_id_utilisateur INT
)
BEGIN
    DELETE FROM utilisateur 
    WHERE
    id_utilisateur = p_id_utilisateur;
END //

CREATE OR REPLACE PROCEDURE update_utilisateur (
    IN p_id_utilisateur INT,
--     IN p_nom VARCHAR(255),
--     IN p_prenom VARCHAR(255),
--     IN p_ddn DATE, 
    IN p_sexe VARCHAR(1)
--     IN p_adresse VARCHAR(255), 
--     IN p_cp INT, 
--     IN p_ville VARCHAR(255),
--     IN p_pays VARCHAR(255), 
--     IN p_mobile INT, 
--     IN p_email VARCHAR(255), 
--     IN p_psswd VARCHAR(255) 
)
BEGIN
    UPDATE utilisateur 
    SET
        -- nom = p_nom, 
--         prenom = p_prenom,
--         ddn = p_ddn,
        sexe = p_sexe
--         adresse = p_adresse,
--         cp = p_cp,
--         ville = p_ville,
--         pays = p_pays,
--         mobile = p_mobile,
--         email = p_email,
--         psswd = p_psswd
    WHERE 
    id_utilisateur = p_id_utilisateur;
END //


CREATE OR REPLACE PROCEDURE select_all_utilisateur()
BEGIN
    SELECT * FROM utilisateur ;
END //


CREATE OR REPLACE PROCEDURE insert_comment (
    IN p_commentaire VARCHAR(255)
)
BEGIN
    INSERT INTO commentaire (commentaire)
    VALUES (p_commentaire);
END //

CREATE OR REPLACE PROCEDURE select_all_comment()
BEGIN
    SELECT * FROM commentaire;
END //

CREATE OR REPLACE PROCEDURE delete_comment(
    IN p_id_commentaire INT
)
BEGIN
    DELETE FROM commentaire
    WHERE id_commentaire = p_id_commentaire;
END //


CREATE OR REPLACE PROCEDURE insert_date_test (
    IN p_date_seance DATE,
    IN p_id_coach INT
)
BEGIN
    INSERT INTO seance_test (date_seance, id_coach)
    VALUES (p_date_seance, p_id_coach);
END //

CREATE OR REPLACE PROCEDURE select_all_date_test ()
BEGIN
    SELECT * FROM seance_test;
END //

CREATE OR REPLACE PROCEDURE get_seance_test (
     IN p_id_seance_test INT
)
 BEGIN
     SELECT nom, `date_seance` from seance_test
     INNER JOIN coach 
     ON seance_test.id_coach = coach.id_coach
     WHERE seance_test.id_seance_test = p_id_seance_test;
 END //

CREATE OR REPLACE PROCEDURE verif_psswd_user (
    IN p_email VARCHAR(255),
    IN p_psswd VARCHAR(255)
)

BEGIN
    SELECT p_email, psswd FROM utilisateur
    WHERE email = p_email AND psswd = p_psswd;
END //
CREATE OR REPLACE PROCEDURE count_utilisateur_seance (
    IN p_nom VARCHAR(255),
    IN p_prenom VARCHAR(255),
    IN p_date_seance DATE
)
BEGIN
    SELECT
    nom = p_nom, 
    prenom = p_prenom,
    date_seance = p_date_seance
FROM
    inscription
INNER JOIN `seance_test` ON 
    seance_test.id_seance_test = inscription.id_seance_test
INNER JOIN utilisateur ON 
    utilisateur.id_utilisateur = inscription.id_utilisateur
WHERE
    date_seance = p_date_seance;
END //

CREATE OR REPLACE PROCEDURE select_user_id (
    IN p_id INT
)
BEGIN
    SELECT * FROM utilisateur
    WHERE id_utilisateur = p_id;
END //

CREATE OR REPLACE PROCEDURE inscription_seance_test (
    IN p_id_utlisateur INT,
    IN p_id_seance_test INT
)
BEGIN
    INSERT INTO inscription 
    VALUES (NULL, p_id_utilisateur, p_id_seance_test, 1);
END //

CREATE OR REPLACE PROCEDURE checkCredentials (
    IN p_email VARCHAR(255), 
    IN p_psswd VARCHAR(255)
)
BEGIN
    SELECT id_utilisateur, email
    FROM utilisateur
    WHERE utilisateur.email = p_email AND utilisateur.psswd = SHA2(p_psswd, 512);
END //

CREATE OR REPLACE PROCEDURE insert_utilisateur_seance (
    IN p_id_utilisateur INT,
    IN p_id_seance_test INT,
    IN p_id_statut_inscription INT
)
BEGIN
    INSERT INTO inscription (id_utilisateur, id_seance_test, id_statut_inscription)
    VALUES (
        p_id_utilisateur,
        p_id_seance_test,
        p_id_statut_inscription 
    );
END //