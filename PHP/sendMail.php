<?php

$char=[1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

$otp="";

for($i=0;$i<8;$i++){
	$otp.=$char[array_rand($char,1)];
}
echo $otp;

?>