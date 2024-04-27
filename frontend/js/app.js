document.addEventListener('DOMContentLoaded', function() {
    const transactionsList = document.getElementById('transactionsList');
    const exchangeRates = document.getElementById('exchangeRates');
    const apiUrl = 'http://localhost:3003'; // Asegúrate de que este puerto coincida con el del servidor.
  
    document.getElementById('loadTransactions').addEventListener('click', async () => {
        try {
            const response = await fetch(`${apiUrl}/api/transactions`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            transactionsList.textContent = JSON.stringify(data, null, 2);
        } catch (error) {
            console.error('Error al cargar las transacciones:', error);
            transactionsList.textContent = 'Error al cargar las transacciones.';
        }
    });
  
    document.getElementById('sendTransactionForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const recipientId = document.getElementById('recipientId').value;
        const amount = document.getElementById('amount').value;
        const currency = document.getElementById('currency').value;
        try {
            const response = await fetch(`${apiUrl}/api/transactions/transfers`, {
            //const response = await fetch('https://api.balampay.com/sandbox/transfers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ recipientId, amount, currency })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            alert('Transacción enviada: ' + JSON.stringify(result));
        } catch (error) {
            console.error('Error al enviar transacción:', error);
            alert('Error al enviar transacción.');
        } finally {
            event.target.reset();
        }
    });
  
    document.getElementById('loadExchangeRates').addEventListener('click', async () => {
        try {
            const response = await fetch(`${apiUrl}/api/rates/quotes`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            exchangeRates.textContent = JSON.stringify(data, null, 2);
        } catch (error) {
            console.error('Error al cargar tasas de cambio:', error);
            exchangeRates.textContent = 'Error al cargar tasas de cambio.';
        }
    });
  });