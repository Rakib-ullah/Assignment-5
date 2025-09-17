// Navbar elements
var heartBtn = document.getElementById("cardHeart");
var heartCount = heartBtn.getElementsByTagName("span")[0];

var coinBtn = document.getElementById("cardCoin");
var coinCount = coinBtn.getElementsByTagName("span")[0];

// History container
var historyContainer = document.getElementById("historyContainer");
var clearBtn = document.getElementById("clearBtn");

// Heart icons and Call buttons
var heartIcons = document.getElementsByClassName("fa-heart");
var callButtons = document.getElementsByClassName("fa-phone");

// Initialize coins and hearts
var coins = parseInt(coinCount.innerText);
var hearts = parseInt(heartCount.innerText);

// Heart click handler
for (var i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener("click", function () {
        hearts += 1;
        heartCount.innerText = hearts;
    });
}

// Call button handler
for (var i = 0; i < callButtons.length; i++) {
    callButtons[i].parentElement.addEventListener("click", function () {
        // Find parent card
        var card = this.parentNode;
        while (card && !card.classList.contains("flex") && !card.classList.contains("flex-col")) {
            card = card.parentNode;
        }

        var headings = card.getElementsByTagName("h1");
        var paragraphs = card.getElementsByTagName("p");

        var serviceName = headings[0].innerText;
        var number = "";
        for (var j = 0; j < paragraphs.length; j++) {
            if (paragraphs[j].className.indexOf("text-4xl") !== -1) {
                number = paragraphs[j].innerText;
                break;
            }
        }

        if (coins < 20) {
            alert("Insufficient coins! You need at least 20 coins to make a call.");
            return;
        }

        coins -= 20;
        coinCount.innerText = coins;

        alert("Calling " + serviceName + " at " + number + "...");

        var time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        var historyCard = document.createElement("div");
        historyCard.className = "flex justify-between p-4 bg-white border-2 rounded-lg shadow";
        historyCard.innerHTML =
            '<div><p class="text-sm font-semibold text-gray-700">' + serviceName +
            '</p><p class="text-xs text-gray-500">' + number +
            '</p></div><p class="text-xs text-gray-400">' + time + '</p>';

        historyContainer.insertBefore(historyCard, historyContainer.firstChild);
    });
}

// Clear history
clearBtn.addEventListener("click", function () {
    historyContainer.innerHTML = "";
});

// .............................................

// Navbar elements
var heartBtn = document.getElementById("cardHeart");
var heartCount = heartBtn.getElementsByTagName("span")[0];

var coinBtn = document.getElementById("cardCoin");
var coinCount = coinBtn.getElementsByTagName("span")[0];

// History container
var historyContainer = document.getElementById("historyContainer");
var clearBtn = document.getElementById("clearBtn");

// Heart icons (all hearts in cards)
var heartIcons = document.getElementsByClassName("fa-heart");

// Call buttons (all call buttons in cards)
var callButtons = document.getElementsByClassName("fa-phone");

// Initialize coins and hearts
var coins = parseInt(coinCount.innerText);
var hearts = parseInt(heartCount.innerText);

// --- Heart click handler ---
for (var i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener("click", function () {
        hearts += 1;
        heartCount.innerText = hearts;
    });
}

// --- Call button handler ---
for (var i = 0; i < callButtons.length; i++) {
    callButtons[i].parentElement.addEventListener("click", function () {
        var card = this.parentNode; // flex-col card
        while (card && !card.classList.contains("flex") && !card.classList.contains("flex-col")) {
            card = card.parentNode;
        }

        var headings = card.getElementsByTagName("h1");
        var paragraphs = card.getElementsByTagName("p");

        var serviceName = headings[0].innerText;
        var number = "";

        // find 4xl number p
        for (var j = 0; j < paragraphs.length; j++) {
            if (paragraphs[j].className.indexOf("text-4xl") !== -1) {
                number = paragraphs[j].innerText;
                break;
            }
        }

        // Check coins
        if (coins < 20) {
            alert("Insufficient coins! You need at least 20 coins to make a call.");
            return;
        }

        coins -= 20;
        coinCount.innerText = coins;

        // Alert
        alert("Calling " + serviceName + " at " + number + "...");

        // Add to history
        var time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        var historyCard = document.createElement("div");
        historyCard.className = "flex justify-between p-4 bg-white border-2 rounded-lg shadow";

        historyCard.innerHTML =
            '<div><p class="text-sm font-semibold text-gray-700">' + serviceName +
            '</p><p class="text-xs text-gray-500">' + number +
            '</p></div><p class="text-xs text-gray-400">' + time + '</p>';

        historyContainer.insertBefore(historyCard, historyContainer.firstChild);
    });
}

// --- Clear History ---
clearBtn.addEventListener("click", function () {
    historyContainer.innerHTML = "";
});


