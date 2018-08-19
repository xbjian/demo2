window.onload=function(){
	banner();
	downtime();
}


var banner=function(){

	var banner=document.querySelector('.jd_banner');
	var width=banner.offsetWidth;
	var imagebox=banner.querySelector('ul:first-child');
	var pointbox=banner.querySelector('ul:last-child');
	var points=pointbox.querySelectorAll('li');
	console.log(points);
	var index=1;
	
	var timer=setInterval(function(){
		index ++;
		imagebox.style.transition='all 0.5s';
		imagebox.style.transform='translateX('+(-index*width)+'px)';
	},1500);
	
	
	
	imagebox.addEventListener('transitionend',function(){
		if(index >= 9){
			index=1;
			imagebox.style.transition='none';
			imagebox.style.transform='translateX('+(-index*width)+'px)';
		}
	});
	
	
	
	
	
	
};



var downtime=function(){
	var time=60*60*11;
	var mstime=document.querySelector('.mstime');
	var spans=mstime.querySelectorAll('span');
	
	var timer=setInterval(function(){
		time --;
		var h=Math.floor(time/3600);	
	    var m=Math.floor(time%3600/60);
		var s=time%60;
		
		spans[0].innerHTML=Math.floor(h/10);
		spans[1].innerHTML=h%10;
		
		spans[3].innerHTML=Math.floor(m/10);
		spans[4].innerHTML=m%10;
		
		spans[6].innerHTML=Math.floor(s/10);
		spans[7].innerHTML=s%10;
		
		if(time <=0){
			clearInterval(timer);
		}
		
		
	},1000);
}