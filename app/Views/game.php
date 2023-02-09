<?php
/**
 * @var $equipped_avatar string
 */
?>

<link rel="stylesheet" href="<?=base_url()?>/public/css/style.css">

<div class="container justify-content-center" >
<a href="<?=base_url()?>/public/TypwindController/shop">
    <img id="overview_image" src="<?=base_url()?><?=$equipped_avatar->image?>"  alt="overview image"/>
</a>
        <div class="col-md-12 " id="games">
            <div class="row align-items-center" >
                <div class="col-1"></div>
                <div class="col-5">
                    <div id = game1 onclick="window.open('https://www.typing.com/student/game/keyboard-jump');">
                        <h2> Keyboard Jump</h2>
                        <img id="typeGame1" src="<?=base_url()?>/public/icons/Typegame1_KeyboardJump.png"  alt="thumbnail game 1"/>
                        <p id="gameDescription1"> Jump your way up by typing!</p>
                        <h3 id="gameDifficulty1"> Difficulty: Medium</h3>
                    </div>
                    <div id = game2 onclick="window.open('https://www.typing.com/student/game/type-a-balloon');">
                        <h2> Type Balloon</h2>
                        <img id="typeGame2" src="<?=base_url()?>/public/icons/Typegame2_TypeBalloon.png"  alt="thumbnail game 2"/>
                        <p id="gameDescription2"> Shoot the balloons with your keyboard skills!</p>
                        <h3 id="gameDifficulty2"> Difficulty: Medium</h3>
                    </div>
                </div>
                <div class="col-5">
                    <div id = game3 onclick="window.open('https://www.typing.com/student/game/keyboard-ninja');">
                        <h2> Keyboard Ninja</h2>
                        <img id="typeGame3" src="<?=base_url()?>/public/icons/Typegame3_KeyboardNinja.png"  alt="thumbnail game 3"/>
                        <p id="gameDescription3"> Slice the fruit like a real keyboard warrior! </p>
                        <h3 id="gameDifficulty3"> Difficulty: Hard</h3>
                    </div>
                    <div id = game4 onclick="window.open('https://www.typing.com/student/game/type-toss');">
                        <h2> Type Toss</h2>
                        <img id="typeGame4" src="<?=base_url()?>/public/icons/Typegame4_TypeToss.png"  alt="thumbnail game 4"/>
                        <p id="gameDescription4"> Type along on the fair!</p>
                        <h3 id="gameDifficulty4"> Difficulty: Hard</h3>
                    </div>
                </div>
                <div class="col-1"></div>
            </div>
        </div>

</div>
