const wishes = require('./wuensche.json');

const rooms = require('./zimmer.json');

const kids = require('./kids.json');

const createPlaceMent = function(kid, becauseOfWishOfKid, hasWishes) {
  return {
    kid: kid,
    becauseWishOfKid: becauseOfWishOfKid,
    hasWishes: hasWishes,
    wishGranted: false
  };
};

let kidsWishedBy = kids.map(kind => {
  return {
    kindName: kind.name,
    wishedBy: []
  };
});

const matchKids = (rooms, kids, wishes) => {
  //   const alreadyPlaced = [];

  wishes.forEach(kidWishes => {
    addKidsToWishedList(kidsWishedBy, kidWishes.wunsch1, kidWishes.kind);
    addKidsToWishedList(kidsWishedBy, kidWishes.wunsch2, kidWishes.kind);
  });

  kidsWishedBy = kidsWishedBy.sort((kidWishedBy1, kidWishedBy2) => {
    return kidWishedBy1.wishedBy.length >= kidWishedBy2.wishedBy.length ? 1 : -1;
  });

  rooms = rooms.sort((room1, room2) => {
    return room1.betten <= room2.betten ? 1 : -1;
  });
  rooms.forEach(room => {
    let numberOfBeds = room.betten;
    const placements = [];
    const firstkidWishedByLeastOthers = kidsWishedBy[0];
    const wishesByThatKid = wishes.find(wishByKid => {
      return wishByKid.kind === firstkidWishedByLeastOthers.kindName;
    });

    placements.push(
      createPlaceMent(firstkidWishedByLeastOthers.kindName, null, [wishesByThatKid.wunsch1, wishesByThatKid.wunsch2])
    );
    numberOfBeds--;
    while (numberOfBeds > 0) {
      numberOfBeds--;
    }
    // const
  });
};

const addKidsToWishedList = function(kidsWishedBy, gewuenschtesKind, wishedBy) {
  kidsWishedBy
    .find(kindGewuenscht => {
      return kindGewuenscht.kindName === gewuenschtesKind;
    })
    .wishedBy.push(wishedBy);
};

const matched = matchKids(rooms, kids, wishes);

console.log(matched);
