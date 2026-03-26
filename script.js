const container = document.getElementById('scroll-container');
const content = document.getElementById('scroll-content');

// 1. Kloning konten agar terlihat tidak terbatas (seamless)
const clone = content.cloneNode(true);
container.appendChild(clone);

let isPaused = false;
let speed = 1.15; // Kecepatan pixel per frame

function recycleElement() {
    const firstItem = content.firstElementChild;
    const itemHeight = firstItem.offsetHeight + parseFloat(getComputedStyle(content).gap);

    // Ji ka elemen teratas sudah benar-benar hilang dari pandangan (scrolled past)
    if (container.scrollTop >= itemHeight) {
        // Pindahkan elemen pertama ke akhir list
        content.appendChild(firstItem);
        // Reset posisi scroll agar transisi tidak melompat
        container.scrollTop -= itemHeight;
    }
}

function startAutoScroll() {
    if (!isPaused) {
        container.scrollTop += speed;

        // Jika sudah mencapai batas konten asli, reset ke atas tanpa terlihat
        recycleElement();
    }
    requestAnimationFrame(startAutoScroll);
}

// 2. Kontrol Jeda (Opsional: berhenti saat di-hover/sentuh)
container.addEventListener('mouseenter', () => isPaused = true);
container.addEventListener('mouseleave', () => isPaused = false);
container.addEventListener('touchstart', () => isPaused = true);
container.addEventListener('touchend', () => isPaused = false);

// Mulai animasi
startAutoScroll();

// ---------------------------------------------------------------------------------------------------------------------------------------------------
let hari = new Date().getDay();
let tanggal = new Date().getDate();
let bulan = new Date(). getMonth();
let tahun = new Date().getFullYear();
switch(hari){
    case 1:
        hari = 'Senin';
    break;
    case 2:
        hari = 'Selasa';
    break;
    case 3:
        hari = 'Rabu';
    break;
    case 4:
        hari = 'Kamis';
    break;
    case 5:
        hari = 'Jumat';
    break;
    case 6:
        hari = 'Sabtu';
    break;
    case 7:
        hari = 'Minggu';
    break;
    default:
        hari = null;
    break;
}

switch(bulan){
    case 1:
        bulan = "Januari";
    break;
    case 2:
        bulan = "Februari";
    break;
    case 3:
        bulan = "Maret";
    break;
    case 4:
        bulan = "April";
    break;
    case 5:
        bulan = "Mei";
    break;
    case 6:
        bulan = "Juni";
    break;
    case 7:
        bulan = "Juli";
    break;
    case 8:
        bulan = "Agustus";
    break;
    case 9:
        bulan = "September";
    break;
    case 10:
        bulan = "Oktober";
    break;
    case 11:
        bulan = "November";
    break;
    case 12:
        bulan = "Desember";
    break;
    default:
        bulan = null;
    break;
}
document.getElementById("date").innerHTML = hari + ", " + tanggal + " " + bulan + " " + tahun;

// -----------------------------------------------------------------------------------------------------------------------------
function tampilkanJam(){
    let jam = new Date().getHours();
    let menit = new Date().getMinutes();
    let detik = new Date().getSeconds();
    
    jam = (jam < 10) ? "0" + jam : jam;
    menit = (menit < 10) ? "0" + menit : menit;
    detik = (detik < 10) ? "0" + detik : detik;

    document.getElementById("time").innerHTML = jam + ":" + menit + ":" + detik; 
}
setInterval(tampilkanJam, 1000);
tampilkanJam();