//.........Heart Count part.........

var heartBtn = document.getElementById("cardHeart");
var heartCount = heartBtn.getElementsByTagName("span")[0];
var hearts = parseInt(heartCount.innerText);

var heartIcons = document.getElementsByClassName("fa-heart");
for (var i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener("click", function () {
        hearts += 1;
        heartCount.innerText = hearts;
    });
}



//......... Call Button Related Function Part ............

var coinBtn = document.getElementById("cardCoin");
var coinCount = coinBtn.getElementsByTagName("span")[0];
var coins = parseInt(coinCount.innerText);

var callButtons = document.getElementsByClassName("callBtn");
var historyContainer = document.getElementById("historyContainer");

for (var i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener("click", function () {
        var card = this.closest(".card");
        if (!card) return;

        var serviceName = card.getElementsByTagName("h1")[0].innerText;
        // Number Additing 
        var number = "";
        var paragraphs = card.getElementsByTagName("p");
        for (var j = 0; j < paragraphs.length; j++) {
            if (paragraphs[j].className.indexOf("text-4xl") !== -1) {
                number = paragraphs[j].innerText;
                break;
            }
        }

        // Condition For Coin 
        if (coins < 20) {
            alert("Insufficient coins! You need at least 20 coins to make a call.");
            return;
        }
        coins -= 20;
        coinCount.innerText = coins;
        alert("emargency.service.notify.app says:\nCalling " + serviceName + " at " + number);

        // .........Add history Part And Most Difical Part..........

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

//..... Clear Button....
var clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function () {
    historyContainer.innerHTML = "";
});




// ....... Copy Button Function Work Part ...........

var copyButtons = document.getElementsByClassName("copyBtn");
for (var j = 0; j < copyButtons.length; j++) {
    copyButtons[j].addEventListener("click", function () {
        var card = this.closest(".card");
        // Number copy....
        var number = "";
        var paragraphs = card.getElementsByTagName("p");
        for (var k = 0; k < paragraphs.length; k++) {
            if (paragraphs[k].className.indexOf("text-4xl") !== -1) {
                number = paragraphs[k].innerText;
                break;
            }
        }
        navigator.clipboard.writeText(number);

        alert("📋 Number copied: " + number);
    });
}


// ..........Copy Counter Setup Part............

var copyBtn = document.getElementById("copyBtn");
var copyCount = document.getElementById("copyCount");
var totalCopied = 0;

// Card Copy Button Part .....
var copyButtons = document.getElementsByClassName("copyBtn");

for (var j = 0; j < copyButtons.length; j++) {
    copyButtons[j].addEventListener("click", function () {
        var card = this.closest(".card");
        var number = card.getElementsByTagName("p")[0].innerText;
        navigator.clipboard.writeText(number);
        totalCopied += 1;
        copyCount.innerText = totalCopied;

        alert("📋 Number copied: " + number);
    });
}