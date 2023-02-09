<?php
/**
 * @var $latestLesson string
 * @var $equipped_avatar string
 * @var $accuracy string
 * @var $currency string
 * @var $graph string
 * @var $latestExercise string
 */
?>

<div class="container-fluid">
    <div class="row" style="height: 90vh">
        <div class="col-md-3">
            <div class="bubble bubble-bottom-left" id="bubbletext" >Hello <?php
                if (isset($_COOKIE['LoggedUser'])){
                    $loggedUser = json_decode($_COOKIE['LoggedUser'], true);
                    $studentName = $loggedUser['user']['firstName'];
                    echo $studentName;
                } ?>, click on me to go to the shop!
            </div>
            <a href="<?=base_url()?>/public/TypwindController/shop">
                <img id="home_avatar" src="<?=base_url()?><?=$equipped_avatar->image?>"  alt="bug avatar that helps students to navigate through website"/>
            </a>
        </div>
        <div class="col-md-3 col-centered" id="home_buttons_column">
            <form action="<?= base_url()?>/public/TypwindController/lessonAjax" style="width:100%" method="post">
                <button type="submit" class="textbutton homebutton" id="latestLessonHome" name="lessonButton" value="<?=$latestLesson?>"></button>
            </form>
            <form action="<?= base_url()?>/public/TypwindController/lessonAjax" style="width:100%" method="post">
                <button type="submit" class="textbutton homebutton" id="latestExerciseHome" name="exerciseButton" value="<?=$latestExercise?>"></button>
            </form>
        </div>
        <div class="col-md-5 col-centered" id="home_graph_column">
            <?=$graph?>
            <div id="accuracy_wrapper" style = "display: none">
                <h2 id="homepage_accuracy_text">Your total accuracy is</h2>
                <h2 id="homepage_accuracy_value"><?=$accuracy?>%</h2>
            </div>
        </div>

    </div>
</div>