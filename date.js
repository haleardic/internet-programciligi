let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    dayNumber = date.getDay()

// 4 Aralık 2024, çarşamba, 14:15
let months = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
]

console.log( months.length) // 12
console.log( months[11])

let days = [
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
    'Pazar'
]
let humanReadableDatw = `${day} ${months[month]} ${year}, ${days[dayNumber]} ${hour}:${minute}:${second}`
console.log(humanReadableDatw)
