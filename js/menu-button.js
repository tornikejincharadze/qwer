$(document).ready(function(){
    $(".nav-open").click(function(){
        $(".owl-prev").hide();
        $(".owl-next").hide();
        $(".item ul li.t-li , .item ul li.h-li").hide();
        $(".item img").css("opacity","0.2");
        $(".logo .cls-1").css("fill","#FF0000");
        $(".nav-open").hide();
        $(".nav-exit").show();
        $(".navigation-bar").css("display","inline-block");
    });
});
$(document).ready(function(){
    $(".nav-exit").click(function(){
        $(".owl-prev").show();
        $(".owl-next").show();
        $(".item ul li.t-li , .item ul li.h-li").show();
        $(".item img").css("opacity","1");
        $(".logo .cls-1").css("fill","#FFFFFF");
        $(".nav-open").show();
        $(".nav-exit").hide();
        $(".navigation-bar").hide();
    });
});
$(document).ready(function (){
    $("#servicesB").click(function (){
        $('html, body').animate({
            scrollTop: $("#services").offset().top
        }, 500);
        $(".owl-prev").show();
        $(".owl-next").show();
        $(".item ul li.t-li , .item ul li.h-li").show();
        $(".item img").css("opacity","1");
        $(".logo .cls-1").css("fill","#FFFFFF");
        $(".nav-open").show();
        $(".nav-exit").hide();
        $(".navigation-bar").hide();
        $("#title").html("Services | სერვისები");
    });
});
$(document).ready(function (){
    $("#homeB").click(function (){
        $('html, body').animate({
             scrollTop: $("#home").offset().top
        }, 500);
        $(".owl-prev").show();
        $(".owl-next").show();
        $(".item ul li.t-li , .item ul li.h-li").show();
        $(".item img").css("opacity","1");
        $(".logo .cls-1").css("fill","#FFFFFF");
        $(".nav-open").show();
        $(".nav-exit").hide();
        $(".navigation-bar").hide();
        $("#title").html("Home | მთავარი");
    });
});
$(document).ready(function (){
    $("#contactB").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 500);
        $(".owl-prev").show();
        $(".owl-next").show();
        $(".item ul li.t-li , .item ul li.h-li").show();
        $(".item img").css("opacity","1");
        $(".logo .cls-1").css("fill","#FFFFFF");
        $(".nav-open").show();
        $(".nav-exit").hide();
        $(".navigation-bar").hide();
        $("#title").html("Contact | კონტაქტი");
    });
});