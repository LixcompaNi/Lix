<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>LIX SYSTEM</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
</head>
<body>
    <div class="app-viewport">
        <div class="main-content">
            <header style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px;">
                <div>
                    <h1 style="font-size: 12px; color: #444; margin: 0; letter-spacing: 2px;">LIX CORE</h1>
                    <div id="user-name" style="font-size: 24px; font-weight: 800;">...</div>
                </div>
                <div onclick="openAdmin()" style="color: #222; font-size: 20px;">⚙️</div>
            </header>

            <div class="bank-card" ondblclick="openAdmin()">
                <p style="color: #444; font-size: 10px; font-weight: 800; margin-bottom: 10px;">TOTAL BALANCE</p>
                <div id="balance" style="font-size: 48px; font-weight: 800; letter-spacing: -2px;">$0</div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div class="btn-action" onclick="makeTransfer()">TRANSFER</div>
                <div class="btn-action" onclick="location.reload()">REFRESH</div>
            </div>
        </div>
    </div>

    <div id="admin-modal" class="admin-overlay">
        <div class="admin-header">
            <h2 style="color: #00ff00; font-size: 18px; margin: 0;">TERMINAL_ROOT</h2>
            <p style="color: #666; font-size: 10px;">LIX SYSTEM OS v1.0.4</p>
        </div>
        
        <button class="admin-btn" onclick="setBalance()">> SET_BALANCE_VAL</button>
        <button class="admin-btn" onclick="addHistoryEvent()">> PUSH_NOTIF_LOG</button>
        <button class="admin-btn" onclick="localStorage.clear(); location.reload();">> WIPE_LOCAL_DATA</button>

        <div class="close-admin" onclick="closeAdmin()">[ EXIT_TERMINAL ]</div>
    </div>

    <script src="app.js"></script>
</body>
</html>
