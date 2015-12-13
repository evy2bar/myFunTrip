// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on ("ready",function() {
    var elem = $(".myDropdownCheckbox");
    if (elem.length > 0) {
        var selected = localStorage.getItem("wish_do_list");
        var myData = [
            { id: 1, label: "Food", isChecked: false },
            { id: 2, label: "Night Life", isChecked: false },
            { id: 3, label: "Nature", isChecked: false },
            { id: 4, label: "Museums", isChecked: false },
            { id: 5, label: "Kids", isChecked: false },
            { id: 6, label: "Gas", isChecked: false },
            { id: 7, label: "Art", isChecked: false },
            { id: 8, label: "City Treasures", isChecked: false }
        ];

        if (selected !== null && elem.hasClass('map-checkboxes')) {
            selected = selected.split(",");
            for (var i = 0; i < myData.length; i++) {
                for (var j = 0; j < selected.length; j++) {
                    if (myData[i].label.toLowerCase() == selected[j]) {
                        myData[i].isChecked = true;
                    }
                }
            }
        }


        elem.dropdownCheckbox({
            data: myData,
            title: "Wish do List"
        });
    }

});

//window.location.reload(true);
