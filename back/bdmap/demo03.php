<?php
$contents = file_get_contents('./province.json');

$province=json_decode($contents,true);


p($province[sha1('重庆市')]);

function p($data){
	echo '<pre>';
	var_dump($data);
	die;
}