<?php 

$numero1= $_GET["GradosC"];
$numero2 = $_GET["RepeticionesC"];

$potencia=2;
$a=1;
$coseno=0 ;
$num=1 ;
$deno ;
$opc1=0 ;
$fact;

for($i=1;$i<$numero2;$i++){
    $fact=1;
        while($potencia<=$a){
            $fact=$fact*$potencia;
            $a++;
        }
    if($i%2==0){
        $coseno=$coseno+pow($numero1, $potencia)/$fact;
    }else {
        $coseno=$coseno-pow($numero1, $potencia)/$fact;
    }
    $potencia=$potencia+2;
}
$opc1=2*$numero2;
$deno=pow(-1, $numero2)*pow($numero1, $opc1); 
       
while($a<=$opc1){
    $num=$num*$a;  
    $a++;   
      
}
$coseno=$coseno-($deno/$num); 

echo $coseno;
?> 
      