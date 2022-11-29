$(function () { 
    console.log("hello world");

    /*$('#bike').okzoom({
        width: 200,
        height: 200,
        backgroundRepeat: "repeat"
    });*/

    $('#bike').click(function() {
        //$('.breakout_info').css("visibility", "visible");
        $('#rei_info').css("visibility", "visible");
    });

    $('#electroland').click(function() {
        //$('.breakout_info').css("visibility", "visible");
        $('#electroland_info').css("visibility", "visible");
    });

    $('#ally').click(function() {
        //$('.breakout_info').css("visibility", "visible");
        $('#ally_info').css("visibility", "visible");
    });

    $('.close_icon').click(function(){
        $('.breakout_info').css("visibility", "hidden");
        $('#rei_info').css("visibility", "hidden");
        $('#electroland_info').css("visibility", "hidden");
        $('#ally_info').css("visibility", "hidden");
    });
});