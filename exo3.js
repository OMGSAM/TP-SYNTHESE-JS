<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Formulaire de Paiement</title>
    <link rel="stylesheet" href="style1.css">
    <style>
        #principal {
            border: 2px solid blue;
        }
        body {
            background-image: url('images/arriere.jpg');
        }
        h1 {
            text-decoration: underline;
            color: blue;
            background-color: yellow;
            border: 1px solid blue;
        }
        div {
            margin: 100px 200px;
        }
        input:focus {
            background-color: yellow;
        }
    </style>
</head>
<body>
    <div id="principal">
        <h1>Informations de paiement</h1>
        <form id="paymentForm" onsubmit="return valider()">
            <input type="radio" id="paypal" name="paymentMethod" value="PayPal" checked onchange="togglePaymentMethod()"> PayPal
            <input type="radio" id="creditCard" name="paymentMethod" value="CreditCard" onchange="togglePaymentMethod()"> Par carte bancaire
            <br>
            <div id="paypalDiv">
                <label for="paypalEmail">Email PayPal:</label>
                <input type="email" id="paypalEmail" name="paypalEmail">
            </div>
            <div id="creditCardDiv" style="display:none;">
                <label for="cardNumber">Numéro de carte:</label>
                <input type="text" id="cardNumber" name="cardNumber" maxlength="16">
                <br>
                <label for="cardCVC">Code de vérification:</label>
                <input type="text" id="cardCVC" name="cardCVC" maxlength="3">
            </div>
            <br>
            <label for="fullName">Nom et prénom:</label>
            <input type="text" id="fullName" name="fullName">
            <br>
            <label for="phoneNumber">Numéro de téléphone:</label>
            <input type="text" id="phoneNumber" name="phoneNumber" maxlength="9">
            <br>
            <button type="submit">Payer</button>
        </form>
        <div id="result"></div>
    </div>
    <script>
        function togglePaymentMethod() {
            const paypalDiv = document.getElementById('paypalDiv');
            const creditCardDiv = document.getElementById('creditCardDiv');
            if (document.getElementById('paypal').checked) {
                paypalDiv.style.display = 'block';
                creditCardDiv.style.display = 'none';
            } else {
                paypalDiv.style.display = 'none';
                creditCardDiv.style.display = 'block';
            }
        }

        function verifier() {
            const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
            const fullName = document.getElementById('fullName').value;
            const phoneNumber = document.getElementById('phoneNumber').value;
            let isValid = true;

            if (fullName === '' || phoneNumber === '') {
                isValid = false;
            }

            if (phoneNumber.length !== 9 || isNaN(phoneNumber)) {
                isValid = false;
            }

            if (paymentMethod === 'PayPal') {
                const paypalEmail = document.getElementById('paypalEmail').value;
                if (paypalEmail === '' || !paypalEmail.includes('@')) {
                    isValid = false;
                }
            } else {
                const cardNumber = document.getElementById('cardNumber').value;
                const cardCVC = document.getElementById('cardCVC').value;
                if (cardNumber.length !== 16 || isNaN(cardNumber)) {
                    isValid = false;
                }
                if (cardCVC.length !== 3 || isNaN(cardCVC)) {
                    isValid = false;
                }
            }

            return isValid;
        }

        function valider() {
            if (verifier()) {
                const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
                const fullName = document.getElementById('fullName').value;
                const phoneNumber = document.getElementById('phoneNumber').value;
                let paymentType;

                if (paymentMethod === 'PayPal') {
                    paymentType = 'PayPal';
                } else {
                    paymentType = 'Par carte bancaire';
                }

                const resultDiv = document.getElementById('result');
                resultDiv.innerHTML = `<p>Nom et prénom du client: ${fullName}</p>
                                       <p>Numéro de téléphone: (+212) ${phoneNumber}</p>
                                       <p>Type de paiement: ${paymentType}</p>`;
                return false;
            } else {
                alert("Veuillez remplir correctement tous les champs.");
                return false;
            }
        }
    </script>
</body>
</html>
