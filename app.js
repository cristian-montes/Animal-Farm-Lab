
// ANIMAL NOISES WITH KEYS
document.addEventListener('keydown', function(e){
    if (e.key === 'H'){
        document.getElementById('horse-sound').play();
    } if (e.key === 'D'){
        document.getElementById('dog-sound').play();
    } if (e.key === 'C'){
        document.getElementById('cat-sound').play();
    }
});




// CAT
// const catSound = document.getElementById('cat-sound');
// const cat = document.getElementById('cat');
 
// cat.addEventListener('click', () => {
//     catSound.play();
// });

// DOG
// const dogSound = document.getElementById('dog-sound');
// const dog = document.getElementById('dog');
 
// dog.addEventListener('click', () => {
//     dogSound.play();
// });

// HORSE
//const horseSound = document.getElementById('horse-sound');
// const horse = document.getElementById('horse');
 
// horse.addEventListener('click', () => {
//     horseSound.play();
// })