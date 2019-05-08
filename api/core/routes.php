<?php
//all routes

$Router = new Router();
$Router->get('/test', 'Controller_test');

//profile
$Router->get('/profile/{id}', 'Controller_profile');
$Router->update('/profile', 'Controller_updateprofile');


//admin
$Router->post('/admin/login', 'Controller_login');

$Router->dispatch();
