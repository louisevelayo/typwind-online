<?php
namespace App\Models;
class Menu_model_expert
{
    private $menu_items;

    public function __construct()
    {
        $this->menu_items = array(
            array('name' => 'My_Students', 'title' => 'Go To MyStudents Overview', 'link' => 'myStudents', 'className' => 'active'),
            array('name' => 'Lessons', 'title' => 'Go To the Lessons', 'link' => 'lessonsExpert', 'className' => 'inactive'),
            array('name' => 'Exercises', 'title' => 'Go To Exercises', 'link' => 'exercisesExpert', 'className' => 'inactive'),
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

    public function get_menuitems($menutitle = 'My_Students')
    {
        $this->set_active($menutitle);
        return $this->menu_items;
    }


}