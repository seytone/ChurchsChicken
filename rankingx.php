<?php session_start();?>
<?php
include('config_fb.php');
include('config.php');
 ?>
<!DOCTYPE html>

<html>
    <head>
        <title>Expertos en Béisbol</title>

        <meta charset="utf-8"/>

        <link type="text/css" rel="stylesheet" href="css/game.css">

        <!--[if lt IE 9]>
            <script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
        <![endif]-->

        <script src="js/jquery-1.7.2.min.js"></script>
        <script src="js/baseball.js"></script>

        <style>
            #logo2 {
                position: absolute;
                top: 20px;
                right: 20px;
            }
            #backR {
                position: absolute;
                top: 255px;
            }
            #ranking {
                position: absolute;
                top: 180px;
                left: 220px;
            }
            #nums {
                position: absolute;
                z-index: 50;
                top: 272px;
                left: 38px;
            }
            #j1, #j2, #j3, #j4, #j5, #j6 {
                position: absolute;
                background-color: #000;
                color: #fff;
                border-radius: 50px;
                text-align: center;
            }
            #j1, #j2, #j3 {
                width: 80px;
                height: 80px;
                left: 20px;
            }
            #j1 { top: 262px; }
            #j2 { top: 375px; }
            #j3 { top: 485px; }
            
            #j4, #j5, #j6 {
                width: 40px;
                height: 40px;
                left: 40px;
            }
            #j4 { top: 581px; }
            #j5 { top: 633px; }
            #j6 { top: 684px; }
            
            #letras {
                position: absolute;
                top:  260px;
                left: 172px;
            }
        </style>
    </head>

    <body>
   
        <div id="container">
            
            <div id="inside">
                
                <img id="logo" src="img/game/logoChurch.png" alt="logo">
                <img id="logo2" src="img/premios/logo.png" alt="logo">
                <img id="ranking" src="img/ranking/ranking.png" alt="logo">
                <img id="backR" src="img/ranking/backR.png" alt="logo">
                <img id="nums" src="img/ranking/posiciones.png" alt="logo">
                <img id="letras" src="img/ranking/letras.png" alt="logo">
                <div id="j1"></div>
                <div id="j2"></div>
                <div id="j3"></div>
                <div id="j4"></div>
                <div id="j5"></div>
                <div id="j6"></div>
                
                
                <?php 
			   $result3 = mysql_query("SELECT * FROM tb_user_churchs ORDER BY carreras DESC LIMIT 0,3");
			   if ($row3 = mysql_fetch_array($result3)){
			   do { ?>
                <div class="profile" id="prof<?php if (empty($id)){ $id = 1;  }echo $id; ?>">
                    <div id="bg">
             
            
			 <img src="https://graph.facebook.com/<?php echo $row3['id_fb']; ?>/picture?width=70&height=70" style="margin-left:-2px; margin-top:-2px;" title="<?php echo $row3['first_name']; ?>&nbsp;<?php echo $row3['last_name']; ?>"> 
              		
                    </div>
                </div>
                <div class="profile" id="carreras<?php if (empty($id)){ $id = 1;  }echo $id; ?>">
				<?php echo $row3['carreras']; ?>
                </div>
                <div class="profile" id="nombres<?php if (empty($id)){ $id = 1;  }echo $id; ?>">
				<?php echo $row3['first_name']; ?>&nbsp;<?php echo $row3['last_name']; ?>
                </div>
				<?php  $id = $id+1; } while ($row3 = mysql_fetch_array($result3)); }  ?>
                
            </div>
            <?php 
			   $result = mysql_query("SELECT * FROM tb_user_churchs ORDER BY carreras DESC LIMIT 3,5");
			   if ($row = mysql_fetch_array($result)){
			   do { ?>
               <?php if($id < 7){ ?>
               <div class="profile" id="nombres_ultimos<?php if (empty($id)){ $id = 1;  }echo $id; ?>">
               <img src="https://graph.facebook.com/<?php echo $row['id_fb']; ?>/picture?width=40&height=40"  align="absmiddle" style="margin-top:-8px;" title="<?php echo $row['first_name']; ?>&nbsp;<?php echo $row['last_name']; ?>">
              <?php echo $row['first_name']; ?>&nbsp;<?php echo $row['last_name']; ?>
              <div style="left:525px; position:absolute; margin-top:-30px;">
               <?php echo $row['carreras']; ?>&nbsp;Carreras
              </div>
             </div>
             <?php } ?>
				<?php  $id = $id+1; } while ($row = mysql_fetch_array($result)); }  ?>
                       
            <div id="foot1">
                <div id="butons">
                    <a href="premios.html"><div class="inn">Premios</div></a>
                    <a href="instrucciones.html"><div class="inn">Instrucciones</div></a>
                    <a href="game.php"><div class="inn">Juega Beisbol</div></a>
                    <a href="terminos.html"><div class="inn">Términos y Condiciones</div></a>
                </div>
            </div>
            <div id="foot2">
                <span>Copyright © 2010 Cajun Operating Company, bajo Licencia de Cajun Funding Corp <br> CHURCH'S CHICKEN DE VENEZUELA, C.A. RIF: J-30787899-1 | Todos los Derechos Reservados <br> Políticas de Privacidad | Términos y Condiciones de uso.</span>
                <a href="http://www.screenmediagroup.com" target="_blank"><img src="img/smg.png" alt="smg"></a>
            </div>
        </div>

    </body>
</html>
