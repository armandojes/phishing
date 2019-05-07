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

//models
require 'models/Profile.php';

//routes
require 'routes.php';
