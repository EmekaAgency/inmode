<?php

    $LOG_DIRECTORY = './logs';
    $ERROR_LOG_FILE = '/error.log';
    $EVENT_LOG_FILE = '/event.log';

    /**
     * Short - 
     * 
     * Detailed - 
     * 
     */
    function dateTime()
    {
        return date("Y-d-m H:i:s", time());
    }

    /**
    * Short - Log errors
    *
    * Detailed - 
    *
    * @param Type $name Description
    *
    * @return retour
    */
    function logError($error)
    {
        emmitDir($GLOBALS['LOG_DIRECTORY']);
        error_log(dateTime().' - '.$GLOBALS['request_time'] .' - '.$error.PHP_EOL.PHP_EOL, 3, $GLOBALS['LOG_DIRECTORY'].$GLOBALS['ERROR_LOG_FILE'], NULL);
    }

    /**
    * Short - Log events
    *
    * Detailed - 
    *
    * @param Type $name Description
    *
    * @return retour
    */
    function logEvent($message)
    {
        emmitDir($GLOBALS['LOG_DIRECTORY']);
        $flux = fopen($GLOBALS['LOG_DIRECTORY'].$GLOBALS['EVENT_LOG_FILE'], 'a', false, NULL);
        try
        {
            fwrite($flux, dateTime().' - '.$GLOBALS['request_time'] .' - '.$message.PHP_EOL);
        }
        catch (Exception $e)
        {
            logEvent("utils logEvent() Exception");
            logError($e);
        }
        fclose($flux);
    }

    /**
    * Short - Log events
    *
    * Detailed - 
    *
    * @param Type $name Description
    *
    * @return retour
    */
    function logFile($message, $file)
    {
        emmitDir($file);
        $flux = fopen($file, 'a', false, NULL);
        try
        {
            fwrite($flux, $message.PHP_EOL);
        }
        catch (Exception $e)
        {
            logEvent("utils logFile() Exception");
            logError($e);
        }
        fclose($flux);
    }