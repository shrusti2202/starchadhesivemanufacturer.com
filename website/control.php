<?php

// include_once('../admin/model.php'); 


class control extends model    
{
	function __construct()
	{
		session_start();

		// model::__construct(); 

		$url = $_SERVER['PATH_INFO']; // PATH urldecode

		switch ($url) {
            case 'index.php':
            include_once('index.php');
            break;
            }
	}
}
$obj = new control;
?>