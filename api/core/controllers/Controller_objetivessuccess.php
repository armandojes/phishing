<?php
//list objetives pending
// path: get::/objetives/success

class Controller_objetivessuccess extends Controller {
  public function execute (){

      $profile = new Profile();
      $list = $profile->get_objetivessuccess();

      $this->response([
        'error' => $list ? false : true,
        'items' => $list ? $list : [],
      ]);
  }
}
