<?php
//security model

class Security {
  private $username;
  private $password;
  private $hash;

  // s e t e r s
  public function set_username($username){
    $this->username = $username;
  }
  public function set_password($password){
    $this->password = $password;
  }
  public function set_hash($hash){
    $this->hash = $hash;
  }

  public function authenticate (){
    if ($this->password === PASSWORD && $this->username === USERNAME)
    return true;
    return false;
  }

  public function generate_hash(){
    $hash = md5(USERNAME.PASSWORD);
    return $hash;
  }

}
