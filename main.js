const fs = require("fs");

let fluffy = fs.readFileSync("./problem1.json", "utf8");

fluffy = JSON.parse(fluffy);

fluffy.height = "21cm";
fluffy.weight = "10kg";

fluffy.name = "Fluffyy";

const actFriends = [];
fluffy.catFriends.forEach((cat) => {
  actFriends.push(cat);
  console.log(cat);
});

actFriends.forEach((cat) => {
  console.log(cat.name);
});

const totalWeight = actFriends.reduce((total, b) => {
  return b.weight + total;
}, 0);

console.log(totalWeight);

// console.log(fluffy.activities);

let activities = [fluffy.activities];
actFriends.forEach((cat) => {
  activities = [...activities, ...cat.activities];
});

console.log(activities);

actFriends.forEach((cat) => {
  cat.activities.push("meaw", "play");
  console.log(cat.activities);
});

actFriends[1].furcolor = "red";
