// ======================//
// Varaibles & Constants //
// ======================//

// Main-Container
let mainContainer = document.getElementById('Main-Container');

// Name Box varaibles
let nameBox = document.getElementById('name-box')
let nameInp = document.getElementById('name');
let submit = document.getElementById('submit');
let closeBtn = document.getElementById('close-btn');
let errorMsg = document.getElementById('error').firstElementChild;
let bgBlur = document.getElementById('background-blur');

// home Page Varaibles
let homePage = document.getElementById('home-page');
let playBtn = document.getElementById('play');
let quitBtn = document.getElementById('quit');

// Waiting box varaibles
let waitingBox = document.getElementById('waiting-box');

// playing-Screen
let playingSceen = document.getElementById('playing-Screen');
let gostBox = document.getElementById('gost-box');

// Musics constants
const bgSound = new Audio('sound/background-sound.mp3');
const nightmareSound = new Audio('sound/gost-sound.mp3');
const clickSound = new Audio('sound/click.mp3');
const footStepSound = new Audio('sound/footstep.mp3');

// User Passed value Varaibles
let userName = document.getElementById('name');






(function (){

// PlayBtn Fun
    playBtn.onclick=function(){
        clickSound.play();
        waitingBox.style.scale = "1";
        homePage.style.display = 'none';

        if(bgSound.play()){
            bgSound.pause();
        }

        // local Varaibles
        let wait = document.getElementById('wait');
        let gost = document.getElementById('gost');

        function one(){
            wait.innerHTML = `${userName.value} Wait.`;
        }setTimeout(one,0);
        function two(){
            wait.innerHTML = `${userName.value} Wait..`;
        }setTimeout(two,500);
        function three(){
            wait.innerHTML = `${userName.value} Wait...`;
        }setTimeout(three,1000);
        function four(){
            wait.innerHTML = `${userName.value} Wait.`;
        }setTimeout(four,1500);
        function five(){
            wait.innerHTML = `${userName.value} Wait..`;
        }setTimeout(five,2000);
        function six(){
            wait.innerHTML = `${userName.value} Wait...`;
        }setTimeout(six,2500);
        function seven(){
            wait.innerHTML = `${userName.value} Wait.`;
        }setTimeout(seven,3000);
        function eight(){
            wait.innerHTML = `${userName.value} Wait..`;
        }setTimeout(eight,3500);
        function nine(){
            wait.innerHTML = `${userName.value} Wait...`;
        }setTimeout(nine,4000);

        function ten(){
            mainContainer.style.display = 'none';
            playingSceen.style.display = 'block';
            footStepSound.play();
            playingSceen.firstElementChild.play();
            
            
        }setTimeout(ten,4500);
        function eleven(){
            gostBox.style.display = 'block';
            
        }setTimeout(eleven,4500);

        function twelve(){
            mainContainer.style.display = 'none';
            playingSceen.style.display = 'none';
            playingSceen.firstElementChild.pause();
            gostBox.firstElementChild.style.scale = '3';
            footStepSound.pause();
            nightmareSound.play()
            
            
        }setTimeout(twelve,12000);

    }










    // Submit Fun
    submit.onclick=function(){
    clickSound.play();
        if(nameInp.value.length == 0){
                errorMsg.innerHTML = 'Please Enter Your Name !';
                errorMsg.style.color = 'hwb(0 27% 15%)'
        }else{
                nameBox.style.cssText += 'display: none;';
                bgSound.play()
                bgSound.loop = true;
                bgBlur.style.display = 'none';
        }
    }

    // CloseBtn Fun
    closeBtn.onclick=function(){
    clickSound.play();
        nameBox.style.cssText += 'display: none;';
        bgSound.play()
        bgSound.loop = true;
        bgBlur.style.display = 'none';
    }

    // QuitBtn Fun
    quitBtn.onclick=function(){
    clickSound.play();
    }





















})();