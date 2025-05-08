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

searchInput.addEventListener("input", () => {
  renderGames(searchInput.value);
});

renderGames(); // Initial load
