class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
        this.accountNumber = `ACC-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Solde insuffisant");
        }
    }

    getBalance() {
        return this.balance;
    }

    printAccountInfo() {
        console.log(`Propriétaire: ${this.owner}, Numéro de compte: ${this.accountNumber}, Solde: ${this.balance}`);
    }
}

// Utilisation de la classe
const account1 = new BankAccount("Alice", 1000);
const account2 = new BankAccount("Bob", 500);

account1.deposit(200);
account1.withdraw(100);
account1.printAccountInfo();

account2.deposit(500);
account2.withdraw(700);
account2.printAccountInfo();
