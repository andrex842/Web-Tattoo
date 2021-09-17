<?php
$nombre = $_POST['nombre'];
$mail = $_POST['correo'];
$telefono = $_POST['telefono'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",
  con telefono " . $telefono . "\r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['comentario'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'andrex842@gmail.com';
$asunto = 'Solicitud de informaci&oacute;n';

mail($para, $asunto, utf8_decode($mensaje), $header);
echo "<script>alert('correo enviado exitosamente')</script>";
echo "<script>setTimeout(\"location href='cotizacion.html#'\".1000)</script>";
?>