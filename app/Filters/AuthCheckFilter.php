<?php

namespace App\Filters;

use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;

class AuthCheckFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {

        $loginUrl = '/public/AuthController/login';
        $TypwindPages = '/TypwindController\/[a-zA-Z0-9-_]+$/';

        $loginPageRequested = $request->uri->getPath() === $loginUrl;
        $TypwindPageRequested = preg_match($TypwindPages, $request->uri->getPath());
        $LoginCookie=isset($_COOKIE['LoggedUser']);
        if ( (!$LoginCookie) && (!$loginPageRequested && $TypwindPageRequested) )
        {
            return redirect()->to($loginUrl);
        }

        $ExpertPages = '/TypwindController\/(myStudents|lessonsExpert|exercisesExpert|edit_expert_profile)/';
        $StudentPages =  '/TypwindController\/(home|lessons_overview|exercises_overview|games|exercise_typing|reward_page|shop|closet|badges)/';
        $ExpertPagesRequested = preg_match($ExpertPages, $request->uri->getPath());
        $StudentPagesRequested = preg_match($StudentPages, $request->uri->getPath());

        if(( isset($_COOKIE['LoggedUser']) && isset($_COOKIE['button1']) ) )
        {

            if(($_COOKIE['button1'] == 'Student') && $ExpertPagesRequested)
            {
                return redirect()->to('public/TypwindController/home');
            }
            if(($_COOKIE['button1'] == 'Expert') && $StudentPagesRequested)
            {
                return redirect()->to('public/TypwindController/myStudents');
            }

            $RewardPage = '/TypwindController\/reward_page/';
            $RewardPageRequested=(preg_match($RewardPage, $request->uri->getPath()));
            if((!isset($_COOKIE['loadForTyping']))  &&  $RewardPageRequested)
            {
                return redirect()->to('public/TypwindController/home');
            }

        }
        return true;

    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {

    }

}
