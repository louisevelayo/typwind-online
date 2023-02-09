<?php

namespace App\Models;

class Database_Model
{
    private $db;

    public function __construct()
    {
        $this->db = \Config\Database::connect();
    }

    /* USER DATA QUERIES */

    //update user password
    public function update_password_expert($password,$email){
        $query_text = 'UPDATE expert_accounts SET password = ? WHERE email = ?;';
        $this->db->query($query_text, array($password,$email));
        return $this->db->affectedRows();
    }

    //update user password
    public function update_password_student($password,$email){
        $query_text = 'UPDATE student_accounts SET password = ? WHERE email = ?;';
        $this->db->query($query_text, array($password,$email));
        return $this->db->affectedRows();
    }

    // get corresponding expertID from email
    // check for null return after calling!!
    public function get_expertID_from_email($email){
        $query_text = 'SELECT expertID FROM expert_accounts WHERE email = ?;';
        $query = $this->db->query($query_text, array($email));
        return $query->getRow()->expertID;
    }

    // get corresponding studentID from email
    // check for null return after calling!!
    public function get_studentID_from_email($email){
        $query_text = 'SELECT studentID FROM student_accounts WHERE email = ?;';
        $query = $this->db->query($query_text, array($email));
        return $query->getRow()->studentID;
    }

    // adds a new student
    // hash/encrypt password before this function
    public function make_student_account($email, $password, $firstName, $lastName, $handSetting){
        $query_text = 'CALL add_student_account(?, ?, ?, ?, ?);'; // this procedure in the db only adds account if the email is not already taken
        $query = $this->db->query($query_text, array($email,$password,$firstName,$lastName,$handSetting));
        return $query->getRow()->result;
    }

    // adds a new expert
    // hash/encrypt password before this function
    // check windekind expert verification before this function
    public function make_expert_account($email,$password,$firstName,$lastName){
        $query_text = 'CALL add_expert_account(?, ?, ?, ?);'; // this procedure in the db only adds account if the email is not already taken
        $query = $this->db->query($query_text, array($email,$password,$firstName,$lastName));
        return $query->getRow()->result;
    }

    // delete account from db
    public function delete_student_account($studentID){
        $query_text = 'DELETE FROM student_accounts WHERE studentID = ?';
        $this->db->query($query_text, array($studentID));
    }

    // delete account from db
    public function delete_expert_account($expertID){
        $query_text = 'DELETE FROM expert_accounts WHERE expertID = ?';
        $this->db->query($query_text, array($expertID));
    }

    // assign student to expert
    public function set_expert_for_student($expertID, $studentID){
        $query_text = 'UPDATE student_accounts SET expertID = ? WHERE studentID = ?;';
        $this->db->query($query_text, array($expertID, $studentID));
    }

    // remove assigned student to expert
    public function remove_expert_for_student($studentID){
        $query_text = 'UPDATE student_accounts SET expertID = NULL WHERE studentID = ?;';
        $this->db->query($query_text, array($studentID));
    }

    //update student data
    public function update_student_data($firstName, $lastName, $email, $password, $handSetting, $lessonAccess, $studentID){
        $query_text = 'UPDATE student_accounts SET firstName = ?, lastName = ?, email = ?, password = ?, handSetting = ?, lesson = ? WHERE studentID = ?;';
        $this->db->query($query_text, array($firstName, $lastName, $email, $password, $handSetting, $lessonAccess, $studentID));
    }

    public function update_expert_data($firstName, $lastName, $email, $password, $expertID){
        $query_text = 'UPDATE expert_accounts SET firstName = ?, lastName = ?, email = ?, password = ? WHERE expertID = ?;';
        $query=$this->db->query($query_text, array($firstName, $lastName, $email, $password,  $expertID));
        return $query;
    }


    //update student active status
    public function update_student_status($isActive, $studentID){
        $query_text = 'UPDATE student_accounts SET isActive = ? WHERE studentID = ?;';
        $this->db->query($query_text, array($isActive, $studentID));
    }

    /* END OF USER DATA QUERIES */

    /* LESSON QUERIES */

    // for the expert: get list of all lessons
    public function get_all_lessons(){
        $query_text = 'SELECT DISTINCT lessonID, lessonNumber, SUBSTRING_INDEX(lessonName, " ", 1) AS lessonName, handSetting, description, content FROM a22ux04.lessons ORDER BY lessonNumber;';
        $query = $this->db->query($query_text);
        return $query->getResult();
    }

    // for the child (only see lessons relevant for them)
    public function get_all_lessons_with_handsetting($hand_setting){
        $query_text = 'SELECT DISTINCT lessonID, lessonNumber, SUBSTRING_INDEX(lessonName, " ", 1) AS lessonName , handSetting, description FROM a22ux04.lessons WHERE handSetting = ?;';
        $query = $this->db->query($query_text, array($hand_setting));
        return $query->getResult();
    }

    // set lesson number for student (number from 1 to 4)
    public function set_student_lesson($studentID, $lessonNumber){
        $query_text = 'UPDATE student_accounts SET lesson = ? WHERE studentID = ?;';
        $this->db->query($query_text, array($lessonNumber, $studentID));
    }

    // returns all lessons assigned to student
    public function get_lessons_for_student($studentID){
        $query_text = 'SELECT lessonID, lessonNumber, lessonName, handSetting, description FROM a22ux04.lessons WHERE handSetting = (SELECT handSetting FROM student_accounts WHERE studentID=?) AND lessonNumber <= (SELECT lesson FROM student_accounts WHERE studentID=?) ORDER BY lessonNumber;';
        $query = $this->db->query($query_text, array($studentID, $studentID));
        return $query->getResult();
    }

    // get the typing content of the lesson
    public function get_lesson_content($lessonID){
        $query_text = 'SELECT lessonName, content FROM lessons WHERE lessonID=?';
        $query = $this->db->query($query_text, array($lessonID));
        return $query->getRow()->content;
    }

    // this will write minutes spent, total keypresses, correct keypresses and date to the dashboard table
    public function write_lesson_feedback($studentID, $lessonID, $minutes, $correct_keys, $total_keys){
        $current_date = date("Y/m/d H:i:s");
        $query_text = 'INSERT INTO dashboard (studentId, lessonID, minutesSpent, correctKeys, totalKeys, registeredOn) VALUES (?, ?, ?, ?, ?, ?);';
        $this->db->query($query_text, array($studentID, $lessonID, $minutes, $correct_keys, $total_keys, $current_date));
    }

    public function write_exercise_feedback($studentID, $minutes, $correct_keys, $total_keys){
        $current_date = date("Y/m/d H:i:s");
        $query_text = 'INSERT INTO dashboard (studentId, minutesSpent, correctKeys, totalKeys, registeredOn) VALUES (?, ?, ?, ?, ?);';
        $this->db->query($query_text, array($studentID, $minutes, $correct_keys, $total_keys, $current_date));
    }

    // this will write total keypresses and correct keypresses per letter to the feedback table
    public function write_general_feedback($studentID, $letter, $correct_keys, $total_keys){
        $query_text = 'CALL add_to_feedback(?, ?, ?, ?);';  // this is a stored procedure in the db
        $this->db->query($query_text, array($studentID, $letter, $correct_keys, $total_keys));
    }

    public function get_list_of_valid_characters(){
        $query_text = 'SELECT letter FROM cat_letters;';
        $query = $this->db->query($query_text);
        return $query->getResult();
    }

    // returns image for a letter
    // REMARK: the letter images should be scaled before uploading to database
    public function get_letter_image($letter){
        $query_text = 'SELECT image FROM cat_letters  WHERE BINARY letter = ?;';
        $query = $this->db->query($query_text, array($letter));
        return $query->getRow()->image;
    }

    public function get_latest_lesson_id_for_student($studentID){
        $query_text = 'SELECT lessons.lessonID FROM lessons JOIN student_accounts ON (student_accounts.lesson = lessons.lessonNumber AND student_accounts.handSetting = lessons.handSetting) WHERE student_accounts.studentID = ?;';
        $query = $this->db->query($query_text, array($studentID));
        return $query->getRow()->lessonID;
    }
    /* END OF LESSON QUERIES */

    /* FEEDBACK QUERIES */

    // returns the x amount of letters with the highest accuracy of a certain student
    public function get_best_letters($studentID, $amount_of_letters){
        $query_text = 'SELECT letter, accuracy FROM student_accuracy_per_letter WHERE studentID=? ORDER BY accuracy DESC LIMIT ?;';
        $query = $this->db->query($query_text, array($studentID, $amount_of_letters));
        return $query->getResult();
    }

    // returns the x amount of letters with the lowest accuracy of a certain student
    public function get_worst_letters($studentID, $amount_of_letters){
        $query_text = 'SELECT letter, accuracy FROM student_accuracy_per_letter WHERE studentID=? ORDER BY accuracy ASC LIMIT ?;';
        $query = $this->db->query($query_text, array($studentID, $amount_of_letters));
        return $query->getResult();
    }

    // get list of total accuracy per letter (not used?)
    public function get_student_letter_accuracy($studentID){
        $query_text = 'SELECT letter, accuracy FROM student_accuracy_per_letter WHERE studentID=?;';
        $query = $this->db->query($query_text, array($studentID));
        return $query->getResult();
    }

    // returns the name, overall average accuracy, minutes spent in the last 7 days, average speed per lesson and latest completed lesson of a student
    public function get_student_overview($studentID){
        $query_text = 'SELECT * FROM a22ux04.student_overview WHERE studentID=?;';
        $query = $this->db->query($query_text, array($studentID));
        return $query->getRow();
    }

    public function get_students_overview_per_expert($expertID){
        $query_text = 'SELECT * FROM a22ux04.student_overview WHERE expertID=?;';
        $query = $this->db->query($query_text, array($expertID));
        return $query->getResult();
    }

    // for expert: average accuracy per letter over all students (not used?)
    public function get_overall_letter_accuracy(){
        $query_text = 'SELECT * FROM letters_accuracy;';
        $query = $this->db->query($query_text);
        return $query->getResult();
    }

    public function add_coins($studentID, $amount){
        $query_text = 'UPDATE student_accounts SET numberOfCoins = numberOfCoins + ?, numberOfCoinsCumulative =  numberOfCoinsCumulative + ? WHERE studentID = ?;';
        $this->db->query($query_text, array($amount, $amount, $studentID));
    }

    /* END OF FEEDBACK QUERIES */

    /* CLOSET AND BADGES QUERIES*/

    // returns list of all badges
    public function get_all_badges(){
        $query_text = 'SELECT itemID, image, badgeName FROM items WHERE price = -1;';
        $query = $this->db->query($query_text);
        return $query->getResult();
    }

    // returns list of all avatars
    public function get_all_avatars(){
        $query_text = 'SELECT itemID, image, price FROM items WHERE price > -1;';
        $query = $this->db->query($query_text);
        return $query->getResult();
    }

    // returns image by ID
    public function get_image_by_itemID($itemID){
        $query_text = 'SELECT image FROM items WHERE itemID = ?;';
        $query = $this->db->query($query_text, array($itemID));
        return $query->getRow()->image;
    }

    //returns price by ID
    public function get_price_by_itemID($itemID){
        $query_text = 'SELECT price FROM items WHERE itemID = ?;';
        $query = $this->db->query($query_text, array($itemID));
        return $query->getRow()->price;
    }

    // returns list of all badges owned by a student
    public function get_badges_owned_by_student($studentID){
        $query_text = 'SELECT items.itemID, image, badgeName FROM student_owns_items JOIN items ON student_owns_items.itemID = items.itemID WHERE studentID = ? AND price = -1;';
        $query = $this->db->query($query_text, array($studentID));
        return $query->getResult();
    }

    // returns list of all avatars owned by a student
    public function get_avatars_owned_by_student($studentID){
        $query_text = 'SELECT items.itemID, image FROM student_owns_items JOIN items ON student_owns_items.itemID = items.itemID WHERE studentID = ? AND price > -1;';
        $query = $this->db->query($query_text, array($studentID));
        return $query->getResult();
    }

    // returns how many coins a student has
    public function get_student_balance($studentID){
        $query_text = 'SELECT numberOfCoins FROM student_accounts WHERE studentID = ?;';
        $query = $this->db->query($query_text, array($studentID));
        return $query->getRow()->numberOfCoins;
    }

    // student buys an avatar
    // first check if student has enough coins to buy the avatar
    public function buy_avatar($studentID, $itemID){

        // add avatar to closet
        $query_text = 'INSERT INTO student_owns_items (studentID, itemID) VALUES (?, ?);';
        $this->db->query($query_text, array($studentID, $itemID));

        // get price of item
        $query_text = 'SELECT price FROM items WHERE itemID = ?;';
        $query = $this->db->query($query_text, array($itemID));
        $item_price = $query->getRow()->price;

        // subtract cost from balance
        $query_text = 'UPDATE student_accounts SET numberOfCoins = numberOfCoins - ? WHERE studentID = ?;';
        $this->db->query($query_text, array($item_price, $studentID));
    }

    // returns selected avatar
    public function get_active_avatar($studentID){
        $query_text = 'SELECT avatarApplied, image FROM student_accounts JOIN items ON avatarApplied = itemID WHERE studentID = ?;';
        $query = $this->db->query($query_text, array($studentID));
        return $query->getRow();
    }

    // student chooses new avatar from the closet
    public function set_active_avatar($itemID, $studentID){
        $query_text = 'UPDATE student_accounts SET avatarApplied = ? WHERE studentID = ?;';
        $this->db->query($query_text, array($itemID, $studentID));
    }

    // checks for new avatar badges (call after every avatar buy)
    public function check_avatar_badges($studentID){
        $query_text = 'CALL check_avatar_badges(?);';
        $this->db->query($query_text, array($studentID));
    }

    // checks for new lesson badges (call after every lesson completed)
    public function check_lesson_badges($studentID){
        $query_text = 'CALL check_lesson_badges(?);';
        $this->db->query($query_text, array($studentID));
    }

    // checks for new exercise badges (call after every exercise completed)
    public function check_exercise_badges($studentID){
        $query_text = 'CALL check_exercise_badges(?);';
        $this->db->query($query_text, array($studentID));
    }

    /* END OF CLOSET AND BADGES QUERIES*/

    /* BEGINNING OF GRAPH QUERIES */

    // returns graph data which plots the time spent per week
    public function get_time_spent_per_week($studentID){
        $query_text = 'SELECT weekNumber, timeSpent FROM time_spent_per_week WHERE studentID=?;';
        $query = $this->db->query($query_text, array($studentID));
        return $query->getResult();
    }

    // returns graph data which plots the minutes spent cumulatively over time
    public function get_time_spent_cumulative($studentID){
        $query_text = 'SELECT dateFormatted, timeSpentCumulative FROM a22ux04.time_spent_cumulative WHERE studentID=?;';
        $query = $this->db->query($query_text, array($studentID));
        return $query->getResult();
    }

    // returns graph data which plots the accuracy and time taken per lesson/exercise
    public function get_feedback_per_day($studentID){
        $query_text = 'SELECT dateFormatted, timeSpent, accuracy FROM a22ux04.feedback_per_day WHERE studentID=?;';
        $query = $this->db->query($query_text, array($studentID));
        return $query->getResult();
    }

    /* END OF GRAPH QUERIES */

    /* BEGINNING OF EXPERT QUERIES */
      /* MyStudents */
    public function get_students(){
        $query_text = 'SELECT *  FROM a22ux04.student_overview WHERE expertID IS NULL AND isActive = "1"';
        $query = $this->db->query($query_text);
        return $query->getResult();
    }

    public function get_inactive_students(){
        $query_text = 'SELECT *  FROM a22ux04.student_overview WHERE expertID IS NULL AND isActive = "0"';
        $query = $this->db->query($query_text);
        return $query->getResult();
    }

    public function get_all_student_emails(){
        $query_text = 'SELECT studentID, email  FROM a22ux04.student_overview';
        $query = $this->db->query($query_text);
        return $query->getResult('array');
    }

    /*END OF EXPERT QUERIES*/

    /*START OF EXERCISE QUERIES*/
    public function get_exercise_content($exerciseID){
        $query_text = 'SELECT exerciseName, content FROM exercises WHERE exerciseID=?';
        $query = $this->db->query($query_text, array($exerciseID));
        return $query->getRow()->content;
    }

    public function get_all_exercises_with_handsetting($hand_setting){
        $query_text = 'SELECT DISTINCT exerciseID, exerciseNumber, SUBSTRING_INDEX(exerciseName, " ", 1) AS exerciseName , handSetting, description, content FROM a22ux04.exercises WHERE handSetting = ? ORDER BY exerciseNumber;';
        $query = $this->db->query($query_text, array($hand_setting));
        return $query->getResult();
    }

    public function get_exercises_for_student($studentID){
        $query_text = 'SELECT exerciseID, exerciseNumber, exerciseName, handSetting, description FROM a22ux04.exercises WHERE handSetting = (SELECT handSetting FROM student_accounts WHERE studentID=?) AND exerciseNumber <= (SELECT lesson FROM student_accounts WHERE studentID=?) ORDER BY exerciseNumber;';
        $query = $this->db->query($query_text, array($studentID, $studentID));
        return $query->getResult();
    }

    public function get_all_exercises(){
        $query_text = 'SELECT exerciseID, exerciseNumber, exerciseName, handSetting, description, content FROM a22ux04.exercises ORDER BY exerciseNumber;';
        $query = $this->db->query($query_text);
        return $query->getResult();
    }

    public function get_latest_exercise_id_for_student($studentID){
        $query_text = 'SELECT exercises.exerciseID FROM exercises JOIN student_accounts ON (student_accounts.lesson = exercises.exerciseNumber AND student_accounts.handSetting = exercises.handSetting) WHERE student_accounts.studentID = ?;';
        $query = $this->db->query($query_text, array($studentID));
        return $query->getRow()->exerciseID;
    }

    /* END OF EXERCISE QUERIES */

    public function debug($k, $v){
        $query_text = 'INSERT INTO debug (k, v) VALUES (?,?);';
        $this->db->query($query_text, array($k, $v));
    }

}