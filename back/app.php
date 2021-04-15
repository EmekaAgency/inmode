<?php
    header('Access-Control-Allow-Origin: *');
    // header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, DELETE");         
    
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    
    }
    function generateRandomString($length = 10) {
        return substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length/strlen($x)) )),1,$length);
    }
    
    $request_time = generateRandomString();

    header('Content-type: text/html; charset=UTF-8');
    date_default_timezone_set('Europe/London');
    setlocale(LC_TIME, "en_GB");
    
    try
    {
        require_once('./datas/datas.php');
    }
    catch(\Exception $e)
    {
        logError('Error during ./datas/datas.php loading');
        logError(json_encode($e));
        echo json_encode([
            'type' => 'client',
            'status' => 'fail',
            'message' => 'Servor error'
        ]);
        return;
    }
    try
    {
        require_once('./tools/utils.php');
    }
    catch(\Exception $e)
    {
        logError('Error during ./tools/utils.php loading');
        logError(json_encode($e));
        echo json_encode([
            'type' => 'client',
            'status' => 'fail',
            'message' => 'Servor error'
        ]);
        return;
    }
    try
    {
        require_once('./reset_request.php');
    }
    catch(\Exception $e)
    {
        logError('Error during ./reset_request.php loading');
        logError(json_encode($e));
        echo json_encode([
            'type' => 'client',
            'status' => 'fail',
            'message' => 'Servor error'
        ]);
        return;
    }
    
    logEvent('////////////////');
    logEvent('New request');
    
    if($_POST == null)
    {
        logEvent('Body parsing success');
        $req_body = file_get_contents('php://input');
        $_POST = json_decode($req_body, true);
    }
    
    try
    {
        logEvent('Try to detect $_POST action');
        if(isset($_POST['action']) && in_array($_POST['action'], $GLOBALS['mails']))
        {
            logEvent('$_POST action exist');
            if($_POST['action'] == 'full-contact')
            {
                logEvent('$_POST action = \'full-contact\'');
                if(isset($_POST['speciality'], $_POST['action']))
                {
                    tryMail('mael.fallet@gmail.com', $_POST['speciality'], $_POST['action'], 'full-contact');
                    // tryMail('info@inmodeuk.emeka.fr', $_POST['speciality'], $_POST['action'], 'full-contact');
                }
                else
                {
                    logError('One of the $_POST parameters is missing :');
                    logError(print_r($_POST));
                }
            }
            else if($_POST['action'] == 'contact-us')
            {
                logEvent('$_POST action = \'contact-us\'');
                if(isset($_POST['subject'], $_POST['action']))
                {
                    tryMail('mael.fallet@gmail.com', $_POST['subject'], $_POST['action'], 'contact-us');
                    // tryMail('info@inmodeuk.emeka.fr', $_POST['subject'], $_POST['action'], 'contact-us');
                }
                else {
                    logError('One of the $_POST parameters is missing :');
                    logError(print_r($_POST));
                }
            }
            else if($_POST['action'] == 'order-mail')
            {
                logEvent('$_POST action = \'order-mail\'');
                if(isset($_POST['order'], $_POST['email'], $_POST['for'], $_POST['action'], $_POST['type']))
                {
                        tryMail('mael.fallet@gmail.com' , 'Commande '.$_POST['order']['Reference'], $_POST['action'], 'order-mail');
                        // tryMail($_POST['email'] , 'Commande '.$_POST['order']['Reference'], $_POST['action'], 'order-mail');
                }
                else
                {
                    logError('One of the $_POST parameters is missing :');
                    logError(print_r($_POST));
                }
            }
            else if($_POST['action'] == 'fail-mail')
            {
                logEvent('$_POST action = \'fail-mail\'');
                if(isset($_POST['type'], $_POST['for'], $_POST['action'])) {
                    tryMail('mael.fallet@gmail.com' , 'Erreur envoi de mail '.$_POST['for'], $_POST['action'], 'fail-mail');
                    // tryMail('info@inmodeuk.emeka.fr' , 'Erreur envoi de mail '.$_POST['for'], $_POST['action'], 'fail-mail');
                    // tryMail('inmodeuk@emeka.fr' , 'Erreur envoi de mail '.$_POST['for'], $_POST['action'], 'fail-mail');
                }
                else
                {
                    logError('One of the $_POST parameters is missing :');
                    logError(print_r($_POST));
                }
            }
            reset_request("POST", $_POST['action']);
        }
        else
        {
            if(isset($_POST['action']))
            {
                logError("\$_POST['action'] : ".$_POST['action']);
            }
            logError(json_encode([
                'type' => 'server',
                'status' => 'fail',
                'message' => 'Method not allowed'
            ]));
            echo json_encode([
                'type' => 'client',
                'status' => 'fail',
                'message' => 'Servor error'
            ]);
            unset($_POST);
        }
    }
    catch (\Exception $e)
    {
        logError(json_encode($e));
        echo json_encode([
            'type' => 'client',
            'status' => 'fail',
            'message' => 'Servor error'
        ]);
        unset($_POST);
    }