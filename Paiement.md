# Paiement par redirection

1. Redirection

La page de redirection est https://sogecommerce.societegenerale.eu/vads-payment/

- Pour dialoguer, la plateforme a besoin de deux informations:
    - vads_site_id => l'identifiant boutique
    - signature => la clé, l'empreinte (digest), qui correspond à un nombre de champs spécifiques hachés pour donner une empreinte. L'algorithme utilisé doit être défini dans le Back Office Marchand (Paramétrage > Boutiques > Clés)
Important, choisir un algoruthme différent pour test et production

Préférence pour HMAC-SHA-256

Clé de test
Clé de production
Plus sécurisé d'utiliser clé alphanumérique

Evitez notamment les numéros de commandes de longueur comprise entre 13 et 16 caractères numériques et commençant par 3, 4 ou 5 => code 999 - Sensitive data detected

Paramétrage > Règles de notifications

- Url de notification instantanée (IPN)

    - fin d'un paiement (accepté ou refusé),
    - abandon ou annulation durant le paiement,
    - création ou mise à jour d'un alias,
    - création d'un abonnement,
    - nouvelle échéance d'un abonnement,
    - autorisation réalisée dans le cas d'un paiement différé,
    - modification du statut d'une transaction par l'acquéreur,
    - opération réalisée depuis le Back Office Marchand (annulation, remboursement, duplication, paiement manuel, etc..).

- Url de retour

Possibilité gérer URL de retour par défaut (Paramétrage > Boutique > Coufiguration) dans back office marchand

![alt text](bank_secure.png "Parcours sécurisé")

Paiement accepté
Paiement refusé
Création ou mise à jour d'un alias
Création d'un abonnement

L'événement Paiement accepté correspond à la création d'une transaction dans l'un des statuts (vads_trans_status) ci-dessous:
ACCEPTED
AUTHORISED
AUTHORISED_TO_VALIDATE
CAPTURED
INITIAL
UNDER_VERIFICATION
WAITING_AUTHORISATION
WAITING_AUTHORISATION_TO_VALIDATE
WAITING_FOR_PAYMENT

Paramétrer URL de notification à la fin du paiement => clic droit > Gérer la règle
    - Paramètre général > Adresse(s) e-mail(s) à avertir en cas d'échec
    - Rejeu automatique en cas d'échec
    - URL de notification de l'API formulaire V1, V2
      - URL à appeler en mode TEST
      - URL à appeler en mode PRODUCTION.

[Notifications en cas d'échec](https://sogecommerce.societegenerale.eu/doc/fr-FR/form-payment/quick-start-guide/rejeu-automatique-en-cas-d-echec.html)

### Formulaire

- <form></form>
- method="POST"
- action="https://sogecommerce.societegenerale.eu/vads-payment/"
- UTF-8
- <input type="submit" name="payer" value="Payer"/>

## Champs obligatoires

![alt text](must_fields.png "Champs obligatoires")

### Champs recommandés

- Moyen de paiement
![alt text](advise_fields_1.png "Moyen de paiement")
- Données de la commande
![alt text](advise_fields_2.png "Données de la commande")
- Données de l'acheteur
![alt text](advise_fields_3.png "Données de l'acheteur")
- Données de livraison
![alt text](advise_fields_4.png "Données de livraison")
- Données du panier
![alt text](advise_fields_5.png "Données du panier")

## Signature

- Tous les champs commençant par vads_
- algorithme configuré dans le back
- clé (Paramétrage < Boutique > Clés)

    - Trier les vads_ par ordre alphabétique
    - join('+') + clé (test ou production)
    - encoder en HMAC-SHA-256
      - SHA-256
      - clé comme clé partagée (test ou production selon la valeur de vads_ctx_mode)
      - résultat du join('+') + clé comme message
    - encoder le résultat en Base64

