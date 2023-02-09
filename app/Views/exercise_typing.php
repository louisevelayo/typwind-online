<?php
/**
 * @var $equipped_avatar string
 */
?>

<script type='module' src="<?=base_url()?>/public/js/typing.js"></script>
<script type='module' src="<?=base_url()?>/public/js/keyboard.js"></script>

<div class="col-md-12 " id="exercise-typing-container">
    <div class="row align-items-center">
        <div class="offset-1"></div>
        <div class="col-1"></div>
        <div class="col-8" id="exercise-typing-div">
            <div id = "typing">
                <div class="progress-bar">
                    <div class="progress-completed" id="prog-completed">
                        <div id="avatar-text-wrapper">
                            <img id="avatar-in-progress-bar" src="<?=base_url()?><?=$equipped_avatar->image?>" alt="avatar-in-progress-bar">
                            <div id="progress-speech-div"></div>
                        </div>
                    </div>
                </div>
                <div id="typing-game-header">
                    <div id="info">
                        <img id="image-of-letter" alt="" src="#">
                    </div>
                    <div id="buttons">
                        <button class="typing-setting-toggles" id="toggle-sound">
                            <img id="sound-toggle-image" title="sound off" src="<?=base_url()?>/public/icons/typing_icons/volume_up.png">
                        </button>
                        <button class="typing-setting-toggles" id="toggle-keyboard">
                            <img id="keyboard-toggle-image" title="hide keyboard" src="<?=base_url()?>/public/icons/typing_icons/keyboard_show.png">
                        </button>
                        <button id="toggle-image-button" class="typing-setting-toggles">
                            <img id="image-toggle-image" title="hide image" src="<?=base_url()?>/public/icons/typing_icons/show_image.png">
                        </button>
                        <button class="typing-setting-toggles" id="toggle-hands">
                            <img id="hand-toggle-image" title="hide hands" src="<?=base_url()?>/public/icons/typing_icons/back_hand.png">
                        </button>
                        <button id="newGameBtn" class="textbuttonsmall">Save</button>
                    </div>
                </div>
                <div class="use-keyboard-input" id="game"> <!-- tabindex="0" means that the element should be focusable in sequential keyboard navigation, after any positive tabindex values and its order is defined by the document's source order. -->
                    <div id="words"></div>
                    <div id="cursor"></div>
                </div>
                <div id="hand-image-wrapper">
                    <img id="hand-image" alt="" src="#">
                </div>
            </div>
        </div>
        <div class="col-1"></div>
        <div class="offset-1"></div>
    </div>
    <div class="row">

    </div>
</div>

