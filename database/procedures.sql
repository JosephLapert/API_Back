use m2l;

DELIMITER //

CREATE OR REPLACE PROCEDURE delete_utilisateur (
    IN p_id_utilisateur INT
)

BEGIN
    DELETE FROM utilisateur 
    WHERE
    id_utilisateur = p_id_utilisateur;
END //

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
    VALUES (p_nom, p_prenom, p_ddn, p_sexe, p_adresse, p_cp, p_ville, p_pays, p_mobile, p_email, p_psswd);
END //

CREATE OR REPLACE PROCEDURE update_utilisateur (
    IN p_id_utilisateur INT,
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
    UPDATE utilisateur 
    SET nom = p_nom, 
        prenom = p_prenom,
        ddn = p_ddn,
        sexe = p_sexe,
        adresse = p_adresse,
        cp = p_cp,
        ville = p_ville,
        pays = p_pays,
        mobile = p_mobile,
        email = p_email,
        psswd = p_psswd
    WHERE 
    id_utilisateur = p_id_utilisateur;
END //

CREATE OR REPLACE PROCEDURE insert_comment (
    IN p_commentaire VARCHAR(255)
)

BEGIN
    INSERT INTO commentaire (commentaire)
    VALUES (p_commentaire);
END //
