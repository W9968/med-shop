<?php

namespace App\Helpers;


class Helper{
    
public static function array_map_init($input)
{
    if(isset($input) && is_string($input)){
        return array_map('intval',explode(',',$input));
    }
    return [];
}
}