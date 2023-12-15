<?php 


    header('Access-Control-Allow-Origin:*');
    header('Content-Type:application/json');
    header("Access-Control-Allow-Credentials", true);
    include('db.php');
 
    require "vendor/autoload.php";
    
    use \Firebase\JWT\JWT; 
    use \Firebase\JWT\Key;

    function error422($message){
        $data = [
            'status' =>422,
            'message' =>$message,
        ];
        header("HTTP/1.0 422 Unprocessable Entry");
        echo json_encode($data);
        exit();
    }

   
    //Login 

    function login($inputData)
    {

        
        global $conn;
                $email = mysqli_real_escape_string($conn, $inputData['email']);
                $password = mysqli_real_escape_string($conn, md5($inputData['password']));
                // echo $password;

        $query = " SELECT * FROM chat_user_table where user_email = '$email' ";
        
        $query_run = mysqli_query($conn, $query);
   
        if($query_run)
        {
            
            if(mysqli_num_rows($query_run) > 0)
            {
                
                $res = mysqli_fetch_array($query_run, MYSQLI_ASSOC); 
          
                $key = 'example_key';
                $payload = array(
                    'id'=>$res['userId'],
                    'username'=>$res['user_name'],
                    'email'=>$res['user_email'],
                    'password'=>$res['user_password']
                );
               

                if($password == $res['user_password']){
                    $jwt = JWT::encode($payload, $key,'HS256');
                    $arr['id'] = $res['userId'];
                    $arr['jwt'] = $jwt;

                    $data = [
                    'status' =>200,
                    'message' =>'User list fetch successfully',
                    'data' =>$arr
                ];
                    }
                    else{
                        $data = [
                            'status' =>400,
                            'message' =>'User not found',
                            'data' =>$verify
                        ];
                    }
              
                header("HTTP/1.0 200 Ok");
                echo json_encode($data);
                
        

            }else
            {
                echo '<script>alert("No User Found")</script>';
                $data = [
                    'status' =>404,
                    'message' =>'No User Find',
                   
                ];
                header("HTTP/1.0 404 No User Find");
                return json_encode($data);
            }
        }

        else
        {
            $data = [
                'status' =>500,
                'message' =>'Internal server error',
            ];
            header("HTTP/1.0 500 Internal server error");
            return json_encode($data);

        }
    }

    
  // register 

  function storeUser($userInput)
  {
      global $conn;
           
              $name = mysqli_real_escape_string($conn, $userInput['name']);
              $email = mysqli_real_escape_string($conn, ($userInput['email']));
              $password = mysqli_real_escape_string($conn, $userInput['password']);

          
              if(empty(trim($name))){
                  return error422('Enter your  name');
              }
              if(empty(trim($email))){
                  return error422('Enter the email');
              }
              if(empty(trim($password))){
                  return error422('Enter your  password');
              }

      else
      {
         
          
          $insertQuery = "INSERT INTO chat_user_table( user_name, user_email, user_password,
            user_profile, user_status, user_verification_code, user_login_status )
           VALUES('$name', '$email', MD5('$password'), 'asa', 'active', '234', 'on' )";
         
      
          $result = mysqli_query($conn, $insertQuery);
         
          if($result)
          {
              $data = [

                  'status' =>201,
                  'message' =>' inserted successfully',
              ];
              header("HTTP/1.0 201 Created");
              return json_encode($data);
          }
          else
          {
              $data = [
                  'status' =>500,
                  'message' =>'internal server error',
              ];
              header("HTTP/1.0 500 internal server error");
              return json_encode($data);
          }

      }
  }

  // register 

  function storeMsg($userInput)
  {
      global $conn;
           
              $id = mysqli_real_escape_string($conn, $userInput['id']);
              $incomingUserId = mysqli_real_escape_string($conn, $userInput['incomingUserId']);
              $msg = mysqli_real_escape_string($conn, $userInput['msg']);

          
              if(empty(trim($id))){
                  return error422('Enter your  name');
              }
              if(empty(trim($incomingUserId))){
                  return error422('Enter the incomingUserId');
              }
              if(empty(trim($msg))){
                  return error422('Enter your  message');
              }

      else
      {
         
          
          $insertQuery = "INSERT INTO `chatrooms`(incoming_userId, outgoing_userId, msg)
           VALUES('$incomingUserId', '$id', '$msg')";
         
      
          $result = mysqli_query($conn, $insertQuery);
         
          if($result)
          {
              $data = [

                  'status' =>201,
                  'message' =>' inserted successfully',
              ];
              header("HTTP/1.0 201 Created");
              return json_encode($data);
          }
          else
          {
              $data = [
                  'status' =>500,
                  'message' =>'internal server error',
              ];
              header("HTTP/1.0 500 internal server error");
              return json_encode($data);
          }

      }
  }

  //update

  function getChat( $params)
  {
      global $conn;
      // if(isset($_FILES['pimg']["name"])){
          if(!isset($params['id'])){
              return error422("product id not found");
          }
          elseif($params['id'] == null ){
              return error422("Enter the id");
          }
              $id = mysqli_real_escape_string($conn, $params['id']);
          
             
              if(empty(trim($id))){
                  return error422('Enter your  id');
              }
              

      else
      {         
        $insertQuery = "SELECT * FROM chatrooms where outgoing_userId  = '$id' ORDER BY chatrooms.createdOn DESC";
          
          $result = mysqli_query($conn, $insertQuery);
         
          if($result)
          {
              
              if(mysqli_num_rows($result) > 0)
              {
    
                  $res = mysqli_fetch_all($result, MYSQLI_ASSOC);
    
                  $data = [
                      'status' =>200,
                      'message' =>'User list fetch successfully',
                      'data' =>$res
                  ];
                  header("HTTP/1.0 200 Ok");
                  return json_encode($data);
          
    
              }else
              {
                  $data = [
                      'status' =>404,
                      'message' =>'No User Find',
                  ];
                  header("HTTP/1.0 404 No User Find");
                  return json_encode($data);
              }
          }
          else
          {
              $data = [
                  'status' =>500,
                  'message' =>'internal server error',
              ];
              header("HTTP/1.0 500 internal server error");
              return json_encode($data);
          }

      }
  }
  


    //fetch user data

    function getUser()
    {

        global $conn;
       
            try {
            $key = 'example_key';
            $headers=getallheaders();
            $authcode=trim($headers['Authorization']);
            $token=substr($authcode,7);
            $decoded = JWT::decode($token, new Key($key,'HS256'));   
          
            $query = "SELECT * FROM chat_user_table";
              
            $query_run = mysqli_query($conn, $query);
            
        if($query_run)
        {
            
            if(mysqli_num_rows($query_run) > 0)
            {
                
                $res = mysqli_fetch_all($query_run, MYSQLI_ASSOC);                
                // echo $_SESSION['userId']; 
                $data = [
                    'status' =>200,
                    'message' =>'User list fetch successfully',
                    'data' =>$res
                ];
                header("HTTP/1.0 200 Ok");
                return json_encode($data);
                

            }else
            {
                $data = [
                    'status' =>404,
                    'message' =>'No User Find',
                ];
                header("HTTP/1.0 404 No User Find");
                return json_encode($data);
            }
        }

        else
        {
            $data = [
                'status' =>500,
                'message' =>'Internal server error',
            ];
            header("HTTP/1.0 500 Internal server error");
            return json_encode($data);

        }
          }
          
          //catch exception
          catch(Exception $e) {
            
            echo 'Message: ' .$e->getMessage();

          }
   
    }

   
    //fetch user by id
    function getIndividualUser( $params)
    {
        global $conn;
        // if(isset($_FILES['pimg']["name"])){
            if(!isset($params['id'])){
                return error422("product id not found");
            }
            elseif($params['id'] == null ){
                return error422("Enter the id");
            }
                $id = mysqli_real_escape_string($conn, $params['id']);
            
               
                if(empty(trim($id))){
                    return error422('Enter your  id');
                }
                
  
        else
        {         
          $insertQuery = "SELECT * FROM `chat_user_table` where userId = '$id'";
            
            $result = mysqli_query($conn, $insertQuery);
           
            if($result)
            {
                
                if(mysqli_num_rows($result) > 0)
                {
      
                    $res = mysqli_fetch_all($result, MYSQLI_ASSOC);
      
                    $data = [
                        'status' =>200,
                        'message' =>'User list fetch successfully',
                        'data' =>$res
                    ];
                    header("HTTP/1.0 200 Ok");
                    return json_encode($data);
            
      
                }else
                {
                    $data = [
                        'status' =>404,
                        'message' =>'No User Find',
                    ];
                    header("HTTP/1.0 404 No User Find");
                    return json_encode($data);
                }
            }
            else
            {
                $data = [
                    'status' =>500,
                    'message' =>'internal server error',
                ];
                header("HTTP/1.0 500 internal server error");
                return json_encode($data);
            }
  
        }
    }


    //update 
    
    //update product data

    function updateData($userInput, $productParams)
    {
        global $conn;
        // if(isset($_FILES['pimg']["name"])){
            if(!isset($productParams['id'])){
                return error422("product id not found");
            }
            elseif($productParams['id'] == null ){
                return error422("Enter the product id");
            }
                $id = mysqli_real_escape_string($conn, $productParams['id']);
                $name = mysqli_real_escape_string($conn, $userInput['user_name']);
                if(isset($_FILES['user_profile']["name"])){
                $target_dir = "upload/";
                $target_file = $target_dir . basename($_FILES['user_profile']["name"]);
                $uploadOk = 1;
                $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
                }
                if(empty(trim($id))){
                    return error422('Enter your Product Title');
                }
               
        else
        {
           
            // Check if image file is a actual image or fake image
            if(isset($_FILES['user_profile']["name"])){
              $check = getimagesize($_FILES['user_profile']["tmp_name"]);
              if($check !== false) {
                echo "File is an image - " . $check["mime"] . ".";
                $uploadOk = 1;
              } else {
                echo "File is not an image.";
                $uploadOk = 0;
              }

              if ($uploadOk == 0) {
                echo "Sorry, your file was not uploaded.";
              // if everything is ok, try to upload file
              } else {
                if (move_uploaded_file($_FILES['user_profile']["tmp_name"], $target_file)) {
                  echo "The file ". htmlspecialchars( basename( $_FILES['user_profile']["name"])). " has been uploaded.";
                } else {
                  echo "Sorry, there was an error uploading your file.";
                }
              }
            
            $insertQuery = "UPDATE chat_user_table SET user_name ='$name', user_profile ='$target_file'
            WHERE userId ='$id' ";
            
            }
            else{
                $insertQuery = "UPDATE chat_user_table SET user_name ='$name'
              WHERE userId ='$id' ";
            }
            $query_run = mysqli_query($conn, $insertQuery);
              
            echo $query_run;
               
        if($query_run)
        {
            
            if(mysqli_num_rows($query_run) > 0)
            {
                $res = mysqli_fetch_all($query_run, MYSQLI_ASSOC);

                $data = [
                    'status' =>200,
                    'message' =>'User list fetch successfully',
                    'data' =>$res
                ];
                header("HTTP/1.0 200 Ok");
                return json_encode($data);
            }else
            {
                $data = [
                    'status' =>404,
                    'message' =>'No User Find',
                ];
                header("HTTP/1.0 404 No User Find");
                return json_encode($data);
            }
        }

        else
        {
            $data = [
                'status' =>500,
                'message' =>'Internal server error',
            ];
            header("HTTP/1.0 500 Internal server error");
            return json_encode($data);

        }

        }
    }
?>