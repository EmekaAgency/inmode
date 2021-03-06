<?php

// AJOUTER DES WIDTH 100% ET TEXT-ALIGN CENTER DE PARTOUT
// AJOUTER LIGNE SUPPLÉMENTAIRE HT / TTC SELON PAYS
// Si hors France, mention
// Exonération TVA, article 262 ter I du Code général des impôts
// Sinon
// Application de la TVA, article 258-I-a du Code général des impôts

    const MACHINES = [
        "MORPHEUS8 | FACIAL AND BODY FRACTIONAL REMODELING" => "MORPHEUS8",
        "ACCUTITE | PRECISION CONTOURING" => "ACCUTITE",
        "BODYFX & MINIFX | NON-INVASIVE BODY TREATMENT" => "BODYFX & MINIFX",
        "BODYTITE/FACETITE | MINIMALLY INVASIVE PROCEDURES" => "BODYTITE/FACETITE",
        "DIOLAZEXL | HAIR REMOVAL" => "DIOLAZEXL",
        "EMBRACERF | FACIAL REFINEMENT" => "EMBRACERF",
        "EVOKE | HANDS-FREE FACIAL REMODELING" => "EVOKE",
        "EVOLVE | HANDS-FREE SKIN AND BODY REMODELING" => "EVOLVE",
        "FORMA | SKIN REMODELING" => "FORMA",
        "FRACTORA | FRACTIONAL RESURFACING" => "FRACTORA",
        "LUMECCA | PIGMENT & VASCULAR" => "LUMECCA",
        "PLUS | SKIN REMODELING FOR LARGER AREAS" => "PLUS",
        "TRITON | DUOLIGHT/DUODARK | HAIR REMOVAL" => "TRITON",
        "VOTIVA | AVIVA | FEMININE WELLNESS" => "VOTIVA",
    ];
    
    const SPECIALITY = [
        "plastic-surgeon" => "Chirurgien plasticien",
        "facial-surgeon" => "Chirurgien maxillo-facial",
        "dermatologist" => "Dermatologue",
        "cosmetic-doctor" => "Médecin esthétique",
        "gynecologist" => "Gynécologue",
        "others" => "Autres spécialités",
    ];

    const MAIL_CONST = [
        'default' => ['', 'noreply@inmodemd.fr'],
        'contact' => ['Contact', 'submit-contact@inmodemd.fr'],
        'order' => ['Commande', 'submit-order@inmodemd.fr'],
        'error' => ['Security', 'security@inmodemd.fr']
    ];

    $RIB = "FR76 3000 3015 7800 0200 1741 805";
    $BIC = "SOGEFRPP";

    /**
     * Short - 
     * 
     * Detailed - 
     * 
     */
    function headerPart()
    {
        logEvent('headerPart');
        $header = '';
        $header .= '<table style="width: 100%; display: block; margin: 30px 0; text-align: center;">';
        $header .= '    <tbody style="display: block;">';
        $header .= '        <tr style="display: block;">';
        $header .= '            <td style="display: block;">';
        $header .= '                <img src="https://inmode.emeka.fr/back/assets/images/header-logo.png" width="300px" height="47.5px" alt="Logo InmodeMD" style="display: inline-block; width: 80%; max-width: 300px;" />';
        $header .= '            </td>';
        $header .= '        </tr>';
        $header .= '    </tbody>';
        $header .= '</table>';
        return $header;
    }

    /**
     * Short - 
     * 
     * Detailed - 
     * 
     */
    function footerPart()
    {
        logEvent('footerPart');
        $footer = '';
        $footer .= '<table style="padding-top: 30px; width: 100%; text-align: center;">';
        $footer .= '    <tbody style="width: 100%; text-align: center;">';
        $footer .= '        <tr style="width: 100%; text-align: center;">';
        $footer .= '            <td valign="top" style="width: 100%; text-align: center;">';
        $footer .= '                <img src="https://inmode.emeka.fr/back/assets/icons/facebook.webp" width="25" height="25" alt="facebook" style="padding-top: 5px;" />';
        $footer .= '                <span style="padding-left: 10px; color: #f2f2f2; font-size: 20px; position: relative; bottom: 5px;">Facebook</span>';
        $footer .= '                <br />';
        $footer .= '                <img src="https://inmode.emeka.fr/back/assets/icons/instagram.webp" width="25" height="25" alt="instagram" style="padding-top: 5px;" />';
        $footer .= '                <span style="padding-left: 10px; color: #f2f2f2; font-size: 20px; position: relative; bottom: 5px;">Instagram</span>';
        $footer .= '                <br />';
        $footer .= '                <img src="https://inmode.emeka.fr/back/assets/icons/youtube.webp" width="25" height="25" alt="youtube" style="padding-top: 5px;" />';
        $footer .= '                <span style="padding-left: 10px; color: #f2f2f2; font-size: 20px; position: relative; bottom: 5px;">YouTube</span>';
        $footer .= '                <br />';
        $footer .= '                <img src="https://inmode.emeka.fr/back/assets/icons/linkedin.webp" width="25" height="25" alt="linkedin" style="padding-top: 5px;" />';
        $footer .= '                <span style="padding-left: 10px; color: #f2f2f2; font-size: 20px; position: relative; bottom: 5px;">Linkedin</span>';
        $footer .= '            </td>';
        $footer .= '        </tr>';
        $footer .= '    </tbody>';
        $footer .= '</table>';
        $footer .= '<table style="padding-top: 30px; width: 100%; display: block;">';
        $footer .= '    <tbody style="width: 100%; display: block;">';
        $footer .= '        <tr style="display: block;">';
        $footer .= '            <td valign="top" style="color: #f2f2f2; font-size: 20px; text-align: center; display: block;">';
        $footer .= '                InmodeMD<br />';
        $footer .= '                RCS de Paris - 12 place Dauphine,<br />';
        $footer .= '                75001 PARIS<br />';
        $footer .= '                884 502 980 00011<br />';
        $footer .= '                contact.fr@inmodemd.fr';
        $footer .= '            </td>';
        $footer .= '        </tr>';
        $footer .= '    </tbody>';
        $footer .= '</table>';
        return $footer;
    }
    
    /**
     * 
     * Short - 
     * 
     * Detailed - 
     * 
     */
    function failMail(string $type):string
    {
        logEvent('failMail');
        $retour = '';
        $retour .= '<html style="font-size: 0;font-family: Raleway, Roboto, sans-serif;">';
        $retour .= '   <body style="background: #0e0e0e;margin: 0;padding: 15px;border: 2px solid #59b7b3;">';
        $retour .= '       <table cellspacing="0" cellpadding="10" border="0" style="background: #0e0e0e; font-family: Roboto; width: 100%;">';
        $retour .= '           <tr>';
        $retour .= '               <td>';
        $retour .=                     headerPart();
        if($type == 'order' && isset($_POST['reference'], $_POST['for']))
        {
            $retour .= '                <table style="padding-top: 30px; width: 100%; display: block;">';
            $retour .= '                    <tr>';
            $retour .= '                        <td style="color: #ff6868; font-size: 22px; font-weight: 600;">';
            $retour .= '                            Le mail de la commande <span style="font-size: 20px; font-weight: 600;">'.$_POST['reference'].'</span> à destination '.($_POST['for'] == 'client' ? 'du client' : 'd\'InmodeMD France').' n\'a pas pu être envoyé';
            $retour .= '                        </td>';
            $retour .= '                    </tr>';
            $retour .= '                </table>';
        }
        else if($type == 'order')
        {
            $retour .= '                <table style="padding-top: 30px; width: 100%; display: block;">';
            $retour .= '                    <tr>';
            $retour .= '                        <td style="color: #ff6868; font-size: 22px; font-weight: 600;">';
            $retour .= '                            Un mail d\'une commande non identifiée du '.date('l d F Y à h:m:s', time()).' n\'a pu être envoyé en raison d\'un problème technique. Veuillez contacter un technicien';
            $retour .= '                        </td>';
            $retour .= '                    </tr>';
            $retour .= '                </table>';
        }
        $retour .=                     footerPart();
        $retour .= '               </td>';
        $retour .= '           </tr>';
        $retour .= '       </table>';
        $retour .= '   </body>';
        $retour .= '</html>';
        return $retour;
    }

    /**
     * Short - 
     * 
     * Detailed - 
     * 
     */
    function orderMail($order)
    {
        logEvent('orderMail');
        try
        {
            logEvent('Liste Article');
            logEvent(json_encode($order['Article']));
            logEvent('Facturation');
            logEvent(json_encode($order['Facturation']));
            $message = '';
            $message .= '<html style="font-size: 0;font-family: Raleway, Roboto, sans-serif;">';
            $message .= '   <body style="background: #0e0e0e;margin: 0;padding: 15px;border: 2px solid #59b7b3;">';
            $message .= '       <table cellspacing="0" cellpadding="10" border="0" style="background: #0e0e0e; font-family: Roboto; width: 100%;">';
            $message .= '           <tr>';
            $message .= '               <td>';
            $message .=                     headerPart();
            $message .=                     orderReceived($order['Reference'], $order['Date'], $_POST['for'], $_POST['type'], $order['Statut']);
            $message .=                     orderDetails($order['Article'], $order['Total'], $order['FraisLivraison'], $order['Pays']);
            $message .=                     orderTVAIntra($order['Pays'], isset($order['TVA_Intra']) ? $order['TVA_Intra'] : null);
            $message .=                     orderBilling($order['Facturation']);
            if(isset($order['Livraison']) && $order['Livraison'] != null)
            {
                logEvent('Livraison');
                logEvent(json_encode($order['Livraison']));
                logEvent(gettype($order['Livraison']));
                $message .=                     orderShipping($order['Livraison']);
            }
            $message .=                     footerPart();
            $message .= '               </td>';
            $message .= '           </tr>';
            $message .= '       </table>';
            $message .= '   </body>';
            $message .= '</html>';
            return $message;
        }
        catch(Throwable $e)
        {
            logEvent('Erreur durant orderMail');
            logEvent($e);
            logError('Erreur durant orderMail');
            logError($e);
            return 'null';
        }
    }
    
    /**
     * Short - 
     * 
     * Detailed - 
     * 
     */
    function isPaid($status) {
        switch($status) {
            case 'ACCEPTED':
            case 'AUTHORISED':
            case 'CAPTURED':
                return true;
            case 'ABANDONED':
            case 'AUTHORISED_TO_VALIDATE':
            case 'CANCELLED':
            case 'CAPTURE_FAILED':
            case 'EXPIRED':
            case 'REFUSED':
            case 'SUSPENDED':
            case 'UNDER_VERIFICATION':
            case 'WAITING_AUTHORISATION':
            case 'WAITING_AUTHORISATION_TO_VALIDAT':
            default:
                return false;
        }
    }

    /**
     * Short - 
     * 
     * Detailed - 
     * 
     */
    function tva_intra($pays = null)
    {
        switch($pays)
        {
            case 'Belgique':
            case 'Luxembourg':
                return true;
            case 'France':
            default:
                return false;
        }
    }

    /**
     * Short - 
     * 
     * Detailed - 
     */
    function orderReceived(string $reference, string $date, string $for, string $type, string $statut):string
    {
        logEvent('orderReceived');
        logEvent('reference : '.$reference);
        logEvent('date : '.$date);
        logEvent('for : '.$for);
        logEvent('type : '.$type);
        logEvent('statut : '.$statut);
        $retour = '';
        $retour .= '<table style="padding-top: 30px; width: 100%; display: block;">';
        $retour .= '    <tr>';
        $retour .= '        <td style="color: #f2f2f2; font-size: 18px; font-weight: 400;">';
        if($for == 'client')
        {
            $retour .= 'Nous avons bien reçu votre commande <span style="font-size: 20px; font-weight: 600;">'.$reference.'</span> effectuée le <span';
            $retour .= 'style="font-size: 20px; font-weight: 600;">'.buildDate($date, 'full').'</span>. ';
        }
        if($for == 'pro')
        {
            $retour .= 'Une nouvelle commande <span style="font-size: 20px; font-weight: 600;">'.$reference.'</span> est arrivée.';
        }
        if($for == 'client' && $type == 'sepa')
        {
            $retour .= ' Votre commande vous sera expédiée une fois que vous aurez effectué un virement sur le RIB suivant:';
        }
        if($for == 'client' && $type == 'soge')
        {
            $retour .= ' Votre commande sera expédiée sous peu.';
        }
        if($for == 'pro' && $type == 'sepa')
        {
            $retour .= ' Paiement par virement en attente.';
        }
        if($for == 'pro' && $type == 'soge')
        {
            $retour .= ' Le paiement est '.(isPaid($statut) == true ? 'validé' : 'en attente').'.';
        }
        $retour .= '        </td>';
        $retour .= '    </tr>';
        $retour .= '</table>';
        if($for == 'client' && $type == 'sepa') {
            $retour .= '<table style="max-width: 400px; border: 2px solid #f2f2f2; width: 100%; display: block;">';
            $retour .= '    <tbody class="SEPA">';
            $retour .= '        <tr style="color: #f2f2f2; font-size: 18px; font-weight: 400;" class="RIB">';
            $retour .= '            <td style="width: 80px;">RIB</td>';
            $retour .= '            <td style="width: 350px;">'.$GLOBALS['RIB'].'</td>';
            $retour .= '        </tr>';
            $retour .= '        <tr style="color: #f2f2f2; font-size: 18px; font-weight: 400;" class="BIC">';
            $retour .= '            <td style="width: 80px;">BIC</td>';
            $retour .= '            <td style="width: 350px;">'.$GLOBALS['BIC'].'</td>';
            $retour .= '        </tr>';
            $retour .= '    </tbody>';
            $retour .= '</table>';
        }
        return $retour;
    }

    /**
     * Short - 
     * 
     * Detailed - 
     * 
     */
    function orderDetails(array $articles, string $total, string $delivery_tax = null, $pays = null):string
    {
        try
        {
            
            logEvent('orderDetails');
            logEvent(json_encode($articles));
            logEvent(gettype($articles));
            logEvent('total : '.$total);
            logEvent('delivery_tax : '.$delivery_tax);
            logEvent('pays : '.$pays);
            $retour = '';
            $retour .= '<table style="padding-top: 30px; width: 100%; display: block;">';
            $retour .= '    <tr>';
            $retour .= '        <td style="color: #f2f2f2; font-size: 22px; font-weight: 500;">';
            $retour .= '            Détails de la commande';
            $retour .= '        </td>';
            $retour .= '    </tr>';
            $retour .= '</table>';
            $retour .= '<table style="max-width: 550px; border: 2px solid #f2f2f2; width: 100%; display: block; color: #f2f2f2; font-size: 16px; font-weight: 400;">';
            $retour .= '    <thead>';
            $retour .= '        <tr>';
            $retour .= '            <td style="width: 250px;">Article</td>';
            $retour .= '            <td style="width: 150px; text-align: center;">Quantité</td>';
            $retour .= '            <td style="width: 150px; text-align: center;">Total</td>';
            $retour .= '        </tr>';
            $retour .= '    </thead>';
            $retour .= '    <tbody style="width: 100%; text-align: center;">';
            $tva = 0;
            foreach($articles as $article)
            {
                try
                {
                    logEvent($article['Article']['Name'].' x '.$article['Quantite'].' = '.$article['Quantite'].' x '.$article['Article']['price'].' = '.($article['Quantite'] * $article['Article']['price']));
                }
                catch(Throwable $e)
                {
                    logError(print_r($e));
                    logEvent(print_r($e));
                }
                $retour .= '        <tr style="width: 100%; text-align: center;">';
                $retour .= '            <td style="width: 250px;">'.$article['Article']['Name'].'</td>';
                $retour .= '            <td style="width: 150px; text-align: center;">'.$article['Quantite'].'</td>';
                $retour .= '            <td style="width: 150px; text-align: center;">'.($article['Quantite'] * $article['Article']['price']).'€</td>';
                $retour .= '        </tr>';
                $tva += $article['Quantite'] * $article['Article']['price'];
            }
            $retour .= '    </tbody>';
            $retour .= '</table>';
            $retour .= '<table style="max-width: 550px; width: 100%; display: block; color: #f2f2f2; font-size: 16px; font-weight: 400;">';
            $retour .= '    <tbody style="width: 100%; text-align: center;">';
            if($delivery_tax != null && is_numeric($delivery_tax))
            {        	
                $retour .= '      <tr style="width: 100%; text-align: center;">';
                $retour .= '          <td style="width: 250px;"></td>';
                $retour .= '          <td style="width: 150px; text-align: center;">Livraison</td>';
                $retour .= '          <td style="width: 150px; text-align: center;">'.$delivery_tax.'€</td>';
                $retour .= '      </tr>';
            }
            if($total != null && is_numeric($total))
            {
                if(!tva_intra($pays))
                {
                    $retour .= '      <tr style="width: 100%; text-align: center;">';
                    $retour .= '          <td style="width: 250px;"></td>';
                    $retour .= '          <td style="width: 150px; text-align: center;">TVA</td>';
                    $retour .= '          <td style="width: 150px; text-align: center;">'.($tva * 0.2).'€</td>';
                    $retour .= '      </tr>';
                }
                $retour .= '      <tr style="width: 100%; text-align: center;">';
                $retour .= '          <td style="width: 250px;"></td>';
                $retour .= '          <td style="width: 150px; text-align: center;">TOTAL</td>';
                $retour .= '          <td style="width: 150px; text-align: center;">'.$total.'€</td>';
                $retour .= '      </tr>';
            }
            $retour .= '    </tbody>';
            $retour .= '</table>';
        }
        catch(Throwable $e)
        {
            $retour = '';
        }
        return $retour;
    }

    /**
     * Short - 
     * 
     * Detailed - 
     * 
     */
    function orderTVAIntra(string $pays, $tva_intra):string
    {
        logEvent('orderTVAIntra');
        $retour = '';
        $retour .= '<table style="color: #f2f2f2; font-weight: 500; font-size: 15px; padding-top: 30px; width: 100%; display: block;">';
        $retour .= '    <tbody style="padding-top: 30px; width: 100%; display: block;">';
        $retour .= '        <tr style="padding-top: 30px; width: 100%; display: block;">';
        if(tva_intra($pays))
        {
            $retour .= '            Exonération TVA, article 262 ter I du Code général des impôts<br/>';
            $retour .= '            TVA intracommunautaire : '.$tva_intra;
        }
        else
        {
            $retour .= '            Application de la TVA, article 258-I-a du Code général des impôts';

        }
        $retour .= '        </tr>';
        $retour .= '    </tbody>';
        $retour .= '</table>';
        return $retour;
    }

    /**
     * Short - 
     * 
     * Detailed - 
     * 
     */
    function orderBilling(array $facturation):string
    {
        logEvent('orderBilling');
        logEvent(json_encode($facturation));
        $retour = '';
        $retour .= '<table style="padding-top: 30px; width: 100%; display: block;">';
        $retour .= '    <tbody>';
        $retour .= '        <tr>';
        $retour .= '            <td style="color: #f2f2f2; font-size: 22px; font-weight: 500;">';
        $retour .= '                Détails de facturation';
        $retour .= '            </td>';
        $retour .= '        </tr>';
        $retour .= '    </tbody>';
        $retour .= '</table>';
        $retour .= '<table style="max-width: 550px; border: 2px solid #f2f2f2; width: 100%; display: block; color: #f2f2f2; font-size: 16px; font-weight: 400;">';
        $retour .= '    <tbody>';
        $retour .= '        <tr>';
        $retour .= '            <td>Facturé à</td>';
        $retour .= '            <td>'.$facturation['Prenom'].' '.$facturation['Nom'].'</td>';
        $retour .= '        </tr>';
        $retour .= '        <tr>';
        $retour .= '            <td>Au</td>';
        $retour .= '            <td>'.$facturation['Adresse'].', '.($facturation['Adresse'] != null ? $facturation['Adresse'].', ' : '').$facturation['CodePostal'].' '.$facturation['Ville'].', '.$facturation['Pays'].'</td>';
        $retour .= '        </tr>';
        if($facturation['Societe'] != null)
        {
            $retour .= '        <tr>';
            $retour .= '            <td>Pour la société</td>';
            $retour .= '            <td>'.$facturation['Societe'].'</td>';
            $retour .= '        </tr>';
        }
        $retour .= '        <tr>';
        $retour .= '            <td>Mail</td>';
        $retour .= '            <td>'.$facturation['Mail'].'</td>';
        $retour .= '        </tr>';
        $retour .= '        <tr>';
        $retour .= '            <td>Téléphone</td>';
        $retour .= '            <td>'.$facturation['Telephone'].'</td>';
        $retour .= '        </tr>';
        $retour .= '    </tbody>';
        $retour .= '</table>';
        return $retour;
    }

    /**
     * Short - 
     * 
     * Detailed - 
     * 
     */
    function orderShipping(array $livraison):string
    {
        logEvent('orderShipping');
        logEvent(json_encode($livraison));
        $retour = '';
        $retour .= '<table style="padding-top: 30px; width: 100%; display: block;">';
        $retour .= '    <tr>';
        $retour .= '        <td style="color: #f2f2f2; font-size: 22px; font-weight: 500;">';
        $retour .= '            Détails de facturation';
        $retour .= '        </td>';
        $retour .= '    </tr>';
        $retour .= '</table>';
        $retour .= '<table style="max-width: 550px; border: 2px solid #f2f2f2; width: 100%; display: block; color: #f2f2f2; font-size: 16px; font-weight: 400;">';
        $retour .= '    <tbody>';
        $retour .= '        <tr>';
        $retour .= '            <td>Facturé à</td>';
        $retour .= '            <td>'.$livraison['Prenom'].' '.$livraison['Nom'].'</td>';
        $retour .= '        </tr>';
        $retour .= '        <tr>';
        $retour .= '            <td>Au</td>';
        $retour .= '            <td>'.$livraison['Adresse'].', '.($livraison['Adresse'] != null ? $livraison['Adresse'].', ' : '').$livraison['CodePostal'].' '.$livraison['Ville'].', '.$livraison['Pays'].'</td>';
        $retour .= '        </tr>';
        if($livraison['Societe'] != null)
        {
            $retour .= '        <tr>';
            $retour .= '            <td>Pour la société</td>';
            $retour .= '            <td>'.$livraison['Societe'].'</td>';
            $retour .= '        </tr>';
        }
        if($livraison['Mail'] != null)
        {
            $retour .= '        <tr>';
            $retour .= '            <td>Pour la société</td>';
            $retour .= '            <td>'.$livraison['Mail'].'</td>';
            $retour .= '        </tr>';
        }
        $retour .= '        <tr>';
        $retour .= '            <td>Téléphone</td>';
        $retour .= '            <td>'.$livraison['Telephone'].'</td>';
        $retour .= '        </tr>';
        $retour .= '    </tbody>';
        $retour .= '</table>';
        return $retour;
    }
    
    /**
     * Short - 
     * 
     * Detailed - 
     * 
     */
    function fullContactMail():string
    {
        $message = '';
        $message = $message.'<html>';
        $message = $message.'   <body>';
        $message = $message.'       <table cellspacing="0" cellpadding="10" border="0">';
        $message = $message.'           <tr>';
        $message = $message.'               <td>';
        $message = $message.'                   <table>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>Prénom</td>';
        $message = $message.'                           <td>'.$_POST['firstname'].'</td>';
        $message = $message.'                       </tr>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>Nom</td>';
        $message = $message.'                           <td>'.$_POST['lastname'].'</td>';
        $message = $message.'                       </tr>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>Entreprise</td>';
        $message = $message.'                           <td>'.$_POST['company'].'</td>';
        $message = $message.'                       </tr>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>Spécialité</td>';
        $message = $message.'                           <td>'.SPECIALITY[$_POST['speciality']].'</td>';
        $message = $message.'                       </tr>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>Adresse</td>';
        $message = $message.'                           <td>'.$_POST['address'].'</td>';
        $message = $message.'                       </tr>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>Téléphone</td>';
        $message = $message.'                           <td>'.$_POST['phone_number'].'</td>';
        $message = $message.'                       </tr>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>E-Mail</td>';
        $message = $message.'                           <td>'.$_POST['mail'].'</td>';
        $message = $message.'                       </tr>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>Code Postal</td>';
        $message = $message.'                           <td>'.$_POST['zip'].'</td>';
        $message = $message.'                       </tr>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>Ville</td>';
        $message = $message.'                           <td>'.$_POST['city'].'</td>';
        $message = $message.'                       </tr>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>Pays</td>';
        $message = $message.'                           <td>'.$_POST['country'].'</td>';
        $message = $message.'                       </tr>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>Message</td>';
        $message = $message.'                           <td>'.$_POST['message'].'</td>';
        $message = $message.'                       </tr>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>Interessé par :</td>';
        $message = $message.'                           <td></td>';
        $message = $message.'                       </tr>';
        foreach(MACHINES as $key => $value)
        {
            if(gettype($_POST[$key]) == 'boolean' && $_POST[$key] == 1)
            {
                $message = $message.'                       <tr>';
                $message = $message.'                           <td>'.$key.'</td>';
                $message = $message.'                       </tr>';
            }
        }
        $message = $message.'                   </table>';
        $message = $message.'               </td>';
        $message = $message.'           </tr>';
        $message = $message.'       </table>';
        $message = $message.'   </body>';
        $message = $message.'</html>';
        return $message;
    }
    
    /**
     * Short - 
     * 
     * Detailed - 
     * 
    */
    function contactUsMail():string
    {
        $message = '';
        $message = $message.'<html>';
        $message = $message.'   <body>';
        $message = $message.'       <table cellspacing="0" cellpadding="10" border="0">';
        $message = $message.'           <tr>';
        $message = $message.'               <td>';
        $message = $message.'                   <table>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>Prénom</td><td>'.$_POST['firstname'].'</td>';
        $message = $message.'                       </tr>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>Nom</td><td>'.$_POST['lastname'].'</td>';
        $message = $message.'                       </tr>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>Spécialité</td><td>'.SPECIALITY[$_POST['subject']].'</td>';
        $message = $message.'                       </tr>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>E-Mail</td><td>'.$_POST['mail'].'</td>';
        $message = $message.'                       </tr>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>Téléphone</td><td>'.$_POST['phone'].'</td>';
        $message = $message.'                       </tr>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>Code postal</td><td>'.$_POST['zip'].'</td>';
        $message = $message.'                       </tr>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>Ville</td><td>'.$_POST['city'].'</td>';
        $message = $message.'                       </tr>';
        $message = $message.'                       <tr>';
        $message = $message.'                           <td>Message</td><td>'.$_POST['message'].'</td>';
        $message = $message.'                       </tr>';
        $message = $message.'                   </table>';
        $message = $message.'               </td>';
        $message = $message.'           </tr>';
        $message = $message.'       </table>';
        $message = $message.'   </body>';
        $message = $message.'</html>';
        return $message;
    }

    
    /**
     * Short - 
     * 
     * Detailed - 
     * 
     */
    function buildMail(string $mail):string
    {
        logEvent('Build mail');
        logEvent('mail action : "'.$mail.'"');
        if(!in_array($mail, $GLOBALS['mails']))
        {
            logEvent('Mail action "'.$mail.'" does not exist or is not configured');
            return '';
        }
        logEvent('Mail action "'.$mail.'" exist');
        switch($mail)
        {
            case 'contact-us':
                $retour = contactUsMail();
                break;
            case 'order-mail':
                $retour = orderMail($_POST['order']);
                break;
            case 'fail-mail':
                $retour = failMail($_POST['type']);
                break;
            case 'full-contact':
            default:
                $retour = fullContactMail();
                break;
        }
        return $retour;
    }

    /**
     * Short - 
     * 
     * Detailed - 
     * 
     */
    function from(string $action):string
    {
        if($action == null || gettype($action) != 'string')
        {
            return 'default';
        }
        switch($action)
        {
            case 'full-contact':
            case 'contact-us':
                return 'contact';
            case 'order-mail':
                return 'order';
            case 'fail-mail':
                return 'error';
            default:
                return 'default';
        }
    }
    
    /**
     * Short - 
     * 
     * Detailed - 
     * 
     */
    function tryMail(string $mail, string $subject, string $action, string $type):bool
    {
        
        try {
            if(sendMail($mail, $subject, buildMail($action), from($action)))
            {
                echo json_encode([
                    'type' => 'client',
                    'status' => 'success',
                    'message' => 'Mail envoyé'
                ]);
            }
            else
            {
                echo json_encode([
                    'type' => 'client',
                    'status' => 'fail',
                    'message' => 'Erreur d\'envoi du mail'
                ]);
            }
            return true;
        }
        catch(\Exception $e) {
            logError('Error during sending mail '.$action);
            logError(json_encode($e));
            echo json_encode([
                'type' => 'client',
                'status' => 'fail',
                'message' => 'Erreur serveur'
            ]);
            return false;
        }
    }
    
    /**
     * Short - 
     * 
     * Detailed - 
     * 
     */
    function sendMail(string $to, string $subject, string $content, string $from):bool {
        try
        {
            if($content == 'null')
            {
                throw 'Content empty';
            }
            logEvent('To : '.$to);
            logEvent('Subject : '.SPECIALITY[$subject]);
            logEvent('Init mail headers');
            
            $headers = "From: InmodeMD-FR ".MAIL_CONST[$from][0]." <".MAIL_CONST[$from][1].">\n";
            $headers .= "MIME-version: 1.0\nDate: ".date('r')."\n";
            $headers .= "Content-Type: text/html; charset=UTF-8\nX-Mailer: PHP/" . phpversion();
            
            logEvent('Headers : '.PHP_EOL.$headers);
            
            logEvent('Try to send mail');
            
            if(mail($to, SPECIALITY[$subject], $content, $headers))
            {
                logEvent('Mail sended');
                return true;
            }
            else
            {
                logEvent('Mail not sended');
                return false;
            }
        }
        catch(\Exception $e)
        {
            logEvent('Error during mail send procedure');
            logError(json_encode($e));
            echo json_encode($e);
            return false;
        }
    }