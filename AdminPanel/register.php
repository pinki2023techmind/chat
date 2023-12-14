<?php 

    // header('Access-Control-Allow-Origin:*');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header('Content-Type:application/json');
    header('Access-Control-Allow-Method:*');
    header('Access-Control-Allow-Headers:Content-Type, Access-Control-Allow-Headers, Authorization, X-request-With');


        require_once('function.php');

            $inputData = json_decode(file_get_contents("php://input"), true);
          

            if(empty($inputData))
            {
                $storeUser = storeUser($_POST);
            }
            else
            {
                $storeUser = storeUser($inputData);
                
            }
           echo $storeUser;

?>