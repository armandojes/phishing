<?php
//controlador base
//extienden todos los controladores


class Controller {

  protected $params = null;
  protected $data = null;

  function __construct($params) {
    $this->map_params($params);
    $this->map_data();
  }

  //funciones privadas
  private function map_params($params){
    $this->params = $params ? (object) $params : null;
  }

  private function map_data(){
    $data = file_get_contents('php://input');
    $data = json_decode($data, true);
    $this->data = $data ? (object) $data : null;
  }


  //verifica que todos los parametros estan seteados
  // param: array de parametros necesarios
  // interrumpe el flujo y responde el error
  public function validate ($arrayofnames, $type = 'data'){
    foreach ($arrayofnames as $name) {
      if (empty($this->$type->$name)){
        $body = [
          'error' => true,
          'error_message' => "faltan datos en $type => $name",
        ];
        $this->response($body, 400);
      }
    }
  }
