
    $(document).ready(function(){
$("#div1").hover(function(){
$("#drop1").show();
}, function(){
    $("#drop1").mouseover(function(){
        $("#drop1").show();
    })
    $("#drop1").mouseout(function(){
        $("#drop1").hide();
    })
});

$("#div2").hover(function(){
$("#drop2").show();
}, function(){
    $("#drop2").mouseover(function(){
        $("#drop2").show();
    })
    $("#drop2").mouseout(function(){
        $("#drop2").hide();
    })
});

$("#video").css("display", "none"); //HIDE THE VIDEO INITIALLY
    $(".thumbnail").hover(function () 
            {
            $("#video").css("display", "block"); //SHOW THE VIDEO ON HOVER
                $(this).children("video")[0].play();
            }, 

    function () {
        var el = $(this).children("video")[0];
        el.pause();
        el.currentTime = 0;
});
});
jQuery( document ).ready(function( $ ) {
dialog = $('#dialogContent').dialog({
    closeOnEscape: false,
    modal: true,
    autoOpen: false,
    title: 'hover on Vedio to play', 
    hide: { effect: 'drop', duration: 250 },
    show: { effect: 'fade', duration: 500 },
    resizable: false, draggable: false,
    width: 'auto', dialogClass: 'fixed-dialog',
    open: function (event, ui) {
      $('.ui-widget-overlay').bind('click', function () {
        $("#dialogContent").dialog('close');
      });
      $(".ui-dialog-titlebar-close", ui.dialog || ui).hide();
     }
});
$( "#opener" ).on( "click", function() {
  dialog.dialog( "open" );
});
});

