
$(function() {
	
	var magnifierConfig = {
		magnifier : "#magnifier1",//最外层的大容器
		width : 370,//承载容器宽
		height : 370,//承载容器高
		moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
		zoom : 5//缩放比例
	};

	var _magnifier = magnifier(magnifierConfig);

	/*magnifier的内置函数调用*/
	/*
		//设置magnifier函数的index属性
		_magnifier.setIndex(1);

		//重新载入主图,根据magnifier函数的index属性
		_magnifier.eqImg();
	*/


	// 种类选择

	$("#ProductDetails .detailsright .kind div").click(function(){
		$(this).addClass("bgg").siblings().removeClass("bgg");
	})
	// 数量事件
	// $("#ProductDetails .detailsright .quantity .quantity2 .btn1").click(function(){
	// 	let index=$(this).index(i++);
	// 	$("#ProductDetails .detailsright .quantity .quantity1 span").index(i++);
	// })




	//商品介绍评价选项卡
	$("#Watchandsee .seeright .introduce li").click(function(){
		$(this).addClass("lis2").siblings().removeClass("lis2");	
		let index=$(this).index();
		$("#Watchandsee .seeright .con").eq(index).addClass("cur").siblings().removeClass("cur");
	})

});


