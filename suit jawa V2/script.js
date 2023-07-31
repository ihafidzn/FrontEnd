function getPilihanComputer(){
    var c = Math.random();
    if (c <= 0.34) return 'gajah';
    if (c >= 0.34 && c < 0.66) return 'orang';
    return 'semut';
}

function getHasil(c, p){
    if (p == c) return 'SERII';
    if (p == 'gajah') return (c == 'orang') ? 'MENANG' : 'KALAH';
    if (p == 'orang') return (c == 'semut' ) ?'MENANG' : 'KALAH';
    if (p == 'semut') return (c == 'gajah') ? 'MENANG' : 'KALAH';
}

const pilihan = document.querySelectorAll('li img'); //membuat const pada element li lalu img
pilihan.forEach(function(pil) { 
    pil.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer,pilihanPlayer);

        const imgComputer = document.querySelector('.img-komputer');
        imgComputer.setAttribute('src','img/'+pilihanComputer+'.png');

        const info = document.querySelector('.info');
        info.innerHTML = hasil;
    });
});