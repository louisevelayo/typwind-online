<?php
/**
 * @var $avatars_owned_by_student string
 * @var $all_avatars string
 * @var $balance string
 */
?>

<script src="<?=base_url()?>/public/js/shop_translation.js"></script>

<div class="col-md-12 " id="shop">
    <?php
         $i = 0;
         foreach ($avatars_owned_by_student as $avatar_owned):
                    $owned_array_on_itemID[] = $avatar_owned->itemID;
         endforeach;
         foreach($all_avatars as $avatar):
         $i++;
            if($i%4 == 1):
         ?>
         <div class="row align-items-center shop">
            <div class="offset-1"></div>
            <div class="col-1"></div>
                <?php
                endif;
            ?>
            <div class="col-2 shop-avatar-wrapper">
                <img class="shop-avatar-img" src="<?=base_url()?><?=$avatar->image?>" alt="one of the shop avatars">
                <div class="shop-cost-wrapper">
                    <img class="shop-money-icon icon" src="<?=base_url()?>/public/icons/payments.svg" alt="money icon">
                    <h3 class="shop-price"><?=$avatar->price?></h3>
                </div>
                <?php
                    if(in_array($avatar->itemID, $owned_array_on_itemID)):
                ?>
                <button class="button shop-owned">Owned</button>
                    <!-- elseif($avatar->price <= $balance ): -->
                <?php
                    elseif($avatar->price <= $balance ):
                    ?>
                    <button class="button shop-buy" onclick="tryBuyingAvatar(<?=$avatar->itemID?>)">Buy</button>
                <?php
                    else:
                    ?>
                    <button class="button shop-Nbuy">Buy</button>
                <?php
                    endif;
                ?>
            </div>
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