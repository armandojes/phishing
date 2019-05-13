<?php
//delete profile
//path: delete:: /admin/delete

class Controller_delete extends Controller {

  public function execute(){
      $Profile = new Profile();
      $Profile->set_id($this->data->id);
      $state = $Profile->delete();

      $this->response([
        'error' => $state ? false : true,
      ]);
  }

}
