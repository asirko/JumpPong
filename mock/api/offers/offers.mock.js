const offers = [
  {
    label: 'a',
    description: 'a',
    rome: {
      slug: 'A-11-01-17055',
      level: 5,
      label: 'Opérateur / Opératrice d\'abatteuse'
    },
    postalCode: '81000',
    city: 'Albi',
    state: 'ACTIVE',
    creationDate: new Date(),
    id: 1,
    degreeSlug: 'BAC',
    languages: [
      {
        languageSlug: 'english',
        languageSkillSlug: 'SCHOLAR'
      },
      {
        languageSlug: 'french',
        languageSkillSlug: 'FLUENT'
      }
    ],
    durationSlug: '2year',
    attitude: {}
  }, {
    label: 'b',
    description: 'b',
    rome: {
      slug: 'A-11-01-12862',
      level: 5,
      label: 'Conducteur / Conductrice d\'abatteuses'
    },
    postalCode: '81000',
    city: 'Albi',
    state: 'DRAFT',
    id: 2
  }
];

function findNextIndex() {
  const maxIndex = offers.reduce((accu, val) => val.id > accu ? val.id : accu, 0);
  return maxIndex + 1;
}

exports.upsert = function (offer) {
  if (offer.id) {
    console.log(`Updating the offer ${offer.id} of state ${offer.state}`);
    const indexToUpdate = offers.indexOf(offers.find(o => o.id === offer.id));
    offers[indexToUpdate] = offer;
  } else {
    offer.id = findNextIndex();
    console.log(`Creating the offer ${offer.id} of state ${offer.state}`);
    offers.push(offer);
  }

  return offer;
};

exports.getVisibleOffers = function () {
  console.log(`${offers.length} offers retrieved`);
  return offers.sort(o => o.state === 'DRAFT' ? 1 : -1);
};

exports.getById = function (id) {
  return offers.find(o => o.id === id);
};
