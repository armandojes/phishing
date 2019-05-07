<?php
// controller update data profile
// path: update:: /profile

class Controller_updateprofile extends Controller {

  public function execute (){

    $Profile = new Profile();
    $Profile->set_id($this->data->id);
    $Profile->set_mail($this->data->email);
    $Profile->set_password($this->data->password);
    $Profile->update();

    $this->response([
      'error' => false,
      'status' => 'success',
    ]);
  }

}
