<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$request_body = json_decode(file_get_contents('php://input'));
var_dump($request_body);
echo $_POST;
exit;

try {
    $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
    $cabeceras = "From: Keva <marketing@kevadental.com>\r\n"; //
    $cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $cabeceras .= "Reply-To: {$request_body->email}" . "\r\n";
    $subject = '';
    $str_body = '';

    if (!empty($request_body->nombre) && !empty($request_body->email) && !empty($request_body->tlf) && !empty($request_body->mensaje)) {
        $to = "webmaster@kevadental.com";
        $subject = "Nueva conversión desde la web";
        $str_body .= "<p><b>Nombre y Apellido:</b> {$request_body->nombre}</p>\n";
        $str_body .= "<p><b>Email:</b> {$request_body->email}</p>\n";
        $str_body .= "<p><b>Telefono:</b> {$request_body->tlf}</p>\n";
        $str_body .= "<p><b>Mensaje:</b> {$request_body->mensaje}</p>\n";
        
        if (mail($to, $subject, $str_body, $cabeceras)) {
            header('Content-type:application/json;charset=utf-8');
            echo json_encode(['mensaje' => 'Gracias por escribirnos, pronto nos pondremos en contacto.']);
        } else {
            http_response_code(500);
            header('Content-type:application/json;charset=utf-8');
            echo json_encode(['mensaje' => 'Lo sentimos, hubo un error al enviar tu mensaje. Vuelve a intentarlo.']);
        }
    }
} catch (Exception $th) {
    http_response_code(500);
    header('Content-type:application/json;charset=utf-8');
    echo "{'message': 'Mailer Error', 'error': '$th->message'}";
}
