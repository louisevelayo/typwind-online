<?php

namespace App\Controllers;

use CodeIgniter\Database\Config;
use CodeIgniter\HTTP\Request;

use App\Models\UserModel;
use App\Libraries\Hash;
use Config\Services;

class TypwindController extends \CodeIgniter\Controller
{
    private $menu_model;
    private $menu_model_expert;
    private $shop_menu_model;
    private $database;

    public function __construct()
    {
        $this->menu_model = new \App\Models\Menu_model();
        $this->menu_model_expert = new \App\Models\Menu_model_expert();
        $this->shop_menu_model = new \App\Models\ShopMenu_model();
        $this->database = new \App\Models\Database_Model();

    }

    private function set_common_data($title, $content_title_1, $content_title_2){
        $loggedUser = json_decode($_COOKIE['LoggedUser'], true);
        $studentID = $loggedUser['user']['studentID'];
        $this->data['title'] = $title;
        $this->data['content_title_1'] = $content_title_1;
        $this->data['content_title_2'] = $content_title_2;
        $this->data['currency'] = $this->database->get_student_balance($studentID); // studentID needs to come from cookies
    }

    public function index(){ //THIS IS NOT WORKING: SIEBE IS ON IT
        $request = \Config\Services::Request();
        //$request = Services::request();
        if($request->isAjax()){
            $result=$request->getvar('name');
            print_r("Hello World");
            return json_encode($result);
        }
        else{
            print_r("Hello World 2");
            echo view('ajaxRequestPage');
        }
    }

    public function home(){
        $this->data['pageTitle'] = 'Home';
        $loggedUser = json_decode($_COOKIE['LoggedUser'], true);
        $studentID = $loggedUser['user']['studentID'];
        $this->set_common_data("Typwind Online Home","Home","Subtitle for home page");
        $this->data['menu_items'] = $this->menu_model->get_menuitems('Home');
        $this->data2['graph'] = $this->graph($studentID,false);
        $this->data2['equipped_avatar'] = $this->database->get_active_avatar($studentID);
        $this->data2['accuracy'] = $this->database->get_student_overview($studentID)->overallAccuracy;
        $this->data2['latestLesson'] = $this->database->get_latest_lesson_id_for_student($studentID);
        $this->data2['latestExercise'] = $this->database->get_latest_exercise_id_for_student($studentID);
        $this->data['content'] = view("home_page",$this->data2);
        return view('template', $this->data);
    }

    public function lessons_overview(){
        $this->data['pageTitle'] = 'Lessons';
        $loggedUser = json_decode($_COOKIE['LoggedUser'], true);
        $studentID = $loggedUser['user']['studentID'];
        //$loggedUser = json_decode($_COOKIE['LoggedUser'], true);
        //$studentID = $loggedUser['user']['studentID'];
        //$studentName = $loggedUser['user']['firstName'];
        $this->set_common_data("Typwind Online lessons overview","Lessons","Subtitle for lessons overview page");
        $this->data['menu_items'] = $this->menu_model->get_menuitems('Lessons'); //get->menuitems of 'Lessons' is needed (not overview)
        $loggedUser = json_decode($_COOKIE['LoggedUser'], true);
        $hand_setting = $loggedUser['user']['handSetting'];
        $this->data2['lesson_for_child'] = $this->database->get_lessons_for_student($studentID);
//        print_r($this->data2);
        $this->data2['equipped_avatar'] = $this->database->get_active_avatar($studentID);
        $this->data['content'] = view("lessons_overview", $this->data2);
        $this->data['equipped_avatar'] = $this->database->get_active_avatar($studentID);
        return view("template",$this->data);
    }

    public function exercises_overview(){
        $this->data['pageTitle'] = 'Exercises';
        $loggedUser = json_decode($_COOKIE['LoggedUser'], true);
        $studentID = $loggedUser['user']['studentID'];
        $handSetting = $loggedUser['user']['handSetting'];
        //$loggedUser = json_decode($_COOKIE['LoggedUser'], true);
        //$studentID = $loggedUser['user']['studentID'];
        //$studentName = $loggedUser['user']['firstName'];
        $this->set_common_data("Typwind Online exercises overview","Exercises","Subtitle for exercises overview page");
        $this->data['menu_items'] = $this->menu_model->get_menuitems('Exercises');
        $this->data2['equipped_avatar'] = $this->database->get_active_avatar($studentID);
        $this->data2['exercise_for_child'] = $this->database->get_exercises_for_student($studentID);
//        print_r($this->data2);
        $this->data['content'] = view("exercises_overview", $this->data2);
        return view("template",$this->data);
    }
    
    public function exercises(){
        $this->set_common_data("Typwind Online Exercises","Exercises","Subtitle for exercise page");
        $this->data['menu_items'] = $this->menu_model->get_menuitems('Exercises');
        $this->data['content'] = view("exercise");
        return view("template",$this->data);
    }

    public function games(){
        $this->data['pageTitle'] = 'Games';
        $loggedUser = json_decode($_COOKIE['LoggedUser'], true);
        $studentID = $loggedUser['user']['studentID'];
        $studentName = $loggedUser['user']['firstName'];
        $this->set_common_data("Typwind Online Games","Games","Subtitle for game page");
        $this->data['menu_items'] = $this->menu_model->get_menuitems('Games');
        $this->data2['equipped_avatar'] = $this->database->get_active_avatar($studentID);
        $this->data['content'] = view("game", $this->data2);
        return view("template",$this->data);
    }

    public function shop(){
        $this->data['pageTitle'] = 'Shop';
        $loggedUser = json_decode($_COOKIE['LoggedUser'], true);
        $studentID = $loggedUser['user']['studentID'];
        $this->set_common_data("Typwind Online Shop","Shop","Subtitle for shop page");
        $this->data['menu_items'] = $this->menu_model->get_menuitems('shop');
        $this->data["balance"] = $this->database->get_student_balance($studentID);
        $this->data2["balance"] = $this->database->get_student_balance($studentID);
        $this->data2['shop_menu_items'] = $this->shop_menu_model->get_menuitems('shop');
        $this->data['equipped_avatar'] = $this->database->get_active_avatar($studentID);

        $this->data2['all_avatars'] = $this->database->get_all_avatars();
        $this->data2['avatars_owned_by_student'] = $this->database->get_avatars_owned_by_student($studentID);

//        $items = $this->shop_items_model->get_all_from_items();
//        $this->data2['shop_items'] = $items;
        
        $this->data['content'] = view("shop", $this->data2);
        return view("template_store",$this->data);
    }

    public function closet(){
        $this->data['pageTitle'] = 'My Avatars';
        $loggedUser = json_decode($_COOKIE['LoggedUser'], true);
        $studentID = $loggedUser['user']['studentID'];
        $this->set_common_data("Typwind Online Closet","Closet","Subtitle for closet page");
        $this->data['menu_items'] = $this->menu_model->get_menuitems('My Avatars');
        $this->data['equipped_avatar'] = $this->database->get_active_avatar($studentID);

        $this->data["balance"] = $this->database->get_student_balance($studentID);
        $this->data2['shop_menu_items'] = $this->shop_menu_model->get_menuitems('My Avatars');

        $this->data2['all_avatars'] = $this->database->get_all_avatars();
        $this->data2['avatars_owned_by_student'] = $this->database->get_avatars_owned_by_student($studentID);
        $this->data2['active_avatar'] = $this->database->get_active_avatar($studentID);

        /*
        $items = $this->database->get_avatars_owned_by_student(4);
        $this->data2['closet_items'] = $items; */
        // this still needs to be converted to the english version as it is now still in dutch version.
        $this->data['content'] = view("closet", $this->data2);
        return view("template_store",$this->data);
    }

    public function student_buys_avatar($studentID,$itemID){
        $this->database->buy_avatar($studentID,$itemID);
        $this->database->get_student_balance($studentID);
        $this->database->check_avatar_badges($studentID); //gives right badges after buying
    }

    public function check_balance($studentID, $itemID){
        $balance = $this->database->get_student_balance($studentID);
        $price = $this->database->get_price_by_itemID($itemID);
        if($balance-$price >= 0){
            return $this->response->setJSON(true);
        } else{
            return $this->response->setJSON(false);
        }
    }

    public function student_equips_avatar($studentID, $itemID){
        $this->database->set_active_avatar($itemID, $studentID);
    }

    public function badges(){
        $this->data['pageTitle'] = 'Badges';
        $loggedUser = json_decode($_COOKIE['LoggedUser'], true);
        $studentID = $loggedUser['user']['studentID'];
        $this->set_common_data("Typwind Online Badges","Badges","Subtitle for badges page");
        $this->data['menu_items'] = $this->menu_model->get_menuitems('badges');
        $this->data["balance"] = $this->database->get_student_balance($studentID);
        $this->data2['shop_menu_items'] = $this->shop_menu_model->get_menuitems('badges');
        $this->data['equipped_avatar'] = $this->database->get_active_avatar($studentID);

        $this->data2['all_badges'] = $this->database->get_all_badges();
        $this->data2['badges_owned_by_student'] = $this->database->get_badges_owned_by_student($studentID);


        $this->data['content'] = view("badges", $this->data2);
        return view("template_store",$this->data);
    }

    public function exercise_typing(){
        $this->data['pageTitle'] = 'Exercise';
        $loggedUser = json_decode($_COOKIE['LoggedUser'], true);
        $studentID = $loggedUser['user']['studentID'];
        $url_data = $this->request->getVar('data');
        $this->set_common_data("Typwind Online Exercise Typing","Feedback","Subtitle for feedback page");
        $to_load = $_COOKIE['loadForTyping'];
        if($to_load == 'exercise'){
            $this->data['menu_items'] = $this->menu_model->get_menuitems('Exercises');
        }else{
            $this->data['menu_items'] = $this->menu_model->get_menuitems('Lessons');
        }
        $this->data['equipped_avatar'] = $this->database->get_active_avatar($studentID);
        if(isset($_COOKIE['lessonButton'])){
            $lesson_id = $_COOKIE['lessonButton'];
            $lesson_content = explode("-", $this->database->get_lesson_content($lesson_id));
        }
        if(isset($_COOKIE['exerciseButton'])){
            $exercise_id = $_COOKIE['exerciseButton'];
            $exercise_content = explode(" ", $this->database->get_exercise_content($exercise_id));
        }
        $letters = $this->database->get_list_of_valid_characters();
        $this->data2['equipped_avatar'] = $this->database->get_active_avatar($studentID);

        if($url_data){
            if(strcasecmp($url_data,'lc')==0){
                return $this->response->setJSON($lesson_content);
            }
            if(strcasecmp($url_data,'ec')==0){
                return $this->response->setJSON($exercise_content);
            }
            if(strcasecmp($url_data,'char')==0){
                for($i=0; $i<count($letters); $i++){
                    $letters[$i] = $letters[$i]->letter;
                    if(strcasecmp($letters[$i],"space")==0){
                        $letters[$i] = " "; // replace space by an actual space (could not store actual space in DB)
                    }
                }
                return $this->response->setJSON($letters);
            }
        }
        $this->data['content'] = view("exercise_typing", $this->data2);
        return view("template",$this->data);
    }

    public function send_typing_stats($minutes, $correctKeysJSON, $totalKeysJSON, $completedJSON){
        $loggedUser = json_decode($_COOKIE['LoggedUser'], true);
        $studentID = $loggedUser['user']['studentID'];

        $correctKeys = json_decode(urldecode($correctKeysJSON), true);
        $totalKeys = json_decode(urldecode($totalKeysJSON), true);
        $correctKeysSum = 0;
        $totalKeysSum = 0;

        // sum of correct and total keys for overall lesson accuracy
        foreach($correctKeys as $char => $value){
            $correctKeysSum = $correctKeysSum + $correctKeys[$char];
        }
        foreach($totalKeys as $char => $value){
            $totalKeysSum = $totalKeysSum + $totalKeys[$char];
        }

        $to_load = $_COOKIE['loadForTyping'];
        if($to_load == 'exercise'){
            $this->database->write_exercise_feedback($studentID, $minutes, $correctKeysSum, $totalKeysSum);
        }
        else{
            $lessonID = $_COOKIE['lessonButton'];
            $this->database->write_lesson_feedback($studentID, $lessonID, $minutes, $correctKeysSum, $totalKeysSum);
        }

        $completed = json_decode(urldecode($completedJSON));
        if($completed == true){
            $this->database->add_coins($studentID, 20);
        }

        // letter specific accuracy
        foreach($correctKeys as $key => $value){
            if($totalKeys[$key] != 0){
                $this->database->write_general_feedback($studentID, $key, $correctKeys[$key], $totalKeys[$key]);
            }
        }

        // update badges
        $to_load = $_COOKIE['loadForTyping'];
        if($to_load == 'exercise'){
            $this->database->check_exercise_badges($studentID);
        }else{
            $this->database->check_lesson_badges($studentID);
        }
    }

    public function reward_page(){
        $this->data['pageTitle'] = 'BRAVO';
        $loggedUser = json_decode($_COOKIE['LoggedUser'], true);
        $studentID = $loggedUser['user']['studentID'];

        $this->set_common_data("Typwind Online reward page","Rewards","Congratulations, you finished the exercise!");
        $to_load = $_COOKIE['loadForTyping'];
        if($to_load == 'exercise'){
            $this->data['menu_items'] = $this->menu_model->get_menuitems('Exercises');
        }else{
            $this->data['menu_items'] = $this->menu_model->get_menuitems('Lessons');
        }
        $this->data['equipped_avatar'] = $this->database->get_active_avatar($studentID);
        $this->data2['equipped_avatar'] = $this->database->get_active_avatar($studentID);

        // bk = best key, wk = worst key
        $this->data2['bk1'] = $_GET['bk1'];
        $this->data2['bk2'] = $_GET['bk2'];
        $this->data2['bk3'] = $_GET['bk3'];
        $this->data2['wk1'] = $_GET['wk1'];
        $this->data2['wk2'] = $_GET['wk2'];
        $this->data2['wk3'] = $_GET['wk3'];
        $this->data['content'] = view("reward_page", $this->data2);
        return view("template",$this->data);

    }

    public function myStudents(){
        $this->data['pageTitle'] = 'My Students';
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);
        $loggedUser = json_decode($_COOKIE['LoggedUser'], true);
        $expertID = $loggedUser['user']['expertID'];
        $request = \Config\Services::Request();
        $studentID = $request->getVar('studentID');
        $action = $request->getVar('action');

        if ($studentID && $action) {
            if ($action === 'add') {
                // Add the student to the database
                $this->database->set_expert_for_student($expertID, $studentID);
            } else if ($action === 'remove') {
                // Remove the student from the database
                $this->database->remove_expert_for_student($studentID);
            } else if($action === 'update'){
                // Get the form data
                $firstName = $request->getVar('firstName');
                $lastName = $request->getVar('lastName');
                $handSetting = $request->getVar('typingStyle');
                $email = $request->getVar('email');
                $password = $request->getVar('password');
                $lessonAccess = $request->getVar('lesson');
                // Update the student data in the database
                $this->database->update_student_data($firstName, $lastName, $email, $password, $handSetting, $lessonAccess,$studentID);
            } else if($action === 'delete'){
                $state = $request->getVar('activeState');
                $this->database->update_student_status($state, $studentID);
            }
        }

        $this->data['menu_items'] = $this->menu_model_expert->get_menuitems('My_Students');
        $this->data2['all_students'] = $this->database->get_students();
        $this->data2['all_inactive_students'] = $this->database->get_inactive_students();
        $this->data2['all_my_students'] = $this->database->get_students_overview_per_expert($expertID);
        foreach($this->data2['all_my_students'] as $student){
            $student->graph = $this->graph($student->studentID,true);
        }
        $this->data2['all_emails'] = $this->database->get_all_student_emails();

        $this->data['content'] = view("expert_mystudents_overview", $this->data2);
        return view("expert_template", $this->data);
    }


    public function LessonsExpert(){
        $this->data['pageTitle'] = 'Lessons';
        $this->data['menu_items'] = $this->menu_model_expert->get_menuitems('Lessons');
        $this->data2['all_lessons'] = $this->database->get_all_lessons();

        $this->data['content'] = view("expert_lessons_overview", $this->data2);
        return view("expert_template", $this->data);
    }

    public function styleRefactor(){
        $this->data['menu_items'] = $this->menu_model_expert->get_menuitems('styleRefactor');
        $this->data['content'] = view("styleRefactor");
        return view("expert_template", $this->data);
    }

    public function ExercisesExpert(){
        $this->data['pageTitle'] = 'Exercises';
        $this->data['menu_items'] = $this->menu_model_expert->get_menuitems('Exercises');
        $this->data2['all_exercises'] = $this->database->get_all_exercises();

        $this->data['content'] = view("expert_exercises_overview", $this->data2);
        return view("expert_template", $this->data);
    }

    protected $helpers = ['url', 'form', 'Form_helper'];
    public function edit_expert_profile(){
        $this->data['pageTitle'] = 'Edit Profile';
        $loggedUser = json_decode($_COOKIE['LoggedUser'], true);
        $expertID = $loggedUser['user']['expertID'];
        if($this->request->getMethod() === 'post') {


            $firstName = $this->request->getVar('name');
            $lastName = $this->request->getVar('surname');
            $email = $this->request->getVar('email');
            $password = $this->request->getVar('password');
            $checkforum = ( ($firstName ==$loggedUser['user']['firstName']) && ($lastName ==$loggedUser['user']['lastName']) &&
                ($email ==$loggedUser['user']['email']) && ($password ==$loggedUser['user']['password'])

            );

            $person1 = $_COOKIE['button1'];
            $userModel = new UserModel($person1);
            $table_name=$userModel->getTableName();
            $this->db = \Config\Database::connect();
            $query = $this->db->table($table_name)->where('email', $email)->where('expertID !=', $expertID)->get();
            if ($query->getRowArray()) {
                $EmailExist=true;
            } else {
                $EmailExist=false;
            }


            if(!$checkforum){
                if(!$EmailExist) {
                    if ($this->database->update_expert_data($firstName, $lastName, $email, $password, $expertID)) {
                        $loggedUser['user']['firstName'] = $firstName;
                        $loggedUser['user']['lastName'] = $lastName;
                        $loggedUser['user']['email'] = $email;
                        $loggedUser['user']['password'] = $password;
                        $expiry = time() + (60 * 60 * 24);

                        $options = [
                            'expires' => $expiry,
                            'path' => '/',
                            'domain' => '',
                            'secure' => true,
                            'httponly' => false,
                            'samesite' => 'Lax',
                        ];
                        setcookie('LoggedUser', json_encode($loggedUser), $options);
                        if($_COOKIE['lang'] == "en")
                            return redirect()->to('/public/TypwindController/edit_expert_profile')->with('success', 'Profile updated successfully!');
                        if($_COOKIE['lang'] == "nl")
                            return redirect()->to('/public/TypwindController/edit_expert_profile')->with('success', 'Profiel succesvol geüpdatet!');
                    } else {
                        if($_COOKIE['lang'] == "en")
                            return redirect()->to('/public/TypwindController/edit_expert_profile')->with('fail', 'Failed to update expert profile');
                        if($_COOKIE['lang'] == "nl")
                            return redirect()->to('/public/TypwindController/edit_expert_profile')->with('fail', 'Profiel updaten mislukt');
                    }
                }else{
                    if($_COOKIE['lang'] == "en")
                        return redirect()->to('/public/TypwindController/edit_expert_profile')->with('fail', 'Email has been taken');
                    if($_COOKIE['lang'] == "nl")
                        return redirect()->to('/public/TypwindController/edit_expert_profile')->with('fail', 'E-mail is al in gebruik');
                }
            }else{
                if($_COOKIE['lang'] == "en")
                    return redirect()->to('/public/TypwindController/edit_expert_profile')->with('fail', 'Already Updated');
                if($_COOKIE['lang'] == "nl")
                    return redirect()->to('/public/TypwindController/edit_expert_profile')->with('fail', 'Profiel was al geüpdatet');
            }
        }


        $this->data['menu_items'] = $this->menu_model_expert->get_menuitems('');
        $this->data['content'] = view("edit_user_profiles/edit_expert_profile",);
        return view("expert_template", $this->data);

    }



    public function support(){
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);
        $loggedUser = json_decode($_COOKIE['LoggedUser'], true);
        $expertID = $loggedUser['user']['expertID'];
        $request = \Config\Services::Request();
        $studentID = $request->getVar('studentID');
        $action = $request->getVar('action');

        $isActive = $request->getVar('isActive');
        $this->database->update_student_status($isActive, $studentID);
        $this->database->set_expert_for_student($expertID, $studentID);

        //$this->data2['all_inactive_students'] = $this->database->get_inactive_students();
        //$this->data['menu_items'] = $this->menu_model_expert->get_menuitems('');
        //$this->data['content'] = view("expert_support",$this->data2);
        //return view("expert_template", $this->data);
    }



    // EXAMPLE HOW TO USE:
        //$image_data = $this->database->get_letter_image('a');
        //$this->data['content'] = $this->show_image($image_data);
    public function show_image($image_data){
        $this->data['image_data'] = $image_data;
        return view("image", $this->data);
    }

    public function graph($studentID, $isExpert){ //home_page = true for student, false for expert
        $this->data['studentID'] = $studentID;
        $this->data['isExpert'] = $isExpert;
        return view("graph", $this->data);
    }

    public function getGraphData($studentID,$graphData){
        $tspw = $this->database->get_time_spent_per_week($studentID);
        $tsc = $this->database->get_time_spent_cumulative($studentID);
        $fpd = $this->database->get_feedback_per_day($studentID);

        if($graphData){
            if(strcasecmp($graphData,'tspw')==0){
                return $this->response->setJSON($tspw);
            }
            if(strcasecmp($graphData,'tsc')==0){
                return $this->response->setJSON($tsc);
            }
            if(strcasecmp($graphData,'fpd')==0){
                return $this->response->setJSON($fpd);
            }
        }
    }

    public function lessonAjax(){
        if (isset($_POST['lessonButton'])) {
            $expiry = time() + (60 * 60 * 24);
            setcookie('lessonButton', $_POST['lessonButton'], $expiry, '/');
            setcookie('loadForTyping', 'lesson', $expiry, '/');
        }
        if (isset($_POST['exerciseButton'])) {
            $expiry = time() + (60 * 60 * 24);
            setcookie('exerciseButton', $_POST['exerciseButton'], $expiry, '/');
            setcookie('loadForTyping', 'exercise', $expiry, '/');
        }
        return redirect()->to('public/TypwindController/exercise_typing');
    }

    public function saveProgress(){
        $request = \Config\Services::Request();
        $id = $request->getvar('id');
        $progress = $request->getvar('progress');
        $expiry = time() + (60 * 60 * 24);
        $cookie_name = "content";
        $cookie_name.=$id;
        setcookie($cookie_name, $progress, $expiry, '/');
    }












//small comments
// again




}