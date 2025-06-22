// script.js

let cardCount = 0;
let currentDepth = 'all';
let currentCards = cards;
let customCards = { blue: [], red: [], green: [], purple: [], joker: [] };
let isUsingCustomDeck = false;

// Mode multijoueur
let players = [];
let currentPlayerIndex = 0;
let isMultiplayerMode = false;

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    setupDepthSelector();
    updateTotalCardsCount();
});

// Gestion du sélecteur de profondeur
function setupDepthSelector() {
    const depthOptions = document.querySelectorAll('.depth-option');
    depthOptions.forEach(option => {
        option.addEventListener('click', function() {
            depthOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            currentDepth = this.dataset.depth;
            updateTotalCardsCount();
        });
    });
}

function updateTotalCardsCount() {
    const totalElement = document.getElementById('totalCards');
    let total = 0;
    
    if (currentDepth === 'all') {
        Object.values(currentCards).forEach(cardArray => {
            total += cardArray.length;
        });
    } else {
        const ranges = {
            'light': [0, 10],
            'personal': [10, 20],
            'deep': [20, 30],
            'intimate': [30, 40]
        };
        
        if (ranges[currentDepth]) {
            const [start, end] = ranges[currentDepth];
            Object.values(currentCards).forEach(cardArray => {
                total += Math.min(cardArray.length, end) - Math.min(cardArray.length, start);
            });
        }
    }
    
    totalElement.textContent = total;
}

function getFilteredCards() {
    if (currentDepth === 'all') {
        return currentCards;
    }
    
    const ranges = {
        'light': [0, 10],
        'personal': [10, 20],
        'deep': [20, 30],
        'intimate': [30, 40]
    };
    
    if (!ranges[currentDepth]) return currentCards;
    
    const [start, end] = ranges[currentDepth];
    const filteredCards = {};
    
    Object.keys(currentCards).forEach(type => {
        filteredCards[type] = currentCards[type].slice(start, end);
    });
    
    return filteredCards;
}

function drawCard() {
    const cardDisplay = document.getElementById("currentCard");
    const cardTypeElement = cardDisplay.querySelector(".card-type");
    const cardQuestionElement = cardDisplay.querySelector(".card-question");
    const cardSubtitleElement = cardDisplay.querySelector(".card-subtitle");
    const cardCountElement = document.getElementById("cardCount");

    const filteredCards = getFilteredCards();
    const cardTypes = Object.keys(filteredCards).filter(type => filteredCards[type].length > 0);
    
    if (cardTypes.length === 0) {
        cardQuestionElement.textContent = "Aucune carte disponible pour ce niveau";
        return;
    }
    
    const randomType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    const randomCardIndex = Math.floor(Math.random() * filteredCards[randomType].length);
    const randomCard = filteredCards[randomType][randomCardIndex];

    // Remove previous color class and add new one
    cardDisplay.classList.remove("card-blue", "card-red", "card-green", "card-purple", "card-joker");
    cardDisplay.classList.add(`card-${randomType}`);

    // Update card content
    const typeNames = {
        'blue': 'Découverte',
        'red': 'Défi',
        'green': 'Rêves',
        'purple': 'Souvenirs',
        'joker': 'Joker'
    };
    
    cardTypeElement.textContent = typeNames[randomType] || randomType;
    
    if (randomType === 'joker') {
        cardQuestionElement.innerHTML = `<div class="joker-action">${randomCard}</div>`;
    } else {
        cardQuestionElement.textContent = randomCard;
    }
    
    cardSubtitleElement.textContent = ""; // Clear subtitle for new cards

    // Increment card count
    cardCount++;
    cardCountElement.textContent = cardCount;

    // Add flip animation
    cardDisplay.classList.remove("card-flip");
    void cardDisplay.offsetWidth; // Trigger reflow
    cardDisplay.classList.add("card-flip");
    
    // Gestion du mode multijoueur
    if (isMultiplayerMode && players.length > 0) {
        nextPlayer();
    }
}

function toggleRules() {
    const rulesSection = document.getElementById("rulesSection");
    rulesSection.classList.toggle("hidden");
}

// Fonctionnalités multijoueur
function toggleMultiplayer() {
    const multiplayerSection = document.getElementById("multiplayerSection");
    multiplayerSection.classList.toggle("hidden");
}

function addPlayer() {
    const playerNameInput = document.getElementById("playerNameInput");
    const playerName = playerNameInput.value.trim();
    
    if (playerName && !players.includes(playerName)) {
        players.push(playerName);
        updatePlayersList();
        playerNameInput.value = "";
    }
}

function updatePlayersList() {
    const playersList = document.getElementById("playersList");
    playersList.innerHTML = "";
    
    players.forEach((player, index) => {
        const playerBadge = document.createElement("div");
        playerBadge.className = "player-badge";
        if (index === currentPlayerIndex && isMultiplayerMode) {
            playerBadge.classList.add("active");
        }
        playerBadge.textContent = player;
        playersList.appendChild(playerBadge);
    });
}

function startMultiplayer() {
    if (players.length < 2) {
        alert("Il faut au moins 2 joueurs pour commencer !");
        return;
    }
    
    isMultiplayerMode = true;
    currentPlayerIndex = 0;
    updateCurrentPlayerDisplay();
    updatePlayersList();
}

function updateCurrentPlayerDisplay() {
    const currentPlayerDisplay = document.getElementById("currentPlayerDisplay");
    if (isMultiplayerMode && players.length > 0) {
        currentPlayerDisplay.textContent = `C'est au tour de ${players[currentPlayerIndex]}`;
        currentPlayerDisplay.classList.remove("hidden");
    } else {
        currentPlayerDisplay.classList.add("hidden");
    }
}

function nextPlayer() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateCurrentPlayerDisplay();
    updatePlayersList();
}

// Fonctionnalités deck personnalisé
function toggleCustomDeck() {
    const customDeckSection = document.getElementById("customDeckSection");
    customDeckSection.classList.toggle("hidden");
    updateCustomCardsList();
}

function addCustomCard() {
    const questionInput = document.getElementById("customQuestionInput");
    const typeSelect = document.getElementById("customCardType");
    
    const question = questionInput.value.trim();
    const type = typeSelect.value;
    
    if (question) {
        customCards[type].push(question);
        questionInput.value = "";
        updateCustomCardsList();
    }
}

function updateCustomCardsList() {
    const customCardsList = document.getElementById("customCardsList");
    customCardsList.innerHTML = "";
    
    Object.keys(customCards).forEach(type => {
        customCards[type].forEach((card, index) => {
            const cardItem = document.createElement("div");
            cardItem.className = "custom-card-item";
            
            const typeNames = {
                'blue': '🔵',
                'red': '🔴',
                'green': '🟢',
                'purple': '🟣',
                'joker': '🃏'
            };
            
            cardItem.innerHTML = `
                <span>${typeNames[type]} ${card}</span>
                <button class="btn-remove" onclick="removeCustomCard('${type}', ${index})">Supprimer</button>
            `;
            customCardsList.appendChild(cardItem);
        });
    });
}

function removeCustomCard(type, index) {
    customCards[type].splice(index, 1);
    updateCustomCardsList();
}

function useCustomDeck() {
    // Vérifier qu'il y a au moins quelques cartes personnalisées
    const totalCustomCards = Object.values(customCards).reduce((total, arr) => total + arr.length, 0);
    
    if (totalCustomCards === 0) {
        alert("Ajoutez au moins une carte personnalisée !");
        return;
    }
    
    currentCards = { ...customCards };
    isUsingCustomDeck = true;
    updateTotalCardsCount();
    alert("Deck personnalisé activé !");
}

function resetToOriginalDeck() {
    currentCards = cards;
    isUsingCustomDeck = false;
    updateTotalCardsCount();
    alert("Deck original restauré !");
}

// Gestion des touches clavier
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        event.preventDefault();
        drawCard();
    }
});

// Sauvegarde locale des decks personnalisés
function saveCustomDeck() {
    localStorage.setItem('cartegame_custom_deck', JSON.stringify(customCards));
}

function loadCustomDeck() {
    const saved = localStorage.getItem('cartegame_custom_deck');
    if (saved) {
        customCards = JSON.parse(saved);
        updateCustomCardsList();
    }
}

// Charger le deck personnalisé au démarrage
document.addEventListener('DOMContentLoaded', loadCustomDeck);

// Sauvegarder automatiquement les modifications
function addCustomCard() {
    const questionInput = document.getElementById("customQuestionInput");
    const typeSelect = document.getElementById("customCardType");
    
    const question = questionInput.value.trim();
    const type = typeSelect.value;
    
    if (question) {
        customCards[type].push(question);
        questionInput.value = "";
        updateCustomCardsList();
        saveCustomDeck(); // Sauvegarde automatique
    }
}

function removeCustomCard(type, index) {
    customCards[type].splice(index, 1);
    updateCustomCardsList();
    saveCustomDeck(); // Sauvegarde automatique
}

