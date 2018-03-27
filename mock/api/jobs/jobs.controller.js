const jobsCategories = require('./jobs-category.mock');

exports.getCategories = function(req, res) {
  const levels = req.query.levels;
  const q = req.query.q;
  console.log(`levels: ${levels}, q: ${q}`);
  if (levels === 1) {
    res.send(jobsCategories.activitySector);
  } else {
    const nLevels = levels.split(',').map(val => +val);
    const filteredRome = jobsCategories._34.filter(r => nLevels.indexOf(r.level) !== -1 && new RegExp(q).test(r.label));
    res.send(filteredRome);
  }
};

