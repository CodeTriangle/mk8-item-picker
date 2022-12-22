const items = [
    "banana x1",
    "banana x3",
    "green shell x1",
    "green shell x3",
    "red shell x1",
    "red shell x3",
    "blue shell",
    "bob-omb",
    "mushroom x1",
    "mushroom x3",
    "gold mushroom",
    "bullet bill",
    "blooper",
    "lightning",
    "star",
    "fire flower",
    "boomerang flower",
    "piranha plant",
    "super horn",
    "super 8",
    "coin",
    "boo",
];

function randInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

function select(low = 1, high = -1) {
  if (high < 0) {
    high = items.length;
  }

  low = Math.floor(low);
  high = Math.floor(high);

  let numItems = randInt(low, high);
  console.log(numItems);

  let sample = [];

  const itemsEnum = items.map((value, index) => {
    return [index, value];
  });

  for (let i = 0; i < numItems; i++) {
    let index = randInt(0, itemsEnum.length);
    sample.push(itemsEnum[index]);
    itemsEnum.splice(index, 1);
  }

  sample.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] == b[0]) {
      return 0;
    } else {
      return 1;
    }
  });

  return sample.map(item => item[1]);
}

document.getElementById("high").value = items.length;

document.getElementById("generate").onclick = (e) => {
  const list = document.getElementById("list");
  list.innerText = "";

  let selection = select(
    document.getElementById("low").value,
    document.getElementById("high").value
  );

  selection.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
};
