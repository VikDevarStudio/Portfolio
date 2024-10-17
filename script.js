const navItems = document.querySelectorAll('.nav-item a');

navItems.forEach(item => {
    item.addEventListener('click', function(e) {

        // Hapus class 'active' dari semua item
        navItems.forEach(nav => nav.classList.remove('active'));
        
        // Tambahkan class 'active' ke item yang diklik
        this.classList.add('active');
})});

const popup = document.getElementById('popup');
const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');

// Ketika tombol ditekan, tampilkan popup dengan transisi
openPopup.addEventListener('click', function() {
    popup.classList.add('show');
});

// Ketika tombol close ditekan, sembunyikan popup dengan transisi
closePopup.addEventListener('click', function() {
    popup.classList.remove('show');
});

// Jika user mengklik di luar popup, tutup popup
window.addEventListener('click', function(event) {
    if (event.target == popup) {
        popup.classList.remove('show');
    }
});