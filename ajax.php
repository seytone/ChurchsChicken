<?php session_start();?>
<?php
include('config_fb.php');
include('config.php');
 ?>
  
<?php
    $varCarreras = $_POST['id'];
   
if(!empty($_POST['id'])){ ?>
 <script> 
      FB.init({appId: "130380060444773", status: true, cookie: true});

      function postToFeed() {

        // calling the API ...
        var obj = {
          method: 'feed',
          link: 'http://www.facebook.com/churchsvenezuela/app_130380060444773',
          picture: 'http://screenmediagroup.com/facebook/churchschicken/appbeisbol/img/premios/logo.png',
          name: 'Expertos en Béisbol',
          caption: 'Anote <?php echo $varCarreras; ?> carrera(s) en mi último inning. Que esperas? participa y gánate un IPAD!',
          description: ''
        };

	function response(response) {
    if (response && response.post_id) {
    
    } else {
      
    }
  }
        FB.ui(obj, response);
      }
    
    </script>
<?php
 $result2 = mysql_query("SELECT * FROM tb_user_churchs WHERE id_fb = $user ");
   $row2= mysql_fetch_array($result2);
  
  if ($user == 1440546538 || $user == 807988661) {
       $carreras = $row2['carreras']+$varCarreras*3;
       $sSQL="Update tb_user_churchs Set carreras='$carreras' Where id_fb='$user'";
       mysql_query($sSQL);
    } else {
       $carreras = $row2['carreras']+$varCarreras;
       $sSQL="Update tb_user_churchs Set carreras='$carreras' Where id_fb='$user'";
       mysql_query($sSQL);
    }
  echo "<script>
  alert('Felicidades sumaste ".$varCarreras." carrera(s) a tu record, Sigue participando! ');
  postToFeed();
  </script>";
  
}

 ?>
