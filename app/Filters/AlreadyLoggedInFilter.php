<?php

namespace App\Filters;

use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use App\Models\UserModel;

class AlreadyLoggedInFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        $AuthPages = '/^((?!AuthController\/logout).)*$/';
        $AuthPagesMatch=(preg_match($AuthPages, $request->uri->getPath()));
        $LoginCookie=isset($_COOKIE['LoggedUser']);

        if ( ( ($LoginCookie) && ( isset($_COOKIE['button1']) && !empty($_COOKIE['button1']) ) ) && ($AuthPagesMatch) )
        {
            if ($_COOKIE['button1'] == 'Expert')
            {
                return redirect()->to('public/TypwindController/myStudents');
            }

            if($_COOKIE['button1'] == 'Student')
            {
                return redirect()->to('public/TypwindController/home');
            }

        }

        $AuthPages = '/AuthController\/(SignIn|SignUp|check_login|create_login|recoverPassword)/';
        $AuthPagesMatch=(preg_match($AuthPages, $request->uri->getPath()));
        $loginUrl = '/public/AuthController/login';

        if ( ( !isset($_COOKIE['button1']) || !$_COOKIE['button1'] ) && ($AuthPagesMatch) )
        {
                return redirect()->to($loginUrl);
        }

        return true;

    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // Do something here
    }

}
