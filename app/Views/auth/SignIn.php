<div class="container col-md-12">
    <div class="row justify-content-center">
        <div class="col-1"></div>
        <div class="col-2">
            <button class="roundbutton" onclick="location.href = '<?=base_url()?>/public/AuthController/login';">
                <img class="icon" id="backButton" src="<?=base_url()?>/public/icons/backarrow.png" alt="backbutton">
            </button>
        </div>
        <div class="col-6 row justify-content-center">
            <div id="Type">
                <?php
                        if (isset($_COOKIE['button1'])){
                            echo $_COOKIE['button1'];
                            echo"\n";
                        } ?> Portal
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
                <form class="col-8" style="margin-top: 10px;" action="<?= base_url()?>/public/AuthController/check_login" method="post" autocomplete="off"   >

                    <?php $validation = \Config\Services::validation(); ?>

                    <?= csrf_field(); ?>

                    <?php if( !empty( session()->getFlashdata('fail') ) ) : ?>
                        <div class="alert alert-danger" id="alertpopup"><?= session()->getFlashdata('fail'); ?></div>
                    <?php endif ?>

                    <?php if( !empty( session()->getFlashdata('success') ) ) : ?>
                        <div class="alert alert-success" id="alertpopup3"><?= session()->getFlashdata('success'); ?></div>
                    <?php endif ?>

                    <div class="form-group ">

                        <div style="display: flex; align-items: center;">
                            <input id="emailSignIn" type="text" style="font-family: 'Viga', sans-serif; margin-left: 20px;" name="email" class="form-control" placeholder="Email" value="<?= set_value('email') ?>">
                            <small class="text-danger" style="margin-left: 10px;"><?= isset($validation) ? display_error($validation, 'email') : '' ?></small>
                        </div>
                    </div>

                    <div class="form-group ">

                        <div style="display: flex; align-items: center; ">
                            <input id="passwordSignIn" style="font-family: 'Viga', sans-serif; margin-left: 20px;" type="password" name="password" class="form-control" placeholder="Password" value="<?= set_value('password') ?>">
                            <small class="text-danger" style="margin-left: 10px;"><?= isset($validation) ? display_error($validation, 'password') : '' ?></small>
                            <span class="material-symbols-outlined" id="showPswd10" style="display: block; cursor: pointer;" onclick="togglePassword(document.getElementById('passwordSignIn'), document.getElementById('showPswd10'), document.getElementById('hidePswd10'))">
    visibility
</span>
                            <span class="material-symbols-outlined" id="hidePswd10" style="cursor: pointer;" onclick="togglePassword(document.getElementById('passwordSignIn'), document.getElementById('showPswd10'), document.getElementById('hidePswd10'))">
    visibility_off
</span>
                        </div>
                    </div>



            <div class="col-4"></div>
                <div class="col-5 row justify-content-center" id="login-div">
                    <div  class="row justify-content-center">
                        <div style="display: flex; flex-direction: column; align-items: center;">
                            <input type="hidden" name="button1" value="<?= set_value('button1')?>">
                            <button class="textbuttonsmall" id="SignInButton">Login</button>
                        </div>
                    </div>
                    <div  class="row justify-content-center" id="forgotPasswordRow">
                        <div style="display: flex; align-items: center; font-family: 'Viga', sans-serif; color: #EB6F31;">
                            <input type="hidden" name="button1" value="<?= set_value('button1')?>">
                            <a id="forgotPassword" href="<?= base_url()?>/public/AuthController/recoverPassword">Forgot password</a>
                        </div>
                    </div>
                    <div  class="row justify-content-center">
                        <div style="display: flex; align-items: center; font-family: 'Viga', sans-serif">
                            <input  type="hidden" name="button1" value="<?= set_value('button1')?>">
                            <a id="createAccount" href="<?= base_url()?>/public/AuthController/SignUp">Create a new <?php
                                if (isset($_COOKIE['button1'])){
                                    echo $_COOKIE['button1'];
                                    echo"\n";
                                } ?>  account</a>
                        </div>
                    </div>
                </div>
        <div class="col-4"></div>
        </div>
        </form>
    </div>
</div>
