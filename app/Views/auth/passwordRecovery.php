<div class="container col-md-12">
    <div class="row justify-content-center">
        <div class="col-1"></div>
        <div class="col-2">
            <button class="roundbutton" onclick="location.href = '<?=base_url()?>/public/AuthController/login';">
                <img class="icon" id="backButton" src="<?=base_url()?>/public/icons/backarrow.png" alt="back_button">
            </button>
        </div>
        <div class="col-6 row justify-content-center">
            <div id="Type">
                Recover Password
            </div>
        </div>
        <div class="col-3">
        </div>
    </div>
</div>
<div class="container">
    <div class="col-12">
        <div class="row justify-content-center">
            <div class="col-4"></div>
            <form class="col-8" style="margin-top: 10px" action="<?= base_url()?>/public/AuthController/check_login" method="post" autocomplete="off"   >

                <?php $validation = \Config\Services::validation(); ?>

                <?= csrf_field(); ?>

                <?php if( !empty( session()->getFlashdata('fail') ) ) : ?>
                    <div class="alert alert-danger" id="alertpopup"><?= session()->getFlashdata('fail'); ?></div>
                <?php endif ?>

                <?php if( !empty( session()->getFlashdata('success') ) ) : ?>
                    <div class="alert alert-success" id="alertpopup"><?= session()->getFlashdata('success'); ?></div>
                <?php endif ?>

                <div class="form-group ">

                    <div style="display: flex; align-items: center;">
                        <input type="text" style="font-family: 'Viga', sans-serif" name="email" class="form-control" placeholder="Email" value="<?= set_value('email') ?>">
                        <small class="text-danger" style="margin-left: 10px;"><?= isset($validation) ? display_error($validation, 'email') : '' ?></small>
                    </div>
                </div>

                <div class="form-group ">

                    <div style="display: flex; align-items: center; ">
                        <input id="passwordSignIn" style="font-family: 'Viga', sans-serif" type="password" name="password" class="form-control" placeholder="Password" value="<?= set_value('password') ?>">
                        <small class="text-danger" style="margin-left: 10px;"><?= isset($validation) ? display_error($validation, 'password') : '' ?></small>
                        <span class="material-symbols-outlined" id="showPswd10" style="display: block;" onclick="togglePassword(document.getElementById('passwordSignIn'), document.getElementById('showPswd10'), document.getElementById('hidePswd10'))">
    visibility
</span>
                        <span class="material-symbols-outlined" id="hidePswd10" onclick="togglePassword(document.getElementById('passwordSignIn'), document.getElementById('showPswd10'), document.getElementById('hidePswd10'))">
    visibility_off
</span>
                    </div>
                </div>

                <div  class="row ">
                    <div style="display: flex; align-items: center;margin-left: 125px;">
                        <input type="hidden" name="button1" value="<?= set_value('button1')?>">
                        <button class="textbuttonsmall" id="SignInButton">Send Email</button>
                    </div>
                </div>
            </form>

        </div>
    </div>
</div>