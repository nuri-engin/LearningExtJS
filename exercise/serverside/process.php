<?php

  $response = array(
    'test' => 'this is a test',
    'post' => $_POST,
    'get' => $_GET,
    'request' => $_REQUEST,
  );
  echo json_encode($response)

?>
