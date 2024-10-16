// JavaScript untuk slider berita terbaru
let currentIndex = 0;
const sliderContainer = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slider-item');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
});

function updateSlider() {
    const offset = -currentIndex * 210; // 200px width + 10px margin
    sliderContainer.style.transform = `translateX(${offset}px)`;
}

// JavaScript untuk slider iklan yang menampilkan 1 gambar pada satu waktu
let currentAdIndex = 0;
const adSliderContainer = document.querySelector('.slider-wrapper');
const adSlides = document.querySelectorAll('.slider-item');
const totalAdSlides = adSlides.length;

document.getElementById('next').addEventListener('click', () => {
    currentAdIndex = (currentAdIndex + 1) % totalAdSlides;
    updateAdSlider();
});

document.getElementById('prev').addEventListener('click', () => {
    currentAdIndex = (currentAdIndex - 1 + totalAdSlides) % totalAdSlides;
    updateAdSlider();
});

function updateAdSlider() {
    const offset = -currentAdIndex * 300; // Geser sebesar lebar satu gambar (300px)
    adSliderContainer.style.transform = `translateX(${offset}px)`;
}


// Menambahkan event listener untuk item navigasi
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        // Menghapus kelas active dari semua link
        document.querySelectorAll('nav ul li a').forEach(item => {
            item.classList.remove('active');
        });
        // Menambahkan kelas active ke link yang diklik
        this.classList.add('active');
    });
});
