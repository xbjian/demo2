

$(function(){

  $("#tb").click(function (){
    $("#bbs").addClass("animated bounceIn");
  });
	
	$("#tb").mouseout(function (){
		$("#bbs").removeClass("animated bounceIn");
	});

  $("#nr").click(function(){
  $("#html5").addClass("animated bounceInDown");
  $("#css").addClass("animated bounceInUp");
  });
	
	$("#nr").mouseout(function(){
	$("#html5").removeClass("animated bounceInDown");
	$("#css").removeClass("animated bounceInUp");
	});
  
  $("#xz").click(function(){
	$("#app .container").addClass("animated flipInY");
  });
	
	$("#xz").mouseout(function(){
	$("#app .container").removeClass("animated flipInY");
	});
  
  $("#lx").click(function(){
  $("#contact .container").addClass("animated flipInX"); 
  });
	
	
	$("#lx").mouseout(function(){
	$("#contact .container").removeClass("animated flipInX"); 
	});
});








// 登录验证

// function focusdgname(){
// 	document.getElementById("dgname").value="admin";
// 	
// }


// function focusdgpwd(){
// 	document.getElementById("dgpwd").value="123456";
// 	
// }



function blurdgname(){
	var dgname=document.getElementById("dgname").value;
	if(dgname=="admin"){
		return true;
  }else if(dgname=="user"){
	  return true;
  }else{
		return false;
	}
}

function blurdgpwd(){
	var dgpwd=document.getElementById("dgpwd").value;
	if(dgpwd=="123456"){
		return true;
	}else{
		
		return false;
		
	}
}


function dgform(){
	if(blurdgname()==false||blurdgpwd()==false){
		
		alert("用户名或密码错误，请重新登录");
		return false;
		
	}else{
		return true;
	}

}





// form提交验证

function focusname(){
	var nametip=document.getElementById("nametip");
	nametip.innerHTML="请填写您的名字";	
	nametip.className="tips1";
}
function blurname(){
	var name=document.getElementById("name").value;
	var nametip=document.getElementById("nametip");
	if(name==""){
		nametip.innerHTML="名字不能为空";
		nametip.className="tips2";
		return false;
	}else if(name.length<2){
		nametip.innerHTML="名称不能少于2个字符";
		nametip.className="tips2";
		return false;
	}else{
		nametip.innerHTML="名字格式正确";
		nametip.className="tips3";
		return true;
	}
}





function focusemail(){
	var emailtip=document.getElementById("emailtip");
	 emailtip.innerHTML="填写您的邮箱帐号";
	 emailtip.className="tips1";
}
function bluremail(){
	var email=document.getElementById("email").value;
	var emailtip=document.getElementById("emailtip");
	if(email==""){
		emailtip.innerHTML="邮箱地址不能为空";
		emailtip.className="tips2";
		return false;
		}
		else if(email.indexOf("@")==-1){
			emailtip.innerHTML="email邮箱格式错误";
			emailtip.className="tips2";
			return false;
		}else{
			emailtip.innerHTML="email邮箱格式正确";
			emailtip.className="tips3";
			return true;
		}
}




function focuspsd(){
	var psdtip=document.getElementById("psdtip");
	psdtip.innerHTML="请输入密码";
	psdtip.className="tips1";
}
function blurpsd(){
	var psd=document.getElementById("psd").value;
	var psdtip=document.getElementById("psdtip");
	if(psd==""){
		psdtip.innerHTML="密码不能为空";
		psdtip.className="tips2";
		return false;
	}else if(psd.length<6){
		psdtip.innerHTML="密码不能少于6个字符"
		psdtip.className="tips2";
		return false;
	}else{
		psdtip.innerHTML="密码格式正确";
		psdtip.className="tips3";
		return true;
	}
}



function focusrepsd(){
	var repsdtip=document.getElementById("repsdtip");
	repsdtip.innerHTML="请确认密码";
	repsdtip.className="tips1"
}

function blurrepsd(){
	var psd=document.getElementById("psd").value;
	var repsd=document.getElementById("repsd").value;
	var repsdtip=document.getElementById("repsdtip");
	if(repsd!=psd){
		repsdtip.innerHTML="两次输入密码不一样";
		repsdtip.className="tips2";
		return false;
	}else if(repsd==""){
		repsdtip.innerHTML="密码不能为空";
		repsdtip.className="tips2";
		return false;
	}else{
		repsdtip.innerHTML="密码一致"
		repsdtip.className="tips3";
		return true;
	}

}




function checkform(){
	if(blurname()==false||bluremail()==false||blurpsd()==false||blurrepsd()==false){
		return false;
	}else{
		return true;
	}

}












