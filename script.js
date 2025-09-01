function createCheckout(rank) {
    // Placeholder for API call to create checkout
    alert(`Creating checkout for ${rank}`);
}

function showDetails(rank) {
    let details = '';
    switch (rank) {
        case 'TITAN':
            details = `
                <h3>TITAN Rank Details</h3>
                <p>Full Netherite Armor - Protection IV, Unbreaking III, Mending</p>
                <p>Netherite Sword - Sharpness V, Looting III, Unbreaking III, Mending</p>
                <p>Netherite Pickaxe - Efficiency IV, Fortune III, Unbreaking III, Mending</p>
                <p>Bow - Power V, Flame, Punch II, Infinity</p>
                <p>Coins: 150,000</p>
                <p>Commands: /ec, /wb, /anvil, /furnace, /spawn, /sethome, /home, /delhome, /bal, /repair</p>
            `;
            break;
        case 'ELITE':
            details = `
                <h3>ELITE Rank Details</h3>
                <p>Full Diamond Armor - Protection IV, Unbreaking III, Mending</p>
                <p>Diamond Sword - Sharpness IV, Looting II, Fire Aspect I, Unbreaking III</p>
                <p>Coins: 100,000</p>
                <p>Commands: /ec, /wb, /anvil, /furnace, /spawn, /sethome, /home, /delhome, /bal, <span class="not-allowed">/repair</span></p>
            `;
            break;
        case 'SVIP':
            details = `
                <h3>SVIP Rank Details</h3>
                <p>Full Diamond Armor - Protection III, Unbreaking II</p>
                <p>Coins: 5,000</p>
                <p>Commands: /ec, /wb, /anvil, /furnace, /spawn, /sethome, /home, <span class="not-allowed">/delhome</span>, <span class="not-allowed">/bal</span>, <span class="not-allowed">/repair</span></p>
            `;
            break;
        case 'VIP':
            details = `
                <h3>VIP Rank Details</h3>
                <p>Full Diamond Armor - Protection I, Unbreaking I</p>
                <p>Coins: 3,000</p>
                <p>Commands: /ec, /wb, /anvil, /furnace, /spawn, <span class="not-allowed">/sethome</span>, <span class="not-allowed">/home</span>, <span class="not-allowed">/delhome</span>, <span class="not-allowed">/bal</span>, <span class="not-allowed">/repair</span></p>
            `;
            break;
    }
    alert(details);
}

// Example function to simulate player count
document.getElementById('playerCount').innerText = Math.floor(Math.random() * 100);
function openDiscord() {
    const discordLink = "https://discord.gg/N7GSGYdhvg";
    const discordAppLink = "discord://invite/N7GSGYdhvg";

    // Try to open the Discord app first
    window.location.href = discordAppLink;

    // Fallback to web link after a short delay
    setTimeout(() => {
        window.open(discordLink, '_blank');
    }, 2000);
}

// Example function to simulate player count
document.getElementById('playerCount').innerText = Math.floor(Math.random() * 100);
function showRegister() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("registerBox").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("registerBox").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
}

function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;
  alert("Login attempt:\nUser: " + user + "\nPassword: " + pass);
}

function register() {
  const user = document.getElementById("regUser").value;
  const email = document.getElementById("regEmail").value;
  const pass = document.getElementById("regPass").value;
  alert("Register attempt:\nUser: " + user + "\nEmail: " + email + "\nPassword: " + pass);
}
