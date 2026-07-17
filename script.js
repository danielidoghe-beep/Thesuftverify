const marketSectors = [
    {
        title: "Social Accounts",
        icon: "fa-users"
    },
    {
        title: "Virtual Numbers",
        icon: "fa-sim-card"
    },
    {
        title: "SMM Orders",
        icon: "fa-chart-line"
    },
    {
        title: "Software Logs",
        icon: "fa-laptop-code"
    },
    {
        title: "Proxy",
        icon: "fa-shield-halved"
    },
    {
        title: "E-SIM",
        icon: "fa-mobile-screen-button"
    },
    {
        title: "Streaming",
        icon: "fa-play"
    },
    {
        title: "VPN & Security",
        icon: "fa-lock"
    }
];

const marketGrid = document.getElementById("marketGrid");

if (marketGrid) {
    marketSectors.forEach(item => {
        marketGrid.innerHTML += `
            <div class="market-card">
                <div class="icon-box">
                    <i class="fa-solid ${item.icon}"></i>
                </div>

                <h3>${item.title}</h3>

                <a href="services.html">
                    Browse Collection →
                </a>
            </div>
        `;
    });
}

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("show");
    });
}
/* ===========================
   SCROLL ANIMATION
=========================== */

ScrollReveal().reveal('.hero-content', {
    distance: '60px',
    duration: 1000,
    origin: 'bottom'
});

ScrollReveal().reveal('.market-card', {
    distance: '50px',
    duration: 900,
    interval: 120,
    origin: 'bottom'
});

ScrollReveal().reveal('.cta-box', {
    distance: '60px',
    duration: 1000,
    origin: 'bottom'
});

ScrollReveal().reveal('.footer', {
    distance: '40px',
    duration: 1000,
    origin: 'bottom'
});
