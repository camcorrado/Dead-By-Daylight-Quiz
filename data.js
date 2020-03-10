const STORE = [
  {
    question: 'Who was the first Licensed Killer to be released for Dead By Daylight?',
    answers: [
      'The Cannibal',
      'The Nightmare',
      'The Pig',
      'The Shape'
      ],
    correctAnswer: 'The Shape',
    icon: 'https://i.imgur.com/TEcUh6h.png',
    audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Shape+Breathing.mp3',
    audio2: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Shape+Tier.mp3',
    alt: 'Michael Myers Artwork'
  },
  {
    question: 'Which Killer does not wear a mask?',
    answers: [
      'The Trapper',
      'The Nurse',
      'The Clown',
      'The Huntress'
      ],
      correctAnswer: 'The Clown',
      icon: 'https://i.imgur.com/CFlCcdu.png',
      audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Clown+Bottle.mp3',
      audio2: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Clown+Laugh.mp3',
      alt: 'The Clown Artwork'
  },
  {
    question: 'Which Survivor was taken by the Entity while onboard a train?',
    answers: [
      'Bill Overbeck',
      'Adam Francis',
      'Kate Denson',
      'Feng Min'
      ],
      correctAnswer: 'Adam Francis',
      icon: 'https://i.imgur.com/JDk7dfM.png',
      audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Adam.mp3',
      audio2: null,
      alt: 'Adam Francis Artwork'
  },
  {
    question: 'Of these perks, which is not a Hex?',
    answers: [
      'No One Escapes Death',
      'The Third Seal',
      'Thrill of the Hunt',
      'Dying Light'
      ],
    correctAnswer: 'Dying Light',
    icon: 'https://i.imgur.com/VARg20l.png',
    audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Jump+Scare.mp3',
    audio2: null,
    alt: 'Dying Light Perk Icon'
  },
  {
    question: 'Which Killer cannot become invisible?',
    answers: [
      'The Wraith',
      'The Hag',
      'The Nightmare',
      'The Spirit'
      ],
    correctAnswer: 'The Hag',
    icon: 'https://i.imgur.com/pXpeP8b.png',
    audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Hag+Sound.mp3',
    audio2: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Hag+Teleport.mp3',
    alt: 'The Hag Artwork'
  },
  {
    question: 'What type of aura does the perk Boil Over obscure?',
    answers: [
      'Palettes',
      'Survivors',
      'Generators',
      'Hooks'
      ],
    correctAnswer: 'Hooks',
    icon: 'https://i.imgur.com/RRpwdl0.png',
    audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Hook+Sabo.mp3',
    audio2: null,
    alt: 'Lunar New Year Hook Artwork'
  },
  {
    question: 'Who created Black Locks?',
    answers: [
    'Vigo',
    'The Entity',
    'Benedict Baker',
    'Alex'
    ],
    correctAnswer: 'Vigo',
    icon: 'https://i.imgur.com/r1ruMkt.png',
    audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Hatch.mp3',
    audio2: null,
    alt: 'The Hatch'
  },
  {
    question: 'Which Survivor was a pizza deliveryman before being taken by The Entity?',
    answers: [
      'David King',
      'Jake Park',
      'Dwight Fairfield',
      'Jeff Johansen'
    ],
    correctAnswer: 'Dwight Fairfield',
    icon: 'https://i.imgur.com/sta9JI5.png',
    audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Dwight.mp3',
    audio2: null,
    alt: 'Dwight Fairfield in his Pizza Delivery Skin'
  },
  {
    question: 'Which of these actions does not trigger Skill Checks?',
    answers: [
    'Repairing a Generator',
    'Cleansing a Totem',
    'Healing a Teammate',
    'Sabotaging a Hook'
    ],
    correctAnswer: 'Cleansing a Totem',
    icon: 'https://i.imgur.com/b0so6mb.png',
    audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Totem+Break.mp3',
    audio2: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Totem+Cleanse.mp3',
    alt: 'Hex Totem'
  },
  {
    question: 'Which Killer’s chapter is the only chapter to not release a Survivor?',
    answers: [
      'The Ghost Face',
      'The Cannibal',
      'The Doctor',
      'The Plague'
  ],
  correctAnswer: 'The Ghost Face',
  icon: 'https://i.imgur.com/HesUwqX.png',
  audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Ghostface.mp3',
  audio2: null,
  alt: 'Ghost Face Character Model Artwork'
  },
  {
    question: 'Which Killer is related to The Oni?',
    answers: [
      'The Nea',
      'The Plague',
      'The Spirit',
      'The Nightmare'
  ],
  correctAnswer: 'The Spirit',
  icon: 'https://i.imgur.com/ZRqVMZT.png',
  audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Spirit+Glass.mp3',
  audio2: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Spirit+Voice.mp3',
  alt: 'The Spirit Artwork'
  },
  {
    question: 'Camaraderie is a perk that belong to which character?',
    answers: [
      'The Demogorgon',
      'Steve Harrington',
      'Nancy Wheeler',
      'William "Bill" Overbeck'
  ],
  correctAnswer: 'Steve Harrington',
  icon: 'https://i.imgur.com/kyAQtAW.png',
  audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Stranger_Things_Theme_Music_.mp3',
  audio2: null,
  alt: 'Steve Harrington Artwork'
  },
  {
    question: 'Which of thes is not a voiceline for Ash Williams?',
    answers: [
      'What is this place?',
      'What now?',
      "Look who's shittin' in the tall grass.",
      'Catch ya on the flip-flop.'
  ],
  correctAnswer: 'Catch ya on the flip-flop',
  icon: 'https://i.imgur.com/rTFrhD1.png',
  audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Groovy.mp3',
  audio2: null,
  alt: 'Ash Williams Artwork'
  },
  {
    question: 'Which Killer perk can only be activated during the End Game Collapse?',
    answers: [
      'Blood Warden',
      'Cruel Limits',
      'Zanshin Tactics',
      'Rancor'
  ],
  correctAnswer: 'Blood Warden',
  icon: 'https://i.imgur.com/oZJ7K6P.png',
  audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Freddy+Glove.mp3',
  audio2: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Freddy+Laugh.mp3',
  alt: 'Blood Warden Perk Icon'
  },
  {
    question: 'Which perk does not cause the exhaustion status effect?',
    answers: [
      'Head On',
      'Balanced Landing',
      'Dead Hard',
      'Dance With Me'
  ],
  correctAnswer: 'Dance With Me',
  icon: 'https://i.imgur.com/cCwLBEJ.png',
  audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Kate+Scream.mp3',
  audio2: null,
  alt: 'Dance With Me Perk Icon'
  }
]