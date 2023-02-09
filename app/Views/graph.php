<?php
/**
 * @var $studentID string
 * @var $isExpert string
 */
?>

<div class = "chart_wrapper">
    <strong class = "chart_student_title_<?php echo $studentID; ?>" style="font-family: 'Viga', sans-serif"><!----></strong>
    <div class ="graph">
        <button class = "smallroundbutton change_graph_<?php echo $studentID; ?>" onclick="changeGraph(<?php echo $studentID; ?>, 'previous')"> <img class="smallesticon" id="iconleft" src="<?=base_url()?>/public/icons/left.png" alt="left arrow to go to left graph"/></button>
        <div class="chart_student_<?php echo $studentID; ?>"></div>
        <button class = "smallroundbutton change_graph_<?php echo $studentID; ?>" onclick="changeGraph(<?php echo $studentID; ?>, 'next')"><img class="smallesticon" id="iconright" src="<?=base_url()?>/public/icons/right.png" alt="right arrow to go to right graph"/></button>
        <div class="chart_wrapper chart_empty_state_<?php echo $studentID; ?>" style = "display: none">
            <img class="chart_empty_state_image" src="#" width=350 height=350 style="padding: 20px;" alt="image to be displayed instead of the graph"/>
        </div>
    </div>
</div>

<script>
    var STUDENT_ID = <?php echo json_encode($studentID); ?>;
    var IS_EXPERT = <?php echo json_encode($isExpert); ?>;
</script>
<script src="<?=base_url()?>/public/js/dashboard.js" ></script>



