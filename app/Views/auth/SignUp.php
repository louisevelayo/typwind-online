<div class="container col-md-12">
    <div class="row justify-content-center">
        <div class="col-1"></div>
        <div class="col-2">
            <button class="roundbutton" onclick="location.href = '<?=base_url()?>/public/AuthController/SignIn';">
                <img class="icon" id="backButton" src="<?=base_url()?>/public/icons/backarrow.png" alt="back_button">
            </button>
        </div>
        <div class="col-6 row justify-content-center">
            <div id="Type"> Create
                <?php
                if (isset($_COOKIE['button1'])){
                    echo $_COOKIE['button1'];
                    echo"\n";
                } ?> Account
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

            <form id="SignUp-form" class="col-8" style="margin-top: 10px" action="<?= base_url()?>/public/AuthController/create_login" method="POST" autocomplete="off" >

                <?php $validation = \Config\Services::validation(); ?>

                <?= csrf_field(); ?>

                <?php if( !empty( session()->getFlashdata('fail') ) ) : ?>
                    <div class="alert alert-danger" id="alertpopup"><?= session()->getFlashdata('fail'); ?></div>
                <?php endif ?>

                <?php if( !empty( session()->getFlashdata('success') ) ) : ?>
                    <div class="alert alert-success" id="alertpopup"><?= session()->getFlashdata('success'); ?></div>
                <?php endif ?>

                <div class="form-group">
                    <div style="display: flex; align-items: center; margin-left: 20px;">
                        <input id="first_name" style="font-family: 'Viga', sans-serif" type="text" name="name" class="form-control" placeholder="First Name" value="<?= set_value('name') ?>" >
                        <small class="text-danger" style="margin-left: 10px;"><?= isset($validation) ? display_error($validation, 'name') : '' ?></small>
                    </div>
                </div>

                <div class="form-group" style="margin-top: 10px">
                    <div style="display: flex; align-items: center; margin-left: 20px;">
                        <input id="last_name" style= "font-family: 'Viga', sans-serif" type="text" name="surname" class="form-control" placeholder="Last Name" value="<?= set_value('surname') ?>" >
                        <small class="text-danger" style="margin-left: 10px;"><?= isset($validation) ? display_error($validation, 'surname') : '' ?></small>
                    </div>
                </div>

                <div class="form-group">

                    <div style="display: flex; align-items: center; margin-left: 20px;">
                        <input id="email" style="font-family: 'Viga', sans-serif" type="text" name="email" class="form-control" placeholder="Email" value="<?= set_value('email') ?>">
                        <small class="text-danger" style="margin-left: 10px;"><?= isset($validation) ? display_error($validation, 'email') : '' ?></small>
                    </div>
                </div>

                <div class="form-group">
                    <div style="display: flex; align-items: center; margin-left: 20px;">
                        <input id="password" style="font-family: 'Viga', sans-serif" type="password" name="password" class="form-control" placeholder="Password" value="<?= set_value('password') ?>">
                        <small class="text-danger" style="margin-left: 10px;"><?= isset($validation) ? display_error($validation, 'password') : '' ?></small>
                        <span class="material-symbols-outlined" id="showPswd11" style="display: block; cursor: pointer;" onclick="togglePassword(document.getElementById('password'), document.getElementById('showPswd11'), document.getElementById('hidePswd11'))">
    visibility
</span>
                        <span class="material-symbols-outlined" id="hidePswd11" style="cursor: pointer;" onclick="togglePassword(document.getElementById('password'), document.getElementById('showPswd11'), document.getElementById('hidePswd11'))">
    visibility_off
</span>
                    </div>
                </div>

                <div class="form-group">
                    <div style="display: flex; align-items: center; margin-left: 20px;">
                        <input id ="confirm_password" style="font-family: 'Viga', sans-serif" type="password" name="cpassword" class="form-control" placeholder="Confirm Password" value="<?= set_value('cpassword') ?>">
                        <small class="text-danger" style="margin-left: 10px;"><?= isset($validation) ? display_error($validation, 'cpassword') : '' ?></small>
                        <span class="material-symbols-outlined" id="showPswd12" style="display: block; cursor: pointer;" onclick="togglePassword(document.getElementById('confirm_password'), document.getElementById('showPswd12'), document.getElementById('hidePswd12'))">
    visibility
</span>
                        <span class="material-symbols-outlined" id="hidePswd12" style="cursor: pointer;" onclick="togglePassword(document.getElementById('confirm_password'), document.getElementById('showPswd12'), document.getElementById('hidePswd12'))">
    visibility_off
</span>
                    </div>
                </div>


                <?php
                if (isset($_COOKIE['button1']) && $_COOKIE['button1'] == 'Student') {
                    echo '<div class="form-group" id="enable">
                            <div style="align-items: center; margin-left: 20px;">
                                <select id="hands" name="hands_person" class="form-control" onchange="getHandType()">
                                    <option id="bothHanded" value="0">Both Handed</option>
                                    <option id="rightHanded" value="1">Right Handed</option>
                                    <option id="leftHanded" value="2">Left Handed</option>
                                </select>
                            </div>
                        </div>';
                }
                ?>

                <div  class="form-group">
                    <div style="display: flex; align-items: center; margin-left: 20px;">
                        <?php
                        if (isset($_COOKIE['button1']) && $_COOKIE['button1'] == 'Expert') {
                            include 'windekind_code.php';
                        }
                        ?>
                    </div>
                </div>

            <div class="col-4"></div>

            <div class="col-5 row justify-content-center" id="create-account-div">
                <div  class="row justify-content-center">
                    <div style="display: flex; align-items: center; ">
                        <input type="hidden" name="button1" value="<?= set_value('button1')?>">
                        <button id="create_account_button" class="textbuttonsmall" >Create Account</button>
                    </div>
                </div>

                <div  class="row justify-content-center">
                    <div style="display: flex; align-items: center; margin-top: 10px; ">
                        <input type="hidden" name="button1" value="<?= set_value('button1')?>">
                        <p> <div id="have_an_account" style="font-family: 'Viga', sans-serif">Have an account?</div>
                        <a id="sign_in_now" style="font-family: 'Viga', sans-serif" href="<?=base_url()?>/public/AuthController/SignIn">Sign in now</a>

                        <p>

                    </div>
                </div>




            </div>
        <div class="col-4"></div>
            </form>
    </div>
    </div>
</div>

<div style="display: none;">
    <input id="handtype" value="<?= set_value('hands_person') ?>">
</div>
