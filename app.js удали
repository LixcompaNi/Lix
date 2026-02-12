const tg = window.Telegram.WebApp;

// Состояние системы
const BankState = {
    user: tg.initDataUnsafe?.user || { first_name: "Admin", id: "0000" },
    balance: parseFloat(localStorage.getItem('lix_balance')) || 542000.00,
    history: JSON.parse(localStorage.getItem('lix_history')) || []
};

function initApp() {
    tg.ready();
    tg.expand();
    tg.headerColor = '#000000';
    
    document.getElementById('user-name').innerText = BankState.user.first_name;
    updateUI();
}

function updateUI() {
    document.getElementById('balance').innerText = `$${BankState.balance.toLocaleString('en-US')}`;
    saveData();
}

function saveData() {
    localStorage.setItem('lix_balance', BankState.balance);
    localStorage.setItem('lix_history', JSON.stringify(BankState.history));
}

// Функции Админ-панели
function openAdmin() {
    const pass = prompt("Введите код доступа к терминалу:");
    if (pass === "LIX-ADMIN-2026-X") {
        document.getElementById('admin-modal').style.display = 'flex';
        tg.HapticFeedback.impactOccurred('heavy');
    } else {
        alert("ОШИБКА ДОСТУПА: Узел заблокирован");
    }
}

function closeAdmin() {
    document.getElementById('admin-modal').style.display = 'none';
}

function setBalance() {
    const newBal = prompt("Введите новую сумму баланса ($):");
    if (newBal !== null && !isNaN(newBal)) {
        BankState.balance = parseFloat(newBal);
        updateUI();
        tg.HapticFeedback.notificationOccurred('success');
        alert("Баланс системы обновлен");
    }
}

function addHistoryEvent() {
    const msg = prompt("Введите текст уведомления:");
    if (msg) {
        alert("Событие системы создано: " + msg);
    }
}

function makeTransfer() {
    const amount = prompt("Сумма перевода:");
    if (amount && !isNaN(amount) && amount <= BankState.balance) {
        BankState.balance -= Number(amount);
        tg.HapticFeedback.notificationOccurred('success');
        updateUI();
    }
}

window.onload = initApp;
