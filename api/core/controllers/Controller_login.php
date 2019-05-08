<?php
//constroller login
//path: post::/admin/login

class Controller_login extends Controller {
  public function execute(){


    $Security = new Security();
    $Security->set_username($this->data->username);
    $Security->set_password($this->data->password);
    $correct = $Security->authenticate();
    $hash = $correct ? $Security->generate_hash() : null ;

    $this->response([
      'error' => $correct ? false : true,
      'errorMessage' => $correct ? '' : 'datos incorrectos',
      'hash' => $hash,
    ]);
  }
}
