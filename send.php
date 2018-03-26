<?php
if((isset($_POST['user-name-input'])&&$_POST['user-name-input']!="")&&(isset($_POST['user-phone-input'])&&$_POST['user-phone-input']!="")){
        $to = 'info@xn--9-8sbdqjfzm1b0j.xn--p1ai';
        $subject = 'Обратный звонок'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['user-name-input'].'</p>
                        <p>Телефон: '.$_POST['user-phone-input'].'</p>
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        mail($to, $subject, $message, $headers);
}

if((isset($_POST['leave-order-name-inpute'])&&$_POST['leave-order-name-inpute']!="")&&(isset($_POST['leave-order-phone-inpute'])&&$_POST['leave-order-phone-inpute']!="")){
        $to = 'info@xn--9-8sbdqjfzm1b0j.xn--p1ai';
        $subject = 'Оставленная заявка';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['leave-order-name-inpute'].'</p>
                        <p>Телефон: '.$_POST['leave-order-phone-inpute'].'</p>
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        mail($to, $subject, $message, $headers);
}


if((isset($_POST['mini-complement-user-name'])&&$_POST['mini-complement-user-name']!="")&&(isset($_POST['mini-complement-user-phone'])&&$_POST['mini-complement-user-phone']!="")){
        $to = 'info@xn--9-8sbdqjfzm1b0j.xn--p1ai';
        $subject = 'Оставленная заявка на миникомплект';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['mini-complement-user-name'].'</p>
                        <p>Телефон: '.$_POST['mini-complement-user-phone'].'</p>
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        mail($to, $subject, $message, $headers);
}



if((isset($_POST['standard-complement-user-name'])&&$_POST['standard-complement-user-name']!="")&&(isset($_POST['standard-complement-user-phone'])&&$_POST['standard-complement-user-phone']!="")){
        $to = 'info@xn--9-8sbdqjfzm1b0j.xn--p1ai';
        $subject = 'Оставленная заявка на стандартный';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['standard-complement-user-name'].'</p>
                        <p>Телефон: '.$_POST['standard-complement-user-phone'].'</p>
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        mail($to, $subject, $message, $headers);
}



if((isset($_POST['optimal-complement-user-name'])&&$_POST['optimal-complement-user-name']!="")&&(isset($_POST['optimal-complement-user-phone'])&&$_POST['optimal-complement-user-phone']!="")){
        $to = 'info@xn--9-8sbdqjfzm1b0j.xn--p1ai';
        $subject = 'Оставленная заявка на оптимальный комплект';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['optimal-complement-user-name'].'</p>
                        <p>Телефон: '.$_POST['optimal-complement-user-phone'].'</p>
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        mail($to, $subject, $message, $headers);
}



if((isset($_POST['huge-complement-user-name'])&&$_POST['huge-complement-user-name']!="")&&(isset($_POST['huge-complement-user-phone'])&&$_POST['huge-complement-user-phone']!="")){
        $to = 'info@xn--9-8sbdqjfzm1b0j.xn--p1ai';
        $subject = 'Оставленная заявка на оптовый комплект';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['huge-complement-user-name'].'</p>
                        <p>Телефон: '.$_POST['huge-complement-user-phone'].'</p>
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        mail($to, $subject, $message, $headers);
}
