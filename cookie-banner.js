document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');

    // Tjek om brugeren allerede har accepteret cookies
    if (localStorage.getItem('cookie_consent') !== 'true') {
        cookieBanner.style.display = 'block';
    }

    // Funktion der kører, når brugeren accepterer
    acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookie_consent', 'true');
        cookieBanner.style.display = 'none';
        // Du kan tilføje kode her for at indlæse scripts, der bruger cookies
        // eller lokal lagring, efter samtykke er givet.
    });
});
