$(function(){
    // -----------点击全选  选中所有复选框----------------------------------------------
    $(".selall").click(function(){
        let bool=$(this).prop("checked")
        $(".singlechk,.selall").prop("checked",bool)
        totalPrice();
        totalNum();
    })

    // ----------点击复选框控制全选-------------------------------------------
    $("table .singlechk").click(function(){
        let singleNum=$("table .singlechk:checked").length;   //选中复选框的个数
        let singleAll=$("table .singlechk").length;           //所有的复选框个数

        if(singleNum===singleAll){                           
            $(".selall").prop("checked",true);                //如果选中的个数等于所有个数那么就全选
        }else{
            $(".selall").prop("checked",false);               //否则选中的个数不等于所有个数那么就不全选
            
        }
        totalPrice();
        totalNum();
    })

// 数量的增减
//-------------数量自加----------------------------------------------------
$("#shopcartarea table tbody .addbtn").click(function(){    //加号的点击事件
    let num=$(this).siblings(".count").val();               //找到当前事件的兄弟级的value的值
    ++num;                                                  //value值自增1
    $(this).siblings(".count").val(num); //再把增加的value的值赋给val
     // 计算小计:  数量 * 单价
     singleTotalPrice(this, num);
     totalPrice();
     totalNum()               
})
//-------------删除单个商品----------------------------------------------------------
$(".delbtn").click(function(){
    $(this).parent().parent().remove();
    //重新计算总价
    totalPrice();
    totalNum()
})
//-------------删除选中的商品----------------------------------------------------------
$(".delallbtn").click(function(){
    $("table .singlechk:checked").each(function(index,dom){
        $(this).parent().parent().remove();
    })
     //重新计算总价
     totalPrice();
     totalNum();
})
//------------改变数量的事件----------------------------------------------------------
$("#shopcartarea table tbody .count").keyup(function(){
    let num =$(this).val();
    if(isNaN(num)){
        $(this).val(1);
        num=1;
    }
    if(num>200){
        $(this).val(200);
        num=200;
    }
    singleTotalPrice(this, num)
    totalPrice();
    totalNum();
})

//--------------数量自减----------------------------------------------
$("#shopcartarea table tbody .reducebtn").click(function(){
    let num=$(this).siblings(".count").val();
    if(num>1){   //自减不小于1
        --num;
    }
        $(this).siblings(".count").val(num);
        // 计算小计:  数量 * 单价
        singleTotalPrice(this, num)
        totalPrice();
        totalNum();
})
// --------------小计计算----------------------------------------------
function singleTotalPrice(obj, num) {
    //单价
    let singleprice = $(obj).parent().siblings(".singleprice").html()
    //小计
    let singleTotalPrice = singleprice * num;//隐式类型转换
    //赋回页面
    $(obj).parent().siblings(".singleTotalPrice").html(singleTotalPrice.toFixed(2));
    
}


// --------------计算总价---------------------------------------
function totalPrice(){
    let sum=0;
    $("table .singlechk:checked").each(function(index,dom){
    let singleTotalPrice=$(dom).parent().siblings(".singleTotalPrice").html();
    sum+=parseFloat(singleTotalPrice);
    })
    //遍历结束得到总价赋给页面
    $(".totalprice").html(sum.toFixed(2))
}

// --------------计算总数量---------------------------------------
function totalNum(){
    let num=0;
    $("table .singlechk:checked").each(function(index,dom){
        let count=$(dom).parent().siblings().find(".count").val();
        num+=parseInt(count);
    })
    $(".totalnum").html(num)
}


})



