<?php
    define('ROOT', dirname(__DIR__));

    require_once "./database/MysqlDatabase.php";

    $db = new Core\Database\MysqlDatabase("carte");
    $pdo = null;
    try {
        $pdo = $db->getPDO();
    } catch (PDOException $e) {
        echo 'Connection failed: ' . $e->getMessage();
    }
    // var_dump($pdo);
    $query = "SELECT cc.*, c.nom as nom ";
    $query = $query . " FROM `communecarte` cc ";
    $query = $query . " JOIN commune c ON cc.commune = c.id";
    $communesCarte = $db->query($query);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>RWF Carte Interactiv</title>
  <link rel="stylesheet" href="./assets/CSS/carte.css">
</head>
<body>
  <h1 style="text-align:center;">Rural Web Factory - Carte Intractive</h1>

Hello
<?php require ROOT . '/Carte/carte/carte.php'; 
    $data = [];
    $data['communePoly'] = $communesCarte;
    $data['data'] = [];
    $carte = new Carte\Carte($data);
    $carte->show();
?>

  </body>
</html>
