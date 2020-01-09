function Login() {
	var name = $('#entry_name').val()
	var password = $('#entry_password').val()
	if (name == ''){
		$('#prompt').html('请输入用户名')
		return
	}
	if (name === 'YKX') {
        if (password === '12345') {
			$('#prompt').html('登陆成功')
		} else if(password === '') {
			$('#prompt').html('请输入密码')
		} else {
			$('#prompt').html('请输入正确的用户名及密码')
		}
	} else if(name === 'server') {
        if (password === 'server') {
            $('#prompt').html('')
            window.location.href = './server'
        } else if(password === '') {
            $('#prompt').html('请输入密码')
        } else {
            $('#prompt').html('请输入正确的用户名及密码')
        }
    } else {
		if (password === '') {
			$('#prompt').html('请输入密码')
		} else {
			$('#prompt').html('请输入正确的用户名及密码')
		}
	}
}