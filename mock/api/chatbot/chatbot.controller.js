const chatbotMock = require('./chatbot.mock');

exports.getNextQuestion = function(req, res) {
  const idForm = req.params.idForm;
  const slugSentence = +(req.body.slugSentence || 0);
  console.log(`Requested Form: ${idForm} with sentence: ${slugSentence}`);
  const nextQuestion = chatbotMock.getQuestionByIndex(slugSentence);
  const currentChoice = chatbotMock.getChoice(req.body.slugSentence, req.body.valueChoice);
  if (currentChoice && currentChoice.url) {
    res.status(200).send();
  } else if (nextQuestion) {
    setTimeout(() => res.send(nextQuestion), 500);
  } else if (slugSentence === 5) {
    res.status(200).send();
  } else {
    res.status(404).send();
  }
};
