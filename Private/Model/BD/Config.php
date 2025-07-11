<?php

$Host = 'localhost:3307';
$user = 'root';
$password = 'masterkey';
$bd = 'beiron';

$Connect = mysqli_connect($Host,$user,$password,$bd);

/*if (!$Connect) {
    die("Erro de conexão: ") .  mysqli_connect_error()();
} else {
    echo "Conexão foi um sucesso";
}*/