var scorres, roundscore, activeplayer, dice;

scorres = [0,0];
roundscore = 0;
activeplayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';



document.querySelector('.btn-roll').addEventListener('click', function(){
      // do some thing
      //1. random number
      var  dice = Math.floor(Math.random() * 6) + 1;
     


      //2.display the reuslt
      var diceDom = document.querySelector('.dice')
      diceDom.style.display = 'block';
      diceDom.src = 'dice-' + dice + '.png'



      //3. update the round score if the rolled number was not a 1
      if (dice !== 1){
          //add score
          roundscore += dice;
         document.querySelector('#current-' + activeplayer).textContent = roundscore;

      }
      else{
          //nextplayer
          activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
          roundscore = 0;

          document.getElementById('current-0').textContent = '0';
          document.getElementById('current-1').textContent = '0';

          document.querySelector('.player-0-panel').classList.toggle('active');
          document.querySelector('.player-1-panel').classList.toggle('active');


         // document.querySelector('.player-0-panel').classList.remove('active');
          //document.querySelector('.player-1-panel').classList.add('active');

          document.querySelector('.dice').style.display = 'none';


      }



});


document.querySelector('.btn-hold').addEventListener('click',function() {
    //add current score to global socre
    scores[activeplayer] += roundscore;

    //update the ui
    document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer];

    //ceck if player won the mathc
    if (scores[activeplayer] >= 20) {
        document.querySelector('#name-' + activeplayer).textContent = 'Winner!'
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activeplayer + '-panel').classList.remove('winner');

    }
     else{
         
    //nextplyer
    nextplayer();
     }
});




function nextplayer() {
    //next player
        //nextplayer
        activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
        roundscore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');


       // document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.dice').style.display = 'none';

}







//document.querySelector('#current-' + activeplayer).textContent = dice;
//document.querySelector('#current-' + activeplayer).innerHTML = '<em>' + dice + '</em>';


//var x = document.querySelector('#score-0').textContent;