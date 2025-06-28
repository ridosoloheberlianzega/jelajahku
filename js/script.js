document.addEventListener('DOMContentLoaded', function() {
    const learnMoreButtons = document.querySelectorAll('.button-secondary');

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah link untuk berpindah halaman (untuk contoh ini)
            const destinationName = this.parentNode.querySelector('h3').textContent;
            alert(Anda ingin mempelajari lebih lanjut tentang ${destinationName}!);
        });
    });

});