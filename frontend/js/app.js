document.getElementById('loadTransactions').addEventListener('click', async () => {
    const response = await fetch('/transactions');
    const data = await response.json();
    const container = document.getElementById('transactionsList');
    container.innerHTML = '<h3>Transacciones:</h3>' + JSON.stringify(data, null, 2);
});

document.getElementById('sendTransactionForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const recipientId = document.getElementById('recipientId').value;
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;
    const response = await fetch('/transaction', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ recipientId, amount, currency })
    });
    const result = await response.json();
    alert('Transacción enviada: ' + JSON.stringify(result));
    document.getElementById('sendTransactionForm').reset();
});

document.getElementById('loadExchangeRates').addEventListener('click', async () => {
    const response = await fetch('/exchange-rates');
    const data = await response.json();
    const container = document.getElementById('exchangeRates');
    container.innerHTML = '<h3>Tasas de Cambio:</h3>' + JSON.stringify(data, null, 2);
});