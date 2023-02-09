<?php
namespace App\Models;
class Menu_model
{
    private $menu_items;

    public function __construct()
    {
        $this->menu_items = array(
            array('name' => 'Home', 'title' => 'Go to Home', 'link' => 'home', 'className' => 'active'),
            array('name' => 'Lessons', 'title' => 'Study the lessons', 'link' => 'lessons_overview', 'className' => 'inactive'),
            array('name' => 'Exercises', 'title' => 'Practice more with exercises', 'link' => 'exercises_overview', 'className' => 'inactive'),
            array('name' => 'Games', 'title' => 'Practice the fun way with games', 'link' => 'games', 'className' => 'inactive'),
        );
    }

    private function set_active($menutitle)
    {
        foreach ($this->menu_items as &$item) {
            if (strcasecmp($menutitle, $item['name']) == 0) {
                $item['className'] = 'active';
            } else {
                $item['className'] = 'inactive';
            }
        }
    }

    public function get_menuitems($menutitle = 'Home')
    {
        $this->set_active($menutitle);
        return $this->menu_items;
    }


}