<?php
if(isset($_POST['nom']) && isset($_POST['telephone']) && isset($_POST['mail']) && isset($_POST['message'])) {
    if(($_POST['nom'] !== '') && ($_POST['telephone'] !== '') && ($_POST['mail'] !== '') && ($_POST['message'] !== '')) {
        //send email
        $nom = $_POST['nom'];
        $telephone = $_POST['telephone'];
        $mail = $_POST['mail'];
        $message = $_POST['message'];
        
        $recipient = "morman.design@gmail.com";
        
        $subject = "Nouveau contact: $nom";
        
        $email_content = "Nom: $nom\n\n";
        $email_content .= "Telephone: $telephone\n\n";
        $email_content .= "Email: $mail\n\n";
        $email_content .= "Message:\n$message\n";

        $email_headers = "De: $nom <$mail>";

                // Send the email.
                if (mail($recipient, $subject, $email_content, $email_headers)) {
                    // Set a 200 (okay) response code.
                    http_response_code(200);
                    $reponse = "Merci! Votre message a bien été envoyé.";
                } else {
                    // Set a 500 (internal server error) response code.
                    http_response_code(500);
                    $reponse = "Oops! Quelque chose ne s'est pas bien passé avec votre message.";
                }
    } else {
        $reponse = 'Les champs sont vides';
    }
} else {
    $reponse = 'Tous les champs ne sont pas parvenus';
}
 
echo $reponse;
?>