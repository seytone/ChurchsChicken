<?php

/**
 * @file
 * A single location to store configuration.
 */

$link = mysql_connect("67.23.251.154","screen_churchsfb","ch1k3n");
mysql_select_db ("screen_churchs_fb", $link) OR die ("No se puede conectar");
mysql_query("SET NAMES 'utf8'");


?>