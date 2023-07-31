const a = document.getElementById('tUbahWarna');
// const body = document.body;
a.addEventListener('click', function(){
    // document.body.style.backgroundColor = 'lightgrey';
    document.body.classList.toggle('background');
});

const tBaru = document.createElement('button'); // ^ membuat button
const teksBaru = document.createTextNode('Acak Warna') //^memberi nama button
tBaru.appendChild(teksBaru); //^menggabungkan button dengan nama button
tBaru.setAttribute('type', 'button'); //^memberikan attribute pada button
a.after(tBaru); //^menenmpatkan button setelah button 'ubah warna background'

tBaru.addEventListener('click',function(){
    const r = Math.round(Math.random() * 255 + 1); //&mengubah nialo secara random tidak lebih dari 255 dan kurang dari 1
    const g = Math.round(Math.random() * 255 + 1); //&mengubah nialo secara random tidak lebih dari 255 dan kurang dari 1
    const b = Math.round(Math.random() * 255 + 1); //&mengubah nialo secara random tidak lebih dari 255 dan kurang dari 1

    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'; 
});

const sRed = document.querySelector('input[name=sRed]'); //&membuat const input 
sRed.addEventListener('input',function(){ //& memasukan fungction ke dalam element html
    const r = sRed.value; //mengambil nilai value 
    document.body.style.backgroundColor = 'rgb('+r+',100,100)'; //^mengganti warna background pada body
});

const sGreen = document.querySelector('input[name=sGreen]'); //&membuat const input
sGreen.addEventListener('input',function(){ //& memasukan fungction ke dalam element html
    const r = sRed.value; //mengambil nilai value 
    const g = sGreen.value; //mengambil nilai value 
    document.body.style.backgroundColor = 'rgb('+r+','+g+',100)'; //^mengganti warna background pada body
});

const sBlue = document.querySelector('input[name=sBlue]'); //&membuat const input
sBlue.addEventListener('input',function(){ //& memasukan fungction ke dalam element html
    const r = sRed.value; //mengambil nilai value 
    const g = sGreen.value; //mengambil nilai value 
    const b = sBlue.value; //mengambil nilai value 
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'; //^mengganti warna background pada body
});

document.body.addEventListener('mousemove',function(event){
    const xPos = Math.round((event.clientX / window.innerWidth)*255);
    const yPos = Math.round((event.clientY / window.innerHeight)*255);
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)'; //^mengganti warna background pada body
});