
// jQuery‚ðŽg‚¤‚Æ‚«‚Ì‚¨‚Ü‚¶‚È‚¢
//http://creator.cotapon.org/articles/javascript/jquery/jquery%E3%82%92%E4%BD%BF%E3%81%86%E3%81%A8%E3%81%8D%E3%81%AE%E6%9C%80%E5%88%9D%E3%81%AE%E3%81%8A%E3%81%BE%E3%81%98%E3%81%AA%E3%81%84

$(function(){
    $("#container").css("width","200px");
    //$("div").css("background-color","red");
    $(".sample").css("font-weight","bold");
    $("#container p").css("color","white");

    $(".block").css("background", "#ddd");


    //   var written = document.jsform.txtb.value;
    var written = $("#folder").attr("value"); //-- same as the above --

    $(document.body).append(written);
 
    //$(document.body).append($
    //			    ("<img src='imagesample.png' width='500'>"));

    //-- a sample of an event function quoted from:
    // http://webdesignrecipes.com/jquery-beginners-guide-for-web-design/
    $("#hello").hover(function()
		      {
			  $(this).css("color","red");
		      },
		      function()
		      {
			  $(this).css("color","black");
		      }
		     );
 
    //-- event handling for onChange of a select element -- 
    //   http://elearn.jp/jmemo/jquery/memo-77.html
    $('#sel1').change( function () {
	val1   = $(this).val();
	index  = $(this).index();
	var a = $("#type_php").attr("type");

	//alert(val1);
	$(document.body).append(index);
	$(document.body).append(val1);
	
	$("#code").append(a);

    } );
    
})


