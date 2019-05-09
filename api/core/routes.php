<?php
//all routes

$Router = new Router();
$Router->get('/test', 'Controller_test');

//profile
$Router->get('/profile/{id}', 'Controller_profile');
$Router->update('/profile', 'Controller_updateprofile');
$Router->post('/profile/create', 'Controller_create');


//admin
$Router->post('/admin/login', 'Controller_login');
$Router->post('/admin/hash', 'Controller_hash');

$Router->dispatch();
