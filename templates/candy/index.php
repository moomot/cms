<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><? echo $settings['title']; ?></title>
    <link rel="stylesheet" href="<? echo $prefix; ?>/css/style.css"/>
    <link rel="stylesheet" href="<? echo $prefix; ?>/css/bootstrap.css"/>
    <link rel="stylesheet" href="<? echo $prefix; ?>/css/bootstrap-datetimepicker.min.css"/>
</head>
<body>
    <?php include "navbar.php"; ?>
    <div class="container">
        <?php include $this->getView(); ?>
    </div>

<script src="<? echo $prefix; ?>/js/jquery-1.11.1.min.js"></script>
<script src="<? echo $prefix; ?>/js/moment-with-locales.js"></script>
<script src="<? echo $prefix; ?>/js/bootstrap.min.js"></script>
<script src="<? echo $prefix; ?>/js/bootstrap-datetimepicker.min.js"></script>
</body>
</html>