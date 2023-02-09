<div class="form-group">
    <div style="display: flex; align-items: center;">
        <input id ="windekind_password" style="font-family: 'Viga', sans-serif; width:300px; " type="password" name="wpassword" class="form-control" placeholder="Windekind Code" value="<?= set_value('wpassword') ?>">
        <small class="text-danger" style="margin-left: 10px;"><?= isset($validation) ? display_error($validation, 'wpassword') : '' ?></small>
    </div>
</div>