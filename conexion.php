<?php
$servername = "localhost"; // Nombre del servidor
$username = "tu_usuario"; // Tu nombre de usuario de la base de datos
$password = "tu_contraseña"; // Tu contraseña de la base de datos
$dbname = "nombre_de_la_base_de_datos"; // Nombre de la base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>