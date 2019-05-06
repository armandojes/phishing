<?php
// test controller

class Controller_test extends Controller {
  public function execute(){

    $pictures = [
      'https://scontent.fpbc2-1.fna.fbcdn.net/v/t1.0-9/55807310_1220859708078352_3154774038643998720_n.jpg?_nc_cat=106&_nc_ht=scontent.fpbc2-1.fna&oh=7f41b7b0b1dff969e4cc22b1f0ff89c0&oe=5D2C6AC8',
      'https://scontent.fpbc2-1.fna.fbcdn.net/v/t1.0-9/45081588_1122454624585528_5704024488178352128_n.jpg?_nc_cat=108&_nc_ht=scontent.fpbc2-1.fna&oh=e9c335cdfa3f168a2edf554fc4e5410e&oe=5D730504',
      'https://scontent.fpbc2-1.fna.fbcdn.net/v/t1.0-9/24067905_896165593881100_7653225732684851650_n.jpg?_nc_cat=106&_nc_ht=scontent.fpbc2-1.fna&oh=2150c23715a7e3cae7fc1c2eb67a1661&oe=5D65B91F',
      'https://scontent.fpbc2-1.fna.fbcdn.net/v/t1.0-9/16938479_751503681680626_1174932314112928522_n.jpg?_nc_cat=108&_nc_ht=scontent.fpbc2-1.fna&oh=498ec706e24ddecda021f8cd2b45717f&oe=5D2FE85F',
    ];

    $Profile = new Profile();
    $Profile->set_name('lucita gomez');
    $Profile->set_interactions(154);
    $Profile->set_pictures($pictures);
    $Profile->create();
  }
}
