<link href="<?=base_url()?>/public/css/auth.css" rel="stylesheet">

<!-- Modal -->
<div class="popupConfirmChanges2 " id="popupConfirmChanges2">
    <div class="col-md-12">

        <div class="row justify-content-end">
            <button class="smallroundbutton" id="closewindow1" onclick="closeConfirmChanges2()">
                <img class="smallesticon" id="iconx2" src="<?=base_url()?>/public/icons/close.png" alt="close popup icon">
            </button>
        </div>

        <h5 class="popupHeaderConfirm" id="exampleModalLabel" style="font-size: 32px;color: black; font-family: 'Viga', sans-serif;">Confirm Changes</h5>

        <div class="form-group" id="form-password" >
            <label for="password2" style="float: left; font-family: 'Viga', sans-serif; margin-right: 5px; margin-top: 7px;">Password :</label>
            <input type="password" class="form-control" id="password2" name="password2" disabled>

            <span class="material-symbols-outlined" id="showPswd25" style="display: block;" onclick="togglePassword(document.getElementById('password2'), document.getElementById('showPswd25'), document.getElementById('hidePswd25'))">
              visibility
            </span>
            <span class="material-symbols-outlined" id="hidePswd25" onclick="togglePassword(document.getElementById('password2'), document.getElementById('showPswd25'), document.getElementById('hidePswd25'))">
              visibility_off
            </span>
            <small class="error-message" id="cpassword_error" style="margin-left: 95px; color:red;"></small>
        </div>
        <div class="row justify-content-around">
            <button type="submit" id="confirmChanges" class="textbuttonsmall1">Confirm Changes</button>
        </div>

    </div>
</div>

<div class="backgroundpage" id="backgroundpage">
    <div class="container col-md-12">
        <div class="row justify-content-center">
            <div class="col-3"></div>
            <div class="col-6 row justify-content-center">
                <div id="Type">
                    Edit Profile
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

                <form id="edit_expert_form" class="col-8" style="margin-top: 10px"  method="POST" autocomplete="off" >

                    <?= csrf_field(); ?>

                    <?php if( !empty( session()->getFlashdata('fail') ) ) : ?>
                        <div class="alert alert-danger" id="alertpopup3"><?= session()->getFlashdata('fail'); ?></div>
                    <?php endif ?>

                    <?php if( !empty( session()->getFlashdata('success') ) ) : ?>
                        <div class="alert alert-success" id="alertpopup"><?= session()->getFlashdata('success'); ?></div>
                    <?php endif ?>

                    <?php $loggedUser = json_decode($_COOKIE['LoggedUser'], true); ?>


                    <div class="form-group" style="margin-left: 20px;">
                        <label for="first_name1" >First Name:</label>
                        <div style="display: flex; align-items: center;">
                            <input id="first_name1" style="font-family: 'Viga', sans-serif" type="text" name="name" class="form-control" placeholder="First Name" value="<?= $loggedUser['user']['firstName'] ?>"  >
                            <small class="error-message" id="first_name_error" style="margin-left: 10px;  color:red;" ></small>
                        </div>
                    </div>

                    <div class="form-group" style="margin-top: 10px; margin-left: 20px">
                        <label for="last_name1" >Last Name:</label>
                        <div style="display: flex; align-items: center;">
                            <input id="last_name1" style= "font-family: 'Viga', sans-serif" type="text" name="surname" class="form-control" placeholder="Last Name" value="<?= $loggedUser['user']['lastName'] ?>" >
                            <small class="error-message" id="last_name_error" style="margin-left: 10px;  color:red;"></small>
                        </div>
                    </div>

                    <div class="form-group" style="margin-left: 20px;">
                        <label for="email1" >Email:</label>
                        <div style="display: flex; align-items: center; ">
                            <input id="email1" style="font-family: 'Viga', sans-serif" type="text" name="email" class="form-control" placeholder="Email" value="<?= $loggedUser['user']['email'] ?>">
                            <small class="error-message" id="email_address_error" style="margin-left: 10px;  color:red;"></small>
                        </div>
                    </div>

                    <div class="form-group" style="margin-left: 20px;">
                        <label for="password1" >Password:</label>
                        <div style="display: flex; align-items: center;">
                            <input id="password1" style="font-family: 'Viga', sans-serif" type="password" name="password" class="form-control" placeholder="New Password" value="<?= $loggedUser['user']['password'] ?>">
                            <span class="material-symbols-outlined" id="showPswd20" style="display: block; cursor: pointer;" onclick="togglePassword(document.getElementById('password1'), document.getElementById('showPswd20'), document.getElementById('hidePswd20'))">
    visibility
</span>
                            <span class="material-symbols-outlined" id="hidePswd20" style="cursor: pointer;" onclick="togglePassword(document.getElementById('password1'), document.getElementById('showPswd20'), document.getElementById('hidePswd20'))">
    visibility_off
</span>
                            <small class="error-message" id="password_error" style="margin-left: 10px;  color:red;"></small>
                        </div>
                    </div>

                    <div class="col-4"></div>
                    <div class="col-5">
                    <div  class="row justify-content-center">
                        <div style="display: flex; align-items: center;">
                            <button id="save_changes_button" type="button" name="saveChanges" class="textbuttonsmall" onclick="validateForm()" >Save</button>
                        </div>
                    </div>
                    </div>
                    <div class="col-4"></div>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
    var alertPopup = document.getElementById("alertpopup3");
    if (alertPopup) {
        setTimeout(function(){ alertPopup.style.display = "none"; }, 3000);
    }
</script>
