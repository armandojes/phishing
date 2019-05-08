<?php
//verify hash is correct
//path: post:: /admin/hash


class Controller_hash extends Controller {
  public function execute (){

    $Security = new Security();
    $hash_constant = $Security->generate_hash();
    $valid = $hash_constant === $this->data->hash ? true : false;


    $this->response([
      'error' => !$valid,
      'errorMessage' => $valid ? '' : 'hash incorrecto',
    ]);

  }
}
