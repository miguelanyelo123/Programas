<?php 

    $g = $_GET["Grados"];
    $r = $_GET["Repeticiones"];


    Seno($g,$r);
    

    function factorial( $numero) {

        if ($numero == 0) {
            return 1;
        } else {
            return $numero * factorial($numero - 1);
        }
    }

    
    function Seno($repeticiones, $grados) {
        $numerador = pow(-1.0,$repeticiones);
        $fact = (2 * $repeticiones) + 1;
        $denominador = factorial($fact);
        $division = $numerador / $denominador;
        $radianes = deg2rad($grados);
        $resp = pow($radianes, $fact);
        echo $division * $resp;
    }

    function suma() {
        $acum = 0;
        for ($n = 0; $n < $repeticiones; $n++) {
            $acum += Seno($n,$grados);
        }
        return $acum;
    }
    $potencia=2;


?>
