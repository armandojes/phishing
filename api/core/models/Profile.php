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
    $data['status'] = $data['password'] ? true : false;
    return $data;
  }

  public function create(){
    $id = $this->Connect->create("INSERT INTO profile (name, pictures, interactions) VALUES ('$this->name', '$this->pictures', $this->interactions)");
    return $id;
  }


  public function update(){
    $state = $this->Connect->set("UPDATE profile SET mail = '$this->mail', password = '$this->password' WHERE id = $this->id LIMIT 1");
    return $state;
  }

  public function generate_statistics($interactions){
    $interactions = $interactions ? $interactions : $this->interactions;
    $statistics = [];
    $statistics['likes'] = ceil(($interactions / 100) * 60);
    $statistics['coments'] = ceil(($interactions / 100) * 26);
    $statistics['share'] = ceil(($interactions / 100) * 21);
    $statistics['views'] = ceil(($interactions / 100) * 72);
    $statistics['followers'] = ceil(($interactions / 100) * 11);
    $statistics['interactions'] = $interactions;
    return $statistics;
  }

}
