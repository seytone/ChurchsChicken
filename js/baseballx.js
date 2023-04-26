/*
--- jQueryBall The best Baseball Game ---
--- Build by Jackson E < @JackDroid > ---
*/

var id;
var puntos = true;
var b1 = false, b2 = false, b3 = false, bS = false, pierde = false;
var minutos = 0, segundos = 0, milisegundos = 0, strike = 0, out = 0, carrera = 0, base = 0, b = 0, bAct = 0, bAnt = 0; 

function time() {
    if (puntos) ++milisegundos;
    if (milisegundos == 100) { milisegundos = 0; ++segundos }
    if (segundos == 60) { segundos = 0; ++minutos }
    if (minutos == 60) { minutos = 0; }
    cad = "";
    if (minutos < 10) cad += "0";
    cad = cad + minutos;
    if (puntos) cad += ":"; else cad += ":";
    if (segundos < 10) cad += "0";
    cad = cad + segundos;
    if (puntos) cad += ":"; else cad += ":";
    if (milisegundos < 10) cad += "0";
    cad = cad + milisegundos;
    puntos = !puntos;
    //document.crono.boton.value = cad;
    $(".time").attr("value", cad);
}

// NEW
function nuevo() {
    document.getElementById("start").play();
    document.getElementById("playball").play();
    b1 = false; b2 = false; b3 = false; bS = false; pierde = false;
    minutos = 0; segundos = 0; milisegundos = 0; strike = 0; out = 0; carrera = 0; base = 0; b = 0; bAct = 0; bAnt = 0;
    $(".time").attr("value", "00:00:00");
    $("#o1, #o2, #o3").attr("src", "img/game/empty.png");
    $(".evento, .showT, .base, .strike, .out, .carrera").attr("value", "0");
    $(".evento, .showT, .base, .b1, .b2, .b3, .b4, .strike, .out, .pierde, .nuevo").fadeOut(500);
    $(".buttonP").removeAttr("disabled");
    $(".buttonP").css("background", "url('/img/game/verde.png') center no-repeat");
    $(".clear").attr("disabled", "disabled");
}

// START
function start() {
    id = setInterval("time()", 0);
    document.getElementById("batazo").play();
}

// STOP
function stop() {
    clearInterval(id);
    $(".buttonS").css("display", "none");
    $(".buttonP").show();
    $(".buttonP").attr("disabled", "disabled");
    $(".buttonP").css("background", "url('/img/game/gris1.png') center no-repeat");
    $(".clear").removeAttr("disabled");
    $(".clear").css("background", "url('/img/game/rojo.png') center no-repeat");
    
    // HIT
    if (segundos < 1 && milisegundos == 94) {
        b = 1;
        bAct = b;
        bS = false;
        $(".evento").show();
        $(".evento").attr("value", " hit");
        $(".showT").show();
        $(".showT").attr("value", segundos + ":" + milisegundos);
        $("#t"+b).css({"backgroundColor" : "#00B533", "color" : "#000", "transition" : "background-color 300ms linear"});
        $("#t2, #t3, #t4, #t5").css({"backgroundColor" : "#000", "color" : "#fff", "transition" : "background-color 300ms linear"});
    } else

    // DOBLE
    if (segundos < 1 && milisegundos == 96) {
        b = 2;
        bAct = b;
        bS = false;
        $(".evento").show();
        $(".evento").attr("value", " doble");
        $(".showT").show();
        $(".showT").attr("value", segundos + ":" + milisegundos);
        $("#t"+b).css({"backgroundColor" : "#00B533", "color" : "#000", "transition" : "background-color 300ms linear"});
        $("#t1, #t3, #t4, #t5").css({"backgroundColor" : "#000", "color" : "#fff", "transition" : "background-color 300ms linear"});
    } else

    // TRIPLE
    if (segundos < 1 && milisegundos == 98) {
        b = 3;
        bAct = b;
        bS = false;
        $(".evento").show();
        $(".evento").attr("value", " triple");
        $(".showT").show();
        $(".showT").attr("value", segundos + ":" + milisegundos);
        $("#t"+b).css({"backgroundColor" : "#00B533", "color" : "#000", "transition" : "background-color 300ms linear"});
        $("#t1, #t2, #t4, #t5").css({"backgroundColor" : "#000", "color" : "#fff", "transition" : "background-color 300ms linear"});
    } else

    // HOMERUN
    if (segundos == 1 && milisegundos < 1) {
        b = 4;
        bAct = b;
        bS = false;
        $(".evento").show();
        $(".evento").attr("value", " homerun");
        $(".showT").show();
        $(".showT").attr("value", segundos + ":" + milisegundos);
        $(".b4").fadeIn(500);
        $(".carrera").show();
        $(".carrera").attr("value", carrera);
        $("#t"+b).css({"backgroundColor" : "#00B533", "color" : "#000", "transition" : "background-color 300ms linear"});
        $("#t1, #t2, #t3, #t5").css({"backgroundColor" : "#000", "color" : "#fff", "transition" : "background-color 300ms linear"});
    } 
    
    // STRIKE
    else {
        bS = true;
        bAct = 0;
        bAnt = bAnt;
        strike++;
        $(".evento").show();
        $(".evento").attr("value", " strike");
        $(".showT").show();
        $(".showT").attr("value", segundos + ":" + milisegundos);
        $("#t5").css({"backgroundColor" : "#f00", "color" : "#000", "transition" : "background-color 300ms linear"});
        $("#t1, #t2, #t3, #t4").css({"backgroundColor" : "#000", "color" : "#fff", "transition" : "background-color 300ms linear"});
        // Show check buttons
        if (strike == 1) {
            $("#s1").attr("src", "img/game/check.png");
            document.getElementById("strikes").play();
        } else
        if (strike == 2) {
            $("#s2").attr("src", "img/game/check.png");
            document.getElementById("strikes").play();
        } else
        if (strike == 3) {
            $("#s3").attr("src", "img/game/check.png");
            document.getElementById("outs").play();
        }
    }

    // RUNS
    
    if (b == 1) { // ** HIT **
        strike = 0;
        $("#s1, #s2, #s3").attr("src", "img/game/empty.png");
        if (b1 && !b2 && !b3) {
            b1 = true; b2 = true; b3 = false;
            if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
            if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
            if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
            //alert('Hombre en 1ra y 2da');
        } else
            if (b1 && b2 && !b3) {
                b1 = true; b2 = true; b3 = true;
                if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                //alert('Bases llenas');
            } else
                if (b1 && !b2 && b3) {
                    b1 = true; b2 = true; b3 = false;
                    if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                    if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                    if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                    //alert('Hombre en 1ra, 2da y entra 1 Carrera');
                    document.getElementById("run").play();
                    carrera++;
                    $(".carrera").fadeIn(500);
                    $(".carrera").attr("value", carrera);
                } else
                    if ((b1 && b2 && b3)) {
                        b1 = true; b2 = true; b3 = true;
                        if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                        if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                        if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                        //alert('Bases llenas y entra 1 Carrera');
                        document.getElementById("run").play();
                        carrera++;
                        $(".carrera").fadeIn(500);
                        $(".carrera").attr("value", carrera);
                    } else
                        if (!b1 && b2 && !b3) {
                            b1 = true; b2 = false; b3 = true;
                            if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                            if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                            if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                            //alert('Hombre en 1ra y 3ra');
                        } else
                            if (!b1 && b2 && b3) {
                                b1 = true; b2 = false; b3 = true;
                                if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                                if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                                if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                                //alert('Hombre en 1ra, 3ra y entra 1 Carrera');
                                document.getElementById("run").play();
                                carrera++;
                                $(".carrera").fadeIn(500);
                                $(".carrera").attr("value", carrera);
                            } else
                                if (!b1 && !b2 && b3) {
                                    b1 = true; b2 = false; b3 = false;
                                    if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                                    if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                                    if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                                    //alert('Hombre en 1ra y entra 1 Carrera');
                                    document.getElementById("run").play();
                                    carrera++;
                                    $(".carrera").fadeIn(500);
                                    $(".carrera").attr("value", carrera);
                                } else
                                    if (!b1 && !b2 && !b3) {
                                        //alert('Hombre en 1ra');
                                        b1 = true; b2 = false; b3 = false;
                                        if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                                        if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                                        if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                                    }
    }
    if (b == 2) { // ** DOBLE **
        strike = 0;
        $("#s1, #s2, #s3").attr("src", "img/game/empty.png");
        if (b1 && !b2 && !b3) {
            b1 = false; b2 = true; b3 = true;
            if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
            if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
            if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
            //alert('Hombre en 2da y 3ra');
        } else
            if (b1 && b2 && !b3) {
                b1 = false; b2 = true; b3 = true;
                if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                //alert('Hombre en 2da, 3ra y entra 1 Carrera');
                document.getElementById("run").play();
                carrera++;
                $(".carrera").fadeIn(500);
                $(".carrera").attr("value", carrera);
            } else
                if (b1 && !b2 && b3) {
                    b1 = false; b2 = true; b3 = true;
                    if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                    if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                    if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                    //alert('Hombre en 2da, 3ra y entra 1 Carrera');
                    document.getElementById("run").play();
                    carrera++;
                    $(".carrera").fadeIn(500);
                    $(".carrera").attr("value", carrera);
                } else
                    if ((b1 && b2 && b3)) {
                        b1 = false; b2 = true; b3 = true;
                        if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                        if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                        if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                        //alert('Hombre en 2da, 3ra y entran 2 Carreras');
                        document.getElementById("run").play();
                        carrera = carrera + 2;
                        $(".carrera").fadeIn(500);
                        $(".carrera").attr("value", carrera);
                    } else
                        if (!b1 && b2 && !b3) {
                            b1 = false; b2 = true; b3 = false;
                            if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                            if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                            if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                            //alert('Hombre en 2da y entra 1 Carrera');
                            document.getElementById("run").play();
                            carrera++;
                            $(".carrera").fadeIn(500);
                            $(".carrera").attr("value", carrera);
                        } else
                            if (!b1 && b2 && b3) {
                                b1 = false; b2 = true; b3 = false;
                                if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                                if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                                if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                                //alert('Hombre en 2da y entran 2 Carreras');
                                document.getElementById("run").play();
                                carrera = carrera + 2;
                                $(".carrera").fadeIn(500);
                                $(".carrera").attr("value", carrera);
                            } else
                                if (!b1 && !b2 && b3) {
                                    b1 = false; b2 = true; b3 = false;
                                    if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                                    if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                                    if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                                    //alert('Hombre en 2da y entra 1 Carrera');
                                    document.getElementById("run").play();
                                    carrera++;
                                    $(".carrera").fadeIn(500);
                                    $(".carrera").attr("value", carrera);
                                } else
                                    if (!b1 && !b2 && !b3) {
                                        //alert('Hombre en 2da');
                                        b1 = false; b2 = true; b3 = false;
                                        if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                                        if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                                        if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                                    }
    }
    if (b == 3) { // ** TRIPLE **
        strike = 0;
        $("#s1, #s2, #s3").attr("src", "img/game/empty.png");
        if (b1 && !b2 && !b3) {
            b1 = false; b2 = false; b3 = true;
            if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
            if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
            if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
            //alert('Hombre en 3ra y entra 1 Carrera');
            document.getElementById("run").play();
            carrera++;
            $(".carrera").fadeIn(500);
            $(".carrera").attr("value", carrera);
        } else
            if (b1 && b2 && !b3) {
                b1 = false; b2 = false; b3 = true;
                if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                //alert('Hombre en 3ra y entran 2 Carreras');
                document.getElementById("run").play();
                carrera = carrera + 2;
                $(".carrera").fadeIn(500);
                $(".carrera").attr("value", carrera);
            } else
                if (b1 && !b2 && b3) {
                    b1 = false; b2 = false; b3 = true;
                    if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                    if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                    if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                    //alert('Hombre en 3ra y entran 2 Carreras');
                    document.getElementById("run").play();
                    carrera = carrera + 2;
                    $(".carrera").fadeIn(500);
                    $(".carrera").attr("value", carrera);
                } else
                    if ((b1 && b2 && b3)) {
                        b1 = false; b2 = false; b3 = true;
                        if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                        if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                        if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                        //alert('Hombre en 3ra y entran 3 Carreras');
                        document.getElementById("run").play();
                        carrera = carrera + 3;
                        $(".carrera").fadeIn(500);
                        $(".carrera").attr("value", carrera);
                    } else
                        if (!b1 && b2 && !b3) {
                            b1 = false; b2 = false; b3 = true;
                            if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                            if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                            if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                            //alert('Hombre en 3ra y entra 1 Carrera');
                            document.getElementById("run").play();
                            carrera++;
                            $(".carrera").fadeIn(500);
                            $(".carrera").attr("value", carrera);
                        } else
                            if (!b1 && b2 && b3) {
                                b1 = false; b2 = false; b3 = true;
                                if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                                if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                                if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                                //alert('Hombre en 3ra y entran 2 Carreras');
                                document.getElementById("run").play();
                                carrera = carrera + 2;
                                $(".carrera").fadeIn(500);
                                $(".carrera").attr("value", carrera);
                            } else
                                if (!b1 && !b2 && b3) {
                                    b1 = false; b2 = false; b3 = true;
                                    if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                                    if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                                    if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                                    //alert('Hombre en 3ra y entra 1 Carrera');
                                    document.getElementById("run").play();
                                    carrera++;
                                    $(".carrera").fadeIn(500);
                                    $(".carrera").attr("value", carrera);
                                } else
                                    if (!b1 && !b2 && !b3) {
                                        //alert('Hombre en 3ra');
                                        b1 = false; b2 = false; b3 = true;
                                        if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                                        if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                                        if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                                    }
    }
    if (b == 4) { // ** HOMERUN **
        strike = 0;
        $("#s1, #s2, #s3").attr("src", "img/game/empty.png");
        if (b1 && !b2 && !b3) {
            b1 = false; b2 = false; b3 = false;
            if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
            if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
            if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
            $(".b4").fadeIn(500);
            //alert('Homerun! Entran 2 Carreras');
            document.getElementById("run").play();
            carrera = carrera + 2;
            $(".carrera").fadeIn(500);
            $(".carrera").attr("value", carrera);
        } else
            if (b1 && b2 && !b3) {
                b1 = false; b2 = false; b3 = false;
                if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                $(".b4").fadeIn(500);
                //alert('Homerun! Entran 3 Carreras');
                document.getElementById("run").play();
                carrera = carrera + 3;
                $(".carrera").fadeIn(500);
                $(".carrera").attr("value", carrera);
            } else
                if (b1 && !b2 && b3) {
                    b1 = false; b2 = false; b3 = false;
                    if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                    if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                    if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                    $(".b4").fadeIn(500);
                    //alert('Homerun! Entran 3 Carreras');
                    document.getElementById("run").play();
                    carrera = carrera + 3;
                    $(".carrera").fadeIn(500);
                    $(".carrera").attr("value", carrera);
                } else
                    if ((b1 && b2 && b3)) {
                        b1 = false; b2 = false; b3 = false;
                        if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                        if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                        if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                        $(".b4").fadeIn(500);
                        //alert('Homerun! Entran 4 Carreras');
                        document.getElementById("run").play();
                        carrera = carrera + 4;
                        $(".carrera").fadeIn(500);
                        $(".carrera").attr("value", carrera);
                    } else
                        if (!b1 && b2 && !b3) {
                            b1 = false; b2 = false; b3 = false;
                            if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                            if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                            if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                            $(".b4").fadeIn(500);
                            //alert('Homerun! Entran 2 Carreras');
                            document.getElementById("run").play();
                            carrera = carrera + 2;
                            $(".carrera").fadeIn(500);
                            $(".carrera").attr("value", carrera);
                        } else
                            if (!b1 && b2 && b3) {
                                b1 = false; b2 = false; b3 = false;
                                if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                                if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                                if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                                $(".b4").fadeIn(500);
                                //alert('Homerun! Entran 3 Carreras');
                                document.getElementById("run").play();
                                carrera = carrera + 3;
                                $(".carrera").fadeIn(500);
                                $(".carrera").attr("value", carrera);
                            } else
                                if (!b1 && !b2 && b3) {
                                    b1 = false; b2 = false; b3 = false;
                                    if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                                    if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                                    if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                                    $(".b4").fadeIn(500);
                                    //alert('Homerun! Entran 2 Carreras');
                                    document.getElementById("run").play();
                                    carrera = carrera + 2;
                                    $(".carrera").fadeIn(500);
                                    $(".carrera").attr("value", carrera);
                                } else
                                    if (!b1 && !b2 && !b3) {
                                        b1 = false; b2 = false; b3 = false;
                                        if (b1) { $(".b1").fadeIn(500); } else { $(".b1").fadeOut(1000); }
                                        if (b2) { $(".b2").fadeIn(500); } else { $(".b2").fadeOut(1000); }
                                        if (b3) { $(".b3").fadeIn(500); } else { $(".b3").fadeOut(1000); }
                                        $(".b4").fadeIn(500);
                                        //alert('Homerun! Entra 1 Carrera');
                                        document.getElementById("run").play();
                                        carrera++;
                                        $(".carrera").fadeIn(500);
                                        $(".carrera").attr("value", carrera);
                                    }
    }
    // Determinar bases llenas.
    var bases = [b1, b2, b3];
    var base = (bases[0] + bases[1] + bases[2]);
    $(".base").fadeIn(500);
    $(".base").attr("value", base);
} // FIN STOP

$(document).ready(function () {
    $(".buttonP, .clear").attr("disabled", "disabled");
    $(".buttonP").css("background", "url('/img/game/gris1.png') center no-repeat");
    $(".clear").css("background", "url('/img/game/gris2.png') center no-repeat");
    $(".evento").css("display", "none");
    // JUGAR
    $(".jugar").click(function () {
        $(this).hide();
        $(".buttonP, .clear").removeAttr("disabled");
        $(".buttonP").css("background", "url('/img/game/verde.png') center no-repeat");
        document.getElementById("start").play();
        document.getElementById("playball").play();
    });
    // START
    $(".buttonP").click(function () {
        $(this).css("display", "none");
        $(".buttonS").show();
    });
    // CLEAR
    $(".clear").click(function () {
        b = 0;
        if (bS) {
            bAnt = bAnt
        } else {
            bAnt = bAct;
        }
        // OUTS
        if (strike == 3) {
            out++;
            strike = 0;
            $(".strike").attr("value", strike);
            $("#s1, #s2, #s3").attr("src", "img/game/empty.png");
            // Show check buttons
            if (out == 1) {
                $("#o1").attr("src", "img/game/check.png");
            }
            if (out == 2) {
                $("#o2").attr("src", "img/game/check.png");
            }
            if (out == 3) {
                $("#o3").attr("src", "img/game/check.png");
                // Fin del Inning
                pierde = true;
                $("#carreras").attr('value', carrera);
				$(".buttonP").css("background", "url('/img/game/gris1.png') center no-repeat");
                $(".pierde, .nuevo").show();
				
            }
        }
        minutos = 0; segundos = 0; milisegundos = 0;
        $(".b4").fadeOut(1000);
        $(".time").attr("value", "00:00:00");
        $(".evento").css("display", "none");
        // Mostrar Warning
        if (out == 2 && strike == 0) {
            $("#warning").fadeIn(1000);
        } else {
            $("#warning").fadeOut(1000);
        }
        if (out != 3) {
            $(".buttonP").removeAttr("disabled");
            $(".buttonP").css("background", "url('/img/game/verde.png') center no-repeat");
            $(".clear").css("background", "url('/img/game/gris2.png') center no-repeat");
        } else {
            $(".buttonP").attr("disabled", "disabled");
            $(".buttonP").css("background", "url('/img/game/gris1.png') center no-repeat");
            $(".clear").css("background", "url('/img/game/gris2.png') center no-repeat");
        }
        $(".clear").attr("disabled", "disabled");
        $(".buttonP").attr("onClick", "start()");
        $(".buttonP").attr("value", "START");
        $(this).attr("disabled", "disabled");
    });
});