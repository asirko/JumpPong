
const questions = [
  {
    slugSentence: '1',
    anieSentence: '<span class="firstConnexion">Bonjour et bienvenue sur ANIE cher Recruteur ! </span> Question initial buttons', // might contain HTML tag (link?)
    type: 'buttons',
    choices: [
      { slug: 'a', label: 'Rep A' },
      { slug: 'b', label: 'Rep B', url: '/user' }
    ]
  }, {
    slugSentence: '2',
    anieSentence: 'Deuxième question, selectList', // might contain HTML tag (link?)
    type: 'selectList',
    choices: [
      { slug: 'a', label: 'Rep A' },
      { slug: 'b', label: 'Rep B' },
      { slug: 'c', label: 'Rep C' },
      { slug: 'd', label: 'Rep D' },
      { slug: 'e', label: 'Rep E' },
      { slug: 'f', label: 'Rep F' }
    ]
  }, {
    slugSentence: '3',
    anieSentence: 'Troisième question, postalCode', // might contain HTML tag (link?)
    type: 'postalCode',
    choices: []
  }, {
    slugSentence: '4',
    anieSentence: 'Quatrième question, rome', // might contain HTML tag (link?)
    type: 'rome',
    choices: []
  }, {
    slugSentence: '5',
    anieSentence: 'Dernière quesion', // might contain HTML tag (link?)
    type: 'buttons',
    choices: [
      { slug: 'urlA', label: 'URL va sur /home', url: '/home' },
      { slug: 'urlB', label: 'URL va sur /user', url: '/user' },
    ]
  }
];

exports.getQuestionByIndex = function (index) {
  return questions[index];
};

exports.getChoice = function (slugSentence, slugChoice) {
  const question = questions.find(q => q.slugSentence === slugSentence);
  const choice = question && question.choices.find(c => c.slug === slugChoice);
  return choice;
};
