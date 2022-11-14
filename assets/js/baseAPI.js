//注意:每次调用 $.get 或 $.post 或 $.ajax()时候
//会先调用这个函数 ajaxPrefilter
//在这函数中能拿到我们给ajax提供的配置对象

$.ajaxPrefilter(function(options){
    //再发起真正的ajax之前，统一拼接的根路径
    options.url = 'http://www.liulongbin.top:3007' + options.url
    // console.log(options.url);
    //统一为有权限的，设置headers请出去头
    if(options.url.indexOf('/my') !== -1){
        options.headers={
            Authorization: localStorage.getItem('token') || ''
        }
    }
    //全局统一挂载
    options.complete = function(res){
        if(res.responseJSON.status === 1 && res.responseJSON.message ==='身份认证失败！')
        {
            //强制清空token
            localStorage.removeItem('token')
            //2.强制跳转登录页面
            location.href = '/login.html'
        }
    }
})