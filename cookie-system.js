// 1. Gem de originale funktioner
const originalSetItem = localStorage.setItem;
const originalGetItem = localStorage.getItem;

// 2. Tjek for samtykke (bruger den originale GetItem for ikke at blive blokeret af os selv)
var hasConsent = !!originalGetItem.call(localStorage, 'viklin_consent');

if (!hasConsent) {
    // Blokér setItem hvis der ikke er samtykke
    localStorage.setItem = function() {
        console.warn("localStorage er blokeret indtil cookies accepteres.");
        return null;
    };
}

// 3. Funktionen som knappen kalder
function acceptCookies() {
    // Lås op for localStorage
    localStorage.setItem = originalSetItem;
    localStorage.getItem = originalGetItem;
    
    // Gem samtykke
    localStorage.setItem('viklin_consent', 'true');
    
    // Skjul banneret med det samme
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.style.display = 'none';
    }
    
    // Genindlæs siden så alle scripts starter korrekt
    location.reload();
}
