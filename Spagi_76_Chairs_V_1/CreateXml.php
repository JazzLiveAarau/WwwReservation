<!DOCTYPE html>
<html>

<head>
<title>JAZZ live AARAU Reservation XML Dateien kreieren</title>

<meta charset="utf-8">

</head>

<body bgcolor="#ff0028" link="#ff0028" vlink="#ff0028" alink="#ff0028">
 
<font face="Arial">

<?php

// Passed data from the add reservation page
$xml_content = $_GET['xml_content'];
$calling_page = $_GET['loc_ref'];

echo "<br>";  
echo "<h1>Kreieren von Reservationsdateien</h1><br><br>";

echo "<br>";
echo "The page that redirected to this page: <br>";
echo $calling_page;
echo "<br><br>";

$msg_file_saved = "Auf dem Server gespeichert";
$error_msg_open_file = "Unable to open file!";

$start_search_string = "<?xml version=";
//QQQ$end_search_string = "</Reservations>";
$end_search_string = "</H>";
$length_end_search_string = strlen($end_search_string);


$xml_content_1 = $xml_content;
$pos_start_new_file_1 = strpos($xml_content_1, $start_search_string);
$pos_end_new_file_1 = strpos($xml_content_1, $end_search_string);
$file_name_untrimmed_1 = substr($xml_content_1,0,$pos_start_new_file_1);
$file_name_1 = trim($file_name_untrimmed_1, " ");
$file_1_content = substr($xml_content_1, $pos_start_new_file_1, $pos_end_new_file_1 + $length_end_search_string - $pos_start_new_file_1);


$xml_file_object_1 = fopen($file_name_1, "w") or die($error_msg_open_file);
fwrite($xml_file_object_1, $file_1_content); 
fclose($xml_file_object_1); 	

echo "$msg_file_saved  $file_name_1 <br>";
 
$xml_content_2 = substr($xml_content_1, $pos_end_new_file_1 + $length_end_search_string);

$pos_start_new_file_2 = strpos($xml_content_2, $start_search_string);
$pos_end_new_file_2 = strpos($xml_content_2, $end_search_string);
$file_name_untrimmed_2 = substr($xml_content_2,0,$pos_start_new_file_2);
$file_name_2 = trim($file_name_untrimmed_2, " ");
$file_2_content = substr($xml_content_2, $pos_start_new_file_2, $pos_end_new_file_2 + $length_end_search_string - $pos_start_new_file_2);

$xml_file_object_2 = fopen($file_name_2, "w") or die($error_msg_open_file);
fwrite($xml_file_object_2, $file_2_content); 
fclose($xml_file_object_2);

echo "$msg_file_saved  $file_name_2 <br>";


$xml_content_3 = substr($xml_content_2, $pos_end_new_file_2 + $length_end_search_string);

$pos_start_new_file_3 = strpos($xml_content_3, $start_search_string);
$pos_end_new_file_3 = strpos($xml_content_3, $end_search_string);
$file_name_untrimmed_3 = substr($xml_content_3,0,$pos_start_new_file_3);
$file_name_3 = trim($file_name_untrimmed_3, " ");
$file_3_content = substr($xml_content_3, $pos_start_new_file_3, $pos_end_new_file_3 + $length_end_search_string - $pos_start_new_file_3);

$xml_file_object_3 = fopen($file_name_3, "w") or die($error_msg_open_file);
fwrite($xml_file_object_3, $file_3_content); 
fclose($xml_file_object_3);

echo "$msg_file_saved  $file_name_3 <br>";


$xml_content_4 = substr($xml_content_3, $pos_end_new_file_3 + $length_end_search_string);

$pos_start_new_file_4 = strpos($xml_content_4, $start_search_string);
$pos_end_new_file_4 = strpos($xml_content_4, $end_search_string);
$file_name_untrimmed_4 = substr($xml_content_4,0,$pos_start_new_file_4);
$file_name_4 = trim($file_name_untrimmed_4, " ");
$file_4_content = substr($xml_content_4, $pos_start_new_file_4, $pos_end_new_file_4 + $length_end_search_string - $pos_start_new_file_4);

$xml_file_object_4 = fopen($file_name_4, "w") or die($error_msg_open_file);
fwrite($xml_file_object_4, $file_4_content); 
fclose($xml_file_object_4);

echo "$msg_file_saved  $file_name_4 <br>";


$xml_content_5 = substr($xml_content_4, $pos_end_new_file_4 + $length_end_search_string);

$pos_start_new_file_5 = strpos($xml_content_5, $start_search_string);
$pos_end_new_file_5 = strpos($xml_content_5, $end_search_string);
$file_name_untrimmed_5 = substr($xml_content_5,0,$pos_start_new_file_5);
$file_name_5 = trim($file_name_untrimmed_5, " ");
$file_5_content = substr($xml_content_5, $pos_start_new_file_5, $pos_end_new_file_5 + $length_end_search_string - $pos_start_new_file_5);

$xml_file_object_5 = fopen($file_name_5, "w") or die($error_msg_open_file);
fwrite($xml_file_object_5, $file_5_content); 
fclose($xml_file_object_5);

echo "$msg_file_saved  $file_name_5 <br>";

$xml_content_6 = substr($xml_content_5, $pos_end_new_file_5 + $length_end_search_string);

$pos_start_new_file_6 = strpos($xml_content_6, $start_search_string);
$pos_end_new_file_6 = strpos($xml_content_6, $end_search_string);
$file_name_untrimmed_6 = substr($xml_content_6,0,$pos_start_new_file_6);
$file_name_6 = trim($file_name_untrimmed_6, " ");
$file_6_content = substr($xml_content_6, $pos_start_new_file_6, $pos_end_new_file_6 + $length_end_search_string - $pos_start_new_file_6);

$xml_file_object_6 = fopen($file_name_6, "w") or die($error_msg_open_file);
fwrite($xml_file_object_6, $file_6_content); 
fclose($xml_file_object_6);

echo "$msg_file_saved  $file_name_6 <br>";
 
 
$xml_content_7 = substr($xml_content_6, $pos_end_new_file_6 + $length_end_search_string);

$pos_start_new_file_7 = strpos($xml_content_7, $start_search_string);
$pos_end_new_file_7 = strpos($xml_content_7, $end_search_string);
$file_name_untrimmed_7 = substr($xml_content_7,0,$pos_start_new_file_7);
$file_name_7 = trim($file_name_untrimmed_7, " ");
$file_7_content = substr($xml_content_7, $pos_start_new_file_7, $pos_end_new_file_7 + $length_end_search_string - $pos_start_new_file_7);

$xml_file_object_7 = fopen($file_name_7, "w") or die($error_msg_open_file);
fwrite($xml_file_object_7, $file_7_content); 
fclose($xml_file_object_7);

echo "$msg_file_saved  $file_name_7 <br>";

$xml_content_8 = substr($xml_content_7, $pos_end_new_file_7 + $length_end_search_string);

$pos_start_new_file_8 = strpos($xml_content_8, $start_search_string);
$pos_end_new_file_8 = strpos($xml_content_8, $end_search_string);
$file_name_untrimmed_8 = substr($xml_content_8,0,$pos_start_new_file_8);
$file_name_8 = trim($file_name_untrimmed_8, " ");
$file_8_content = substr($xml_content_8, $pos_start_new_file_8, $pos_end_new_file_8 + $length_end_search_string - $pos_start_new_file_8);

$xml_file_object_8 = fopen($file_name_8, "w") or die($error_msg_open_file);
fwrite($xml_file_object_8, $file_8_content); 
fclose($xml_file_object_8);

echo "$msg_file_saved  $file_name_8 <br>";

$xml_content_9 = substr($xml_content_8, $pos_end_new_file_8 + $length_end_search_string);

$pos_start_new_file_9 = strpos($xml_content_9, $start_search_string);
$pos_end_new_file_9 = strpos($xml_content_9, $end_search_string);
$file_name_untrimmed_9 = substr($xml_content_9,0,$pos_start_new_file_9);
$file_name_9 = trim($file_name_untrimmed_9, " ");
$file_9_content = substr($xml_content_9, $pos_start_new_file_9, $pos_end_new_file_9 + $length_end_search_string - $pos_start_new_file_9);

$xml_file_object_9 = fopen($file_name_9, "w") or die($error_msg_open_file);
fwrite($xml_file_object_9, $file_9_content); 
fclose($xml_file_object_9);

echo "$msg_file_saved  $file_name_9 <br>";

$xml_content_10 = substr($xml_content_9, $pos_end_new_file_9 + $length_end_search_string);

$pos_start_new_file_10 = strpos($xml_content_10, $start_search_string);
$pos_end_new_file_10 = strpos($xml_content_10, $end_search_string);
$file_name_untrimmed_10 = substr($xml_content_10,0,$pos_start_new_file_10);
$file_name_10 = trim($file_name_untrimmed_10, " ");
$file_10_content = substr($xml_content_10, $pos_start_new_file_10, $pos_end_new_file_10 + $length_end_search_string - $pos_start_new_file_10);

$xml_file_object_10 = fopen($file_name_10, "w") or die($error_msg_open_file);
fwrite($xml_file_object_10, $file_10_content); 
fclose($xml_file_object_10);

echo "$msg_file_saved  $file_name_10 <br>";
 
$xml_content_11 = substr($xml_content_10, $pos_end_new_file_10 + $length_end_search_string);

$pos_start_new_file_11 = strpos($xml_content_11, $start_search_string);
$pos_end_new_file_11 = strpos($xml_content_11, $end_search_string);
$file_name_untrimmed_11 = substr($xml_content_11,0,$pos_start_new_file_11);
$file_name_11 = trim($file_name_untrimmed_11, " ");
$file_11_content = substr($xml_content_11, $pos_start_new_file_11, $pos_end_new_file_11 + $length_end_search_string - $pos_start_new_file_11);

$xml_file_object_11 = fopen($file_name_11, "w") or die($error_msg_open_file);
fwrite($xml_file_object_11, $file_11_content); 
fclose($xml_file_object_11);

echo "$msg_file_saved  $file_name_11 <br>"; 
 
 
$xml_content_12 = substr($xml_content_11, $pos_end_new_file_11 + $length_end_search_string);

$pos_start_new_file_12 = strpos($xml_content_12, $start_search_string);
$pos_end_new_file_12 = strpos($xml_content_12, $end_search_string);
$file_name_untrimmed_12 = substr($xml_content_12,0,$pos_start_new_file_12);
$file_name_12 = trim($file_name_untrimmed_12, " ");
$file_12_content = substr($xml_content_12, $pos_start_new_file_12, $pos_end_new_file_12 + $length_end_search_string - $pos_start_new_file_12);

$xml_file_object_12 = fopen($file_name_12, "w") or die($error_msg_open_file);
fwrite($xml_file_object_12, $file_12_content); 
fclose($xml_file_object_12);

echo "$msg_file_saved  $file_name_12 <br>";

echo "<br>"; 
echo "<br>"; 
echo "*****************************************************************<br>"; 
echo "<br>"; 
echo "Diese Webseite bitte schliessen!";
echo "<br>"; 
echo "*****************************************************************<br>";  
?>
 
</font>  
 
</body>

</html>
