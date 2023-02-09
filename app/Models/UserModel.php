<?php

namespace App\Models;

use CodeIgniter\Database\ConnectionInterface;
use CodeIgniter\Model;
use CodeIgniter\Validation\ValidationInterface;

class UserModel extends Model
{
    protected $person1;

    protected $table ;
    protected $primaryKey ;
    protected $allowedFields;
    public function __construct($person)
    {
        parent::__construct();
        $this->person1=$person;

        if($this->person1=='Student'){
            $this->table = 'student_accounts';
            $this->primaryKey = 'studentID';
            $this->allowedFields = ['email', 'password', 'firstName', 'lastName','handSetting'];
        }else if($this->person1=="Expert"){
            $this->table = 'expert_accounts';
            $this->primaryKey = 'expertID';
            $this->allowedFields = ['email', 'password', 'firstName', 'lastName'];
        }

    }

    public function getTableName(){
        return $this->table;
    }

}