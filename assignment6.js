function numCheck(val) {
	return isNaN($(val).val())
}

function buy() {
	var form = document.getElementById("form");
	var selected = form.payment.value;
	
	if (selected == "") {
		alert("No form of payment selected.");
		return false;
	}
	
	if (selected == 1) {
		if (numCheck('#a')) {
			alert("Card Number can only contain digits.");
			return false;
		}
		if (numCheck('#b') || numCheck('#c')) {
			alert("Expiration can only contain digits.");
			return false;
		}
		if (numCheck('#d')) {
			alert("Security Number can only contain digits.");
			return false;
		}	
	} 
	
	alert("Successful Payment.");
	$("#creditCard").hide();
	$("#wireTransfer").hide();	
	
	return true;
}

$(document).ready(function(){
    $("#cc").click(function(){
        $("#creditCard").show();
		$("#wireTransfer").hide();	
    });
    $("#wt").click(function(){
        $("#creditCard").hide();
		$("#wireTransfer").show();
    });
	$("#showInfo").click(function() {
		$("#info").show();
	});
	$("#hideInfo").click(function() {
		$("#info").hide();
		$("#txt").html("");
	});
	$("#savings").click(function() {
		$.ajax({url: "savings.txt", async: false, success: 
			function(result) {
				$("#txt").html(result);
			}
		});
	});	
	$("#checking").click(function() {
		$.ajax({url: "checking.txt", async: false, success: 
			function(result) {
				$("#txt").html(result);
			}
		});
	});
	$("#retirement").click(function() {
		$.ajax({url: "retirement.txt", async: false, success: 
			function(result) {
				$("#txt").html(result);
			}
		});
	});
});

$(function() {
    $("#sortable").sortable({
		revert: true
    });
    $("#draggable").draggable({
		connectToSortable: "#sortable"
    });
	
	$('#trash').droppable({
        drop: function(event, ui) {
			var conf = confirm('Are you sure you would like to remove this item?');
			if(conf) {
				$(ui.draggable).remove();
			}
        }
    });
});

function addAccount() {
	var list = document.getElementById("sortable");
	var elem = document.createElement("li");
	var text = document.getElementById("newAccount").value;
	
	elem.appendChild(document.createTextNode(text));
	list.appendChild(elem);
}