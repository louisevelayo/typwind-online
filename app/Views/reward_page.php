<?php
/**
 * @var $equipped_avatar string
 * @var $bk1 string
 * @var $bk2 string
 * @var $bk3 string
 * @var $wk1 string
 * @var $wk2 string
 * @var $wk3 string
 */
?>

<script>
    var victory_trumpet = new Audio('../sounds/victory_trumpets.mp3');
    victory_trumpet.play();
    console.log('hello');
</script>
<script src="<?=base_url()?>/public/js/rewardpage_translation.js"></script>

<div class="pyro">
    <div class="before"></div>
    <div class="after"></div>
</div>

<link rel="stylesheet" href="<?=base_url()?>/public/css/style.css">

<div class="col-md-12" id="reward">
    <a href="<?=base_url()?>/public/TypwindController/shop">
        <img id="overview_image" src="<?=base_url()?><?=$equipped_avatar->image?>"  alt="overview_image"/>
    </a>
    <div class="row align-items-center">
        <div class="offset-1"></div>
        <div class="col-3"></div>
        <div class="col-4 ">
            <div class=" col align-self-center">
                <h1 id="box">WELL DONE!</h1>
                <div class="reward-wrapper">
                    <h2 id="box2">You earned 20 </h2>
                    <img id="currency-icon2" src="<?=base_url()?>/public/icons/payments_blue.png"  alt="currency student icon"/>
                </div>
                <div class="reward-wrapper2 ">
                <button class="secondaryRoundbutton " onclick="location.href = '<?=base_url()?>/public/TypwindController/exercise_typing';">
                    <img class="secondaryicon"  src="<?=base_url()?>/public/icons/again.png" alt="again">
                </button>
                <button class="secondaryRoundbutton" onclick="location.href = '<?=base_url()?>/public/TypwindController/shop';">
                    <img class="secondaryicon "  src="<?=base_url()?>/public/icons/shopping-cart2.png" alt="shop">
                </button>
                    <button class="textbuttonsmall" id="reward_button" onClick="location.href='<?=base_url()?>/public/TypwindController/exercises_overview'">
                        <span id="next_text">NEXT</span>
                        <img class="smallicon" src="<?=base_url()?>/public/icons/arrowRight.png" alt="next">
                    </button> <br/>
                </div>
            </div>
        </div>
        <div class="col-3">
        </div>
        <div class="offset-1"></div>


    </div>
    <div class="row align-items-center" id="reward2">
        <div class="offset-1"></div>
        <div class="col-1"></div>
        <div class="col-4 ">
            <h4 id="best_worst_letters_text">YOU ARE A MASTER AT THESE LETTERS:</h4>
                <button type="button" class="keyboard__key rewardLetters2"><?=$bk1?></button>
                <button type="button" class="keyboard__key rewardLetters1"><?=$bk2?></button>
                <button type="button" class="keyboard__key rewardLetters1"><?=$bk3?></button>
        </div>
        <div class="col-1"></div>
        <div class="col-4">
            <h4 id="best_worst_letters_text2">THESE LETTERS REQUIRE ATTENTION:</h4>
                <button type="button" class="keyboard__key rewardLetters2"><?=$wk1?></button>
                <button type="button" class="keyboard__key rewardLetters1"><?=$wk2?></button>
                <button type="button" class="keyboard__key rewardLetters1"><?=$wk3?></button>
        </div>
        <div class="offset-1"></div>
    </div>
</div>
