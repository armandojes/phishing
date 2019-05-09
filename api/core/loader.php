<?php

//config
require 'Config.php';


//database
require 'system/Database.php';
require 'system/Router.php';
require 'system/Model.php';
require 'system/Controller.php';

//controllers
require 'controllers/Controller_test.php';
require 'controllers/Controller_profile.php';
require 'controllers/Controller_updateprofile.php';
require 'controllers/Controller_login.php';
require 'controllers/Controller_hash.php';
require 'controllers/Controller_create.php';

//models
require 'models/Profile.php';
require 'models/Security.php';

//routes
require 'routes.php';
