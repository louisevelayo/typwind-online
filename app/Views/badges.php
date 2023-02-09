<?php
/**
 * @var $badges_owned_by_student string
 * @var $all_badges string
 */
?>

<script src="<?=base_url()?>/public/js/badges_translation.js"></script>

<div class="col-md-12 " id="badges">
    <?php
    $i = 0;
    foreach ($badges_owned_by_student as $badge_owned):
        $owned_array_on_itemID[] = $badge_owned->itemID;
    endforeach;
    foreach($all_badges as $badge):
        $i++;
        if($i%5 == 1):
            ?>
            <div class="row align-items-center shop">
            <div class="offset-1"></div>

        <?php
        endif;
        ?>
        <div class="col-2 badge-wrapper">

            <?php
            if(in_array($badge->itemID, $owned_array_on_itemID)):
                ?>
                <img class="badge-img-active" src="<?=base_url()?><?=$badge->image?>" alt="activeBadge">
                <div class="badge-text-wrapper-active">
                    <h3 id="<?=$badge->itemID?>"><?=$badge->badgeName?></h3>
                </div>
            <?php
            else:
                ?>
                <img class="badge-img" src="<?=base_url()?><?=$badge->image?>" alt="otherBadge">
                <div class="badge-text-wrapper">
                    <h3 id="<?=$badge->itemID?>"><?=$badge->badgeName?></h3>
                </div>
            <?php
            endif;
            ?>
        </div>
        <?php
        if($i%5 ==0):
            ?>

            <div class="offset-1"></div>
            </div>
        <?php
        endif;
    endforeach;
    ?>
</div>

