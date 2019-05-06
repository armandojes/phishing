<?php
//all routes

$Router = new Router();
$Router->get('/test', 'Controller_test');

$Router->dispatch();
