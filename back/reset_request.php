<?php

    function reset_request($method = "", $action = ""){
        if($method == "POST") {unset($_POST[$action]);unset($_POST);}
        if($method == "GET") {unset($_GET[$action]);unset($_GET);}
        if($method == "DELETE") {unset($_DELETE[$action]);unset($_DELETE);}
        if($method == "UPDATE") {unset($_UPDATE[$action]);unset($_UPDATE);}
    };