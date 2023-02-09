<?php
/**
 * @var $all_my_students string
 * @var $all_students string
 * @var $all_inactive_students string
 * @var $currency string
 * @var $all_emails string
 */
?>
<link href="<?=base_url()?>/public/css/auth.css" rel="stylesheet">
<div class="container" id="pagewithpopup">
    <div class="backgroundpage" id="backgroundpage">
        <div class="container" id="searchcontainer">
            <div class="row justify-content-end">
                <div class="mainPageSearch">
                    <div class="mainPageSearchIcon">

                    </div>
                    <div class="input">
                        <input type="text" placeholder="Search Lesson" id="mysearch"  disabled autocomplete="off">
                    </div>
                    <span class="mainPageSearchClear">

                    </span>
                </div>
            </div>
        </div>
        <div class="container-fluid" id="emptyState" style="display: none;">
            <div class="row justify-content-center">
                <h3 class="emptyStateText1">No students in sight</h3>
            </div>
            <div class="row justify-content-center">
                <img class="emptystate" src="<?=base_url()?>/public/icons/emptyStateAvatar.png" alt="empty state overview">
            </div>
            <div class="row justify-content-center">
                <h3 class="emptyStateText2">Consider adding one</h3>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-auto">
                    <button class="textbutton" id="addstudentbuttonEmptyState" onclick="openAddStudentPopUp()">+ ADD STUDENT</button>
                </div>
            </div>
        </div>

        <div class="container-fluid" id="scrollable1">
            <?php

            foreach($all_my_students as $student):


                ?>
                <div class="studentcontainer" id="studentCards_<?=$student->studentID?>">
                    <div class="nonexpanded" id="nonexpand_<?=$student->studentID?>" style="display: block;">
                        <div class="row justify-content-center">
                            <div class="col-md-3">

                                <div class="col-md-12">
                                    <img class="studentavatar" src="<?=base_url()?>/public/icons/Avatar_0<?=$student->avatar?>.png"  alt="student avatar">
                                </div>

                            </div>
                            <div class="col-md-4">
                                <address>
                                    <strong class="studentName" style="font-family: 'Viga', sans-serif"><?=$student->firstName?> <?=$student->lastName?></strong>
                                    <abbr style="font-family: 'Viga', sans-serif" title="email"><?=$student->email?></abbr>
                                </address>
                            </div>
                            <div class="col-md-4">
                                <div class="row">
                                    <div class="col-md-4">
                                        <strong class="progress-text" style="font-family: 'Viga', sans-serif">Progress</strong>
                                    </div>
                                    <div class="col-md-8">

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <p class="accuracy-text" style="font-family: 'Viga', sans-serif">Accuracy: </p>
                                    </div>
                                    <div class="col-md-6">
                                        <strong class="accuracy-<?=$student->studentID?>" style="font-family: 'Viga', sans-serif"><?=$student->overallAccuracy?> %</strong>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <p class="speed-text" style="font-family: 'Viga', sans-serif">Speed:</p>
                                    </div>
                                    <div class="col-md-6">
                                        <strong class="speed-<?=$student->studentID?>" style="font-family: 'Viga', sans-serif"><?=$student->averageSpeed?> min</strong>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <p class="level-text" style="font-family: 'Viga', sans-serif">Latest Lesson:</p>
                                    </div>
                                    <div class="col-md-6">
                                        <strong class="level-<?=$student->studentID?>" style="font-family: 'Viga', sans-serif"><?=$student->latestLesson?></strong>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-1 align-self-center">
                                <div class="row">
                                    <div class="col-md-12">
                                        <button class="roundbutton" id="removeStudentButton1_<?=$student->studentID?>" title="remove MyStudent" onclick="removeStudent(<?=$student->studentID?>)">
                                            <img class="icon" id="removeStudentButton2_<?=$student->studentID?>" src="<?=base_url()?>/public/icons/remove_student.png" alt="remove student button">
                                        </button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <button class="roundbutton" id="deleteStudentButton1_<?=$student->studentID?>" title="delete MyStudent" onclick="openDeleteStudentPopUp(<?=$student->studentID?>, '<?=$student->firstName?>', '<?=$student->lastName?>')">
                                            <img class="icon" id="deleteStudentButton2_<?=$student->studentID?>" src="<?=base_url()?>/public/icons/delete.png" alt="delete student button">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-auto align-self-center">
                                <button class="smallroundbutton" id="expandbutton_<?=$student->studentID?>" title="more info for MyStudent" onclick="toggleExpand(<?=$student->studentID?>)">
                                    <img class="smallicon" id="expandbutton22_<?=$student->studentID?>" src="<?=base_url()?>/public/icons/expand.png" alt="exapnd student button">
                                </button>
                            </div>
                        </div>
                    </div>


                    <div class="expanded" id="expand_<?=$student->studentID?>" style="display: none;">
                        <div class="row align-items-center">
                            <div class="col-md-3" id="studentinfoexpanded_<?=$student->studentID?>">
                                <img class="studentavatar" src="<?=base_url()?>/public/icons/Avatar_0<?=$student->avatar?>.png"  alt="student avatar expanded">
                                <address>
                                    <label class="descriptionStudentNameEdit" for="studentName_<?=$student->studentID?>" style="font-family: 'Viga', sans-serif"> Student Name : </label>
                                    <input class="studentName" id="studentName_<?=$student->studentID?>" style="font-family: 'Viga', sans-serif" value="<?=$student->firstName?> <?=$student->lastName?>" disabled>
                                    <label class="EmailExpEd" for="emailStudentExp_<?=$student->studentID?>" style="font-family: 'Viga', sans-serif">Email :</label>
                                    <input class="emailStudentExp" id="emailStudentExp_<?=$student->studentID?>" style="font-family: 'Viga', sans-serif" value="<?=$student->email?>" disabled>
                                    <label for="studentPassword_<?=$student->studentID?>" class="descriptionPasswordEdit" style="font-family: 'Viga', sans-serif">
                                        Password :
                                    </label>
                                    <input class="password" type="password" placeholder="Change Password" value="<?=$student->password?>" id="studentPassword_<?=$student->studentID?>" disabled>
                                    <span class="material-symbols-outlined" id="showPswd5_<?=$student->studentID?>" style="display: block; cursor: pointer;" onclick="togglePassword(document.getElementById('studentPassword_<?=$student->studentID?>'), document.getElementById('showPswd5_<?=$student->studentID?>'), document.getElementById('hidePswd5_<?=$student->studentID?>'))">
    visibility
</span>
                                    <span class="material-symbols-outlined" id="hidePswd5_<?=$student->studentID?>" style="display: none; cursor: pointer;" onclick="togglePassword(document.getElementById('studentPassword_<?=$student->studentID?>'), document.getElementById('showPswd5_<?=$student->studentID?>'), document.getElementById('hidePswd5_<?=$student->studentID?>'))">
    visibility_off
</span>
                                    <label for="typingstyleExp_<?=$student->studentID?>" class="descriptionTypingStyle" style="font-family: 'Viga', sans-serif">
                                        Typing Style :
                                    </label>
                                    <select id="typingstyleExp_<?=$student->studentID?>" name="typingstyle" disabled>
                                        <option id="handTypeBothExp" value="bothHanded" <?php if ($student->handSetting == "0") echo "selected"; ?>>Both Handed</option>
                                        <option id="handTypeRigthExp" value="rightHanded" <?php if ($student->handSetting == "1") echo "selected"; ?>>Right Handed</option>
                                        <option id="handTypeLeftExp" value="leftHanded" <?php if ($student->handSetting == "2") echo "selected"; ?>>Left Handed</option>
                                    </select>
                                    <label id="accessLessonLabelExp2Label" for="accessLessonExp_<?=$student->studentID?>" style="font-family: 'Viga', sans-serif">
                                        Lessons Access:
                                    </label>
                                    <select id="accessLessonExp_<?=$student->studentID?>" disabled>
                                        <option class="lessonOption" value="lesson1" <?php if ($student->lessonAccess == "1") echo "selected"; ?>>Lesson 1</option>
                                        <option class="lessonOption" value="lesson2" <?php if ($student->lessonAccess == "2") echo "selected"; ?>>Lesson 2</option>
                                        <option class="lessonOption" value="lesson3" <?php if ($student->lessonAccess == "3") echo "selected"; ?>>Lesson 3</option>
                                        <option class="lessonOption" value="lesson4" <?php if ($student->lessonAccess == "4") echo "selected"; ?>>Lesson 4</option>
                                    </select>
                                </address>
                            </div>
                            <div class="col-md-8">
                                <div class="row justify-content-center">
                                    <strong class="progressTextExp" style="font-family: 'Viga', sans-serif">Progress</strong>
                                </div>
                                <div class="row justify-content-between">
                                    <div class="col-md-2">
                                        <p class="accuracyTextExp" style="font-family: 'Viga', sans-serif">Accuracy:</p>
                                    </div>
                                    <div class="col-md-2">
                                        <strong class="accuracy-<?=$student->studentID?>" style="font-family: 'Viga', sans-serif"><?=$student->overallAccuracy?> %</strong>
                                    </div>
                                    <div class="col-md-2">
                                        <p class="speedTextExp" style="font-family: 'Viga', sans-serif">Speed:</p>
                                    </div>
                                    <div class="col-md-2">
                                        <strong class="speed-<?=$student->studentID?>" style="font-family: 'Viga', sans-serif"><?=$student->averageSpeed?> min</strong>
                                    </div>
                                    <div class="col-md-2">
                                        <p class="levelTextExp" style="font-family: 'Viga', sans-serif">Level:</p>
                                    </div>
                                    <div class="col-md-2">
                                        <strong class="level-<?=$student->studentID?>" style="font-family: 'Viga', sans-serif"><?=$student->latestLesson?></strong>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <?php echo $student->graph?>
                                </div>

                            </div>
                            <div class="col-md-1 text-center">
                                <button class="roundbutton" id="removeStudentButton3_<?=$student->studentID?>" onclick="removeStudent(<?=$student->studentID?>)">
                                    <img class="icon" id="removeStudentButton4_<?=$student->studentID?>" src="<?=base_url()?>/public/icons/remove_student.png" alt="remove student button">
                                </button>
                                <button class="roundbutton" id="deleteStudentButton3_<?=$student->studentID?>" onclick="openDeleteStudentPopUp(<?=$student->studentID?>, '<?=$student->firstName?>','<?=$student->lastName?>')">
                                    <img class="icon" id="deleteStudentButton4_<?=$student->studentID?>" src="<?=base_url()?>/public/icons/delete.png" alt="delete student button">
                                </button>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <button class="textbuttonsmall" id="buttonEditExp_<?=$student->studentID?>" onclick="toggleEdit(<?=$student->studentID?>)">
                                EDIT
                            </button>
                        </div>

                        <div class="row justify-content-center">
                            <div class="col-md-auto align-self-center">
                                <button class="smallroundbutton" id="shrinkbutton_<?=$student->studentID?>" onclick="toggleExpand(<?=$student->studentID?>)">
                                    <img class="smallicon" id="shrinkbutton22_<?=$student->studentID?>" src="<?=base_url()?>/public/icons/minimize.png" alt="shrink expanded button">
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="expandedEdit" id="expandEdit_<?=$student->studentID?>" style="display: none;">
                        <div class="row align-items-center">
                            <div class="col-md-3" id="studentinfoexpandedEdit_<?=$student->studentID?>">
                                <img class="studentavatar" src="<?=base_url()?>/public/icons/Avatar_0<?=$student->avatar?>.png"  alt="student avatar edit">
                                <address>
                                    <form id="student-form-<?=$student->studentID?>">
                                        <label for="editStudentFirstName_<?=$student->studentID?>" class="descriptionStudentFirstNameEdit" style="font-family: 'Viga', sans-serif"> First Name: </label>
                                        <input name="editStudentFirstName_<?=$student->studentID?>" class="StudentNameEdit" id="editStudentFirstName_<?=$student->studentID?>" placeholder="Change First Name" value="<?=$student->firstName?>">

                                        <label for="editStudentLastName_<?=$student->studentID?>" class="descriptionStudentLastNameEdit" style="font-family: 'Viga', sans-serif"> Last Name: </label>
                                        <input name="editStudentLastName_<?=$student->studentID?>" class="StudentNameEdit" id="editStudentLastName_<?=$student->studentID?>" placeholder="Change Last Name" value="<?=$student->lastName?>">
                                        <label for="emailStudentEdit_<?=$student->studentID?>" style="font-family: 'Viga', sans-serif">Email:</label>
                                        <input class="emailStudentEdit" name="emailStudentEdit_<?=$student->studentID?>" id="emailStudentEdit_<?=$student->studentID?>" placeholder="Change Email" value="<?=$student->email?>">
                                        <div class="wrapper">
                                            <label for="studentPasswordEdit_<?=$student->studentID?>" style="font-family: 'Viga', sans-serif" class="descriptionPasswordEdit">
                                                Password:
                                            </label>
                                            <input class="studentPassword" id="studentPassword2_<?=$student->studentID?>" type="password" placeholder="Change Password" minlength="6" value="<?=$student->password?>" name="studentPasswordEdit_<?=$student->studentID?>" id="studentPasswordEdit_<?=$student->studentID?>">
                                            <span class="material-symbols-outlined" id="showPswd6_<?=$student->studentID?>" style="display: block; cursor: pointer;" onclick="togglePassword(document.getElementById('studentPassword2_<?=$student->studentID?>'), document.getElementById('showPswd6_<?=$student->studentID?>'), document.getElementById('hidePswd6_<?=$student->studentID?>'))">
    visibility
</span>
                                            <span class="material-symbols-outlined" id="hidePswd6_<?=$student->studentID?>" style="display: none; cursor: pointer;" onclick="togglePassword(document.getElementById('studentPassword2_<?=$student->studentID?>'), document.getElementById('showPswd6_<?=$student->studentID?>'), document.getElementById('hidePswd6_<?=$student->studentID?>'))">
    visibility_off
</span>
                                        </div>
                                        <label for="typingstyle_<?=$student->studentID?>" class="descriptionTypingStyleEdit" style="font-family: 'Viga', sans-serif">
                                            Typing Style:
                                        </label>
                                        <select id="typingstyle_<?=$student->studentID?>" name="typingstyle_<?=$student->studentID?>">
                                            <option id="handTypeBoth" value="bothHanded" <?php if ($student->handSetting == "0") echo "selected"; ?>>Both Handed</option>
                                            <option id="handTypeRight" value="rightHanded" <?php if ($student->handSetting == "1") echo "selected"; ?>>Right Handed</option>
                                            <option id="handTypeLeft" value="leftHanded" <?php if ($student->handSetting == "2") echo "selected"; ?>>Left Handed</option>
                                        </select>
                                        <label id="accessLessonLabelExpLabel" style="font-family: 'Viga', sans-serif" for="accessLesson_<?=$student->studentID?>">
                                            Lessons Access:
                                        </label>
                                        <select id="accessLesson_<?=$student->studentID?>" name="accessLesson_<?=$student->studentID?>">
                                            <option class="lessonOption" value="lesson1" <?php if ($student->lessonAccess == "1") echo "selected"; ?>>Lesson 1</option>
                                            <option class="lessonOption" value="lesson2" <?php if ($student->lessonAccess == "2") echo "selected"; ?>>Lesson 2</option>
                                            <option class="lessonOption" value="lesson3" <?php if ($student->lessonAccess == "3") echo "selected"; ?>>Lesson 3</option>
                                            <option class="lessonOption" value="lesson3" <?php if ($student->lessonAccess == "4") echo "selected"; ?>>Lesson 4</option>
                                        </select>
                                    </form>


                                </address>
                            </div>
                            <div class="col-md-8">
                                <div class="row justify-content-center">
                                    <strong class="progressTextEdit" style="font-family: 'Viga', sans-serif">Progress</strong>
                                </div>
                                <div class="row justify-content-between">
                                    <div class="col-md-2">
                                        <p class="accuracyTextEdit" style="font-family: 'Viga', sans-serif">Accuracy:</p>
                                    </div>
                                    <div class="col-md-2">
                                        <strong class="accuracy-<?=$student->studentID?>" style="font-family: 'Viga', sans-serif"><?=$student->overallAccuracy?> %</strong>
                                    </div>
                                    <div class="col-md-2">
                                        <p class="speedTextEdit" style="font-family: 'Viga', sans-serif">Speed:</p>
                                    </div>
                                    <div class="col-md-2">
                                        <strong class="speed-<?=$student->studentID?>" style="font-family: 'Viga', sans-serif"><?=$student->averageSpeed?> min</strong>
                                    </div>
                                    <div class="col-md-2">
                                        <p class="levelTextEdit" style="font-family: 'Viga', sans-serif">Level:</p>
                                    </div>
                                    <div class="col-md-2">
                                        <strong class="level-<?=$student->studentID?>" style="font-family: 'Viga', sans-serif"><?=$student->latestLesson?></strong>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <?php echo $student->graph?>
                                </div>
                            </div>
                            <div class="col-md-1 text-center">
                                <button class="roundbutton" id="removeStudentButton5_<?=$student->studentID?>" onclick="removeStudent(<?=$student->studentID?>)">
                                    <img class="icon" id="removeStudentButton6_<?=$student->studentID?>" src="<?=base_url()?>/public/icons/remove_student.png" alt="remove student button edit">
                                </button>
                                <button class="roundbutton" id="deleteStudentButton5_<?=$student->studentID?>" onclick="openDeleteStudentPopUp(<?=$student->studentID?>, '<?=$student->firstName?>', '<?=$student->lastName?>')">
                                    <img class="icon" id="deleteStudentButton6_<?=$student->studentID?>" src="<?=base_url()?>/public/icons/delete.png" alt="delete student button edit">
                                </button>
                            </div>
                        </div>
                        <div class="row justify-content-around">
                            <button class="textbuttonsmall1" id="buttonSaveEditChanges_<?=$student->studentID?>" onclick="openConfirmChanges(<?=$student->studentID?>, )">
                                SAVE CHANGES
                            </button>
                            <button class="textbuttonsmallSecondary secondaryButton" id="buttonCancelEditChanges_<?=$student->studentID?>" onclick="toggleEdit(<?=$student->studentID?>)">
                                CANCEL CHANGES
                            </button>

                        </div>

                    </div>
                </div>
            <?php

            endforeach;

            ?>
        </div>

        <div class="container">
            <div class="row justify-content-end">
                <div class="col-md-auto">
                    <button class="textbuttonsmall" id="addstudentbutton" onclick="openAddStudentPopUp2()"> + ADD STUDENT</button>
                </div>
            </div>
        </div>
    </div>




    <div class="popup" id="popup">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="container" id="defaultpopupthings">
                    <h3 class="popupHeaderAdd">ADD STUDENTS TO MYSTUDENTLIST</h3>
                    <div class="container" id="searchcontainer2">
                        <div class="row justify-content-between">
                            <div class="col-md-auto">
                                <label for="isActive"></label>
                                <select id="isActive" name="isActive" onchange="showStudents()">
                                    <option id="activeStudentsOption" value="active">Active Students</option>
                                    <option id="allStudentsOption" value="all">All Students</option>
                                    <option id="inActiveStudentsOption" value="inactive">Inactive Students</option>
                                </select>
                            </div>
                            <div class="col-md-auto">
                                <div class="searchPopUp">
                                    <div class="searchIconPopUp">

                                    </div>
                                    <div class="inputPopUp">
                                        <input type="text" placeholder="Search Student" id="mysearchpopup" autocomplete="off" disabled>
                                    </div>
                                    <span class="clearPopUp">
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="scrollable2">
                    <div class="container-fluid" id="emptyState2" style="display: none;">
                        <div class="row justify-content-center">
                            <h3 class="emptyStateText1">No students in sight</h3>
                        </div>
                        <div class="row justify-content-center">
                            <img class="emptystate2" src="<?=base_url()?>/public/icons/emptyStateAvatar.png" alt="empty state popup">
                        </div>
                        <div class="row justify-content-center">
                            <h3 class="emptyStateText2">All students are assigned to an expert</h3>
                        </div>
                    </div>
                    <?php

                    foreach($all_students as $student):

                        ?>

                        <div class="containerToAdd" id="addingStudentCards_<?=$student->studentID?>" style="display: block;">
                            <div class="smallstudentCard" id="smalladd_<?=$student->studentID?>" style="display: block;">
                                <div class="row  " onclick="toggleSelectedStudent(<?=$student->studentID?>)" style="cursor: pointer;">
                                    <div class="col-md-2">
                                        <img class="smallstudentavatar" id="smallstudentavatar1_<?=$student->studentID?>" src="<?=base_url()?>/public/icons/Avatar_0<?=$student->avatar?>.png"  alt="student avatar active to add">
                                    </div>
                                    <div class="col-md-3 offset-1">
                                        <address>
                                            <strong class="StudentNamePopUpToAdd" id="StudentNamePopUpToAdd_<?=$student->studentID?>"><?=$student->firstName?> <?=$student->lastName?></strong> <abbr class="emailStudentToAdd_<?=$student->studentID?>" title="email"><?=$student->email?></abbr>
                                        </address>
                                    </div>
                                    <div class="col-md-3 offset-2">
                                        <button class="roundbutton" id="addstudentbutton_<?=$student->studentID?>" title="add student">
                                            <img class="icon" src="<?=base_url()?>/public/icons/add_student.png" alt="add student icon">
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="smallstudentCardSelected" id="tudentCard_<?=$student->studentID?>" style="display: none; cursor:pointer;" onclick="toggleSelectedStudent(<?=$student->studentID?>);">
                                <div class="row ">
                                    <div class="col-md-2">
                                        <img class="smallstudentavatar" id="smallstudentavatar2_<?=$student->studentID?>" src="<?=base_url()?>/public/icons/Avatar_0<?=$student->avatar?>.png"  alt="active added student avatar">
                                    </div>
                                    <div class="col-md-3 offset-1">
                                        <address>
                                            <strong class="StudentNamePopUpSelected"><?=$student->firstName?> <?=$student->lastName?> </strong> <abbr class="studentPopUpEmail" title="email"><?=$student->email?></abbr>
                                        </address>
                                    </div>
                                    <div class="col-md-3 offset-2 ">
                                        <button class="roundbutton" id="removeStudentButton7_<?=$student->studentID?>" title="remove student">
                                            <img class="icon" src="<?=base_url()?>/public/icons/remove_student.png" alt="icon to remove student">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php

                    endforeach;

                    ?>
                    <?php

                    foreach($all_inactive_students as $inactive_student):

                        ?>
                        <div class="containerToAddSupport" id="addingStudentCards_<?=$inactive_student->studentID?>" style="display: none; cursor: pointer">
                            <div class="smallstudentCard" id="smalladd_<?=$inactive_student->studentID?>" style="display: block;">
                                <div class="row " onclick="toggleSelectedStudent(<?=$inactive_student->studentID?>)">
                                    <div class="col-md-2">
                                        <img class="smallstudentavatar" id="smallstudentavatar3_<?=$inactive_student->studentID?>" src="<?=base_url()?>/public/icons/Avatar_0<?=$inactive_student->avatar?>.png"  alt="student avatar to add inactive student">
                                    </div>
                                    <div class="col-md-3 offset-1">
                                        <address>
                                            <strong class="StudentNamePopUpToAdd" id="StudentNamePopUpToAdd_<?=$inactive_student->studentID?>"><?=$inactive_student->firstName?> <?=$inactive_student->lastName?></strong> <abbr class="emailStudentToAdd_<?=$inactive_student->studentID?>" title="email"><?=$inactive_student->email?></abbr>
                                            <div>Inactive</div>
                                        </address>
                                    </div>
                                    <div class="col-md-3 offset-2">
                                        <button class="roundbutton" id="addstudentbutton_<?=$inactive_student->studentID?>" title="add student">
                                            <img class="icon" src="<?=base_url()?>/public/icons/add_student.png" alt="icon to add incative student">
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="smallstudentCardSelected" id="tudentCard_<?=$inactive_student->studentID?>" style="display: none; cursor:pointer;" onclick="toggleSelectedStudent(<?=$inactive_student->studentID?>);">
                                <div class="row ">
                                    <div class="col-md-2">
                                        <img class="smallstudentavatar" id="smallstudentavatar4_<?=$inactive_student->studentID?>" src="<?=base_url()?>/public/icons/Avatar_0<?=$inactive_student->avatar?>.png"  alt="incative student avatar added">
                                    </div>
                                    <div class="col-md-3 offset-1">
                                        <address>
                                            <strong class="StudentNamePopUpSelected"><?=$inactive_student->firstName?> <?=$inactive_student->lastName?> </strong> <abbr class="studentPopUpEmail" title="email"><?=$inactive_student->email?></abbr>
                                        </address>
                                    </div>
                                    <div class="col-md-3 offset-2">
                                        <button class="roundbutton" id="removeStudentButton7_<?=$inactive_student->studentID?>" title="remove student">
                                            <img class="icon" src="<?=base_url()?>/public/icons/remove_student.png" alt="remove incative added student">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php

                    endforeach;

                    ?>

                </div>
                <div class="row justify-content-between">
                    <div class="offset-2"></div>
                    <div class="col-md-auto" id="normalPopupButtons1">
                        <button class="textbuttonsmall1" id="confirmButton" onclick="closeAddStudentPopUp()">
                            CONFIRM
                        </button>
                    </div>
                    <div class="col-md-auto" id="emptystatePopupButtons">
                        <button class="textbuttonsmall1" id="closetextbutton" onclick="cancelAddStudentPopUp()">
                            CLOSE
                        </button>
                    </div>
                    <div class="col-md-auto" id="normalPopupButtons2">
                        <button class="textbuttonsmallSecondary secondaryButton" id="canceltextbutton" onclick="cancelAddStudentPopUp()">
                            CANCEL
                        </button>
                    </div>
                    <div class="offset-2"></div>
                </div>
            </div>
        </div>
    </div>


    <div class="popupDeleteStudent" id="popupDeleteStudent">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="container" id="defaultpopupthings1" style="width:fit-content">
                    <div class="row justify-content-end">
                        <button class="smallroundbutton" id="closewindow1" onclick="closeDeleteStudentPopUp()">
                            <img class="smallesticon" id="iconx2" src="<?=base_url()?>/public/icons/close.png" alt="close popup icon">
                        </button>
                    </div>
                    <h3 class="popupHeaderDelete">ARE YOU SURE YOU WANT TO DELETE</h3>
                    <div class="col-auto align-items-center">
                        <div>
                            <label style="font-family: 'Viga', sans-serif" for="expertPassword" class="passwordDeleteStudentPopUp">Password:</label>
                            <input type="password" placeholder="Password" value="" id="expertPassword">
                            <span class="material-symbols-outlined" id="showPswd3_<?=$student->studentID?>" style="display: block; cursor: pointer;" onclick="togglePassword(document.getElementById('expertPassword'), document.getElementById('showPswd3_<?=$student->studentID?>'), document.getElementById('hidePswd3_<?=$student->studentID?>'))">
                            visibility
                            </span>
                            <span class="material-symbols-outlined" id="hidePswd3_<?=$student->studentID?>" style="cursor: pointer;" onclick="togglePassword(document.getElementById('expertPassword'), document.getElementById('showPswd3_<?=$student->studentID?>'), document.getElementById('hidePswd3_<?=$student->studentID?>'))">
                            visibility_off
                            </span>
                        </div>
                        <div>
                            <label style="font-family: 'Viga', sans-serif" for="expertPasswordConfirm" class="passwordConfirmDeleteStudentPopUp">Confirm Password:</label>
                            <input type="password" placeholder="Confirm Password" value="" id="expertPasswordConfirm">
                            <span class="material-symbols-outlined" id="showPswd4_<?=$student->studentID?>" style="display: block; cursor: pointer;" onclick="togglePassword(document.getElementById('expertPasswordConfirm'), document.getElementById('showPswd4_<?=$student->studentID?>'), document.getElementById('hidePswd4_<?=$student->studentID?>'))">
                            visibility
                            </span>
                            <span class="material-symbols-outlined" id="hidePswd4_<?=$student->studentID?>" style="cursor: pointer;" onclick="togglePassword(document.getElementById('expertPasswordConfirm'), document.getElementById('showPswd4_<?=$student->studentID?>'), document.getElementById('hidePswd4_<?=$student->studentID?>'))">
                            visibility_off
                            </span>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <button class="textbuttonsmall" id="savetextbutton2" onclick="checkConfirmationDelete()">
                            CONFIRM
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="popupConfirmChanges" id="popupConfirmChanges">

        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="container" id="defaultpopupthings2" style="width:fit-content">
                    <div class="row justify-content-end">
                        <button class="smallroundbutton" id="closewindow2" onclick="closeConfirmChanges()">
                            <img class="smallicon" id="iconx1" src="<?=base_url()?>/public/icons/close.png" alt="close icon popup">
                        </button>
                    </div>
                    <h3 class="popupHeaderConfirm">CONFIRM CHANGES</h3>
                    <div class="col-auto align-items-center">
                        <div class="form-group">
                            <label style="font-family: 'Viga', sans-serif" for="expertPasswordChanges" class="changesPassword">Password:</label>
                            <input type="password" placeholder="Password" value="" id="expertPasswordChanges">
                            <span class="material-symbols-outlined" id="showPswd1_<?=$student->studentID?>" style="display: block; cursor: pointer;" onclick="togglePassword(document.getElementById('expertPasswordChanges'), document.getElementById('showPswd1_<?=$student->studentID?>'), document.getElementById('hidePswd1_<?=$student->studentID?>'))">
    visibility
</span>
                            <span class="material-symbols-outlined" id="hidePswd1_<?=$student->studentID?>" style="cursor: pointer;" onclick="togglePassword(document.getElementById('expertPasswordChanges'), document.getElementById('showPswd1_<?=$student->studentID?>'), document.getElementById('hidePswd1_<?=$student->studentID?>'))">
    visibility_off
</span>
                        </div>
                        <div class="form-group">
                            <label style="font-family: 'Viga', sans-serif" for="expertPasswordChangesConfirm" class="changesPasswordConfirm">Confirm Password:</label>
                            <input  type="password" placeholder="Confirm Password" value="" id="expertPasswordChangesConfirm">
                            <span class="material-symbols-outlined" id="showPswd2_<?=$student->studentID?>" style="display: block; cursor: pointer;" onclick="togglePassword(document.getElementById('expertPasswordChangesConfirm'), document.getElementById('showPswd2_<?=$student->studentID?>'), document.getElementById('hidePswd2_<?=$student->studentID?>'))">
    visibility
</span>
                            <span class="material-symbols-outlined" id="hidePswd2_<?=$student->studentID?>" style="cursor: pointer;" onclick="togglePassword(document.getElementById('expertPasswordChangesConfirm'), document.getElementById('showPswd2_<?=$student->studentID?>'), document.getElementById('hidePswd2_<?=$student->studentID?>'))">
    visibility_off
</span>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <button class="textbuttonsmall" id="savetextbutton3" onclick="checkConfirmation()">
                            CONFIRM
                        </button
                    </div>


            </div>
        </div>
    </div>

</div>

<div class="container-fluid" id="emails" style="display: none;">
    <?php

    foreach($all_emails as $email):

        $student_id = $email['studentID']; // access the studentID element of the array
        $email_address = $email['email']; // access the email element of the array

        ?>
        <p class="allStudentEmails" id="<?=$student_id?>"><?=$email_address?></p>
    <?php

    endforeach;

    ?>


</div>
