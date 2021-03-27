let namahari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']

function setTime(){
    let date = new Date()
    let hours = date.getHours().toLocaleString('id-ID',{minimumIntegerDigits: 2})
    let minutes = date.getMinutes().toLocaleString('id-ID',{minimumIntegerDigits: 2})
    let second = date.getSeconds().toLocaleString('id-ID',{minimumIntegerDigits: 2})
    let day = date.getDate().toLocaleString('id-ID',{minimumIntegerDigits: 2})
    let month = date.toLocaleString('id-ID', { month : 'long' })
    let year = date.getFullYear()

    let setJam = hours + " : " +minutes+" : "+second
    const setDate = namahari[date.getDay()]+', '+ day+" "+month+" "+year

    document.getElementById('hours').innerHTML = setJam
    document.getElementById('tanggal').innerHTML = setDate

    setTimeout('setTime()',1000)
}

setTime()