

function getDirectionPanelHtml () {
    var directionPanel = $(".direction-panel");

    // Get DOM element from jQuery because that's what Google Maps understands
    return directionPanel[0];
}


function createElement() {
    var loginControlDiv = $(".map-header");

    return loginControlDiv[0];
}



$(document).on("ready", function () {
    $(".js-center").on("click", function () {
        //alert("hello")
        map.setCenter( from.lat,from.lng);
    });
   // var btn = $(event.currentTarget);
})


var from = localStorage.getItem("startpoint");
var to = localStorage.getItem("endpoint");
var  mode = localStorage.getItem("mode");
var radius = localStorage.getItem("radius");
//var selected = localStorage.getItem("wish_do_list").split(",");

$(document).on("ready",function() {
    $(".from-panel").val(from);
    $(".to-panel").val(to);
    $("#mode-panel").val(mode);
    $(".radius-panel").val(radius);

     //$('body').attr('style', "background-image: url('/assets/road-mountains.jpeg');");

    $("#map-button").on("click", function(event) {
        var from = $(".from-panel").val();
        var to = $(".to-panel").val();

        if (!from || !to)  {
            alert("There are empty fields-directions!");
            return;
        }

        var new_selected = $("#check-panel").dropdownCheckbox("checked");
        var selectedLabels = new_selected.map(function(option){
            return option.label.toLowerCase();
        });

        localStorage.setItem("wish_do_list",selectedLabels.join(","));


        var radius = $(".radius-panel").val();
        localStorage.setItem("startpoint", from);
        localStorage.setItem("endpoint", to);
        localStorage.setItem("radius", radius);
        localStorage.setItem("wish_do_list",selectedLabels.join(","));

        var mode = $("#mode-panel").val();
        localStorage.setItem("mode", mode);

        window.location.reload(true);

    });


    $(".geocomplete").geocomplete();
});
