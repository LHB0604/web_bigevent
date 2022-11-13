//注意:每次调用 $.get 或 $.post 或 $.ajax()时候
//会先调用这个函数 ajaxPrefilter
//在这函数中能拿到我们给ajax提供的配置对象

$.ajaxPrefilter(function(options){
    //再发起真正的ajax之前，统一拼接的根路径
    options.url = 'http://www.liulongbin.top:3007/' + options.url
    // console.log(options.url);

})