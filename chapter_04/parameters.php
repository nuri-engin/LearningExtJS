<?php
	header('Content-Type: application/json');
	$information = array(
		'success'=>true,
		'msg'=>'Message response text using the following parameters:<br><b>x</b>=' . $_POST['x'] . ', <b>y</b>=' . $_POST['y'] . '',
		'x'=> $_POST['x'],
		'y'=> $_POST['y']
	);
	echo  json_encode( $information );
 ?>
