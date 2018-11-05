<?
//print_r($_POST);
if (isset ($_POST['emailFF'])) {

    $h .= "Имя: ".$_POST['nameFF']."</br>";
    $h .= "Телефон: ".$_POST['phoneFF']."</br>";
    $h .= "E-mail: ".$_POST['emailFF']."</br>";

  mail ("an2riy@e-mail.ua", "заполнена контактная форма с ".$_SERVER['HTTP_REFERER'], $h,"Content-Type: text/html; charset=UTF-8" );
  echo 'true';
            }
?>