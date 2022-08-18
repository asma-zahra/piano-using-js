const allPianoKeys = document.querySelectorAll('.key');

function playSound(newMp3Url){
    console.log(newMp3Url);
    
    // new Audio('24-piano-keys/key02.mp3').play();
    // we donot want only key02 play on each key click
    // we have to loop mp3 keys as well so that 01 key to 27key rings on eack key of piano
    // 24-piano-keys/key02.mp3 -> in this url only 02 replace with number we will change 01 to 27 using for each loop
    // and we will get newMp3Url. pass url to playsound call back function...then from there it will be pass as parameter in playSound fuction
    // from there playsound function newMp3Url will be used in Audio function.
    // url callback me sbse pahle isliye ja raha bcz url ka number index use krke loop hona hai
    new Audio(newMp3Url).play();

}

allPianoKeys.forEach((eachpianokey, i) =>{
    const number = i < 9 ? '0'+(i+1) : (i+1);
    console.log(number);
    // bcz i index start from zero we dont have 0 key so to make 0 key 01 we have to do i+1 to 0 if number is less than 9 otherwise bigger than 9 i+1 means 10 beacome 11
    // index is used in number so it will lopp also from 01 t0 27
    const newMp3Url = '24-piano-keys/key'+number+'.mp3';
    console.log(newMp3Url);
    eachpianokey.addEventListener('click', ()=> playSound(newMp3Url))

})