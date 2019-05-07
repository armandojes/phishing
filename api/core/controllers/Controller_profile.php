<?php
//controller profile
//path: get::/profile/{id}
//params: [id]

class Controller_profile extends Controller {

  public function execute(){

    $Profile = new Profile();

    $Profile->set_id($this->params->id);

    $profile_data = $Profile->get_single();

    if ($profile_data){
      $profile_data['statistics'] = $Profile->generate_statistics($profile_data['interactions']);
    }

    $this->response([
      'error' => $profile_data ? false : true,
      'errorMessage' =>  $profile_data ? '' : 'profile does not exist',
      'data' => $profile_data ? $profile_data : []
    ]);

  }

}
