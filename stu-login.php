<html>
  <head>
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="css/stu-login.css">
  </head>
  <body>
  
    <div class="container">
        <form name="myform" method="POST" action="dashboard.php">
          <center>
          <fieldset id="login-area">
            <legend align="center">
            <img id="circle" src="img/stu.png">
            </legend>
              <div class="placeholders">
                <h2 id="head"> Student Login </h2>
                <input id="username" type="text" name="uname" placeholder="Username" autocomplete="off" required><br>
                <input id="pass" type="password" name="pass" placeholder="Password" autocomplete="off" required>
                <input id="input-btn" type="submit" value="" /><br>
              </div>
              <a id="r-pass" href="r_pass.php"> Forgot Password </a><br>
         </fieldset>
      </form>
      <div class="icon">
                   <a href="chat.php" class="sig">SIGN UP</a>
      </div>
    </div>
  </body>
</html>