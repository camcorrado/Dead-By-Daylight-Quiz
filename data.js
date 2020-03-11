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
    audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Select+Item.mp3',
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
    audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Hatch%2BClose.mp3',
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
      'Look who\'s shittin\' in the tall grass.',
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
  },
  {
    question: 'How many generators spawn at the beginning of each match?',
    answers: [
      '7',
      '8',
      '6',
      '9'
  ],
  correctAnswer: '7',
  icon: 'https://i.imgur.com/5ZdAdS9.png',
  audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Generator+Completed.mp3',
  audio2: null,
  alt: 'Generator Artwork'
  },
  {
    question: 'How many seconds does it take for a Survivor to open an exit gate under normal conditions?',
    answers: [
      '20',
      '25',
      '30',
      '35'
  ],
  correctAnswer: '20',
  icon: 'https://i.imgur.com/ER1pFTg.png',
  audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Exit+Gate.mp3',
  audio2: null,
  alt: 'Escaped Game Artwork'
  },
  {
    question: 'Using which of these allows the Killer to kill a Survivor by their own hand?',
    answers: [
      'Judith\'s Tombstone',
      'Amanda\'s Letter',
      'Redhead\'s Pinky Finger',
      'Renjiro\'s Bloody Glove'
  ],
  correctAnswer: 'Judith\'s Tombstone',
  icon: 'https://i.imgur.com/eCX2dzL.png',
  audio: 'https://dbd-quiz.s3.us-east-2.amazonaws.com/Jump+Scare+2.mp3',
  audio2: null,
  alt: 'Judith\'s Tombstone Add-On Artwork'
  },
  {
    question: 'Which Killer is from the earliest time period?',
    answers: [
      'The Plague',
      'The Oni',
      'The Spirit',
      'The Wraith'
  ],
  correctAnswer: 'The Plague',
  icon: 'https://i.imgur.com/ty5dLfd.png',
  audio: '',
  audio2: null,
  alt: 'The Plague Artwork'
  },
  {
    question: 'Which Killer has multiple identities?',
    answers: [
      'The Legion',
      'The Wraith',
      'The Clown',
      'The Shape'
  ],
  correctAnswer: 'The Legion',
  icon: 'https://i.imgur.com/hAklzXJ.png',
  audio: '',
  audio2: null,
  alt: 'The Legion Artwork'
  },
  {
    question: 'What is the maximum amount of traps The Pig can have?',
    answers: [
      '5',
      '4',
      '6',
      '7'
  ],
  correctAnswer: '5',
  icon: 'https://i.imgur.com/gOql8Bj.png',
  audio: '',
  audio2: null,
  alt: 'The Pig Artwork'
  },
  {
    question: 'Which Killer is of Russian descent?',
    answers: [
      'The Huntress',
      'The Trapper',
      'The Doctor',
      'The Hag'
  ],
  correctAnswer: 'The Huntress',
  icon: 'https://i.imgur.com/rCoh1rv.png',
  audio: '',
  audio2: null,
  alt: 'The Huntress Artwork'
  },
  {
    question: 'What is the maximum number of blinks The Nurse can perform?',
    answers: [
      '3',
      '4',
      '2',
      '5'
  ],
  correctAnswer: '3',
  icon: 'https://i.imgur.com/Sn6JzBk.png',
  audio: '',
  audio2: null,
  alt: 'The Nurse Artwork'
  },
  {
    question: 'Which is not a Licensed Survivor?',
    answers: [
      'Quentin Smith',
      'William "Bill" Overbeck',
      'Jeffrey "Jeff" Johansen',
      'David Tapp'
  ],
  correctAnswer: 'Jeffrey "Jeff" Johansen',
  icon: 'https://i.imgur.com/BPq7oCM.png',
  audio: '',
  audio2: null,
  alt: 'Jeff Johansen Artwork'
  },
  {
    question: 'Which Survivor is the daughter of famous actress Loretta Lawrence?',
    answers: [
      'Jane Romero',
      'Kate Denson',
      'Claudette Morel',
      'Nea Karlsson'
  ],
  correctAnswer: 'Jane Romero',
  icon: 'https://i.imgur.com/mLNuVYR.png',
  audio: '',
  audio2: null,
  alt: 'Jane Romero Artwork'
  },
  {
    question: 'Which Survivor has a difficulty rating of "Easy?"',
    answers: [
      'Meg Thomas',
      'Jake Park',
      'Laurie Strode',
      'Nea Karlsson'
  ],
  correctAnswer: 'Meg Thomas',
  icon: 'https://i.imgur.com/QE5hz5x.png',
  audio: '',
  audio2: null,
  alt: 'Meg Thomas Artwork'
  },
  {
    question: 'Which character was featured in the first Archive Tome?',
    answers: [
      'Claudette Morel',
      'Dwight Fairfield',
      'The Hillbilly',
      'The Nurse'
  ],
  correctAnswer: 'Claudette Morel',
  icon: 'https://i.imgur.com/7l33RRa.png',
  audio: '',
  audio2: null,
  alt: 'Claudette Morel Artwork'
  },
  {
    question: 'Which Survivor released alongside The Nurse?',
    answers: [
      'Nea Karlsson',
      'Ace Visconti',
      'Feng Min',
      'Jake Park'
  ],
  correctAnswer: 'Nea Karlsson',
  icon: 'https://i.imgur.com/eHvSLyB.png',
  audio: '',
  audio2: null,
  alt: 'Nea Karlsson Artwork'
  },
  {
    question: 'Which Survivor is from the United Kingdom?',
    answers: [
      'David King',
      'Dwight Fairfield',
      'Ashley Williams',
      'Evan MacMillan'
  ],
  correctAnswer: 'David King',
  icon: 'https://i.imgur.com/gXb7MhO.png',
  audio: '',
  audio2: null,
  alt: 'David King Artwork'
  },
  {
    question: 'Which Survivor has a perk that effects chests?',
    answers: [
      'Quentin Smith',
      'Feng Min',
      'Adam Francis',
      'Nancy Wheeler'
  ],
  correctAnswer: 'Quentin Smith',
  icon: 'https://i.imgur.com/IocS2jC.png',
  audio: '',
  audio2: null,
  alt: 'Quentin Smith Artwork'
  },
  {
    question: 'Which Survivor is the son of a CEO?',
    answers: [
      'Jake Park',
      'Max Thompson Jr.',
      'Steve Harrington',
      'Ace Visconti'
  ],
  correctAnswer: 'Jake Park',
  icon: 'https://i.imgur.com/QBz8Flf.png',
  audio: '',
  audio2: null,
  alt: 'Jake Park Artwork'
  },
  {
    question: 'Which Survivor is known as a "Final Girl"',
    answers: [
      'Laurie Strode',
      'Nancy Wheeler',
      'Jane Romero',
      'Kate Denson'
  ],
  correctAnswer: 'Laurie Strode',
  icon: 'https://i.imgur.com/suBaGoI.png',
  audio: '',
  audio2: null,
  alt: 'Laurie Strode Artwork'
  },
  {
    question: 'Which Survivor is Argentinian',
    answers: [
      'Ace Visconti',
      'Jake Park',
      'Jane Romero',
      'Claudette Morel'
  ],
  correctAnswer: 'Ace Visconti',
  icon: 'https://i.imgur.com/ACQ54K8.png',
  audio: '',
  audio2: null,
  alt: 'Ace Visconti Artwork'
  },
  {
    question: 'Which of these alone can reveal the hatch?',
    answers: [
      'Left Behind',
      'Skeleton Key',
      'Map',
      'Windows of Opportunity'
  ],
  correctAnswer: 'Left Behind',
  icon: 'https://i.imgur.com/YdQXrpL.png',
  audio: '',
  audio2: null,
  alt: 'Left Behind Perk Artwork'
  },
  {
    question: 'Which character has received a skin originally created by the Dead By Daylight comminuty?',
    answers: [
      'Feng Min',
      'The Cannibal',
      'The Doctor',
      'Meg Thomas'
  ],
  correctAnswer: 'Feng Min',
  icon: 'https://i.imgur.com/qo58XU9.png',
  audio: '',
  audio2: null,
  alt: 'Feng Min Artwork'
  },
  {
    question: 'Which Survivor is a detective?',
    answers: [
      'David Tapp',
      'Quentin Smith',
      'Adam Francis',
      'Jane Romero'
  ],
  correctAnswer: 'David Tapp',
  icon: 'https://i.imgur.com/ONaPjKT.png',
  audio: '',
  audio2: null,
  alt: 'David Tapp Artwork'
  },
  {
    question: 'Which Survivor is quoted, "Let\'s burn that lab to the ground."',
    answers: [
      'Nancy Wheeler',
      'Steve Harrington',
      'Feng Min',
      'Adam Francis'
  ],
  correctAnswer: 'Nancy Wheeler',
  icon: 'https://i.imgur.com/a0BAV5B.png',
  audio: '',
  audio2: null,
  alt: 'Nancy Wheeler Artwork'
  },
  {
    question: 'Which Killer can have the undetectable status with the use of add-ons?',
    answers: [
      'The Demogorgon',
      'The Hag',
      'The Nightmare',
      'The Spirit'
  ],
  correctAnswer: 'The Demogorgon',
  icon: 'https://i.imgur.com/NpoQzee.png',
  audio: '',
  audio2: null,
  alt: 'The Demogorgon Artwork'
  },
  {
    question: 'Which Killer hails from the Coldwind Farm realm?',
    answers: [
      'The Hillbilly',
      'The Pig',
      'The Trapper',
      'The Huntress'
  ],
  correctAnswer: 'The Hillbilly',
  icon: 'https://i.imgur.com/7UJ4ZVL.png',
  audio: '',
  audio2: null,
  alt: 'The Hillbilly Artwork'
  },
  {
    question: 'Which Killer has an ability that negates the oblivious status effect?',
    answers: [
      'The Doctor',
      'The Nurse',
      'The Wraith',
      'The Plague'
  ],
  correctAnswer: 'The Doctor',
  icon: 'https://i.imgur.com/L2sMVke.png',
  audio: '',
  audio2: null,
  alt: 'The Doctor Artwork'
  },
  {
    question: 'Which Killer can suffer from the lightburn mechanic?',
    answers: [
      'The Wraith',
      'The Hag',
      'The Ghost Face',
      'The Nightmare'
  ],
  correctAnswer: 'The Wraith',
  icon: 'https://i.imgur.com/HIMjBCu.png',
  audio: '',
  audio2: null,
  alt: 'The Wraith Artwork'
  },
  {
    question: 'How many bear traps spawn on a map while playing The Trapper?',
    answers: [
      '5',
      '6',
      '7',
      '8'
  ],
  correctAnswer: '5',
  icon: 'https://i.imgur.com/3zk6WR9.png',
  audio: '',
  audio2: null,
  alt: 'The Trapper Artwork'
  },
  {
    question: 'Which Survivor is a musician?',
    answers: [
      'Kate Denson',
      'Claudette Morel',
      'Ace Visconti',
      'Jane Romero'
  ],
  correctAnswer: 'Kate Denson',
  icon: 'https://i.imgur.com/y7D6t3w.png',
  audio: '',
  audio2: null,
  alt: 'Kate Denson Artwork'
  }
]