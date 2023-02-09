<?php
/**
 * @var $content string
 * @var $pageTitle string
 * @var $menu_items string
 */
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--    <meta name="viewport" content="width=device-width, initial-scale=1">-->

    <title><?=$pageTitle?></title>

    <link rel="icon" type="image/x-icon" href="<?=base_url()?>/public/icons/favicon.ico">

    <meta name="description" content="Source code generated using layoutit.com">
    <meta name="author" content="LayoutIt!">

    <link href="<?=base_url()?>/public/layoutit/src/css/bootstrap.min.css" rel="stylesheet">
    <link href="<?=base_url()?>/public/css/style.css" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,300;8..144,400;8..144,600;8..144,700;8..144,800&family=Viga&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.4/js/tether.min.js"></script>
    <script src="<?=base_url()?>/public/layoutit/src/js/jquery.min.js"></script>
    <script src="<?=base_url()?>/public/layoutit/src/js/bootstrap.min.js"></script>
    <script src="<?=base_url()?>/public/layoutit/src/js/scripts.js"></script>


    <!--    Your code added -->
    <script src="<?=base_url()?>/public/js/lessonExpert.js"></script>
    <script src="<?=base_url()?>/public/js/exerciseExpert.js"></script>
    <script src="<?=base_url()?>/public/js/myStudent.js"></script>
    <script src="<?=base_url()?>/public/js/general.js"></script>
    <script src="<?=base_url()?>/public/js/edit_user_profiles/expert_profile.js"></script>
    <script src="https://www.gstatic.com/charts/loader.js"></script>

    <meta name="viewport" content="width=device-width, user-scalable=yes">
    <link rel="stylesheet" href="<?=base_url()?>/public/css/style.css">
    <!-- Not used
    <script type='module' src="<?=base_url()?>/public/js/typing.js" defer></script>
    <script type='module' src="<?=base_url()?>/public/js/keyboard.js" defer></script>
    -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js"></script>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

</head>
<body>
<header>
    <div class="container-fluid">
        <div id="navbar" class="row">
            <div id="logo-div" class="col-md-1" onclick="location.href='<?=base_url()?>/public/TypwindController/myStudents'">
                <div id="logo-top">
                    <div id="keyboard-wrapper">
                        <img id="keyboard-icon" src="<?=base_url()?>/public/icons/keyboard.png" alt="keyboard-icon">
                    </div>
                    <div id="logo-text-top-wrapper">
                        <h5 id="logo-text-top">TYP</h5>
                    </div>
                </div>
                <div id="logo-bottom">
                    <h5 id="logo-text-bottom">WIND</h5>
                </div>
            </div>
            <div class="col-md-9">
                <div id="navlinks-wrapper">
                    <ul id="navlinks">
                        <?php foreach($menu_items as $menu): ?>
                            <li><a href="<?=base_url()?>/public/TypwindController/<?=$menu['link']?>" title="<?=$menu['title']?>" class="<?=$menu['className']?>" id="<?=$menu['name']?>"></a></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
            <div class="col-md-2">
                <div id="menu-wrapper">
                    <img id="account-icon1" onclick="openSideMenu()" src="<?=base_url()?>/public/icons/expert_avatar.png" alt="open side menu avatar">
                </div>
            </div>
        </div>
    </div>
    <div class="subMenuWrap" id="subMenuWrap" style="display: none;">
        <div class="sub-menu">
            <div class="user-info">
                <img  id="account-icon2" src="<?=base_url()?>/public/icons/expert_avatar.png" alt="logged expert avatar">
                <h2><?php
                    if (isset($_COOKIE['LoggedUser'])){
                        //echo $_COOKIE['LoggedUser'];
                        $loggedUser = json_decode($_COOKIE['LoggedUser'], true);
                        $expertID = $loggedUser['user']['expertID'];
                        //echo $expertID;
                        $expertName = $loggedUser['user']['firstName'];
                        echo $expertName;
                        //echo"\n";
                        $email = $loggedUser['user']['email'];
                        //echo $email;
                        //echo"\n";
                    }
                    ?></h2>
            </div>
            <hr>

            <div class="langs">
                <a href="#" class="language" lang="en" style="font-family: 'Viga', sans-serif;">ENG</a>
                <a href="#" class="language active" lang="nl" style="font-family: 'Viga', sans-serif;">NED</a>
            </div>
            <a href="#" class="sub-menu-link" onclick="location.href = '<?=base_url()?>/public/TypwindController/edit_expert_profile';">

                <p id="editlink" style="font-family: 'Viga', sans-serif">EDIT PROFILE</p>
            </a>
            <a href="#" class="sub-menu-link" onclick="location.href = '<?=base_url()?>/public/AuthController/logout';">
                <p id="logoutlink" style="font-family: 'Viga', sans-serif">LOG OUT</p>
            </a>
        </div>
    </div>

</header>
<main>
    <div class="col-md-12 " id="templateMain">
        <?=$content?>
    </div>

    <div id="footer">
        <img id="footerImage" alt="footerimage" src="<?=base_url()?>/public/icons/banner.png">
    </div>
</main>


</body>
</html>
