<script src="<?=base_url()?>/public/js/forgotPassword.js"></script>

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
                Forgot Password
            </div>
        </div>
        <div class="col-3">
        </div>
    </div>
</div>
<div class="container col-md-12">
    <div class="row justify-content-center">
        <div class="col-1"></div>
        <div class="col-2">
        </div>
        <div class="col-6 row justify-content-center">
            <div id="Type2">
                Please enter your email so we can send you a new password
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
            <form class="col-8" style="margin-top: 10px" action="<?= base_url()?>/public/AuthController/recoverPassword" method="post" autocomplete="off">

                <?php $validation = \Config\Services::validation(); ?>

                <?= csrf_field(); ?>

                <?php if( !empty( session()->getFlashdata('fail') ) ) : ?>
                    <div class="alert alert-danger" id="alertpopup"><?= session()->getFlashdata('fail'); ?></div>
                <?php endif ?>

                <?php if( !empty( session()->getFlashdata('success') ) ) : ?>
                    <div class="alert alert-success" id="alertpopup"><?= session()->getFlashdata('success'); ?></div>
                <?php endif ?>


                <div class="form-group ">

                    <div style="display: flex; align-items: center; margin-left: 20px;">
                        <input id = "email" type="text" style="font-family: 'Viga', sans-serif" name="email" class="form-control" placeholder="Email" value="<?= set_value('email') ?>">
                        <small class="text-danger" style="margin-left: 10px;"><?= isset($validation) ? display_error($validation, 'email') : '' ?></small>
                    </div>
                </div>

            <div class="col'4"></div>
            <div class="col-5">
                <div  class="row justify-content-center">
                    <div style="display: flex; align-items: center; margin-left: 15%; ">
                        <button class="textbuttonsmall" id="sendEmail" href="<?= base_url()?>/public/AuthController/SignIn">Send Email</button>
                    </div>
                </div>

            </div>
        </div>
        </form>
    </div>
</div>
