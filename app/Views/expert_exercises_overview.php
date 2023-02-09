<?php
/**
 * @var $all_exercises string
 */
?>

<div class="exerciseOverview">
    <div class="row align-items-center">
        <div class="offset-1"></div>
        <div class="col-1">
        </div>
        <div class="col-8">
            <div class="container" id="searchcontainer">
                <div class="row justify-content-end">
                    <div class="exercisePageSearch">
                        <div class="exercisePageSearchIcon">

                        </div>
                        <div class="inputExercise">
                            <input type="text" placeholder="Search Exercise" id="mysearchExercise" autocomplete="off">
                        </div>
                        <span class="exercisePageSearchClear">

                    </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="col-2"> </div>
        <div class="col-8" id="omkadering_center">
            <div class="container justify-content-center"  id="scrollable_expert_overviews">
                <?php

                foreach($all_exercises as $exercise):


                    ?>
                <div class="exerciseCard">
                    <div class="nonExpLesson<?=$exercise->exerciseID?>">
                        <div class="omkadering2">
                            <div class="row  align-items-center">
                                <div class="col-3  ">
                                    <h2 class="exerciseNumber row justify-content-center">Exercise <?=$exercise->exerciseNumber?></h2>
                                </div>
                                <div class="col-md-1 ">
                                    <div class="vertical"></div>
                                </div>
                                <div class="col-5 ">
                                    <h2 class="rowType<?=$exercise->exerciseNumber?><?=$exercise->handSetting?>"><?=$exercise->description?></h2>
                                    <h2 class="handType<?=$exercise->handSetting?>"><?=$exercise->exerciseName?></h2>
                                </div>
                                <div class="offset-3">
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-auto align-self-center">
                                    <button class="smallroundbutton" id="expandbutton_<?=$exercise->exerciseID?>" title="show content" onclick="toggleExpandExercise(<?=$exercise->exerciseID?>)">
                                        <img class="smallicon" id="expandbutton2_<?=$exercise->exerciseID?>" src="<?=base_url()?>/public/icons/expand.png" alt="expandButton">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="expLesson<?=$exercise->exerciseID?>" style="display: none">
                        <div class="omkadering2">
                            <div class="row  align-items-center">
                                <div class="col-3  ">
                                    <h2 class="exerciseNumber row justify-content-center">Exercise <?=$exercise->exerciseNumber?></h2>
                                </div>
                                <div class="col-md-1 ">
                                    <div class="vertical"></div>
                                </div>
                                <div class="col-5 ">
                                    <h2 class="rowType<?=$exercise->exerciseNumber?><?=$exercise->handSetting?>"><?=$exercise->description?></h2>
                                    <h2 class="handType<?=$exercise->handSetting?>"><?=$exercise->exerciseName?></h2>
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
                                    <hr>
                                </div>
                            </div>
                            <div class="row justify-content-around">
                                <div class="col-2">
                                    <p class="contentText">Content:</p>
                                </div>
                                <div class="col-8">
                                    <p><?=$exercise->content?></p>
                                </div>

                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-auto align-self-center">
                                    <button class="smallroundbutton" id="shrinkbutton_<?=$exercise->exerciseID?>" onclick="toggleExpandExercise(<?=$exercise->exerciseID?>)">
                                        <img class="smallicon" id="shrinkbutton2_<?=$exercise->exerciseID?>" title="hide content" src="<?=base_url()?>/public/icons/minimize.png" alt="shrink button">
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
</div>



<!-- <div class="circle_overview ">
    <div class="circle1"></div>
    <div class="circle1"></div>
    <div class="circle1"></div>
</div> -->








