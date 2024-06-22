<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Calculatrice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }
        select, input, button {
            font-size: 16px;
            margin: 10px;
            padding: 5px;
        }
    </style>
</head>
<body>
    <h1>Calculatrice</h1>
    <label for="num1">Number 1:</label>
    <input type="number" id="num1" required>
    <br>
    <label for="operation">Operation:</label>
    <select id="operation">
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
    </select>
    <br>
    <label for="num2">Number 2:</label>
    <input type="number" id="num2" required>
    <br>
    <button onclick="calculate()">Calculate</button>
    <br>
    <div id="result"></div>

    <script>
        function calculate() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const operation = document.getElementById('operation').value;
            let result;

            switch (operation) {
                case 'add':
                    result = num1 + num2;
                    break;
                case 'subtract':
                    result = num1 - num2;
                    break;
                case 'multiply':
                    result = num1 * num2;
                    break;
                case 'divide':
                    result = num1 / num2;
                    break;
                default:
                    result = 'Opération non valide';
            }

            document.getElementById('result').innerText = `Result: ${result}`;
        }
    </script>
</body>
</html>
