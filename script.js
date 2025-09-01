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
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Check agar email pehle se hai
      if (users.find(u => u.email === email)) {
        alert("Email already registered! Please login.");
        return;
      }

      users.push({ username, email, password });
      localStorage.setItem("users", JSON.stringify(users));

      alert("Registration successful! Now you can login.");
      window.location.href = "index.html"; // Login page pe bhej do
    });
  }
});
