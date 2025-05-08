<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>GAMEHUB STORE - Install Free Games</title>
  <style>
    body {
      background-color: #b600bd;
      font-family: 'Segoe UI', sans-serif;
      color: #e0f7fa;
      text-align: center;
      margin: 0;
      padding: 0;
    }

    h1 {
      margin: 20px 0;
      font-size: 2.2em;
      color: #00bcd4;
    }

    input {
      width: 90%;
      max-width: 400px;
      padding: 12px;
      margin: 10px auto 20px;
      border-radius: 10px;
      border: none;
      font-size: 16px;
      display: block;
      background-color: #112240;
      color: white;
    }

    .app-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      padding: 20px;
    }

    .app-card {
      background-color: #141d2f;
      padding: 15px;
      border-radius: 12px;
      width: 200px;
      text-align: center;
      box-shadow: 0 0 10px #00bcd455;
      transition: transform 0.3s;
    }

    .app-card:hover {
      transform: scale(1.05);
    }

    .app-card img {
      width: 100px;
      height: 100px;
      border-radius: 10px;
    }

    .install-btn {
      background-color: #85007a;
      color: white;
      padding: 10px;
      border-radius: 8px;
      text-decoration: none;
      display: block;
      margin-top: 10px;
      transition: background 0.3s;
      cursor: pointer;
    }

    .install-btn:hover {
      background-color: #0097a7;
    }

    .progress-bar {
      width: 80%;
      margin: 15px auto;
      background-color: #004db9;
      border-radius: 10px;
      overflow: hidden;
      display: none;
    }

    .progress-bar-fill {
      height: 15px;
      width: 0%;
      background-color: #00bcd4;
      transition: width 2s ease-in-out;
    }

    .popup {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.85);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .popup-content {
      background-color: #112240;
      padding: 25px;
      border-radius: 15px;
      text-align: center;
      width: 90%;
      max-width: 350px;
      box-shadow: 0 0 20px #00bcd455;
    }

    .popup-content button {
      background-color: #00bcd4;
      color: white;
      padding: 10px 20px;
      margin-top: 15px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>🎮 GAMEHUB STORE</h1>
  <input type="text" id="searchInput" placeholder="Search for a game or app..." />

  <div class="app-container" id="appContainer"></div>

  <div class="progress-bar" id="progressBar">
    <div class="progress-bar-fill" id="progressFill"></div>
  </div>

  <div class="popup" id="popup">
    <div class="popup-content">
      <h2>🔒 Human Verification</h2>
      <p>Please complete a step to unlock your download.</p>
      <button id="continueBtn">Continue</button>
    </div>
  </div>

  <script>
    const games = [
      {
        name: "GTA 5",
        platform: "PC / Mobile",
        img: "https://alloparadise.s3.eu-west-3.amazonaws.com/products/md/grand-theft-auto-v-gta-edition-premium-online.png",
        url: "https://www.ogads.com/gta&ref=gamehub"
      },
      {
        name: "Fortnite",
        platform: "Mobile / Console",
        img: "https://cdn2.unrealengine.com/fortnite-battle-royale-1920x1080-1920x1080-c4d6f6b59b92.jpg",
        url: "https://www.ogads.com/fortnite&ref=gamehub"
      },
      {
        name: "Minecraft",
        platform: "All Platforms",
        img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/bd/Minecraft_Java_Edition_key_art.jpg",
        url: "https://www.ogads.com/minecraft&ref=gamehub"
      }
    ];

    const appContainer = document.getElementById("appContainer");
    const searchInput = document.getElementById("searchInput");

    function renderGames(filter = "") {
      appContainer.innerHTML = "";

      const filteredGames = games.filter(game =>
        game.name.toLowerCase().includes(filter.toLowerCase())
      );

      filteredGames.forEach(game => {
        const card = document.createElement("div");
        card.className = "app-card";
        card.innerHTML = `
          <img src="${game.img}" alt="${game.name} cover" />
          <h3>${game.name}</h3>
          <p>${game.platform}</p>
          <div class="install-btn" onclick="simulateDownload('${game.url}')">Install</div>
        `;
        appContainer.appendChild(card);
      });
    }

    function simulateDownload(url) {
      const bar = document.getElementById("progressBar");
      const fill = document.getElementById("progressFill");

      bar.style.display = "block";
      fill.style.width = "0%";

      setTimeout(() => fill.style.width = "100%", 100);
      setTimeout(() => {
        bar.style.display = "none";
        document.getElementById("popup").style.display = "flex";
        document.getElementById("continueBtn").onclick = () => {
          window.location.href = url;
        };
      }, 2200);
    }

    // Search input filtering
    searchInput.addEventListener("input", () => {
      renderGames(searchInput.value);
    });

    // Initial render
    renderGames();
  </script>
</body>
</html>
