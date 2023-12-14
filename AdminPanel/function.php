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

    function login($inputData){

        
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
           VALUES('$id', '$incomingUserId','$msg')";
         
      
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

  function updateData($userInput, $params)
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
              $pTitle = mysqli_real_escape_string($conn, $userInput['pending_title']);
              $pDate = mysqli_real_escape_string($conn, $userInput['pending_date']);
              $pDec = mysqli_real_escape_string($conn, $userInput['pending_dec']);
             
              if(empty(trim($id))){
                  return error422('Enter your  id');
              }
              if(empty(trim($pTitle))){
                  return error422('Enter your  title');
              }
              if(empty(trim($pDate))){
                  return error422('Enter your  Description');
              }

      else
      {         
        $insertQuery = "UPDATE pending_approvals SET pending_date ='$pDate',
           pending_title ='$pTitle', pending_dec ='$pDec' WHERE id ='$id' ";
          
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
  

  //fetch with id 

  function getPending($params)
    {
        global $conn;

            if(!isset($params['id'])){
                return error422("product id not found");
            }
            elseif($params['id'] == null ){
                return error422("Enter the product id");
            }
                $id = mysqli_real_escape_string($conn, $params['id']);
              
                $insertQuery = "SELECT * FROM pending_approvals where id = '$id'";
              
                $query_run = mysqli_query($conn, $insertQuery);
          
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




   


     //delete

     function getdeletePending($id){

        global $conn;
        
        if(!isset($id['id'])){
            return error422('product id not found in url');
        }
        elseif($id['id'] == null){
            return error422('Enter the product id');
        }

        $pID = mysqli_real_escape_string($conn, $id['id']);

        $query = "DELETE FROM pending_approvals Where id = '$pID' LIMIT 1";
        $result = mysqli_query($conn, $query);

        if($result){
            $data = [
                'status' =>200,
                'message' =>'Product deleted Successfully',
            ];
            header("HTTP/1.0 200 Deleted");
            return json_encode($data);
        }
        else{
            $data = [
                'status' =>404,
                'message' =>'Product Not Found',
            ];
            header("HTTP/1.0 404 Product Not Found");
            return json_encode($data);
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

   

      //fetch  user data with id 

  function getInvoiceUser($params)
  {
      global $conn;

          if(!isset($params['id'])){
              return error422("product id not found");
          }
          elseif($params['id'] == null ){
              return error422("Enter the product id");
          }
              $id = mysqli_real_escape_string($conn, $params['id']);
            
              $insertQuery = "SELECT * FROM userinfo where id = '$id'";
            
              $query_run = mysqli_query($conn, $insertQuery);
        
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

?>