<div class="container">
    <div class="row justify-content-center">
        <h1 id="welcome">Welcome on Typwind</h1>
    </div>
</div>
<div class="container">
    <div class="row justify-content-center">
        <h2 id="choose">Who are you?</h2>
    </div>
</div>
<div class="container">
    <div class="row justify-content-center">
            <div class="btn-group">

                <?php if( !empty( session()->getFlashdata('fail') ) ) : ?>
                    <div class="alert alert-danger" id="alertpopup2"><?= session()->getFlashdata('fail'); ?></div>
                <?php endif ?>

                <?php if( !empty( session()->getFlashdata('success') ) ) : ?>
                    <div class="alert alert-success" id="alertpopup"><?= session()->getFlashdata('success'); ?></div>
                <?php endif ?>

                <form action="<?= base_url()?>/public/AuthController/set_button1_cookie" method="post">
                        <input type="submit" class="textbutton" id="loginStudentButton" name="button1" value="Student" style="color:white; cursor: pointer;">
                        <input type="submit" class="textbutton" id="loginExpertButton" name="button1" value="Expert" style="color:white; cursor:pointer;">
                </form>
            </div>
    </div>
</div>
