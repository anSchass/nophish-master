if(document.getElementById("login-page")!=null){
	var s = document.createElement('div');
	s.className = "phish-login"
	s.innerHTML = '<div class="phish-alert">Hello, NoPhish has detected that this could be a fake Jagex login page. Please double check the URL before entering in any info.</div>'
	s.onload = function() {
		this.parentNode.removeChild(this);
	};
	document.body.insertBefore(s, document.body.childNodes[0]);
}
else if(document.getElementById("forums--threadview")!=null){
	var s = document.createElement('div');
	s.className = "phish"
	s.innerHTML = '<div class="phish-alert">Hello, NoPhish has detected that this could be a fake Jagex page. Please double check the URL before entering in any info.</div>'
	s.onload = function() {
		this.parentNode.removeChild(this);
	};
	document.body.insertBefore(s, document.body.childNodes[0]);
}