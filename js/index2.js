$(function(){
	// // 渲染面包屑的二级
	// showSecondNav();
	// // 点击切换三级页面显示
	// $(".item-wrapper .item").click(switchPage);
	// // 点击渲染面包屑的三级
	$(".child-nav li").click(showThreeNav);
    $(".item-wrapper").mouseover(function(){
        var visited = $(this).find(".visited").length;
        if(!visited){
            $(this).find(".item").removeClass("left");
            $(this).find(".item").addClass("over");
        }
        $(this).find(".child-nav").show();
    }).mouseout(function(){
        var visited = $(this).find(".visited").length;
        if(!visited){
            // $(this).find(".item").addClass("visited");
            $(this).find(".item").removeClass("over");
            $(this).find(".item").addClass("left");
        }
        $(this).find(".child-nav").hide();
    })

    // 内容的高度
    var $main = $("#main");
    var height = document.body.offsetHeight-170;
    $main.height(height);	
})

// 点击切换三级页面显示级渲染面包屑的二级
// function switchPage(event){
//     $(".item-wrapper .item").removeClass("visited");
//     $(this).addClass("visited");
//     $(this).removeClass("over");
//     // 点击显示三级菜单和隐藏
//     $(".child-nav").hide();
//     if($(this).next(".child-nav").css("display") == "block"){
//     	$(this).next(".child-nav").hide();
//     	// console.log(12)
//     }else if($(this).next(".child-nav").css("display") == "none"){
//     	$(this).next(".child-nav").show();
//     // 	console.log(123)
//     } 
// }

// 面包屑二级渲染
function showSecondNav(){
    var breadText = $('.item-wrapper .visited span').text();
    var $breadSecond = $("#bread-second");
    $breadSecond.empty();
    $("<img>").attr("src","./img/面包屑2.png").appendTo($breadSecond);
    $("<span>").addClass("name").text(breadText).appendTo($breadSecond);
    // $("#bread-three").empty();
}

// // 面包屑三级渲染
function showThreeNav(){
    // 点击之后隐藏
	$(".child-nav").hide();
    // 点击之后访问的导航设为当前
    $(".item").removeClass("visited");
    $(".item").removeClass("left");
    $(".item").removeClass("over");
    $(this).parent().prevAll('.item').addClass("visited");

    showSecondNav();
    var breadText = $(this).text();
    var $breadThree = $("#bread-three");
    $breadThree.empty();
    $("<img>").attr("src","./img/面包屑2.png").appendTo($breadThree);
    $("<span>").addClass("name").text(breadText).appendTo($breadThree);
    console.log(breadText)

    var url = $(this).attr("data-url");
    $("#main").attr("src",url);
    showSecondNav();
}