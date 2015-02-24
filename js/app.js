'use strict'
$(document).ready(function() {
	var nextEventHref = $('#udalosti .next-event a').attr("href");
    $('#vitejte .modal-body').load(nextEventHref.concat(' article'));
});