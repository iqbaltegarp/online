<?php
header('Content-Type: application/json');
require_once '../db.php';

$result = $conn->query("SELECT * FROM products");
$products = [];

while ($row = $result->fetch_assoc()) {
    $products[] = $row;
}

echo json_encode($products);
?>
