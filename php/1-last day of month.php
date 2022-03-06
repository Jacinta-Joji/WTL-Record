<?php
   
// Given a date in string format 
$datestring = '2020-04-23';
  
// Converting string to date
$date = strtotime($datestring);
   
// Last date of current month.
$lastdate = strtotime(date("Y-m-t", $date ));
  
  
// Day of the last date 
$day = date("l", $lastdate);
  
echo $day;
?>