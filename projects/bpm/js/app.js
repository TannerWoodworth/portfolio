$(function() {
	// Get the form.
	var form = $('#contact-form');
	// Get the messages div.
	var formMessages = $('#form-messagefalse');
	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();
		// Serialize the form data.
		var formData = $(form).serialize();
		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('alert-danger animated fadeIn shake');
			$(formMessages).addClass('hide');
			// Set the message text.
			$(formMessages).text(response);
			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Sets class
			$(formMessages).removeClass('alert-success animated shake fadeIn');
			$(formMessages).addClass('hide');
			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Unknown Error.');
			}
		});
	});
});
