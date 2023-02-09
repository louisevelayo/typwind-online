<?php
/**
 * @var $lesson_for_child string
 * @var $equipped_avatar string
 */
?>

<div class="container justify-content-center distance" id="scrollable1">

    <a href="<?=base_url()?>/public/TypwindController/shop">
        <img id="overview_image" src="<?=base_url()?><?=$equipped_avatar->image?>"  alt="avatar of the students that helps them navigate through website"/>
    </a>
    <?php foreach($lesson_for_child as $lesson): ?>
    <div class="omkadering2" id="omkadering_center_<?=$lesson->lessonID?>">
        <div class="row align-items-center ">
            <div class="col-3 ">
                <h2 class="lessonNumber row justify-content-center">Lesson <?=$lesson->lessonNumber?></h2>
            </div>
            <div class="col-md-1 ">
                <div class="vertical"></div>
            </div>
            <div class="col-6 ">
                <h2 class="rowType<?=$lesson->lessonNumber?><?=$lesson->handSetting?>"><?=$lesson->description?></h2>
                <h2 class="handType<?=$lesson->handSetting?>"><?=$lesson->lessonName?></h2>
            </div>
            <div class="col-2 row justify-content-center row align-items-end">
                <form action="<?= base_url()?>/public/TypwindController/lessonAjax" method="post">
                    <button type="submit" class="textbutton beginButton" name="lessonButton" value="<?=$lesson->lessonID?>">Begin</button>
                </form>
            </div>
        </div>
    </div>

<?php endforeach; ?>
</div>





