<?php
/**
 * @var $all_lessons string
 */
?>

<div class="row align-items-center">
    <div class="offset-1"></div>
    <div class="col-1">
    </div>
    <div class="col-8">
        <div class="container" id="searchcontainer">
            <div class="row justify-content-end">
                <div class="lessonPageSearch">
                    <div class="lessonPageSearchIcon">

                    </div>
                    <div class="inputLesson">
                        <input type="text" placeholder="Search Lesson" id="mysearchlesson" autocomplete="off">
                    </div>
                    <span class="lessonPageSearchClear">

                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="offset-1"></div>
    <div class="col-1"></div>
</div>
<div class="col-md-12">
    <div class="col-2"> </div>
    <div class="col-8" id="omkadering_center">
<div class="container justify-content-center"  id="scrollable_expert_overviews">
    <?php

    foreach($all_lessons as $lesson):


        ?>
    <div class="lessonCard">
        <div class="nonExpLesson<?=$lesson->lessonID?>">
            <div class="omkadering2">
                <div class="row  align-items-center">
                    <div class="col-3  ">
                        <h2 class="lessonNumber row justify-content-center">Lesson <?=$lesson->lessonNumber?></h2>
                    </div>
                    <div class="col-md-1 ">
                        <div class="vertical"></div>
                    </div>
                    <div class="col-5 ">
                        <h2 class="rowType<?=$lesson->lessonNumber?><?=$lesson->handSetting?>"><?=$lesson->description?></h2>
                        <h2 class="handType<?=$lesson->handSetting?>"><?=$lesson->lessonName?></h2>
                    </div>
                    <div class="offset-3">
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-auto align-self-center">
                        <button class="smallroundbutton" id="expandbutton_<?=$lesson->lessonID?>" title="show content" onclick="toggleExpandExercise(<?=$lesson->lessonID?>)">
                            <img class="smallicon" id="expandbutton2_<?=$lesson->lessonID?>" src="<?=base_url()?>/public/icons/expand.png" alt="expand button">
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="expLesson<?=$lesson->lessonID?>" style="display: none">
            <div class="omkadering2">
                <div class="row  align-items-center">
                    <div class="col-3  ">
                        <h2 class="lessonNumber row justify-content-center">Lesson <?=$lesson->lessonNumber?></h2>
                    </div>
                    <div class="col-md-1 ">
                        <div class="vertical"></div>
                    </div>
                    <div class="col-5 ">
                        <h2 class="rowType<?=$lesson->lessonNumber?><?=$lesson->handSetting?>"><?=$lesson->description?></h2>
                        <h2 class="handType<?=$lesson->handSetting?>"><?=$lesson->lessonName?></h2>
                    </div>
                    <div class="offset-3">
                    </div>
                </div>
                <div class="row  align-items-center">
                    <div class="offset-3">
                    </div>
                    <div class="offset-1 ">
                    </div>
                    <div class="col-8 ">
                        <hr/>
                    </div>
                </div>
                <div class="row justify-content-around">
                    <div class="col-2">
                        <p class="contentText">Content:</p>
                    </div>
                    <div class="col-8">
                        <p><?=$lesson->content?></p>
                    </div>

                </div>
                <div class="row justify-content-center">
                    <div class="col-md-auto align-self-center">
                        <button class="smallroundbutton" id="shrinkbutton_<?=$lesson->lessonID?>" onclick="toggleExpandExercise(<?=$lesson->lessonID?>)">
                            <img class="smallicon" id="shrinkbutton2_<?=$lesson->lessonID?>" title="hide content" src="<?=base_url()?>/public/icons/minimize.png" alt="shrink button">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <?php

    endforeach;
    ?>
    </div>
    </div>
    <div class="col-2"></div>
</div>




<!-- <div class="circle_overview ">
    <div class="circle1"></div>
    <div class="circle1"></div>
    <div class="circle1"></div>
</div> -->