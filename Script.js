const kata = [
    { indo: "apel", eng: "apple" },
    { indo: "pisang", eng: "banana" },
    // Tambahkan lebih banyak kata di sini
];

let indexKata = 0;

function pilihKataAcak() {
    indexKata = Math.floor(Math.random() * kata.length);
    document.getElementById("kataIndo").innerText = kata[indexKata].indo;
}

function cekJawaban() {
    const jawabanPengguna = document.getElementById("jawaban").value.toLowerCase();
    const jawabanBenar = kata[indexKata].eng.toLowerCase();

    if (jawabanPengguna === jawabanBenar) {
        alert("Benar!");
        pilihKataAcak();
    } else {
        alert("Salah! Coba lagi.");
    }
}

// Memanggil fungsi untuk menampilkan kata pertama
pilihKataAcak();