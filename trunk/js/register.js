// -----------登陆界面交互----------------------------
$(function(){
    $("#registerlg .bxbox .login-interface ul li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        let index=$(this).index();
        // console.log(index, $("#registerlg .bxbox .login-interface .con").eq(0)); 
        // console.log(index, $("#registerlg .bxbox .login-interface .con").eq(1));
        
        $("#registerlg .bxbox .login-interface .con").eq(index).addClass("cur").siblings(".con").removeClass("cur")

    })





})