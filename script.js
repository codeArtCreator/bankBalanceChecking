let balance = 0;

        function deposit() {
            var amount = parseFloat(document.getElementById("depositInput").value);
            if (isNaN(amount) || amount <= 0) {
                alert("Please enter a valid amount.");
                return;
            }
            balance += amount;
            document.getElementById("balance").innerHTML = balance.toFixed(2);
            document.getElementById("depositInput").value = " ";
        }

        function withdraw() {
            var amount = parseFloat(document.getElementById("withdrawInput").value);
            if (isNaN(amount) || amount <= 0) {
                alert("Please enter a valid amount.");
                return;
            }
            if (amount > balance) {
                alert("Insufficient funds.");
                return;
            }
            balance -= amount;
            document.getElementById("balance").innerHTML = balance.toFixed(2);
            document.getElementById("withdrawInput").value = " ";
        }

        function showBalance() {
            alert("Current balance: Rs." + balance.toFixed(2));
        }
