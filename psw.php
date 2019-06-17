<?php
$db_host="localhost";
$db_user="root";
$db_password="";
$db_name="student";

$db = new mysqli($db_host,$db_user, $db_password, $db_name);
if ($db->connect_errno) {
    echo "Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error;
}
$a=$_POST["uname"];

$sql = "SELECT * FROM detail where email='$a'";

$result = mysqli_query($db, $sql);

if (mysqli_num_rows($result) > 0)
 {
    while($row = mysqli_fetch_array($result)) 
    {
        echo "Welcome ".$row['fname']." ".$row['lname']."<br>";
        echo "Your password is ".$row['pass'];
    } 
} 
 else
 {
    echo "0 results";
 }

mysqli_close($db);
?>
