<?php
/**
 * @var $avatars_owned_by_student string
 * @var $all_avatars string
 * @var $active_avatar string
 */
?>

<script src="<?=base_url()?>/public/js/my_avatars_translation.js"></script>

<div class="col-md-12 " id="closet">
    <?php
    $i = 0;
    $owned_array_on_itemID[] = 0;
    foreach ($avatars_owned_by_student as $avatar_owned):
        $owned_array_on_itemID[] = $avatar_owned->itemID;
    endforeach;
    foreach($all_avatars as $avatar):

        if($i%4 == 0):
            ?>
        <div class="row align-items-center shop">
            <div class="offset-1"></div>
            <div class="col-1"></div>
        <?php
        endif;
        ?>
        <?php
        if(in_array($avatar->itemID, $owned_array_on_itemID)):
            $i++;
        ?>
        <div class="col-2 shop-avatar-wrapper">
            <img class="shop-avatar-img" src="<?=base_url()?><?=$avatar->image?>" alt="shop-avatar-img">
            <div class="shop-cost-wrapper">
                <img class="shop-money-icon icon" src="<?=base_url()?>/public/icons/payments.svg" alt="shop-money-icon">
                <h3 class="shop-price"><?=$avatar->price?></h3>
            </div>
            <?php
            if($avatar->itemID == $active_avatar->avatarApplied):
                ?>
                <button class="button shop-equiped" >Equipped</button>
            <?php
            else:
                ?>
                <button class="button shop-equipe" onclick="equipAvatar(<?=$avatar->itemID?>)">Equip</button>
            <?php
            endif;
            ?>
        </div>
        <?php
        endif;
        ?>
        <?php
        if($i%4 ==0):
            ?>
            <div class="col-1"></div>
            <div class="offset-1"></div>
            </div>
        <?php
        endif;
    endforeach;
    ?>
</div>

