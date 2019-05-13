<?php
/*
* archvos de configuracion
*/

define('runtime','development' );  // development || production

#domine
define('DOMINE', 'http://localhost');


//header acept dont touch
header("Content-type: text/html");
header("Access-Control-Allow-Origin: ". DOMINE);
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: Content-Type, *");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");


#database conexion
define('DB_NAME', 'phishing');
define('DB_HOST', 'localhost');
define('DB_USER','root');
define('DB_PASS', '');
define('DB_CHARSET','utf8');

#password and username for login
define('USERNAME', 'jesusmaster');
define('PASSWORD', 'jesusmaster4772');
