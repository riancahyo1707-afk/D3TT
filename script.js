function updateDateTime() {
    const now = new Date();

    // Format tanggal: DD-MM-YYYY
    const tanggal = now.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

    // Format waktu: HH:MM:SS
    const waktu = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    document.getElementById("tanggalSekarang").textContent = tanggal;
    document.getElementById("waktuSekarang").textContent = waktu;
}

// Update setiap 1 detik
setInterval(updateDateTime, 1000);
updateDateTime();



let praktikan = [];

// Render otomatis
function renderList() {
    const list = document.getElementById("praktikanList");
    list.innerHTML = "";

    praktikan.forEach((item, index) => {
        list.innerHTML += `
        <div class="card">
            <h4>${index + 1}. ${item.Nama}</h4>
            <p>NIM: ${item.NIM}</p>
        </div>
        `;
    });
}

// Ambil data JSON dari folder
fetch("assets/data.json")
    .then(response => response.json())
    .then(data => {
        praktikan = data;
        renderList();
    })
    .catch(error => console.error("Gagal memuat data.json", error));

// Tombol edit asisten
function editAssistant() {
    alert("Fitur edit asisten belum dibuat.");
}


