
// jQuery‚ðŽg‚¤‚Æ‚«‚Ì‚¨‚Ü‚¶‚È‚¢
//http://creator.cotapon.org/articles/javascript/jquery/jquery%E3%82%92%E4%BD%BF%E3%81%86%E3%81%A8%E3%81%8D%E3%81%AE%E6%9C%80%E5%88%9D%E3%81%AE%E3%81%8A%E3%81%BE%E3%81%98%E3%81%AA%E3%81%84

$(function(){
    $("#container").css("width","200px");
    //$("div").css("background-color","red");
    $(".sample").css("font-weight","bold");
    $("#container p").css("color","white");

    $(".block").css("background", "#ddd");

    var a = $("#type_php").attr("type");
    //   var written = document.jsform.txtb.value;
    var written = $("#folder").attr("value"); //-- same as the above --

    $(document.body).append(written);
    $("#code").append(a);

    //$(document.body).append($
    //			    ("<img src='imagesample.png' width='500'>"));
 
    
})

