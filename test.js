// let object = {
//     Article: [
//         {Article: 23, Quantity: 3},
//         {Article: 24, Quantity: 1},
//         {Article: 25, Quantity: 2}
//     ],
//     Billing: {
//         Address1: "124 Rue de Crimée",
//         City: "Marseille",
//         Firstname: "Maël",
//         Lastname: "FALLET",
//         Mail: "mael.fallet@gmail.com",
//         Phone: "0667630604",
//         ZIP: "13003"
//     },
//     Date: "2021-03-15 22:50:44",
//     DeliveryTax: 10,
//     Firstname: "Maël",
//     Lastname: "FALLET",
//     Paid: false,
//     Reference: "vvXgGx",
//     Shipping: null,
//     Status: "UNDER_VERIFICATION"
// }

// let _order = {};
// _order.Reference = object.Reference; // EASY TO VERIFY

// _order.Prenom = object.Firstname; // EASY TO VERIFY

// _order.Nom = object.Lastname; // EASY TO VERIFY

// _order.Societe = object.Society || null; // EASY TO VERIFY

// _order.Date = new Date(object.Date).toISOString(); // EASY TO VERIFY

// _order.Article = object.Article.map((article) => {
//     return {Article: article.Article, Quantite: article.Quantity}
// })

// _order.Facturation = {}; // MAKE A SPECIFIC FUNCTION FOR THE Facturation MODEL
// _order.Facturation.Prenom = object.Billing.Firstname || null;
// _order.Facturation.Nom = object.Billing.Lastname || null;
// _order.Facturation.Telephone = object.Billing.Phone || null;
// _order.Facturation.Mail = object.Billing.Mail || null;
// _order.Facturation.AdresseLigne1 = object.Billing.Address1 || null;
// _order.Facturation.AdresseLigne2 = object.Billing.Address2 || null;
// _order.Facturation.CodePostal = object.Billing.ZIP || null;
// _order.Facturation.Ville = object.Billing.City || null;
// _order.Facturation.Societe = object.Billing.Society || null;

// if( object.Shipping != null)
// {
//     _order.Livraison = {}; // MAKE A SPECIFIC FUNCTION FOR THE Livraison MODEL
//     _order.Livraison.Prenom = object.Shipping.Firstname || null;
//     _order.Livraison.Nom = object.Shipping.Lastname || null;
//     _order.Livraison.Telephone = object.Shipping.Phone || null;
//     _order.Livraison.Mail = object.Shipping.Mail || null;
//     _order.Livraison.AdresseLigne1 = object.Shipping.Address1 || null;
//     _order.Livraison.AdresseLigne2 = object.Shipping.Address2 || null;
//     _order.Livraison.CodePostal = object.Shipping.ZIP || null;
//     _order.Livraison.Ville = object.Shipping.City || null;
//     _order.Livraison.Societe = object.Shipping.Society || null;
// }
// else {
//     _order.Shipping = null;
// }

// _order.FraisLivraison = object.DeliveryTax; // EASY TO VERIFY

// _order.Paye = object.Paid; // EASY TO VERIFY

// _order.Statut = object.Status; // EASY TO VERIFY

// console.log(_order);