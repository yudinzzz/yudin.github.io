//首屏占满屏幕，获取height属性   by:yudin

function fullofscreen(){
	var total = window.innerHeight;
/*|| document.documentElement.clientHeight
|| document.body.clientHeight*/
	document.getElementById('welcome').style.height=total+"px";	
}
fullofscreen();
