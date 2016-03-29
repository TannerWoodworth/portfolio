<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);
        // Checks data was sent to mailer
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Bad Request Error handler
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }
		//Message will be delivered to this email
        $recipient = $email;
        // Set the email subject.
        $subject = "Thanks for your message, $name";
        // Build the email content.
        $email_content = "Hello  $name\n !";
        $email_content .= "You sent BluePaper Media a message using this email address:  $email\n\n";
        $email_content .= "This was your message:\n$message\n";
        $email_content .= "BluePaper Media is a fictitious company and you should not be expecting a reply from them. Your email address was not saved and you will not be receiving any more emails from us."
        $email_content .= "If you would like to get in touch with a human with any questions you have, please feel free to contact the creator of BluePaper Media at twoodworth2014@gmail.com"
        $email_content .= "Thank you for visiting BluePaper Media!"
        // Build the email headers.
        $email_headers = "From: $name <$email>";
        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            //http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }
    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }
?>
