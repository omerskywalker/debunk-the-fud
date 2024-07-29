const arr = [
    "Bitcoin wastes too much energy", 
    "Bitcoin is too volatile", 
    "Bitcoin is used for illicit activity", 
    "Bitcoin has no intrinsic value", 
    "Bitcoin isn't tangible", 
    "Bitcoin was created by the NSA", 
    "Bitcoin's creator will dump his coins", 
    "Bitcoin is too slow", 
    "Bitcoin can't scale", 
    "Bitcoin will be banned", 
    "Bitcoin is a bubble", 
    "Bitcoin can be cloned", 
    "Bitcoin fails as a currency", 
    "Bitcoin can be hacked", 
    "Bitcoin needs internet to survive", 
];

const explanations = [
    "Bitcoin mining often utilizes surplus energy from renewable sources or energy that would otherwise be wasted. It is helpful to a grid, not harmful. Ask ERCOT.",
    "Bitcoin's price was highly volatile in it's infancy but has shown increasing stability as it matures. Over any 4-year timespan, the price has always gone up.",
    "Less than 0.34% of transactions are related to illicit activities. Bitcoin transactions are more transparent and traceable than cash, making it easier for authorities to track.",
    "Bitcoin's intrinsic value comes from its decentralized network, scarcity (only 21 million bitcoins will ever exist), security, and its utility as a store of value and medium of exchange.",
    "Bitcoin's digital nature allows it to be easily transferred across the globe, stored securely in a digital wallet, and divided into smaller units for transactions, making it highly practical.",
    "There is no substantial evidence to support the theory that Bitcoin was created by the NSA. Bitcoin's whitepaper and early development were spearheaded by the pseudonymous Satoshi Nakamoto.",
    "Satoshi Nakamoto, the creator of Bitcoin, has remained anonymous and inactive for years. It is unlikely that the creator will sell his coins, since he has not spent a single unit in over a decade.",
    "Bitcoin's base-layer immutable transactions can take 10 minutes, but solutions like the Lightning Network enable near instant payments for extremely low fees.",
    "Bitcoin's scalability is being developed by the brightest minds through various solutions, such as the Lightning Network, Liquid, Fediments, etc. Money scales in layers. Example: gold ➡️ redemption notes ➡️ credit cards",
    "While some governments may attempt to restrict Bitcoin, its decentralized nature makes it impossible to ban completely. It's similar to a government attempting to ban the internet. ",
    "Bitcoin has been declared dead numerous times, yet it has consistently recovered and grown stronger. Its resilience and increasing adoption suggest it is not just a passing bubble but an antifragile technology.",
    "While Bitcoin's code can be copied, its network effects, security, and widespread adoption cannot be replicated. Clones lack the trust and infrastructure that Bitcoin has built.",
    "Bitcoin is being used as a currency in several places, including El Salvador. Its adoption as a means of payment is growing, and it also serves as the best store of value over multi-year timeframes.",
    "Bitcoin's blockchain has proven to be highly secure. The network's decentralized nature and cryptographic security make it virtually impossible to hack. The network currently stores over 1 trillion in value.",
    "Bitcoin transactions can be conducted using alternative methods such as satellite communication, SMS, HAM radio, and mesh networks, ensuring it can function even in areas with limited internet access.",
];

const cardContainer = document.getElementById('card-container');
let activeCard = null;

arr.forEach((claim, index) => {
    const card = document.createElement('div');
    card.className = `card bg-gray-800 rounded-lg cursor-pointer transform transition-transform duration-300 $card-{index}`;
    card.setAttribute('onclick', `flipCard(this)`);

    const front = document.createElement('div');
    front.className = 'front';
    front.innerHTML = `<p>${claim}</p>`;

    const back = document.createElement('div');
    back.className = 'back';
    back.innerHTML = `<p>${explanations[index]}</p>`;

    card.appendChild(front);
    card.appendChild(back);
    cardContainer.appendChild(card);
});

function flipCard(card) {
    if (activeCard && activeCard !== card) {
        activeCard.classList.remove('flipped');
    }
    card.classList.toggle('flipped');
    activeCard = card.classList.contains('flipped') ? card : null;
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    const notification = document.getElementById('copy-notification');
    notification.classList.remove('opacity-0');
    notification.classList.add('opacity-100');
    setTimeout(() => {
        notification.classList.remove('opacity-100');
        notification.classList.add('opacity-0');
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 1024) { // Apply only for desktop users
        document.body.style.zoom = '80%';
    }

    setTimeout(() => {
        document.getElementById('hero').classList.add('fade-out');
        setTimeout(() => {
            document.getElementById('hero').style.display = 'none';
            document.querySelector('.container').classList.remove('hidden');
            document.querySelector('footer').classList.remove('hidden');
        }, 2000); // Match this duration with the CSS fadeOut duration
    }, 5000); // Wait 5 seconds before starting the fade-out animation
});

document.addEventListener('click', function(event) {
    if (activeCard && !activeCard.contains(event.target)) {
        activeCard.classList.remove('flipped');
        activeCard = null;
    }
});
