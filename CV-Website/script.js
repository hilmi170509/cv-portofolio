// Menampilkan tahun saat ini di bagian footer
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Membuka dan menutup menu navigasi
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    if (navLinks) {
        navLinks.classList.toggle("active");
    }
}

// Fungsi tombol Download CV
function downloadCV() {
    window.print();
}