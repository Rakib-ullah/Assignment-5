//.........Heart Count part.........

var heartBtn = document.getElementById("cardHeart");
var heartCount = heartBtn.getElementsByTagName("span")[0];
var hearts = parseInt(heartCount.innerText);

// Loop through each card heart
var heartIcons = document.getElementsByClassName("fa-heart");
for (var i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener("click", function () {
        hearts += 1;
        heartCount.innerText = hearts;
    });
}


//......... Most Importent Part Call Button Related Function............

var coinBtn = document.getElementById("cardCoin");
var coinCount = coinBtn.getElementsByTagName("span")[0];
var coins = parseInt(coinCount.innerText);

// Loop through each card coin
var callButtons = document.getElementsByClassName("callBtn");
var historyContainer = document.getElementById("historyContainer");

for (var i = 0; i < callButtons.length; i++) {
    var btn = callButtons[i].parentElement;
    btn.addEventListener("click", function () {
        var card = this.parentNode;
        while (card && !card.classList.contains("flex-col")) {
            card = card.parentNode;
        }
        if (!card) return;

        // Service Name
        var serviceName = card.getElementsByTagName("h1")[0].innerText;

        // Number
        var number = "";
        var paragraphs = card.getElementsByTagName("p");
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
        alert("Emergency.Service.Notify.App says:\nCalling " + serviceName + " at " + number + "...");

        // Add history
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
// History Container
var clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", function () {
    historyContainer.innerHTML = "";
});


