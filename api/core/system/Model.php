<?php
/*
  model base
*/

class Model {

  protected $time;
  protected $Connect;

  public function __construct(){

    $this->time = time();
    $this->Connect = new Database();

  }

}
