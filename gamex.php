<?php session_start();?>
<?php
include('config_fb.php');
include('config.php');

 ?>
<!DOCTYPE html>

<html xmlns:fb="http://www.facebook.com/2008/fbml">
    <head>
        <title>Expertos en Béisbol</title>
		
        <script src="http://connect.facebook.net/en_US/all.js" type="text/javascript"></script>
        
        <script type="text/javascript">
		window.fbAsyncInit = function() {
			FB.init({
				//el ID de tu aplicación
				appId      : '130380060444773',
				//la URL de tu aplicación
				channelUrl : 'http://www.screenmediagroup.com/facebook/churchschicken/appbeisbol/',
				frictionlessRequests: true
			});
			FB.Canvas.setAutoGrow();
		}
		//función de refuerzo
		function sizeChangeCallback() {
			FB.Canvas.setAutoGrow();
		}
		</script>
        
        <meta charset="utf-8"/>

        <link type="text/css" rel="stylesheet" href="css/game.css">

        <!--[if lt IE 9]>
            <script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
        <![endif]-->

        <script src="js/jquery-1.7.2.min.js"></script>
        <script src="js/baseball.js"></script>
        <?php 
             
            $fql    =   "SELECT uid2 FROM friend WHERE uid1 = me()";
            $param  =   array(
                   'method'     => 'fql.query',
                    'query'     => $fql,
                  'callback'    => ''
            );
            $fqlResult   =   $facebook->api($param);
            
            ?>
       
     <script>
      
      function sendRequestToRecipients() {
          FB.ui({method: 'apprequests',
          message: 'Expertos en Béisbol',
           to: '<?php for ($i=0; $i<5; $i++) {
			$d=rand(0,count($fqlResult));
			echo "".$fqlResult[$d]['uid2'].",";
		  }?>'
        }, function(response) {
  if (!response || response.error) {
    alert('Debes enviar las invitaciones para cargarte la carrera! Intentalo de nuevo!');
  } else {
    document.formulario1.submit()
  }});
	  }

     
    </script>
   
    </head>

    <body>
    <?php if(!empty($_POST['game'])){ ?>
    <script>
	alert('Se ha cargado 1 carrera, sigue invitando amigos!');
	</script>
    <?php $_POST['game'] = ''; ?>
    <?php } ?>
          <form name="formulario1" action="act_up.php" method="post">
          <input type="hidden" name="act_up" value="1">
          </form>
           <div id="container">
            
            <div id="inside">

                <img src="img/game/capa.png" alt="capa" style="position: absolute; top: 145px;">
                
                <div id="all">
                    <img id="logo" src="img/game/logoChurch.png" alt="logo">

                    <div class="profile" id="prof0">
                        <div id="bg">
                   			<img src="https://graph.facebook.com/<?php echo $user; ?>/picture?width=70&height=70" style="margin-left:-2px; margin-top:-2px;">                        </div>
                        <div id="tx">
                            <b><?php echo $user_profile['name']; ?></b><br>
                            <span></span>
                        </div>
                    </div>

                    <div id="clock">
                        <input class="time" type="text" readonly="readonly" value="00:00:00">
                        <input class="evento" type="text" readonly="readonly" value="">
                    </div>

                    <img id="rango" src="img/game/rangos.png" alt="rangos">

                    <div id="tiempos">
                        <table>
                            <tr>
                                <td><div id="t1">1</div></td>
                                <td><b>HIT: 00:00:94</b></td>
                            </tr>
                            <tr>
                                <td><div id="t2">2</div></td>
                                <td><b>DOBLE: 00:00:96</b></td>
                            </tr>
                            <tr>
                                <td><div id="t3">3</div></td>
                                <td><b>TRIPLE: 00:00:98</b></td>
                            </tr>
                            <tr>
                                <td><div id="t4">4</div></td>
                                <td><b>HOMERUN: 00:01:00</b></td>
                            </tr>
                            <tr>
                                <td><div id="t5">5</div></td>
                                <td><b>STRIKE: Tiempos fuera.</b></td>
                            </tr>
                        </table>
                    </div>

                    <div id="botones">
                        <input class="jugar" type="button" value="JUGAR" onClick="jugar()">
                        <input class="buttonP" type="button" value="START" onClick="start()">
                        <input class="buttonS" type="button" value="STOP" onClick="stop()">
                        <input class="clear" type="button" value="CLEAR">
                        <input class="nuevo" type="button" value="JUGAR" onClick="nuevo()"><!--<input class="pierde" type="text" disabled name="pierde" value="Final del Inning!!! ">-->
                      
                    </div>

                    <div class="camp">
                        <div class="b1"></div>
                        <div class="b2"></div>
                        <div class="b3"></div>
                        <div class="b4"></div>
                        <div style="margin: 80px auto 0px auto; width: 175px;"><img src="img/game/carreras.png" alt="run"></div>
                        <div style="margin: 10px auto 0px auto; width: 100px;"><input class="carrera" type="text" readonly="readonly" name="run" value="0">
                        <br><br>
                        
                        
                        </div>
                    </div>
                </div>

                <div id="status">
                    <input class="strike" type="text" name="strike" value="0" hidden>
                    <div id="strike">
                        <img src="img/game/strike.png" alt="strike">
                        <img id="s1" src="img/game/empty.png" alt="1">
                        <img id="s2" src="img/game/empty.png" alt="2">
                        <img id="s3" src="img/game/empty.png" alt="3">
                    </div>
                    <input class="out" type="text" name="out" value="0" hidden>
                    <div id="out">
                        <img src="img/game/out.png" alt="out">
                        <img id="o1" src="img/game/empty.png" alt="1">
                        <img id="o2" src="img/game/empty.png" alt="2">
                        <img id="o3" src="img/game/empty.png" alt="3">
                    </div>
                    <br>
                    <p id="warning"><b>Cuidado:</b> ya tienes 2 OUTS, estás a punto de perder.</p>
                </div>
                <a href=""><div id="friend" onClick="sendRequestToRecipients(); return false;"></div></a>
                
            </div>
            <div id="foot1">
                <div id="butons">
                    <a href="premios.html"><div class="inn">Premios</div></a>
                    <a href="instrucciones.html"><div class="inn">Instrucciones</div></a>
                    <a href="ranking.php"><div class="inn">Ranking General</div></a>
                    <a href="terminos.html"><div class="inn">Términos y Condiciones</div></a>
                </div>
                
            </div>
            <div id="foot2">
                <span>Copyright © 2010 Cajun Operating Company, bajo Licencia de Cajun Funding Corp <br> CHURCH'S CHICKEN DE VENEZUELA, C.A. RIF: J-30787899-1 | Todos los Derechos Reservados <br> Políticas de Privacidad | Términos y Condiciones de uso.</span>
                <a href="http://www.screenmediagroup.com" target="_blank"><img src="img/smg.png" alt="smg"></a>
            </div>
        </div>

        <audio controls="controls"  preload="auto" id="batazo" style="visibility:hidden;">
            <source src="sound/bat.ogg" type="audio/ogg"/>
            <source src="sound/bat.wav" type="audio/wav"/>
            <source src="sound/bat.mp3" type="audio/mpeg"/>
        </audio>
        <audio controls="controls"  preload="auto" id="start" style="visibility:hidden;">
            <source src="sound/start.ogg" type="audio/ogg"/>
            <source src="sound/start.wav" type="audio/wav"/>
            <source src="sound/start.mp3" type="audio/mpeg"/>
        </audio>
        <audio controls="controls"  preload="auto" id="playball" style="visibility:hidden;">
            <source src="sound/playball2.ogg" type="audio/ogg"/>
            <source src="sound/playball2.wav" type="audio/wav"/>
            <source src="sound/playball2.mp3" type="audio/mpeg"/>
        </audio>
        <audio controls="controls"  preload="auto" id="strikes" style="visibility:hidden;">
            <source src="sound/strike.ogg" type="audio/ogg"/>
            <source src="sound/strike.wav" type="audio/wav"/>
            <source src="sound/strike.mp3" type="audio/mpeg"/>
        </audio>
        <audio controls="controls"  preload="auto" id="outs" style="visibility:hidden;">
            <source src="sound/out.ogg" type="audio/ogg"/>
            <source src="sound/out.wav" type="audio/wav"/>
            <source src="sound/out.mp3" type="audio/mpeg"/>
        </audio>
        <audio controls="controls"  preload="auto" id="homeruns" style="visibility:hidden;">
            <source src="sound/homerun.ogg" type="audio/ogg"/>
            <source src="sound/homerun.wav" type="audio/wav"/>
            <source src="sound/homerun.mp3" type="audio/mpeg"/>
        </audio>
        <audio controls="controls"  preload="auto" id="run" style="visibility:hidden;">
            <source src="sound/run.ogg" type="audio/ogg"/>
            <source src="sound/run.wav" type="audio/wav"/>
            <source src="sound/run.mp3" type="audio/mpeg"/>
        </audio>
      
      
    </body>
</html>
