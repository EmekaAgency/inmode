<?php

    function logEvent(string $str):string
    {
        return $str;
    }

    function logError(string $str):string
    {
        return $str;
    }

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
        "plastic-surgeon" => "Chirurgien platicien",
        "facial-surgeon" => "Chirurgien maxillo-facial",
        "dermatologist" => "Dermatologue",
        "cosmetic-doctor" => "Médecin esthétique",
        "gynecologist" => "Gynécologue",
        "others" => "Autres",
    ];
    
    /**
     * Short - 
     * 
     * Detailed - 
     * 
     */
    function fullContactMail():string
    {
        // logEvent('fullContactMail()');
        // logEvent('$_POST["firstname"] : '.$_POST['firstname']);
        // logEvent('$_POST["lastname"] : '.$_POST['lastname']);
        // logEvent('$_POST["company"] : '.$_POST['company']);
        // logEvent('$_POST["speciality"] : '.SPECIALITY[$_POST['speciality']]);
        // logEvent('$_POST["address"] : '.$_POST['address']);
        // logEvent('$_POST["phone_number"] : '.$_POST['phone_number']);
        // logEvent('$_POST["mail"] : '.$_POST['mail']);
        // logEvent('$_POST["zip"] : '.$_POST['zip']);
        // logEvent('$_POST["city"] : '.$_POST['city']);
        // logEvent('$_POST["country"] : '.$_POST['country']);
        // logEvent('$_POST["message"] : '.$_POST['message']);
        // foreach(MACHINES as $key => $value)
        // {
        //     logEvent('$_POST['.$key.'] : '.(gettype($_POST[$key]) == 'boolean' && $_POST[$key] == 1 ? 'true' : 'false'));
        //     logEvent('$_POST['.$key.'] : '.(gettype($_POST[$key])));
        // }

        // logEvent('$_POST["ACCUTITE | PRECISION CONTOURING"] : '.(gettype($_POST["ACCUTITE | PRECISION CONTOURING"]) == 'boolean' && $_POST["ACCUTITE | PRECISION CONTOURING"] == 1 ? 'true' : 'false'));
        // logEvent('$_POST["BODYFX & MINIFX | NON-INVASIVE BODY TREATMENT"] : '.(gettype($_POST["BODYFX & MINIFX | NON-INVASIVE BODY TREATMENT"]) == 'boolean' && $_POST["BODYFX & MINIFX | NON-INVASIVE BODY TREATMENT"] == 1 ? 'true' : 'false'));
        // logEvent('$_POST["BODYTITE/FACETITE | MINIMALLY INVASIVE PROCEDURES"] : '.(gettype($_POST["BODYTITE/FACETITE | MINIMALLY INVASIVE PROCEDURES"]) == 'boolean' && $_POST["BODYTITE/FACETITE | MINIMALLY INVASIVE PROCEDURES"] == 1 ? 'true' : 'false'));
        // logEvent('$_POST["DIOLAZEXL | HAIR REMOVAL"] : '.(gettype($_POST["DIOLAZEXL | HAIR REMOVAL"]) == 'boolean' && $_POST["DIOLAZEXL | HAIR REMOVAL"] == 1 ? 'true' : 'false'));
        // logEvent('$_POST["EMBRACERF | FACIAL REFINEMENT"] : '.(gettype($_POST["EMBRACERF | FACIAL REFINEMENT"]) == 'boolean' && $_POST["MBRACERF | FACIAL REFINEMENT"] == 1 ? 'true' : 'false'));
        // logEvent('$_POST["EVOKE | HANDS-FREE FACIAL REMODELING"] : '.(gettype($_POST["EVOKE | HANDS-FREE FACIAL REMODELING"]) == 'boolean' && $_POST["EVOKE | HANDS-FREE FACIAL REMODELING"] == 1 ? 'true' : 'false'));
        // logEvent('$_POST["EVOLVE | HANDS-FREE SKIN AND BODY REMODELING"] : '.(gettype($_POST["EVOLVE | HANDS-FREE SKIN AND BODY REMODELING"]) == 'boolean' && $_POST["EVOLVE | HANDS-FREE SKIN AND BODY REMODELING"] == 1 ? 'true' : 'false'));
        // logEvent('$_POST["FORMA | SKIN REMODELING"] : '.(gettype($_POST["FORMA | SKIN REMODELING"]) == 'boolean' && $_POST["FORMA | SKIN REMODELING"] == 1 ? 'true' : 'false'));
        // logEvent('$_POST["FRACTORA | FRACTIONAL RESURFACING"] : '.(gettype($_POST["FRACTORA | FRACTIONAL RESURFACING"]) == 'boolean' && $_POST["FRACTORA | FRACTIONAL RESURFACING"] == 1 ? 'true' : 'false'));
        // logEvent('$_POST["LUMECCA | PIGMENT & VASCULAR"] : '.(gettype($_POST["LUMECCA | PIGMENT & VASCULAR"]) == 'boolean' && $_POST["LUMECCA | PIGMENT & VASCULAR"] == 1 ? 'true' : 'false'));
        // logEvent('$_POST["MORPHEUS8 | FACIAL AND BODY FRACTIONAL REMODELING"] : '.(gettype($_POST["MORPHEUS8 | FACIAL AND BODY FRACTIONAL REMODELING"]) == 'boolean' && $_POST["MORPHEUS8 | FACIAL AND BODY FRACTIONAL REMODELING"] == 1 ? 'true' : 'false'));
        // logEvent('$_POST["PLUS | SKIN REMODELING FOR LARGER AREAS"] : '.(gettype($_POST["PLUS | SKIN REMODELING FOR LARGER AREAS"]) == 'boolean' && $_POST["PLUS | SKIN REMODELING FOR LARGER AREAS"] == 1 ? 'true' : 'false'));
        // logEvent('$_POST["TRITON | DUOLIGHT/DUODARK | HAIR REMOVAL"] : '.(gettype($_POST["TRITON | DUOLIGHT/DUODARK | HAIR REMOVAL"]) == 'boolean' && $_POST["TRITON | DUOLIGHT/DUODARK | HAIR REMOVAL"] == 1 ? 'true' : 'false'));
        // logEvent('$_POST["VOTIVA | AVIVA | FEMININE WELLNESS"] : '.(gettype($_POST["VOTIVA | AVIVA | FEMININE WELLNESS"]) == 'boolean' && $_POST["VOTIVA | AVIVA | FEMININE WELLNESS"] == 1 ? 'true' : 'false'));
        
        // logEvent('$_POST["ACCUTITE | PRECISION CONTOURING"] : '.(gettype($_POST["ACCUTITE | PRECISION CONTOURING"])));
        // logEvent('$_POST["BODYFX & MINIFX | NON-INVASIVE BODY TREATMENT"] : '.(gettype($_POST["BODYFX & MINIFX | NON-INVASIVE BODY TREATMENT"])));
        // logEvent('$_POST["BODYTITE/FACETITE | MINIMALLY INVASIVE PROCEDURES"] : '.(gettype($_POST["BODYTITE/FACETITE | MINIMALLY INVASIVE PROCEDURES"])));
        // logEvent('$_POST["DIOLAZEXL | HAIR REMOVAL"] : '.(gettype($_POST["DIOLAZEXL | HAIR REMOVAL"])));
        // logEvent('$_POST["EMBRACERF | FACIAL REFINEMENT"] : '.(gettype($_POST["EMBRACERF | FACIAL REFINEMENT"])));
        // logEvent('$_POST["EVOKE | HANDS-FREE FACIAL REMODELING"] : '.(gettype($_POST["EVOKE | HANDS-FREE FACIAL REMODELING"])));
        // logEvent('$_POST["EVOLVE | HANDS-FREE SKIN AND BODY REMODELING"] : '.(gettype($_POST["EVOLVE | HANDS-FREE SKIN AND BODY REMODELING"])));
        // logEvent('$_POST["FORMA | SKIN REMODELING"] : '.(gettype($_POST["FORMA | SKIN REMODELING"])));
        // logEvent('$_POST["FRACTORA | FRACTIONAL RESURFACING"] : '.(gettype($_POST["FRACTORA | FRACTIONAL RESURFACING"])));
        // logEvent('$_POST["LUMECCA | PIGMENT & VASCULAR"] : '.(gettype($_POST["LUMECCA | PIGMENT & VASCULAR"])));
        // logEvent('$_POST["MORPHEUS8 | FACIAL AND BODY FRACTIONAL REMODELING"] : '.(gettype($_POST["MORPHEUS8 | FACIAL AND BODY FRACTIONAL REMODELING"])));
        // logEvent('$_POST["PLUS | SKIN REMODELING FOR LARGER AREAS"] : '.(gettype($_POST["PLUS | SKIN REMODELING FOR LARGER AREAS"])));
        // logEvent('$_POST["TRITON | DUOLIGHT/DUODARK | HAIR REMOVAL"] : '.(gettype($_POST["TRITON | DUOLIGHT/DUODARK | HAIR REMOVAL"])));
        // logEvent('$_POST["VOTIVA | AVIVA | FEMININE WELLNESS"] : '.(gettype($_POST["VOTIVA | AVIVA | FEMININE WELLNESS"])));

        $message = '';
        $message = $message.'<html>';
        $message = $message.'<body>';
        $message = $message.'<table cellspacing="0" cellpadding="10" border="0">';
        $message = $message.'<tr>';
        $message = $message.'<td>';
        $message = $message.'<table>';
        $message = $message.'<tr>';
        $message = $message.'<td>Prénom</td>';
        $message = $message.'<td>'.$_POST['firstname'].'</td>';
        $message = $message.'</tr>';
        $message = $message.'<tr>';
        $message = $message.'<td>Nom</td>';
        $message = $message.'<td>'.$_POST['lastname'].'</td>';
        $message = $message.'</tr>';
        $message = $message.'<tr>';
        $message = $message.'<td>Entreprise</td>';
        $message = $message.'<td>'.$_POST['company'].'</td>';
        $message = $message.'</tr>';
        $message = $message.'<tr>';
        $message = $message.'<td>Spécialité</td>';
        $message = $message.'<td>'.SPECIALITY[$_POST['speciality']].'</td>';
        $message = $message.'</tr>';
        $message = $message.'<tr>';
        $message = $message.'<td>Adresse</td>';
        $message = $message.'<td>'.$_POST['address'].'</td>';
        $message = $message.'</tr>';
        $message = $message.'<tr>';
        $message = $message.'<td>Téléphone</td>';
        $message = $message.'<td>'.$_POST['phone_number'].'</td>';
        $message = $message.'</tr>';
        $message = $message.'<tr>';
        $message = $message.'<td>E-Mail</td>';
        $message = $message.'<td>'.$_POST['mail'].'</td>';
        $message = $message.'</tr>';
        $message = $message.'<tr>';
        $message = $message.'<td>Code Postal</td>';
        $message = $message.'<td>'.$_POST['zip'].'</td>';
        $message = $message.'</tr>';
        $message = $message.'<tr>';
        $message = $message.'<td>Ville</td>';
        $message = $message.'<td>'.$_POST['city'].'</td>';
        $message = $message.'</tr>';
        $message = $message.'<tr>';
        $message = $message.'<td>Pays</td>';
        $message = $message.'<td>'.$_POST['country'].'</td>';
        $message = $message.'</tr>';
        $message = $message.'<tr>';
        $message = $message.'<td>Message</td>';
        $message = $message.'<td>'.$_POST['message'].'</td>';
        $message = $message.'</tr>';
        $message = $message.'<tr>';
        $message = $message.'<td>Interessé par :</td>';
        $message = $message.'<td></td>';
        $message = $message.'</tr>';
        foreach(MACHINES as $key => $value)
        {
            if(gettype($_POST[$key]) == 'boolean' && $_POST[$key] == 1)
            {
                $message = $message.'<tr>';
                $message = $message.'<td>'.$key.'</td>';
                // $message = $message.'<td>'.(gettype($_POST[$key]) == "boolean" && $_POST[$key] == 1 ? 'true' : 'false').'</td>';
                $message = $message.'</tr>';
            }
        }
        // $message = $message.'<tr>';
        // $message = $message.'<td>ACCUTITE | PRECISION CONTOURING</td>';
        // $message = $message.'<td>'.(gettype($_POST['ACCUTITE | PRECISION CONTOURING']) == "boolean" && $_POST['ACCUTITE | PRECISION CONTOURING'] == 1 ? 'true' : 'false').'</td>';
        // $message = $message.'</tr>';
        
        // $message = $message.'<tr>';
        // $message = $message.'<td>BODYFX & MINIFX | NON-INVASIVE BODY TREATMENT</td>';
        // $message = $message.'<td>'.(gettype($_POST['BODYFX & MINIFX | NON-INVASIVE BODY TREATMENT']) == "boolean" && $_POST['BODYFX & MINIFX | NON-INVASIVE BODY TREATMENT'] == 1 ? 'true' : 'false').'</td>';
        // $message = $message.'</tr>';
        
        // $message = $message.'<tr>';
        // $message = $message.'<td>BODYTITE/FACETITE | MINIMALLY INVASIVE PROCEDURES</td>';
        // $message = $message.'<td>'.(gettype($_POST['BODYTITE/FACETITE | MINIMALLY INVASIVE PROCEDURES']) == "boolean" && $_POST['BODYTITE/FACETITE | MINIMALLY INVASIVE PROCEDURES'] == 1 ? 'true' : 'false').'</td>';
        // $message = $message.'</tr>';
        
        // $message = $message.'<tr>';
        // $message = $message.'<td>DIOLAZEXL | HAIR REMOVAL</td>';
        // $message = $message.'<td>'.(gettype($_POST['DIOLAZEXL | HAIR REMOVAL']) == "boolean" && $_POST['DIOLAZEXL | HAIR REMOVAL'] == 1 ? 'true' : 'false').'</td>';
        // $message = $message.'</tr>';
        
        // $message = $message.'<tr>';
        // $message = $message.'<td>EMBRACERF | FACIAL REFINEMENT</td>';
        // $message = $message.'<td>'.(gettype($_POST['EMBRACERF | FACIAL REFINEMENT']) == "boolean" && $_POST['EMBRACERF | FACIAL REFINEMENT'] == 1 ? 'true' : 'false').'</td>';
        // $message = $message.'</tr>';
        
        // $message = $message.'<tr>';
        // $message = $message.'<td>EVOKE | HANDS-FREE FACIAL REMODELING</td>';
        // $message = $message.'<td>'.(gettype($_POST['EVOKE | HANDS-FREE FACIAL REMODELING']) == "boolean" && $_POST['EVOKE | HANDS-FREE FACIAL REMODELING'] == 1 ? 'true' : 'false').'</td>';
        // $message = $message.'</tr>';
        
        // $message = $message.'<tr>';
        // $message = $message.'<td>EVOLVE | HANDS-FREE SKIN AND BODY REMODELING</td>';
        // $message = $message.'<td>'.(gettype($_POST['EVOLVE | HANDS-FREE SKIN AND BODY REMODELING']) == "boolean" && $_POST['EVOLVE | HANDS-FREE SKIN AND BODY REMODELING'] == 1 ? 'true' : 'false').'</td>';
        // $message = $message.'</tr>';
        
        // $message = $message.'<tr>';
        // $message = $message.'<td>FORMA | SKIN REMODELING</td>';
        // $message = $message.'<td>'.(gettype($_POST['FORMA | SKIN REMODELING']) == "boolean" && $_POST['FORMA | SKIN REMODELING'] == 1 ? 'true' : 'false').'</td>';
        // $message = $message.'</tr>';
        
        // $message = $message.'<tr>';
        // $message = $message.'<td>FRACTORA | FRACTIONAL RESURFACING</td>';
        // $message = $message.'<td>'.(gettype($_POST['FRACTORA | FRACTIONAL RESURFACING']) == "boolean" && $_POST['FRACTORA | FRACTIONAL RESURFACING'] == 1 ? 'true' : 'false').'</td>';
        // $message = $message.'</tr>';
        
        // $message = $message.'<tr>';
        // $message = $message.'<td>LUMECCA | PIGMENT & VASCULAR</td>';
        // $message = $message.'<td>'.(gettype($_POST['LUMECCA | PIGMENT & VASCULAR']) == "boolean" && $_POST['LUMECCA | PIGMENT & VASCULAR'] == 1 ? 'true' : 'false').'</td>';
        // $message = $message.'</tr>';
        
        // $message = $message.'<tr>';
        // $message = $message.'<td>MORPHEUS8 | FACIAL AND BODY FRACTIONAL REMODELING</td>';
        // $message = $message.'<td>'.(gettype($_POST['MORPHEUS8 | FACIAL AND BODY FRACTIONAL REMODELING']) == "boolean" && $_POST['MORPHEUS8 | FACIAL AND BODY FRACTIONAL REMODELING'] == 1 ? 'true' : 'false').'</td>';
        // $message = $message.'</tr>';
        
        // $message = $message.'<tr>';
        // $message = $message.'<td>PLUS | SKIN REMODELING FOR LARGER AREAS</td>';
        // $message = $message.'<td>'.(gettype($_POST['PLUS | SKIN REMODELING FOR LARGER AREAS']) == "boolean" && $_POST['PLUS | SKIN REMODELING FOR LARGER AREAS'] == 1 ? 'true' : 'false').'</td>';
        // $message = $message.'</tr>';
        
        // $message = $message.'<tr>';
        // $message = $message.'<td>TRITON | DUOLIGHT/DUODARK | HAIR REMOVAL</td>';
        // $message = $message.'<td>'.(gettype($_POST['TRITON | DUOLIGHT/DUODARK | HAIR REMOVAL']) == "boolean" && $_POST['TRITON | DUOLIGHT/DUODARK | HAIR REMOVAL'] == 1 ? 'true' : 'false').'</td>';
        // $message = $message.'</tr>';

        // $message = $message.'<tr>';
        // $message = $message.'<td>VOTIVA | AVIVA | FEMININE WELLNESS</td>';
        // $message = $message.'<td>'.(gettype($_POST['VOTIVA | AVIVA | FEMININE WELLNESS']) == "boolean" && $_POST['VOTIVA | AVIVA | FEMININE WELLNESS'] == 1 ? 'true' : 'false').'</td>';
        // $message = $message.'</tr>';
        
        $message = $message.'</table>';
        $message = $message.'</td>';
        $message = $message.'</tr>';
        $message = $message.'</table>';
        $message = $message.'</body>';
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
        // logEvent('contactUsMail()');
        // logEvent('$_POST["firstname"] : '.$_POST['firstname']);
        // logEvent('$_POST["lastname"] : '.$_POST['lastname']);
        // logEvent('$_POST["subject"] : '.SPECIALITY[$_POST['subject']]);
        // logEvent('$_POST["mail"] : '.$_POST['mail']);
        // logEvent('$_POST["phone"] : '.$_POST['phone']);
        // logEvent('$_POST["zip"] : '.$_POST['zip']);
        // logEvent('$_POST["city"] : '.$_POST['city']);
        // logEvent('$_POST["message"] : '.$_POST['message']);
        $message = '';
        $message = $message.'<html>';
        $message = $message.'<body>';
        $message = $message.'<table cellspacing="0" cellpadding="10" border="0">';
        $message = $message.'<tr>';
        $message = $message.'<td>';
        $message = $message.'<table>';
        $message = $message.'<tr>';
        $message = $message.'<td>Prénom</td><td>'.$_POST['firstname'].'</td>';
        $message = $message.'</tr>';
        $message = $message.'<tr>';
        $message = $message.'<td>Nom</td><td>'.$_POST['lastname'].'</td>';
        $message = $message.'</tr>';
        $message = $message.'<tr>';
        $message = $message.'<td>Spécialité</td><td>'.SPECIALITY[$_POST['subject']].'</td>';
        $message = $message.'</tr>';
        $message = $message.'<tr>';
        $message = $message.'<td>E-Mail</td><td>'.$_POST['mail'].'</td>';
        $message = $message.'</tr>';
        $message = $message.'<tr>';
        $message = $message.'<td>Téléphone</td><td>'.$_POST['phone'].'</td>';
        $message = $message.'</tr>';
        $message = $message.'<tr>';
        $message = $message.'<td>Code postal</td><td>'.$_POST['zip'].'</td>';
        $message = $message.'</tr>';
        $message = $message.'<tr>';
        $message = $message.'<td>Ville</td><td>'.$_POST['city'].'</td>';
        $message = $message.'</tr>';
        $message = $message.'<tr>';
        $message = $message.'<td>Message</td><td>'.$_POST['message'].'</td>';
        $message = $message.'</tr>';
        $message = $message.'</table>';
        $message = $message.'</td>';
        $message = $message.'</tr>';
        $message = $message.'</table>';
        $message = $message.'</body>';
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
        logEvent('mail action : '.$mail);
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
    function tryMail(string $mail, string $speciality, string $action, string $type):bool
    {
        
        try {
            if(sendMail($mail, $speciality, buildMail($action)))
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
            unset($_POST);
            return true;
        }
        catch(\Exception $e) {
            logError('Error during sending mail '.$type);
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
    function sendMail(string $to, string $subject, string $content):bool {
        try
        {
            
            logEvent('To : '.$to);
            logEvent('Subject : '.SPECIALITY[$subject]);
            logEvent('Init mail headers');
            
            $headers = "From: InmodeMD-FR Contact <submit-contact@inmodemd.fr>" . "\r\n";
            $headers .= "MIME-version: 1.0\r\n".'Date: '.date('r')."\r\n";
            $headers .= "Content-Type: text/html; charset=UTF-8\r\n".'X-Mailer: PHP/' . phpversion();
            
            logEvent('Headers : ');
            logEvent($headers);
            
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