<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mise à jour du mot de passe</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <style>
        .strength-img {
            display: none;
        }
    </style>
</head>
<body>
    <h1>Mettre à jour le mot de passe</h1>
    <form>
        <label for="username">Nom d'utilisateur:</label>
        <input type="text" id="username" name="username"><br>
        <label for="currentPassword">Mot de passe actuel:</label>
        <input type="text" id="currentPassword" name="currentPassword"><br>
        <label for="newPassword">Nouveau mot de passe:</label>
        <input type="text" id="newPassword" name="newPassword"><br>
        <label for="confirmPassword">Confirmer le nouveau mot de passe:</label>
        <input type="text" id="confirmPassword" name="confirmPassword"><br>
        <button type="button" onclick="checkPassword()">Vérifier</button>
        <img id="weak" src="weak.png" class="strength-img">
        <img id="medium" src="medium.png" class="strength-img">
        <img id="strong" src="strong.png" class="strength-img">
    </form>
    <script>
        function checkPassword() {
            const newPassword = $('#newPassword').val();
            let strength = '';
            let isValid = false;

            if (newPassword.length < 5) {
                strength = 'weak';
            } else if (newPassword.length < 8 && /[A-Z]/.test(newPassword)) {
                strength = 'medium';
            } else if (newPassword.length <= 10 && /[A-Z]/.test(newPassword) && /\d/.test(newPassword)) {
                strength = 'strong';
                isValid = true;
            } else {
                strength = 'weak';
            }

            $('.strength-img').hide();
            $(`#${strength}`).show();

            if (isValid) {
                alert('Le mot de passe est valide.');
            } else {
                alert('Le mot de passe n\'est pas valide.');
            }
        }
    </script>
</body>
</html>
