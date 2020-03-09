'use strict'

function changeQuestionNumber () {
  let questionNumber = Number(document.getElementById('questionNumber').innerHTML)
  document.getElementById('questionNumber').innerHTML = questionNumber + 1
}

function updateScore () {
  let currentScore = Number(document.getElementById('scoreNumber').innerHTML)
  document.getElementById('scoreNumber').innerHTML = currentScore + 1
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

function audioWarning() {
  $('.warningButton').on('click', function () {
    $('.quizStart').fadeOut(1000, function () {
      runQuiz()
    })
    $('.music').html(`
      <audio id='audio' autoplay loop>
        <source src='https://dbd-quiz.s3.us-east-2.amazonaws.com/Main+Menu.mp3' type='audio/mp3' crossorigin='anonymous'>
      </audio>`)
  })
}

function runQuiz() {
  $('.quizStart').html(`
    <p class='important'>Think you have what it takes to survive the Fog?</p>
    <button type='button' class='startButton'>Enter the Fog</button>`)
  $('.quizStart').fadeIn(1000)
  shuffle(STORE)
  for (let i = 0; i < 10; i++) {
    shuffle(STORE[i]['answers'])
  }
  $('.score-tally').css({
    display: 'none'
  })
  $('.questionAnswerForm').css({
    display: 'none'
  })
  beginQuiz()
}

function beginQuiz() {
  $('.imagery').fadeOut(1000)
  $('.video').fadeOut(1000)
  $('.startButton').on('click', function () {
    $('.score-tally').html(`
      <ul>
        <li>Question: <span id='questionNumber'>0</span>/10</li>
        <li>Score: <span id='scoreNumber'>0</span></li>
      </ul>`)
    $('.audio').html(`
      <audio id='audio' autoplay>
        <source src='https://dbd-quiz.s3.us-east-2.amazonaws.com/Start.mp3' type='audio/mp3' crossorigin='anonymous'>
      </audio>`)
    $('.music').html(`
      <audio id='audio' autoplay loop>
        <source src='https://dbd-quiz.s3.us-east-2.amazonaws.com/Quiz+Background+Music.mp3' type='audio/mp3' crossorigin='anonymous'>
      </audio>`)
    $('.begin-prompt').fadeOut(1000, function () {
      $('.score-tally').fadeIn(1000)
      presentQuestion()
      submitAnswer()
    })
    $('.dbd-logo').animate({
      maxWidth: '50%',
      top: '0px'
      }, 1500)
    $('.game-title').animate({
      fontSize: '24px'
      }, 1500)
    $('.game-slogan').animate({
      fontSize: '16px'
      }, 1500)
  })
}

function presentQuestion() {
  $('.questionAnswerForm').fadeIn(1000)
  let questionNumber = document.getElementById('questionNumber').innerHTML
  if (questionNumber < STORE.length) {
    changeQuestionNumber()
    $('.questionAnswerForm').html(`
      <div class='question-${questionNumber}'>
        <p class='important'>${STORE[questionNumber].question}</p>
        <fieldset>
          <label for='answerOption1'>
            <input type='radio' value='${STORE[questionNumber].answers[0]}' id='answerOption1' name='answerOption' required>
            <span>${STORE[questionNumber].answers[0]}</span>
          </label>
          <label for='answerOption2'>
            <input type='radio' value='${STORE[questionNumber].answers[1]}' id='answerOption2' name='answerOption' required>
            <span>${STORE[questionNumber].answers[1]}</span>
          </label>
          <label for='answerOption3'>
            <input type='radio' value='${STORE[questionNumber].answers[2]}' id='answerOption3' name='answerOption' required>
            <span>${STORE[questionNumber].answers[2]}</span>
          </label>
          <label for='answerOption4'>
            <input type='radio' value='${STORE[questionNumber].answers[3]}' id='answerOption4' name='answerOption' required>
            <span>${STORE[questionNumber].answers[3]}</span>
          </label>
          <button type='submit' class='submitButton'>Submit</button>
        </fieldset>
      </div>`)   
  }
}

function submitAnswer() {
  $('.questionAnswerForm').on('click', '.submitButton', function () {
    event.preventDefault()
    let answerChosen = document.querySelector('input[name=answerOption]:checked')
    let selected = $('input:checked')
    let answer = selected.val()
    let questionNumber = Number(document.getElementById('questionNumber').innerHTML) - 1
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`
    if (answer === correctAnswer) {
        answerCorrect()
    } else if (!answerChosen) {
        noAnswer()
    } else {
        answerIncorrect()
    }
  })
}

function answerCorrect() {
  let questionNumber = Number(document.getElementById('questionNumber').innerHTML)
  $('.audioAnswer').html(`
    <audio id='audio' autoplay>
      <source src='https://dbd-quiz.s3.us-east-2.amazonaws.com/Correct.mp3' type='audio/mp3' crossorigin='anonymous'>
    </audio>`)
  if (questionNumber === 10) {
    $('.answerResponse').html(`
      <p class='important'>Correct. You survived this round...</p>
      <button type='submit' class='seeResults'>See Your Results</button>`)
    $('.questionAnswerForm').fadeOut(1000, function () {
      updateScore()
      $('.answerResponse').fadeIn(1000)
    })
    $('.seeResults').on('click', function () {
      $('.imagery').fadeOut(1000, function () {
        $('.imagery').html(``)
        results()
      })
      $('.questionAnswerForm').fadeOut(1000)
      $('.score-tally').fadeOut(1000)
    })
  } else {
    $('.answerResponse').html(`
      <p class='important'>Correct. You survived this round...</p>
      <button type='submit' class='nextQuestionButton'>Next Question</button>`)
    $('.questionAnswerForm').fadeOut(1000, function () {
      updateScore()
      $('.answerResponse').fadeIn(1000)
    })
  }
  setTimeout(presentImagery, 1000)
}

function answerIncorrect() {
  $('.audioAnswer').html(`
    <audio id='audio' autoplay>
      <source src='https://dbd-quiz.s3.us-east-2.amazonaws.com/Incorrect.mp3' type='audio/mp3' crossorigin='anonymous'>
    </audio>`)
  let questionNumber = Number(document.getElementById('questionNumber').innerHTML)
  let correctAnswer = `${STORE[questionNumber - 1].correctAnswer}`
  if (questionNumber === 10) {
  $('.answerResponse').html(`
    <p class='important'>Incorrect. Your heartbeat intensifies as the killer grows closers...</p>
    <p class='basicText'>The correct answer was: ${correctAnswer}</p>
    <button type='submit' class='seeResults'>See Your Results</button>`)
  $('.questionAnswerForm').fadeOut(1000, function () {
    $('.answerResponse').fadeIn(1000)
  })
  $('.seeResults').on('click', function () {
    $('.imagery').fadeOut(1000, function () {
      $('.imagery').html(``)
      results()
    })
    $('.questionAnswerForm').fadeOut(1000)
    $('.score-tally').fadeOut(1000)
  })
  } else {
    $('.answerResponse').html(`
      <p class='important'>Incorrect. Your heartbeat intensifies as the killer grows closers...</p>
      <p class='basicText'>The correct answer was: ${correctAnswer}</p>
      <button type='submit' class='nextQuestionButton'>Next Question</button>`)
    $('.questionAnswerForm').fadeOut(1000, function () {
      $('.answerResponse').fadeIn(1000)
    })
  }
  setTimeout(presentImagery, 1000)
}

function noAnswer() {
  $('.audioAnswer').html(`
    <audio id='audio' autoplay>
      <source src='https://dbd-quiz.s3.us-east-2.amazonaws.com/No+Answer+NEW.mp3' type='audio/mp3' crossorigin='anonymous'>
    </audio>`)
  let questionNumber = Number(document.getElementById('questionNumber').innerHTML)
  let correctAnswer = `${STORE[questionNumber - 1].correctAnswer}`
  if (questionNumber === 10) {
  $('.answerResponse').html(`
    <p class='important'>In the Fog, if you don't act, you die.</p>
    <p class='basicText'>The correct answer was: ${correctAnswer}</p>
    <button type='submit' class='seeResults'>See Your Results</button>`)
  $('.questionAnswerForm').fadeOut(1000, function () {
    $('.answerResponse').fadeIn(1000)
  })
  $('.seeResults').on('click', function () {
    $('.imagery').fadeOut(1000, function () {
      $('.imagery').html(``)
      results()
    })
    $('.questionAnswerForm').fadeOut(1000)
    $('.score-tally').fadeOut(1000)
  })
  } else {
    $('.answerResponse').html(`
      <p class='important'>In the Fog, if you don't act, you die.</p>
      <p class='important'>Try choosing an answer next round.</p>
      <p class='basicText'>The correct answer was: ${correctAnswer}</p>
      <button type='submit' class='nextQuestionButton'>Next Question</button>`)
    $('.questionAnswerForm').fadeOut(1000, function () {
      $('.answerResponse').fadeIn(1000)
    })
  }
  setTimeout(presentImagery, 1000)
}

function presentImagery() {
  let questionNumber = Number(document.getElementById('questionNumber').innerHTML)
  let imagery = `${STORE[questionNumber - 1].icon}`
  let alt = `${STORE[questionNumber - 1].alt}`
  let audio = `${STORE[questionNumber - 1].audio}`
  let audio2 = `${STORE[questionNumber - 1].audio2}`
  $('.imagery').html(`<img src='${imagery}' alt='${alt}' crossorigin='anonymous'>`)
  $('.imagery').fadeIn(1000)
  if (audio2 === 'null') {
    $('.audio').html(`
    <audio id='audio' autoplay>
      <source src='${audio}' type='audio/mp3' crossorigin='anonymous'>
    </audio>`)
  } else {
    $('.audio').html(`
    <audio id='audio' autoplay>
      <source src='${audio}' type='audio/mp3' crossorigin='anonymous'>
    </audio>
    <audio id='audio' autoplay>
      <source src='${audio2}' type='audio/mp3' crossorigin='anonymous'>
    </audio>`)
  }
  $('.nextQuestionButton').on('click', function () {
    $('.imagery').fadeOut(1000, function () {
      $('.imagery').html(``)
    })
    $('.answerResponse').fadeOut(1000)
    $('.nextQuestionButton').fadeOut(1000, function () {
      $('.questionAnswerForm').fadeIn(1000)
      presentQuestion()
    })
  })
}

function results() {
  $('.video').css({
    height: '100%'
  })
  $('.imagery').css({
    alignItems: 'center',
    justifyContent: 'center'
  })
  $('.music').html(`
    <audio id='audio' autoplay loop>
      <source src='https://dbd-quiz.s3.us-east-2.amazonaws.com/Survivor+Theme.mp3' type='audio/mp3' crossorigin='anonymous'>
    </audio>`)
  $('.imagery').html(`
    <img src='https://store-images.s-microsoft.com/image/apps.20660.64366672042187759.338407e0-1372-451a-8800-aae18d4c72c2.7f12d862-297e-46fb-9e3c-e49be610d740?mode=scale&q=90&h=1080&w=1920' alt='Main Trapper Branding' crossorigin='anonymous'>
    <a href='https://store.steampowered.com/app/381210/Dead_by_Daylight/' alt='Dead By Daylight on Steam' target='_blank'>Buy Dead By Daylight on Steam!</a>
    <a href='https://deadbydaylight.fandom.com/wiki/Dead_By_Daylight_Wikia' alt='Dead By Daylight Wikia' target='_blank'>Check out the Dead By Daylight Wikia to learn more!</a>
    <a href='https://forum.deadbydaylight.com/' alt='Dead By Daylight Forums' target='_blank'>Browse the Dead By Daylight Forums!</a>`)
  $('.video').html(`
    <iframe src='https://player.twitch.tv/?channel=tru3ta1ent' frameborder='0' scrolling='no' SameSite='None'></iframe>
    <a href='https://www.twitch.tv/directory/game/Dead%20by%20Daylight' alt='Dead By Daylight on Twitch' target='_blank'>Watch Dead By Daylight played live on Twitch!</a>
    <iframe src='https://www.youtube.com/embed/PqGzYaiiMlY' frameborder='0' SameSite='None' allow='accelerometer; gyroscope; picture-in-picture;'></iframe>
    <a href='https://www.youtube.com/channel/UCaSgsFdGbwjfdawl3rOXiwQ/videos' SameSite='None' alt='Dead By Daylight Official YouTube Channel' target='_blank'>Watch Dead By Daylight content on YouTube!<a>`)
  $('.imagery').fadeIn(1000)
  $('.video').fadeIn(1000)
  document.getElementById('questionNumber').innerHTML = '0'
  let finalScore = Number(document.getElementById('scoreNumber').innerHTML)
  $('.answerResponse').fadeOut(1000)
  if (finalScore >= 7) {
    winner()
  } else {
    loser()
  }
}

function winner() {
  let finalScore = parseInt(document.getElementById('scoreNumber').innerHTML)
  $('.questionAnswerForm').html(`
    <p class='important'>You Survived!</p>
    <p class='basicText'>${finalScore}/10</p>
    <a href='https://www.deadbydaylight.com/en/age-gate' alt='Dead By Daylight official webpage' target='_blank'>Learn more about Dead By Daylight<a>
    <button type='submit' class='retakeQuiz'>Take The Quiz Again!</button>`).fadeIn(1000)
  restartQuiz()
}

function loser() {
  let finalScore = parseInt(document.getElementById('scoreNumber').innerHTML)
  $('.questionAnswerForm').html(`
    <p class='important'>You were sacrificed to the Entity</p>
    <p class='basicText'>${finalScore}/10</p>
    <button type='submit' class='retakeQuiz'>Try Again</button>`).fadeIn(1000)
  restartQuiz()
}

function restartQuiz() {
  $('.retakeQuiz').on('click', function () {
    $('.audio').html(`
      <audio id='audio' autoplay>
        <source src='https://dbd-quiz.s3.us-east-2.amazonaws.com/Start.mp3' type='audio/mp3' crossorigin='anonymous'>
      </audio>`)
    $('.music').html(`
      <audio id='audio' autoplay loop>
        <source src='https://dbd-quiz.s3.us-east-2.amazonaws.com/Quiz+Background+Music.mp3' type='audio/mp3' crossorigin='anonymous'>
      </audio>`)
    $('.imagery').fadeOut(1000, function () {
      $('.imagery').css({
        alignItems: 'center',
        justifyContent: 'flex-end'
      })
    })
    $('.video').fadeOut(1000, function () {
      $('.video').css({
        height: '50%',
      })
    })
    shuffle(STORE)
    for (let i = 0; i < 10; i++) {
      shuffle(STORE[i]['answers'])
    }
    $('.imagery').fadeOut(1000)
    $('.questionAnswerForm').fadeOut(1000, function () {
      document.getElementById('scoreNumber').innerHTML = '0'
      $('.score-tally').fadeIn(1000)
      presentQuestion()
    })
  })
}

audioWarning()