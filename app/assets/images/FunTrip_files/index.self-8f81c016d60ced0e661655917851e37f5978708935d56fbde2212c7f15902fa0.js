// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on ("ready",function() {
   // $('body').attr('style', "background-image: url('/assets/road-mountains.jpeg');");

    $(".alert-success").fadeTo(2000, 500).slideUp(500, function(){
        $(".alert-success").alert('close');
    });


	$("#index-button").on("click", function(event) {

		var from = $(".start-point").val();
		var to = $(".end-point").val();

        if (!from || !to)  {
            alert("There are empty fields-index!");
            return;
        }

		var radius = $("#radius-selector").val();
		localStorage.setItem("startpoint", from);
		localStorage.setItem("endpoint", to);
		localStorage.setItem("radius", radius);

       var mode = $("#mode").val();
        localStorage.setItem("mode", mode);


       var selected = $(".myDropdownCheckbox").dropdownCheckbox("checked");
       var selectedLabels = selected.map(function(option){
           return option.label.toLowerCase();
       });

        localStorage.setItem("wish_do_list",selectedLabels.join(","));

       // var btn = $(event.currentTarget);

        //if (btn.hasClass('map')) {
        //    window.location.reload(true)
        //}
        //else {

        window.location.href="/map";
        //}

    });

    $("#go-top-button").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $(".geocomplete").geocomplete();
});

