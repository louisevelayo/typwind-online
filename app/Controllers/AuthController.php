<?php

namespace App\Controllers;
use App\Models\UserModel;
use App\Models\Database_Model;
use App\Libraries\Hash;
use CodeIgniter\HTTP\IncomingRequest;

class AuthController extends TypwindController
{
    protected $helpers = ['url', 'form', 'Form_helper'];
    private $database;

    public function __construct()
    {
        $this->database=new \App\Models\Database_Model();
    }

    public function login(){
        $this->data['pageTitle'] = 'Login';

        $this->data['content'] = view("auth/login");
        return view("auth/login_template", $this->data);
    }

    public function set_button1_cookie(){

        if (isset($_POST['button1'])) {
            $expiry = time() + (60 * 60 * 24);
            $options = [
                'expires' => $expiry,
                'path' => '/',
                'domain' => '',
                'secure' => true,
                'httponly' => false,
                'SameSite' => 'Lax',
            ];

            setcookie('button1',$_POST['button1'] , $options);

            //if above does not work
            //setcookie('button1',$_POST['button1'], $expiry,'/');

        }

        return redirect()->to('public/AuthController/SignIn');
    }

    public function SignIn()
    {
        $this->data['pageTitle'] = 'Sign In';
        $this->data['content'] = view("auth/SignIn");
        return view("auth/login_template", $this->data);
    }

    public function SignUp()
    {
        $this->data['pageTitle'] = 'Sign Up';
        $this->data['content'] = view("auth/SignUp");
        return view("auth/login_template", $this->data);
    }

    public function create_login(){

        $person1 = $_COOKIE['button1'];
        $userModel = new UserModel($person1);
        $table_name=$userModel->getTableName();

        if($_COOKIE['lang'] == "en"){
            $validation = $this->validate([
                'name' => [
                    'rules' => 'required|alpha|min_length[2]|regex_match[/^[A-Z][a-zA-Z]*$/]',
                    'errors' => [
                        'required' => 'First name is required',
                        'alpha' => 'First name should be only letters',
                        'min_length' => 'First name should be minimum 2 characters long',
                        'regex_match' => 'First letter should be uppercase',
                    ],
                ],
                'surname' => [
                    'rules' => 'required|alpha_space|min_length[3]|regex_match[/^[A-Z][a-zA-Z\s]*$/]',
                    'errors' => [
                        'required' => 'Last name is required',
                        'alpha' => 'Last name should be only letters',
                        'min_length' => 'Last name should be minimum 3 characters long',
                        'regex_match' => 'First letter should be uppercase',
                    ],
                ],
                'email' => [
                    'rules'  => 'required|valid_email|is_unique['.$table_name.'.email]',
                    'errors' => [
                        'required' => 'Email is required',
                        'valid_email' => 'Not a valid email format',
                        'is_unique' => 'Email has already been taken',
                    ],
                ],
                'password' => [
                    'rules'  =>  'required|min_length[6]|max_length[20]|regex_match[/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/]',
                    'errors' => [
                        'required' => 'Password is required',
                        'min_length' => 'Password must have at least 6 characters in length',
                        'max_length' => 'Password must not have characters more thant 20 in length',
                        'regex_match' => 'Password needs: 1 lowercase, 1 uppercase, 1 number',
                    ],
                ],
                'cpassword' => [
                    'rules'  => 'matches[password]',
                    'errors' => [
                        'required' => 'Password confirmation is required',
                        'matches' => 'Passwords do not match',
                    ],
                ],
            ]);
        }
        if($_COOKIE['lang'] == "nl"){
            $validation = $this->validate([
                'name' => [
                    'rules' => 'required|alpha|min_length[2]|regex_match[/^[A-Z][a-zA-Z]*$/]',
                    'errors' => [
                        'required' => 'Voornaam is vereist',
                        'alpha' => 'Voornaam kan enkel letters bevatten',
                        'min_length' => 'Voornaam moet minimum 2 letters bevatten',
                        'regex_match' => 'Eerste letter moet hoofdletter zijn',
                    ],
                ],
                'surname' => [
                    'rules'  => 'required|alpha_space|min_length[3]|regex_match[/^[A-Z][a-zA-Z\s]*$/]',
                    'errors' => [
                        'required' => 'Achternaam is vereist',
                        'alpha' => 'Achternaam kan enkel letters bevatten',
                        'min_length' => 'Achternaam moet minimum 3 letters bevatten',
                        'regex_match' => 'Eerste letter moet hoofdletter zijn',
                    ],
                ],
                'email' => [
                    'rules'  => 'required|valid_email|is_unique['.$table_name.'.email]',
                    'errors' => [
                        'required' => 'E-mailadres is vereist',
                        'valid_email' => 'E-mailadres is niet geldig',
                        'is_unique' => 'E-mailadres is niet gekend',
                    ],
                ],
                'password' => [
                    'rules'  =>  'required|min_length[6]|max_length[20]|regex_match[/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/]',
                    'errors' => [
                        'required' => 'Wachtwoord is vereist',
                        'min_length' => 'Wachtwoord moet minstens 6 karakters lang zijn',
                        'max_length' => 'Wachtwoord moet minder dan 20 karakters lang zijn',
                        'regex_match' => 'Gebruik 1 kleine letter, 1 hoofdletter, 1 nummer en 6 karakters',
                    ],
                ],
                'cpassword' => [
                    'rules'  => 'matches[password]',
                    'errors' => [
                        'required' => 'Bevestiging is vereist',
                        'matches' => 'Wachtwoorden komen niet overeen',
                    ],
                ],
            ]);
        }




        if(isset($_COOKIE['button1'])&&$_COOKIE['button1']=="Expert") {
            if($_COOKIE['lang'] == "en"){
                $validation = $this->validate([
                    'wpassword' => [
                        'rules' => 'required|numeric',
                        'errors' => [
                            'required' => 'Windekind code is required',
                            'numeric' => 'Windekind code should contain only numbers',
                        ],
                    ],
                ]);
            }
            if($_COOKIE['lang'] == "nl"){
                $validation = $this->validate([
                    'wpassword' => [
                        'rules' => 'required|numeric',
                        'errors' => [
                            'required' => 'Windekind code is vereist',
                            'numeric' => 'Windekind code kan enkel cijfers bevatten',
                        ],
                    ],
                ]);
            }
        }

        if(!$validation){

            return  redirect()->to('public/AuthController/SignUp')->with('validation', $this->validator)->withInput();

        }else{

            $firstName = $this->request->getPost('name');
            $lastName = $this->request->getPost('surname');
            $email = $this->request->getPost('email');
            $password = $this->request->getPost('password');
            $handSetting = $this->request->getVar('hands_person');
            $windekindPassword = $this->request->getVar('wpassword');


            if ($_COOKIE['button1']=='Student') {


                $result = $this->database->make_student_account($email, $password, $firstName, $lastName, $handSetting);

                if ($result == 0) {
                    return redirect()->to('public/AuthController/SignUp')->with('fail', 'Something went wrong');
                } else {
                    return redirect()->to('public/AuthController/SignIn')->with('success', 'You successfully registered!');
                }


            }


            if ($_COOKIE['button1']=='Expert') {
                if($windekindPassword=='123456') {
                    $result=$this->database->make_expert_account($email,$password,$firstName,$lastName);

                    if( $result==0 ){
                        return  redirect()->to('public/AuthController/SignUp')->with('fail', 'Something went wrong');
                    }else{
                        return  redirect()->to('public/AuthController/SignIn')->with('success', 'You successfully registered!');
                    }
                }else{
                    return redirect()->to('public/AuthController/SignUp')->with('fail', 'Incorrect Windekind Code');
                }
            }
        }
    }

    public function check_login(){

        $person1 = $_COOKIE['button1'];
        $userModel = new UserModel($person1);
        $table_name=$userModel->getTableName();

        if($_COOKIE['lang'] == "en"){
            $validation = $this->validate([
                'email' => [
                    'rules'  => 'required|valid_email|is_not_unique['.$table_name.'.email]',
                    'errors' => [
                        'required' => 'Email is required.',
                        'valid_email' => 'Please check the Email field. It does not appear to be valid.',
                        'is_not_unique' => 'Email is not registered in our server.',
                    ],
                ],
                'password' => [
                    'rules'  => 'required|min_length[6]|max_length[20]',
                    'errors' => [
                        'required' => 'Password is required.',
                        'min_length' => 'Password must have atleast 6 characters in length.',
                        'max_length' => 'Password must not have characters more thant 20 in length.',
                    ],
                ],
            ]);
        }
        if($_COOKIE['lang'] == "nl"){
            $validation = $this->validate([
                'email' => [
                    'rules'  => 'required|valid_email|is_not_unique['.$table_name.'.email]',
                    'errors' => [
                        'required' => 'E-mailadres is vereist',
                        'valid_email' => 'E-mailadres is niet geldig',
                        'is_not_unique' => 'E-mailadres is niet gekend',
                    ],
                ],
                'password' => [
                    'rules'  => 'required|min_length[6]|max_length[20]',
                    'errors' => [
                        'required' => 'Wachtwoord is vereist',
                        'min_length' => 'Wachtwoord moet minstens 6 karakters lang zijn',
                        'max_length' => 'Wachtwoord moet minder dan 20 karakters lang zijn',
                    ],
                ],
            ]);
        }


        if(!$validation){

            return  redirect()->to('public/AuthController/SignIn')->with('validation', $this->validator)->withInput();

        }else{

            $email = $this->request->getPost('email');
            $password = $this->request->getPost('password');

            $userModel = new UserModel($person1);
            $user_info = $userModel->where('email', $email)->first();

            $check_password = $user_info['password'];

            if( $check_password!=$password ){

                return  redirect()->to('/public/AuthController/SignIn')->with('fail', 'Incorrect password.')->withInput();

            }else{
                $session_data = ['user' => $user_info];
                $session_data_json = json_encode($session_data);

                if ($_COOKIE['button1']=='Student') {
                    $expiry = time() + (60 * 60 * 24);
                    $options = [
                        'expires' => $expiry,
                        'path' => '/',
                        'domain' => '',
                        'secure' => true,
                        'httponly' => false,
                        'SameSite' => 'Lax',
                    ];

                    setcookie('LoggedUser', $session_data_json, $options);
                    //if above does not work use below
                    //setcookie('LoggedUser', $session_data_json, $expiry,'/');
                    return redirect()->to('public/TypwindController/home');
                }

                else if ($_COOKIE['button1']=='Expert'){
                    $expiry = time() + (60 * 60 * 24);
                    $options = [
                        'expires' => $expiry,
                        'path' => '/',
                        'domain' => '',
                        'secure' => true,
                        'httponly' => false,
                        'SameSite' => 'Lax',
                    ];

                    setcookie('LoggedUser', $session_data_json, $options);

                    //if above does not work use below
                    //setcookie('LoggedUser', $session_data_json, $expiry,'/');
                    return redirect()->to('public/TypwindController/myStudents');
                }
            }
        }
    }

    public function logout(){
        $expiry=time() - (60 * 60 * 24);
        $options = [
            'expires' => $expiry,
            'path' => '/',
            'domain' => '',
            'secure' => true,
            'httponly' => false,
            'SameSite' => 'Lax',
        ];
        setcookie('LoggedUser', '', $options);
        setcookie('button1', '', $options);
        //if above does not work, use below
        //setCookie('LoggedUser','',$expiry,'/');
        //setCookie('button1','',$expiry,'/');
        //setCookie('lang','',$expiry,'/');
        if($_COOKIE['lang'] == "en")
            return  redirect()->to('/public/AuthController/login')->with('fail', 'You are now logged out.');
        if($_COOKIE['lang'] == "nl")
            return  redirect()->to('/public/AuthController/login')->with('fail', 'Je bent nu afgemeld.');
    }

    public function recoverPassword(){
        $person1 = $_COOKIE['button1'];
        $userModel = new UserModel($person1);
        $table_name = $userModel->getTableName();
        if($_COOKIE['lang'] == "en"){
            $validation = $this->validate([
                'email' => [
                    'rules'  => 'required|valid_email|is_not_unique['.$table_name.'.email]',
                    'errors' => [
                        'required' => 'Email is required.',
                        'valid_email' => 'Please check the Email field. It does not appear to be valid.',
                        'is_not_unique' => 'Email is not registered in our server.',
                    ],
                ]
            ]);
        }
        if($_COOKIE['lang'] == "en"){
            $validation = $this->validate([
                'email' => [
                    'rules'  => 'required|valid_email|is_not_unique['.$table_name.'.email]',
                    'errors' => [
                        'required' => 'Email is required.',
                        'valid_email' => 'Please check the Email field. It does not appear to be valid.',
                        'is_not_unique' => 'Email is not registered in our server.',
                    ],
                ]
            ]);
        }
        if($_COOKIE['lang'] == "nl"){
            $validation = $this->validate([
                'email' => [
                    'rules'  => 'required|valid_email|is_not_unique['.$table_name.'.email]',
                    'errors' => [
                        'required' => 'E-mail is verplicht.',
                        'valid_email' => 'E-mailadres is niet geldig.',
                        'is_not_unique' => 'E-mailadres is niet gekend.',
                    ],
                ]
            ]);
        }


        if($validation){
            $emailTo = $this->request->getPost('email');

            $token = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            $password_length = 4;
            $shuffeled_token = str_shuffle($token);
            $new_pass = substr($shuffeled_token, 0, $password_length) . "A1a";

            $subject = "Typwind: Wachtwoord Herstel | Password recovery";
            $body = "Je kan inloggen met je nieuwe wachtwoord. You can log in with your new password.". "\r\n";
            $body .= $new_pass;


            $email = \Config\Services::email();
            $email->setFrom('typwindcontroller@gmail.com', 'Typwind Support');
            $email->setTo($this->request->getPost('email'));

            $email->setSubject($subject);
            $email->setMessage($body);

            if ($email->send()){
                $affectedRows = 0;
                if($person1 == 'Expert')
                    $affectedRows = $this->database->update_password_expert($new_pass, $emailTo);
                elseif($person1 == 'Student')
                    $affectedRows = $this->database->update_password_student($new_pass, $emailTo);
                if($affectedRows > 0 ){
                    return redirect()->to('public/AuthController/SignIn')->with('success', 'The email is send succesfully!');
                }else{
                    return  redirect()->to('public/AuthController/SignIn')->with('fail', 'Something went wrong.');
                }

            }else{
                $data = $email->printDebugger(['headers']);
                print_r($data);
            }

        }




        $this->data['pageTitle'] = 'Recover Password';
        $this->data['content'] = view("auth/forgotPassword");
        return view("auth/login_template", $this->data);
    }
}