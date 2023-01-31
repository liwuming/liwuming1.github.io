<?php
$contents_one = file_get_contents('./1.html');
$contents_two = file_get_contents('./2.html');

$reg1 = '#<a\s+href="([^<>"]+)">([^<>]+)<br\s+\/><\/a>#';
$reg2='/\s*<tr class="citytr">\s*<td>\s*<a href="[^<>]+">\s*(\d+)\s*<\/a>\s*<\/td>\s*<td>\s*<a href="[^<>]+">\s*([^<>]+)\s*<\/a>\s*<\/td>\s*<\/tr>\s*/si';


$url = 'http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2022/index.html';
$domain=dirname($url).'/';
preg_match_all($reg1,$contents_one,$result_one);
$result=array();
if(!empty($result_one)){
	foreach($result_one[1] as $key_one=>$path){
		$response = getHTML($domain.$path);
		if($response['code']==200){
			preg_match_all($reg2,$response['data'],$result_two);
			$citys = [];
			$province_code=null;
			foreach($result_two[1] as $key_two=>$adcode){
				if(empty($province_code)){
					$province_code = substr($adcode,0,3).'000';
				}
				$citys[sha1($result_two[2][$key_two])] = array('city'=>$result_two[2][$key_two],'adcode'=>substr($adcode,0,6));
			}
			$result[sha1($result_one[2][$key_one])] = array('name'=>$result_one[2][$key_one],'adcode'=>$province_code,'citys'=>$citys);
			
		}
	}
}

file_put_contents('province.json', json_encode($result));
p($result);

preg_match_all($reg1,$contents,$result);
$url = 'http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2022/index.html';

$domain=dirname($url);
echo $domain;
if(!empty($result)){

	foreach($result[1] as $key=>$path){
		$response = getHTML($domain.'/'.$path);
		if($response['code']==200){

		}
	}
}

function p($data){
	echo '<pre>';
	var_dump($data);
	die;
}



function getHTML($url){
	$header = [
		'Host: www.stats.gov.cn',
		'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
		'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
		'Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
		'Connection: keep-alive',
		'Cookie: wzws_sessionid=gDI0MDg6ODIyMDoxOTMwOjg3YTA6Mzg1OTo4YjBlOmRhMzE6NTI3NqBj2IFFgWMxOGZkOII3ZWQyZDA=; SF_cookie_1=37059734',
		'Upgrade-Insecure-Requests: 1',
		'If-Modified-Since: Fri, 30 Dec 2022 04:25:05 GMT',
		'If-None-Match: "173b-5f103fc618a40-gzip"'
	];
	// 百度蜘蛛
	$ips = [
		'220.181.108.95',//这个是百度抓取首页的公用IP,如是220.181.108段的话，根本来说你的网站会每天隔夜快照 
		'220.181.108.92',//同上98%抓取首页，大概还会抓取其他（不是指内页）220.181段属于权重IP段此段爬过的文章或首页根本24小时放出来。
		'220.181.108.91',//属于综合的，重要抓取首页和内页或其他，属于权重IP段，爬过的文章或首页根本24小时放出来。
		'220.181.108.75',//重点抓取更新文章的内页到达90%，8%抓取首页，2%其他。权重IP段，爬过的文章或首页根本24小时放出来。
		'220.181.108.86',//公用抓取首页IP权重段，普通前往代码是30400代表未更新。
		'220.181.108.89',//公用抓取首页IP权重段，普通前往代码是30400代表未更新。
		'220.181.108.94',//公用抓取首页IP权重段，普通前往代码是30400代表未更新。
		'220.181.108.97',//公用抓取首页IP权重段，普通前往代码是30400代表未更新。
		'220.181.108.80',//公用抓取首页IP权重段，普通前往代码是30400代表未更新。
		'220.181.108.77',//公用抓首页IP权重段，普通前往代码是30400代表未更新。
		'220.181.108.83',//公用抓取首页IP权重段，普通前往代码是30400代表未更新。
		'60.172.229.61',
		'61.129.45.72',
	];
	$ip = array_rand($ips);
	
	
	$curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_HTTPHEADER,$header);

	curl_setopt($curl, CURLOPT_HTTPHEADER,$header);
	curl_setopt($curl, CURLOPT_REFERER, "http://www.stats.gov.cn");   //构造来路 
	//伪造百度蜘蛛IP  

    curl_setopt($curl,CURLOPT_HTTPHEADER,array('X-FORWARDED-FOR:'.$ip.'','CLIENT-IP:'.$ip.'')); 
    //伪造百度蜘蛛头部
    curl_setopt($curl,CURLOPT_USERAGENT,"Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)");

    curl_setopt($curl,CURLOPT_ENCODING,'gzip');
    curl_setopt($curl,CURLOPT_RETURNTRANSFER,1);	//数据存到成字符串吧，别给我直接输出到屏幕了
    curl_setopt($curl,CURLOPT_TIMEOUT,100);          	//单位 秒，也可以使用
    curl_setopt($curl,CURLOPT_FOLLOWLOCATION,1);
    curl_setopt($curl,CURLOPT_AUTOREFERER,1);
    curl_setopt($curl,CURLOPT_FRESH_CONNECT,1);
	curl_setopt($curl,CURLOPT_HEADER,0);
    curl_setopt($curl, CURLOPT_NOBODY, 0);
	curl_setopt($curl,CURLOPT_MAXREDIRS,3);
	curl_setopt($curl,CURLOPT_FOLLOWLOCATION,true);
    curl_setopt($curl,CURLOPT_CONNECTTIMEOUT,20);
	
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    
	//执行并获取HTML文档内容
	$data = curl_exec($curl);
	//curl是否出错
	if (empty(curl_errno($curl))) {
		$code = curl_getinfo($curl,CURLINFO_HTTP_CODE);
		//$encode = mb_detect_encoding($data, array('ASCII','UTF-8','GB2312','GBK','BIG5')); 
		/*if($encode != 'UTF-8'){
			$data = mb_convert_encoding($data, 'UTF-8',$encode);
		}*/
		$result = ['code'=>$code,'data'=>$data];
	}else{
		$msg = curl_error($curl);
		$result = ['code'=>100,'url'=>$url,'msg'=>$msg]; 
	}
    curl_close($curl); //用完记得关掉他
    return $result;
    return true;	
}