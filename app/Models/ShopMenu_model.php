<?php

namespace App\Models;

class ShopMenu_model
{
    private $shop_menu_items;

    public function __construct()
    {
        $this->shop_menu_items = array(
            array('name' => 'Shop', 'title' => 'Explore the different avatars', 'link' => 'shop', 'className' => 'active', 'image' => 'shoppingCart.png', 'id' => 'myShop'),
            array('name' => 'My Avatars', 'title' => 'Apply your avatar', 'link' => 'closet', 'className' => 'inactive', 'image' => 'shoppingPeople.png', 'id' => 'myAvatars'),
            array('name' => 'Badges', 'title' => 'View your badges', 'link' => 'badges', 'className' => 'inactive', 'image' => 'shoppingBadge.png', 'id' => 'myBadges'),
        );
    }

    private function set_active($menutitle)
    {
        foreach ($this->shop_menu_items as &$item) {
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
        return $this->shop_menu_items;
    }
}