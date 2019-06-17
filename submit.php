<?php
$db_host="localhost";
$db_user="root";
$db_password="";
$db_name="student";

$db = new mysqli($db_host,$db_user, $db_password, $db_name);
if ($db->connect_errno) {
    echo "Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error;
}

$s=$_POST["a1"];
$t=$_POST["a2"];
$u=$_POST["a3"];
$v=$_POST["a4"];
$w=$_POST["a5"];
$x=$_POST["a6"];
$y=$_POST["a7"];

$query="INSERT INTO detail(fname,lname,email,college,dob,roll,pass) VALUES ('$s','$t','$u','$v','$w','$x','$y')";

if ($db->real_query($query)) {
    echo "Wrote message to db";
}else{
    echo "An error occurred";
    echo $db->errno;
}

$db->close();
?>