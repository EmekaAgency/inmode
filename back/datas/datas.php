<?php
    try
    {
        require_once('./datas/mail.php');
    }
    catch(\Exception $e)
    {
        echo json_encode($e);
        return;
    }