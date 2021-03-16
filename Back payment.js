let a = {
    signature: "3HOMrdl8ZuZ7aoVYdquZ5OsI8wDsZ8J2Sf6MKwc0sBA%3D",
    vads_acquirer_network: "CB",
    vads_action_mode: "INTERACTIVE",
    vads_amount: "129600",
    vads_auth_mode: "FULL",
    vads_auth_number: "3fbc5d",
    vads_auth_result: "00",
    vads_bank_code: "30003",
    vads_bank_label: "Société générale",
    vads_bank_product: "A",
    vads_capture_delay: "0",
    vads_card_brand: "E-CARTEBLEUE",
    vads_card_country: "FR",
    vads_card_number: "415056XXXXXX0011",
    vads_contract_used: "3610709",
    vads_ctx_mode: "TEST",
    vads_currency: "978",
    vads_effective_amount: "129600",
    vads_effective_creation_date: "20210221042118",
    vads_effective_currency: "978",
    vads_expiry_month: "6",
    vads_expiry_year: "2022",
    vads_extra_result: "",
    vads_hash: "7dd9dec5bdfea7e6a06e04b4e832f7f4be68f42727945c620928781cd267c82e",
    vads_language: "fr",
    vads_operation_type: "DEBIT",
    vads_order_id: "IqJKyH",
    vads_page_action: "PAYMENT",
    vads_payment_certificate: "e01c02674d933c28cc13303cf3d6df04cd15a06d",
    vads_payment_config: "SINGLE",
    vads_payment_src: "EC",
    vads_pays_ip: "FR",
    vads_presentation_date: "20210221042118",
    vads_result: "00",
    vads_sequence_number: "1",
    vads_site_id: "53371535",
    vads_threeds_auth_type: "",
    vads_threeds_cavv: "",
    vads_threeds_cavvAlgorithm: "",
    vads_threeds_eci: "",
    vads_threeds_enrolled: "U",
    vads_threeds_error_code: "6",
    vads_threeds_exit_status: "6",
    vads_threeds_sign_valid: "",
    vads_threeds_status: "",
    vads_threeds_xid: "",
    vads_tid: "001",
    vads_trans_date: "20210221042117",
    vads_trans_id: "IqJKyH",
    vads_trans_status: "AUTHORISED",
    vads_trans_uuid: "daf5065932404edeac7fba9be66481c6",
    vads_url_check_src: "PAY",
    vads_validation_mode: "0",
    vads_version: "V2",
    vads_warranty_result: "NO",
}
// CB+INTERACTIVE+129600+FULL+3fbc5d+00+30003+Société générale+A+0+E-CARTEBLEUE+FR+415056XXXXXX0011+3610709+TEST+978+129600+20210221042118+978+6+2022+7dd9dec5bdfea7e6a06e04b4e832f7f4be68f42727945c620928781cd267c82e+fr+DEBIT+IqJKyH+PAYMENT+e01c02674d933c28cc13303cf3d6df04cd15a06d+SINGLE+EC+FR+20210221042118+00+1+53371535+U+6+6+001+20210221042117+IqJKyH+AUTHORISED+daf5065932404edeac7fba9be66481c6+PAY+0+V2+NO
// CB+INTERACTIVE+129600+FULL+3fbc5d+00+30003+Société générale+A+0+E-CARTEBLEUE+FR+415056XXXXXX0011+3610709+TEST+978+129600+20210221042118+978+6+2022++7dd9dec5bdfea7e6a06e04b4e832f7f4be68f42727945c620928781cd267c82e+fr+DEBIT+IqJKyH+PAYMENT+e01c02674d933c28cc13303cf3d6df04cd15a06d+SINGLE+EC+FR+20210221042118+00+1+53371535+++++U+6+6++++001+20210221042117+IqJKyH+AUTHORISED+daf5065932404edeac7fba9be66481c6+PAY+0+V2+NO

// VALIDATION FORMULAIRE
// 	- ENVOI CRÉATION COMMANDE AVEC STATUT PROVISOIRE par le back
// 	- REDIRECTION VERS PLATEFORME DE PAIEMENT

// La plateforme de paiement ne renvoie pas les informations des produits, mais juste les informations du paiement, et parmi celles-ci l'id de la transaction, qui va permettre de retrouver la commande. Mais du coup je suis obligé de créer une commande draft pour la sauvegarder quelque part.

// FIN DU PAIEMENT
// 	- ACCEPTÉ
// 		- CHANGEMENT STATUT STRAPI À CONFIRMÉ par le back

// 	- ANNULÉ
// 	- ERREUR
// 	- REFUSÉ
// 		- COMMANDE PROVISOIRE SUPPRIMÉE par le back
// 		- RETOUR SITE MARCHAND
// 			- RÉCUPÉRATION TRANSACTION ID
// 			- CHARGEMENT COMMANDE DEPUIS STRAPI