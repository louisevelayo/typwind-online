<?php
/**
 * @var $exercise_for_child  string
 * @var $equipped_avatar string
 */
?>

<div class="container justify-content-center distance" id="scrollable1">
        <a href="<?=base_url()?>/public/TypwindController/shop">
            <img id="overview_image" src="<?=base_url()?><?=$equipped_avatar->image?>"  alt="overview_image"/>
        </a>
    <?php foreach($exercise_for_child as $exercise): ?>
        <div class="omkadering2" id="omkadering_center_<?=$exercise->exerciseID?>">
            <div class="row align-items-center ">
                <div class="col-3  ">
                    <h2 class="exerciseNumber row justify-content-center">Exercise <?=$exercise->exerciseNumber?></h2>
                </div>
                <div class="col-md-1 ">
                    <div class="vertical"></div>
                </div>
                <div class="col-6 ">
                    <h2 class="rowType<?=$exercise->exerciseNumber?><?=$exercise->handSetting?>"><?=$exercise->description?></h2>
                    <h2 class="handType<?=$exercise->handSetting?>"><?=$exercise->exerciseName?></h2>
                </div>
                <div class="col-2 row justify-content-center row align-items-end">
                    <form action="<?= base_url()?>/public/TypwindController/lessonAjax" method="post">
                        <button type="submit" class="textbutton beginButton" name="exerciseButton" value="<?=$exercise->exerciseID?>">Begin</button>
                    </form>
                </div>
            </div>
        </div>
    <?php endforeach; ?>
</div>








