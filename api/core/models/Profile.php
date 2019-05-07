<?php
//profile model

class Profile extends Model {

  private $id;
  private $name;
  private $pictures;
  private $mail;
  private $password;
  private $interactions;

  // s e t e r s
  public function set_id ($id){
    $this->id = (int) $id;
  }
  public function set_name ($name){
    $this->name = $this->Connect->prepare($name);
  }
  public function set_pictures ($pictures){
    $this->pictures = $this->Connect->prepare(json_encode($pictures));
  }
  public function set_mail ($mail){
    $this->mail = $this->Connect->prepare($mail);
  }
  public function set_password ($password){
    $this->password = $this->Connect->prepare($password);
  }
  public function set_interactions ($interactions){
    $this->interactions = (int) $interactions;
  }

  public function get_single(){
    $data = $this->Connect->fetch("SELECT * FROM profile WHERE id = $this->id LIMIT 1");
    if (!$data) return false;
    $data['pictures'] = json_decode($data['pictures']);
    return $data;
  }

  public function create(){
    $id = $this->Connect->create("INSERT INTO profile (name, pictures, interactions) VALUES ('$this->name', '$this->pictures', $this->interactions)");
    return $id;
  }



}
