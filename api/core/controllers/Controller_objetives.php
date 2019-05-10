<?php
//list objetives pending
// path: get::/objetives

class Controller_objetives extends Controller {
  public function execute (){

      $profile = new Profile();
      $list = $profile->get_objetives();

      $this->response([
        'error' => $list ? false : true,
        'items' => $list ? $list : [],
      ]);
  }
}
