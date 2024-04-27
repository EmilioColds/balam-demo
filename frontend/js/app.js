document.addEventListener('DOMContentLoaded', function() {
    const transactionsList = document.getElementById('transactionsList');
    const exchangeRates = document.getElementById('exchangeRates');

    document.getElementById('loadTransactions').addEventListener('click', async () => {
        const response = await fetch('/api/transactions');
        const data = await response.json();
        transactionsList.textContent = JSON.stringify(data, null, 2);
    });

    document.getElementById('sendTransactionForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const recipientId = document.getElementById('recipientId').value;
        const amount = document.getElementById('amount').value;
        const currency = document.getElementById('currency').value;
        const response = await fetch('/api/transactions/transfers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ recipientId, amount, currency })
        });
        const result = await response.json();
        alert('Transacción enviada: ' + JSON.stringify(result));
        event.target.reset(); // Resetea el formulario después del envío
    });

    document.getElementById('loadExchangeRates').addEventListener('click', async () => {
        const response = await fetch('/api/rates/quotes');
        const data = await response.json();
        exchangeRates.textContent = JSON.stringify(data, null, 2);
    });
});