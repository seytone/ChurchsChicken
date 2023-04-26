<?php session_start();?>
<?php
include('config_fb.php');
include('config.php');
if(!empty($_POST['act_up'])){
 $result2 = mysql_query("SELECT * FROM tb_user_churchs WHERE id_fb = $user ");
   $row2= mysql_fetch_array($result2);
   $carreras = $row2['carreras']+1;
  
   $sSQL="Update tb_user_churchs Set carreras='$carreras' Where id_fb='$user'";
   mysql_query($sSQL);
  echo "<script>
  function devolver() {
      
      document.formulario1.submit();
   		
    
      }
  </script>";
}
 ?>
 <html>
 <head></head>
 <body onLoad="javascript:devolver();">
  <form name="formulario1" action="game.php" method="post">
          <input type="hidden" name="game" value="1">
          </form>
          </body>
          </html>