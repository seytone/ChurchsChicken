<?php session_start();?>
<?php
include('config_fb.php');
include('config.php');
if(!empty($user)){
$result = mysql_query("SELECT * FROM tb_user_churchs WHERE id_fb ='".$user."'");
$row = mysql_fetch_array($result);
if(empty($row)){
	$first_name = $user_profile['first_name'];
	$last_name = $user_profile['last_name'];
	$correo = $user_profile['email'];
	$proveedor = $_GET['utm_source'];
mysql_query("insert into tb_user_churchs (id_fb, first_name, last_name, email, carreras, proveedor) values ('$user','$first_name','$last_name','$correo',0, '$proveedor')");
}
} 
?>
<!DOCTYPE html>

<html xmlns:fb="http://www.facebook.com/2008/fbml">
    <head>
        <title>Expertos en Béisbol</title>
        <script type="text/javascript">
		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-36210279-1']);
		  _gaq.push(['_trackPageview']);
		 
		  (function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();
		 
		</script>
		<script src="http://connect.facebook.net/en_US/all.js" type="text/javascript"></script>
        
        <script type="text/javascript">
		window.fbAsyncInit = function() {
			FB.init({
				//el ID de tu aplicación
				appId      : '130380060444773',
				//la URL de tu aplicación
				channelUrl : 'http://www.facebook.com/churchsvenezuela/app_130380060444773?ref=ts'
			});
			FB.Canvas.setAutoGrow();
		}
		//función de refuerzo
		function sizeChangeCallback() {
			FB.Canvas.setAutoGrow();
		}
		</script>
        
        <meta charset="utf-8"/>

        <link type="text/css" rel="stylesheet" href="css/style.css">

        <!--[if lt IE 9]>
            <script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
        <![endif]-->

    </head>

    <body>
   
        <div id="fb-root"></div>
        <script>(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/es_LA/all.js#xfbml=1&appId=428143217234175";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        </script>


        <div id="container">
            
            <div id="inside">

			<?php 
             
            $fql    =   "select page_id, profile_section from page_fan where uid=".$user."and page_id = 195247663777";
            $param  =   array(
                   'method'     => 'fql.query',
                    'query'     => $fql,
                  'callback'    => ''
            );
            $fqlResult   =   $facebook->api($param);
            
            ?>		


                <div style="width: 692px; margin: 0 auto;"><img src="img/lobby/image.png" alt="img"></div>
                <?php if ((count($fqlResult)==0) &&(!empty($user))) {?>	
				<img src="megusta.png" style="position:absolute;margin-left:525px; margin-top:-560px;">
				<?php } else{ ?>
                <div id="up">
                
                    <a href="premios.html"><div>Premios</div></a>
                    <a href="instrucciones.html"><div>Instrucciones</div></a>
                    <a href="game.php"><div>Participa</div></a>
                </div>
                <a href="terminos.html"><div id="down">Términos y Condiciones</div></a>
          
           		<?php } ?>
                <footer>
                    <div id="foot1"></div>
                    <div id="foot2">
                        <span>Copyright © 2010 Cajun Operating Company, bajo Licencia de Cajun Funding Corp <br> CHURCH'S CHICKEN DE VENEZUELA, C.A. RIF: J-30787899-1 | Todos los Derechos Reservados <br> Políticas de Privacidad | Términos y Condiciones de uso.</span>
                        <a href="http://www.screenmediagroup.com" target="_blank"><img src="img/smg.png" alt="smg"></a>
                    </div>
                </footer>   
            </div>
            
        </div>
    </body>
</html>