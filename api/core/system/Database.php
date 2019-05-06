<?php
class Database extends mysqli {
  public function __construct() {
    parent::__construct (DB_HOST, DB_USER, DB_PASS,DB_NAME );
    $this->set_charset(DB_CHARSET);
  }
  public function __destruct (){
    $this->close();
  }
  // params:: sql,
  // return:: id_created
  public function create ($sql) {
    $state =  $this->query($sql);
    return $state
    ? $this->insert_id
    : $state;
  }
  // set: update, delete,
  // params:: sql,
  // return:: state[bolean];
  public function set ($sql) {
    $state =  $this->query($sql);
    return $state;
  }
  //params: sql
  //return: list_of_elements || false
  public function fetch_list($sql){
    $state = $this->query($sql);
    if (!$state || !$state->num_rows) return false;  //error o resultads 0
    return $state->fetch_all(MYSQLI_ASSOC);
  }
  //params: sql
  //return: element unique || false
  public function fetch($sql){
    $state = $this->query($sql);
    if (!$state || !$state->num_rows) return false; // error o no hay resultados
    return $state->fetch_assoc();
  }
  //prepara cadena para base de datos;
  public function prepare($sql){
    return $this->real_escape_string($sql);
  }
}
