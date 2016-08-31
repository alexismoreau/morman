$(document).ready(function() {
        // Lorsque je soumets le formulaire
        $('#monForm').on('submit', function(e) {
            e.preventDefault(); // J'empêche le comportement par défaut du navigateur, c-à-d de soumettre le formulaire

            var $this = $(this); // L'objet jQuery du formulaire

            // Je récupère les valeurs
            nom: $("#nom").val();
            telephone: $("#telephone").val();
            mail: $("#mail").val();
            message: $("#message").val();

            // Je vérifie une première fois pour ne pas lancer la requête HTTP
            // si je sais que mon PHP renverra une erreur
            if(nom === '' || telephone === '' || mail === '' || message === '') {
                alert('Les champs doivent êtres remplis');
            } else {
                // Envoi de la requête HTTP en mode asynchrone
                $.ajax({
                    url: $this.attr('action'), // Le nom du fichier indiqué dans le formulaire
                    type: $this.attr('method'), // La méthode indiquée dans le formulaire (get ou post)
                    data: $this.serialize(), // Je sérialise les données (j'envoie toutes les valeurs présentes dans le formulaire)
                    success: function(html) { // Je récupère la réponse du fichier PHP
                        alert(html); // J'affiche cette réponse
                        setTimeout(
                          function() 
                          {
                             location.reload();
                          }, 001);
                    }
                });
            }
        });
});