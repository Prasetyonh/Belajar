let namahari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']

function setWaktu(){
    let date = new Date()
    let jam = date.getHours().toLocaleString('id-ID',{minimumIntegerDigits: 2})
    let menit = date.getMinutes().toLocaleString('id-ID',{minimumIntegerDigits: 2})
    let detik = date.getSeconds().toLocaleString('id-ID',{minimumIntegerDigits: 2})
    let tgl = date.getDate().toLocaleString('id-ID',{minimumIntegerDigits: 2})
    let bulan = date.toLocaleString('id-ID', { month : 'long' })
    let tahun = date.getFullYear()

    let setJam = jam + " : " +menit+" : "+detik
    const setTanggal = namahari[date.getDay()]+', '+ tgl+" "+bulan+" "+tahun

    document.getElementById('jam').innerHTML = setJam
    document.getElementById('tanggal').innerHTML = setTanggal

    setTimeout('setWaktu()',1000)
}

setWaktu()