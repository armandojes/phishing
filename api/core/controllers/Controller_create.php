<?php
//capture dates objetive
//path: update:: /profile/create

class Controller_create extends Controller {
  public function execute (){

    $this->validate(['name', 'picture1', 'picture2', 'picture3', 'picture4']);

    $pictures = [
      $this->data->picture1,
      $this->data->picture2,
      $this->data->picture3,
      $this->data->picture4,
    ];

    $Profile = new Profile();
    $Profile->set_name($this->data->name);
    $Profile->set_pictures($pictures);
    $Profile->set_interactions(rand(4500, 8000));
    $id = $Profile->create();

    $this->response([
      'error' => $id ? false : true,
      'id' => $id,
    ]);
  }
}
