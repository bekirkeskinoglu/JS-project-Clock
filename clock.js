let fullname = prompt("Lütfen Adınızı Giriniz:")
let myName = document.querySelector("#myName")
myName.innerHTML = `${myName.innerHTML} <small style="color:orange">${fullname}</small>`

function updateDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Aylar 0-11 arasında olduğu için +1 ekliyoruz
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const dateString = `${day}/${month}/${year}`;
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('myClock').textContent = `Tarih: ${dateString} - Saat: ${timeString}`;
}

// Saati her saniye güncelle
setInterval(updateDateTime, 1000);

// Sayfa yüklendiğinde hemen tarih ve saati göster
updateDateTime();