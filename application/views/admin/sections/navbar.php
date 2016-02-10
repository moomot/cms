<?php
/**
 * Created by PhpStorm.
 * User: kiko
 * Date: 1/7/16
 * Time: 1:00 PM
 */
?>
<?php if($login_status == "access_granted"): ?>
<div class="navbar navbar-default navbar-inverse navbar-static-top">
    <div class="container">
        <div class="navbar-left">
            <div class="hello">Панель администратора</div>
        </div>
        <div class="navbar-right">
            <?
                $nav = new Nav($baseURI);
                $nav->setModel(
                        [
                            "url" => '',
                            "content" => "На сайт"
                        ],
                        [
                            "url" => "/admin",
                            "content" => "Главная"
                        ],
                        [
                            "url" => "/admin/logout",
                            "content" => "Выход"
                        ]
                )->render("nav navbar-nav");
            ?>
        </div>
    </div>
</div>
<?php endif; ?>