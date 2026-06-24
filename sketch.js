//----------------
//Engine Variables
//----------------
let mouse;
const tileWidth = 53;
const tileHeight = 32;
const tileAngle = (50 * Math.PI) / 180;
const dayNightLength = 4000;
const twilightLength = 3000;
let starCoords = [];
let tileCoords = [];
let tileData = [];
let cropGrowthData = [];
let cloudData = [];
let coinAnimation = [];
let popupAnimation = [];
let dayColour;
let sunsetColour;
let nightColour;
let sunriseColour;
const gradient = 100;
let w = 650;
let h = 600;
let mouseDownTime = 0;
let selectedTile;
let growthWaitTime = 90;
let tileToGrow;
let mouseHoverTime = 0;
let iconRow;
let iconColumn;
let islandpos = { x: 250, y: 250 };
let coinsString;
let coinsDigits;
let shopOpen = false;
let shopAnimationFrame = 0;
let shopRow1;
let shopRow2;
let shopRow3;
let toolsList;
let seedsList;
let eggTimer;
let winFade = 0;
//--------------
//Game Variables
//--------------
let coins = 0;
let seedsUnlocked;
let toolsUnlocked;
let buildingsUnlocked;
let currentSeed;
let currentTool;

function preload() {
  t00 = loadImage("Images/00.png");
  t01 = loadImage("Images/01.png");
  t02 = loadImage("Images/02.png");
  t03 = loadImage("Images/03.png");
  t04 = loadImage("Images/04.png");
  t05 = loadImage("Images/05.png");
  t06 = loadImage("Images/06.png");
  t05l = loadImage("Images/05l.png");
  t05r = loadImage("Images/05r.png");
  tcoop0 = loadImage("Images/coop.png");
  tcoop1 = loadImage("Images/coop.2.png");
  tsilo = loadImage("Images/silo.png");

  twheat0 = loadImage("Images/wheat0.png");
  twheat1 = loadImage("Images/wheat.1.png");
  twheat2 = loadImage("Images/wheat.2.png");
  twheat3 = loadImage("Images/07.png");

  tcarrot0 = loadImage("Images/carrot0.png");
  tcarrot1 = loadImage("Images/carrot.1.png");
  tcarrot2 = loadImage("Images/carrot.2.png");
  tcarrot3 = loadImage("Images/08.png");

  ttree0 = loadImage("Images/10.png");
  ttree1 = loadImage("Images/apple.2.png");
  ttree2 = loadImage("Images/apple.1.png");
  ttree3 = loadImage("Images/apple.3.png");

  harvest01 = loadImage("Images/harvest01.png");
  harvest02 = loadImage("Images/harvest02.png");
  harvest03 = loadImage("Images/harvest03.png");
  harvest04 = loadImage("Images/harvest04.png");
  harvest05 = loadImage("Images/harvest05.png");
  harvest06 = loadImage("Images/harvest06.png");
  harvest07 = loadImage("Images/harvest07.png");
  harvest08 = loadImage("Images/harvest08.png");
  harvest09 = loadImage("Images/harvest09.png");
  harvest10 = loadImage("Images/harvest10.png");
  harvest11 = loadImage("Images/harvest11.png");
  harvest12 = loadImage("Images/harvest12.png");
  harvest13 = loadImage("Images/harvest13.png");
  harvest14 = loadImage("Images/harvest14.png");
  harvest15 = loadImage("Images/harvest15.png");

  hoe01 = loadImage("Images/hoe01.png");
  hoe02 = loadImage("Images/hoe02.png");
  hoe03 = loadImage("Images/hoe03.png");
  hoe04 = loadImage("Images/hoe04.png");
  hoe05 = loadImage("Images/hoe05.png");
  hoe06 = loadImage("Images/hoe06.png");
  hoe07 = loadImage("Images/hoe07.png");
  hoe08 = loadImage("Images/hoe08.png");
  hoe09 = loadImage("Images/hoe09.png");
  hoe10 = loadImage("Images/hoe10.png");
  hoe11 = loadImage("Images/hoe11.png");
  hoe12 = loadImage("Images/hoe12.png");
  hoe13 = loadImage("Images/hoe13.png");
  hoe14 = loadImage("Images/hoe14.png");
  hoe15 = loadImage("Images/hoe15.png");

  plant01 = loadImage("Images/plant01.png");
  plant02 = loadImage("Images/plant02.png");
  plant03 = loadImage("Images/plant03.png");
  plant04 = loadImage("Images/plant04.png");
  plant05 = loadImage("Images/plant05.png");
  plant06 = loadImage("Images/plant06.png");
  plant07 = loadImage("Images/plant07.png");
  plant08 = loadImage("Images/plant08.png");
  plant09 = loadImage("Images/plant09.png");
  plant10 = loadImage("Images/plant10.png");
  plant11 = loadImage("Images/plant11.png");
  plant12 = loadImage("Images/plant12.png");
  plant13 = loadImage("Images/plant13.png");
  plant14 = loadImage("Images/plant14.png");
  plant15 = loadImage("Images/plant15.png");

  scythe01 = loadImage("Images/scythe01.png");
  scythe02 = loadImage("Images/scythe02.png");
  scythe03 = loadImage("Images/scythe03.png");
  scythe04 = loadImage("Images/scythe04.png");
  scythe05 = loadImage("Images/scythe05.png");
  scythe06 = loadImage("Images/scythe06.png");
  scythe07 = loadImage("Images/scythe07.png");
  scythe08 = loadImage("Images/scythe08.png");
  scythe09 = loadImage("Images/scythe09.png");
  scythe10 = loadImage("Images/scythe10.png");
  scythe11 = loadImage("Images/scythe11.png");
  scythe12 = loadImage("Images/scythe12.png");
  scythe13 = loadImage("Images/scythe13.png");
  scythe14 = loadImage("Images/scythe14.png");
  scythe15 = loadImage("Images/scythe15.png");

  basket01 = loadImage("Images/basket01.png");
  basket02 = loadImage("Images/basket02.png");
  basket03 = loadImage("Images/basket03.png");
  basket04 = loadImage("Images/basket04.png");
  basket05 = loadImage("Images/basket05.png");
  basket06 = loadImage("Images/basket06.png");
  basket07 = loadImage("Images/basket07.png");
  basket08 = loadImage("Images/basket08.png");
  basket09 = loadImage("Images/basket09.png");
  basket10 = loadImage("Images/basket10.png");
  basket11 = loadImage("Images/basket11.png");
  basket12 = loadImage("Images/basket12.png");
  basket13 = loadImage("Images/basket13.png");
  basket14 = loadImage("Images/basket14.png");
  basket15 = loadImage("Images/basket15.png");

  noseed = loadImage("Images/noseed.png");
  wheat = loadImage("Images/wheat.png");
  carrot = loadImage("Images/carrot.png");
  tree = loadImage("Images/tree.png");
  notool = loadImage("Images/notool.png");
  hoe = loadImage("Images/hoe.png");
  scythe = loadImage("Images/scythe.png");
  basket = loadImage("Images/basket.png");
  shop = loadImage("Images/shop.png");
  shopseed = loadImage("Images/shopseed.png");
  shoptool = loadImage("Images/shoptool.png");
  shopbuilding = loadImage("Images/shopbuilding.png");
  shopwheat = loadImage("Images/shopwheat.png");
  shopcarrot = loadImage("Images/shopcarrot.png");
  shoptree = loadImage("Images/shoptree.png");
  shophoe = loadImage("Images/shophoe.png");
  shopscythe = loadImage("Images/shopscythe.png");
  shopbasket = loadImage("Images/shopbasket.png");
  shopsilo = loadImage("Images/shopsilo.png");
  shopcoop = loadImage("Images/shopcoop.png");
  shopboat = loadImage("Images/shopboat.png");
  shopsold = loadImage("Images/shopsold.png");

  digit0 = loadImage("Images/digit0.png");
  digit1 = loadImage("Images/digit1.png");
  digit2 = loadImage("Images/digit2.png");
  digit3 = loadImage("Images/digit3.png");
  digit4 = loadImage("Images/digit4.png");
  digit5 = loadImage("Images/digit5.png");
  digit6 = loadImage("Images/digit6.png");
  digit7 = loadImage("Images/digit7.png");
  digit8 = loadImage("Images/digit8.png");
  digit9 = loadImage("Images/digit9.png");

  coin1 = loadImage("Images/coin1.png");
  coin2 = loadImage("Images/coin2.png");
  coin3 = loadImage("Images/coin3.png");
  coin4 = loadImage("Images/coin4.png");
  coin5 = loadImage("Images/coin5.png");
  coin6 = loadImage("Images/coin6.png");
  cloud1 = loadImage("Images/cloud.1.png");
  cloud2 = loadImage("Images/cloud.2.png");
  cloud3 = loadImage("Images/cloud.3.png");

  win = loadImage("Images/win.png");
  cont = loadImage("Images/continue.png");
}
function ALLTHEDATA() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
      tileCoords.push(
        topTile(
          islandpos.x + j * tileWidth - i * tileHeight * Math.cos(tileAngle),
          islandpos.y + i * tileHeight * Math.sin(tileAngle)
        )
      );
    }
    tileCoords.push(
      sideTile(
        islandpos.x + 4 * tileWidth - i * tileHeight * Math.cos(tileAngle),
        islandpos.y + i * tileHeight * Math.sin(tileAngle)
      )
    );
  }
  for (let i = 0; i < 4; i++) {
    tileCoords.push(
      frontTile(
        islandpos.x + i * tileWidth - 5 * tileHeight * Math.cos(tileAngle),
        islandpos.y + 5 * tileHeight * Math.sin(tileAngle)
      )
    );
  }
  tileCoords.push(
    frontCornerTile(
      islandpos.x + 4 * tileWidth - 5 * tileHeight * Math.cos(tileAngle),
      islandpos.y + 5 * tileHeight * Math.sin(tileAngle)
    )
  );
  for (let i = 1; i <= 30; i++) {
    cropGrowthData.push(null);
  }

  tileData = [
    t02,
    t00,
    t04,
    t05,
    t01,
    t01,
    t00,
    t00,
    t01,
    t02,
    t01,
    t03,
    t00,
    t02,
    t01,
    t00,
    t02,
    t01,
    t02,
    t01,
    t01,
    t04,
    t00,
    t03,
    t02,
    t00,
    t00,
    t01,
    t02,
    t00,
  ];

  starCoords = [
    { x: 89, y: 90 },
    { x: 85, y: 197 },
    { x: 162, y: 112 },
    { x: 149, y: 241 },
    { x: 260, y: 151 },
    { x: 196, y: 40 },
    { x: 44, y: 42 },
    { x: 14, y: 231 },
    { x: 129, y: 311 },
    { x: 55, y: 355 },
    { x: 130, y: 460 },
    { x: 104, y: 387 },
    { x: 81, y: 461 },
    { x: 147, y: 437 },
    { x: 102, y: 460 },
    { x: 96, y: 427 },
    { x: 49, y: 456 },
    { x: 52, y: 443 },
    { x: 34, y: 396 },
    { x: 39, y: 333 },
    { x: 14, y: 498 },
    { x: 80, y: 545 },
    { x: 92, y: 607 },
    { x: 109, y: 546 },
    { x: 67, y: 543 },
    { x: 80, y: 535 },
    { x: 110, y: 487 },
    { x: 130, y: 479 },
    { x: 74, y: 499 },
    { x: 63, y: 515 },
    { x: 41, y: 566 },
    { x: 30, y: 580 },
    { x: 70, y: 567 },
    { x: 70, y: 545 },
    { x: 49, y: 513 },
    { x: 46, y: 512 },
    { x: 20, y: 537 },
    { x: 13, y: 555 },
    { x: 20, y: 559 },
    { x: 47, y: 522 },
    { x: 54, y: 509 },
    { x: 104, y: 484 },
    { x: 118, y: 495 },
    { x: 203, y: 451 },
    { x: 264, y: 451 },
    { x: 211, y: 513 },
    { x: 425, y: 517 },
    { x: 529, y: 487 },
    { x: 501, y: 415 },
    { x: 500, y: 522 },
    { x: 613, y: 374 },
    { x: 455, y: 477 },
    { x: 597, y: 475 },
    { x: 436, y: 430 },
    { x: 578, y: 333 },
    { x: 539, y: 162 },
    { x: 613, y: 470 },
    { x: 551, y: 540 },
    { x: 403, y: 549 },
    { x: 546, y: 548 },
    { x: 136, y: 580 },
    { x: 286, y: 552 },
    { x: 299, y: 490 },
    { x: 90, y: 415 },
    { x: 340, y: 372 },
    { x: 208, y: 346 },
    { x: 311, y: 276 },
    { x: 308, y: 248 },
    { x: 332, y: 191 },
    { x: 333, y: 197 },
    { x: 393, y: 157 },
    { x: 382, y: 144 },
    { x: 415, y: 136 },
    { x: 459, y: 125 },
    { x: 497, y: 129 },
    { x: 520, y: 117 },
    { x: 535, y: 121 },
    { x: 545, y: 118 },
    { x: 552, y: 135 },
    { x: 571, y: 125 },
    { x: 619, y: 144 },
    { x: 633, y: 142 },
    { x: 626, y: 126 },
    { x: 628, y: 107 },
    { x: 623, y: 92 },
    { x: 602, y: 89 },
    { x: 601, y: 96 },
    { x: 578, y: 96 },
    { x: 550, y: 92 },
    { x: 501, y: 87 },
    { x: 486, y: 87 },
    { x: 480, y: 100 },
    { x: 460, y: 128 },
    { x: 453, y: 145 },
    { x: 428, y: 153 },
    { x: 405, y: 171 },
    { x: 386, y: 175 },
    { x: 360, y: 202 },
    { x: 350, y: 219 },
    { x: 315, y: 255 },
    { x: 227, y: 370 },
    { x: 194, y: 399 },
    { x: 189, y: 429 },
    { x: 173, y: 422 },
    { x: 160, y: 422 },
    { x: 152, y: 420 },
    { x: 137, y: 413 },
    { x: 158, y: 396 },
    { x: 137, y: 384 },
    { x: 169, y: 384 },
    { x: 132, y: 385 },
    { x: 180, y: 335 },
    { x: 126, y: 335 },
    { x: 140, y: 344 },
    { x: 93, y: 297 },
    { x: 170, y: 235 },
    { x: 336, y: 76 },
    { x: 208, y: 177 },
    { x: 49, y: 147 },
    { x: 139, y: 37 },
    { x: 434, y: 24 },
    { x: 244, y: 94 },
    { x: 307, y: 13 },
    { x: 519, y: 344 },
    { x: 351, y: 443 },
    { x: 351, y: 577 },
    { x: 226, y: 572 },
    { x: 488, y: 572 },
    { x: 594, y: 395 },
    { x: 534, y: 279 },
    { x: 600, y: 241 },
    { x: 585, y: 180 },
    { x: 540, y: 228 },
    { x: 648, y: 168 },
    { x: 574, y: 162 },
    { x: 562, y: 202 },
    { x: 589, y: 100 },
    { x: 558, y: 71 },
    { x: 609, y: 77 },
    { x: 643, y: 74 },
    { x: 532, y: 41 },
    { x: 633, y: 2 },
    { x: 318, y: 129 },
    { x: 508, y: 196 },
    { x: 483, y: 179 },
    { x: 459, y: 181 },
    { x: 463, y: 178 },
    { x: 525, y: 145 },
    { x: 526, y: 138 },
    { x: 487, y: 139 },
    { x: 474, y: 148 },
    { x: 467, y: 161 },
    { x: 511, y: 159 },
    { x: 540, y: 166 },
    { x: 513, y: 137 },
    { x: 514, y: 122 },
    { x: 451, y: 163 },
    { x: 446, y: 176 },
    { x: 426, y: 187 },
    { x: 394, y: 199 },
    { x: 340, y: 223 },
    { x: 283, y: 278 },
    { x: 269, y: 308 },
    { x: 205, y: 342 },
    { x: 209, y: 368 },
    { x: 183, y: 398 },
    { x: 142, y: 409 },
    { x: 137, y: 438 },
    { x: 137, y: 438 },
    { x: 122, y: 418 },
  ];
}
function setup() {
  dayColour = color(207, 247, 255);
  sunsetColour = color(255, 175, 124);
  nightColour = color(44, 84, 109);
  sunriseColour = color(248, 190, 100);
  shopRow1 = shopwheat;
  shopRow2 = shophoe;
  shopRow3 = shopsilo;
  seedsUnlocked = [noseed];
  toolsUnlocked = [notool];
  buildingsUnlocked = [];
  currentSeed = 0;
  currentTool = 0;
  toolsList = [notool, hoe, scythe, basket];
  seedsList = [noseed, wheat, carrot, tree];

  ALLTHEDATA();
  createCanvas(w, h);
}
function draw() {
  //run stuff
  mouse = { x: mouseX, y: mouseY };
  if (mouseIsPressed) {
    mouseDownTime += 1;
  } else {
    mouseDownTime = 0;
  }
  growRandomTile();
  growCrops();
  clickTile();
  runUI();
  //passive silo income
  if (tileData[2] == tsilo && frameCount % 300 == 0) {
    for (let i = 1; i <= 3; i++) {
      dropCoin(
        106 + islandpos.x - 10 + random(-10, 10),
        islandpos.y - 20 + random(-20, 20)
      );
    }
  }
  //tick coop
  if (tileData[21] == tcoop0) {
    if (eggTimer == 1) {
      tileData[21] = tcoop1;
      eggTimer = floor(random(800, 1000));
    } else {
      eggTimer -= 1;
    }
  }
  //Sort tools & seeds
  if (toolsUnlocked !== toolsList) {
    toolsUnlocked.sort((a, b) => toolsList.indexOf(a) - toolsList.indexOf(b));
  }
  if (seedsUnlocked !== seedsList) {
    seedsUnlocked.sort((a, b) => seedsList.indexOf(a) - seedsList.indexOf(b));
  }

  //render stuff
  clear();
  noStroke();
  dayNight(frameCount % (dayNightLength * 2 + twilightLength * 2));
  imageMode(CENTER);
  renderTiles();
  renderCoins();
  renderPopups();
  renderHarvestIcon();
  renderUI();

  //game end
  if (
    buildingsUnlocked.includes("boat") &&
    !buildingsUnlocked.includes("continued")
  ) {
    push();
    tint(255, 255, 255, winFade);
    image(win, 330, 280, 750, 750);
    tint(255, 255, 255, winFade - 500);
    image(
      cont,
      340,
      400,
      300 +
        20 *
          pointInPoly(mouse, [
            { x: 195, y: 380 },
            { x: 480, y: 380 },
            { x: 480, y: 420 },
            { x: 195, y: 420 },
          ]),
      75 +
        10 *
          pointInPoly(mouse, [
            { x: 195, y: 380 },
            { x: 480, y: 380 },
            { x: 480, y: 420 },
            { x: 195, y: 420 },
          ])
    );
    if (winFade >= 955) {
      if (
        pointInPoly(mouse, [
          { x: 195, y: 380 },
          { x: 480, y: 380 },
          { x: 480, y: 420 },
          { x: 195, y: 420 },
        ]) &&
        mouseIsPressed &&
        mouseDownTime == 1
      ) {
        buildingsUnlocked.push("continued");
      }
    } else {
      winFade += 8;
    }

    pop();
  }
}

//--------------
//Game functions
//--------------
function growRandomTile() {
  if (growthWaitTime == 0) {
    tileToGrow = floor(random(0, 30));
    switch (tileData[tileToGrow]) {
      case t01:
        {
          if (floor(random(2, 10)) == 2) {
            tileData[tileToGrow] = t03;
          } else {
            tileData[tileToGrow] = t02;
          }
        }
        break;
      case t00: {
        tileData[tileToGrow] = t01;
      }
    }
    growthWaitTime = floor(random(120, 240));
  } else {
    growthWaitTime -= 1;
  }
}
function growCrops() {
  for (let c = 0; c <= 29; c++) {
    if (cropGrowthData[c] == 1) {
      switch (tileData[c]) {
        case twheat0:
          {
            tileData[c] = twheat1;
            cropGrowthData[c] = 210;
          }
          break;
        case twheat1:
          {
            tileData[c] = twheat2;
            cropGrowthData[c] = 210;
          }
          break;
        case twheat2:
          {
            tileData[c] = twheat3;
            cropGrowthData[c] = null;
          }
          break;
        case tcarrot0:
          {
            tileData[c] = tcarrot1;
            cropGrowthData[c] = 210;
          }
          break;
        case tcarrot1:
          {
            tileData[c] = tcarrot2;
            cropGrowthData[c] = 210;
          }
          break;
        case tcarrot2:
          {
            tileData[c] = tcarrot3;
            cropGrowthData[c] = null;
          }
          break;
        case ttree0:
          {
            tileData[c] = ttree1;
            cropGrowthData[c] = 210;
          }
          break;
        case ttree1:
          {
            tileData[c] = ttree2;
            cropGrowthData[c] = 210;
          }
          break;
        case ttree2: {
          tileData[c] = ttree3;
          cropGrowthData[c] = null;
        }
      }
    } else if (cropGrowthData[c] != null) {
      cropGrowthData[c] -= 1;
    }
  }
}
function clickTile() {
  if (mouseIsPressed && shopAnimationFrame == 0) {
    if (mouseDownTime == 1) {
      selectedTile = mouseTile();
    }

    if (mouseDownTime == 31) {
      switch (tileData[selectedTile]) {
        case t03:
          {
            for (let i = 1; i <= 3; i++) {
              dropCoin(
                iconColumn * 53 +
                  islandpos.x -
                  90 +
                  (5 - iconRow) * 20 +
                  random(-30, 30),
                iconRow * 24 + islandpos.y + random(-20, 20)
              );
            }
            tileData[selectedTile] = t00;
          }
          break;
        case t02:
          {
            dropCoin(
              iconColumn * 53 +
                islandpos.x -
                90 +
                (5 - iconRow) * 20 +
                random(-30, 30),
              iconRow * 24 + islandpos.y + random(-20, 20)
            );
            tileData[selectedTile] = t00;
          }
          break;
        case t01:
          {
            tileData[selectedTile] = t00;
          }
          break;
        case t00:
          {
            if (toolsUnlocked[currentTool] == hoe) {
              tileData[selectedTile] = t06;
            }
          }
          break;
        case t06:
          {
            switch (seedsUnlocked[currentSeed]) {
              case wheat:
                {
                  if (coins >= 1) {
                    tileData[selectedTile] = twheat0;
                    cropGrowthData[selectedTile] = 120;
                    coins -= 1;
                  }
                }
                break;
              case carrot:
                {
                  if (coins >= 2) {
                    tileData[selectedTile] = tcarrot0;
                    cropGrowthData[selectedTile] = 120;
                    coins -= 2;
                  }
                }
                break;
              case tree: {
                if (coins >= 5) {
                  tileData[selectedTile] = ttree0;
                  cropGrowthData[selectedTile] = 120;
                  coins -= 5;
                }
              }
            }
            if (
              toolsUnlocked[currentTool] == notool &&
              seedsUnlocked[currentSeed] == noseed
            ) {
              tileData[selectedTile] = t00;
            }
          }
          break;
        case twheat3:
          {
            if (toolsUnlocked[currentTool] == scythe) {
              for (let i = 1; i <= 2; i++) {
                dropCoin(
                  iconColumn * 53 +
                    islandpos.x -
                    90 +
                    (5 - iconRow) * 20 +
                    random(-30, 30),
                  iconRow * 24 + islandpos.y + random(-20, 20)
                );
              }
              tileData[selectedTile] = t06;
            }
          }
          break;
        case tcarrot3:
          {
            if (toolsUnlocked[currentTool] == scythe) {
              for (let i = 1; i <= 4; i++) {
                dropCoin(
                  iconColumn * 53 +
                    islandpos.x -
                    90 +
                    (5 - iconRow) * 20 +
                    random(-30, 30),
                  iconRow * 24 + islandpos.y + random(-20, 20)
                );
              }
              tileData[selectedTile] = t06;
            }
          }
          break;
        case ttree3:
          {
            if (toolsUnlocked[currentTool] == basket) {
              for (let i = 1; i <= 3; i++) {
                dropCoin(
                  iconColumn * 53 +
                    islandpos.x -
                    90 +
                    (5 - iconRow) * 20 +
                    random(-30, 30),
                  iconRow * 24 + islandpos.y + random(-20, 20)
                );
              }
              tileData[selectedTile] = ttree0;
              cropGrowthData[selectedTile] = 60;
            }
          }
          break;
        case tcoop1: {
          if (toolsUnlocked[currentTool] == basket) {
            tileData[21] = tcoop0;
            for (let i = 1; i <= 12; i++) {
              dropCoin(
                iconColumn * 53 +
                  islandpos.x -
                  90 +
                  (5 - iconRow) * 20 +
                  random(-30, 30),
                iconRow * 24 + islandpos.y + random(-20, 20)
              );
            }
          }
        }
      }
    }
  }
}
function runUI() {
  if (
    dist(mouse.x, mouse.y, 450, 50) <= 30 &&
    mouseIsPressed &&
    mouseDownTime == 1
  ) {
    if (currentSeed == seedsUnlocked.length - 1) {
      currentSeed = 0;
    } else {
      currentSeed += 1;
    }
  }

  if (
    dist(mouse.x, mouse.y, 520, 50) <= 30 &&
    mouseIsPressed &&
    mouseDownTime == 1
  ) {
    if (currentTool == toolsUnlocked.length - 1) {
      currentTool = 0;
    } else {
      currentTool += 1;
    }
  }

  //--------
  //  Shop
  //--------
  if (!(shopAnimationFrame == 30 || shopAnimationFrame == 0)) {
    if (shopOpen) {
      shopAnimationFrame -= 1;
      if (shopAnimationFrame == 0) {
        shopOpen = false;
        return;
      }
    } else {
      shopAnimationFrame += 1;
      if (shopAnimationFrame == 30) {
        shopOpen = true;
        return;
      }
    }
    islandpos.x = 250 - 4 * shopAnimationFrame;
  } else if (
    dist(mouse.x, mouse.y, 590, 50) <= 30 &&
    mouseIsPressed &&
    mouseDownTime == 1
  ) {
    if (shopOpen) {
      shopAnimationFrame -= 1;
    } else {
      shopAnimationFrame += 1;
    }
  }
  if (shopAnimationFrame == 30) {
    if (
      dist(mouse.x, mouse.y, 590, 130) <= 30 &&
      mouseIsPressed &&
      mouseDownTime == 1 &&
      shopAnimationFrame == 30
    ) {
      switch (shopRow1) {
        case shopwheat:
          {
            shopRow1 = shopcarrot;
          }
          break;

        case shopcarrot:
          {
            shopRow1 = shoptree;
          }
          break;

        case shoptree: {
          shopRow1 = shopwheat;
        }
      }
    }

    if (
      dist(mouse.x, mouse.y, 590, 200) <= 30 &&
      mouseIsPressed &&
      mouseDownTime == 1 &&
      shopAnimationFrame == 30
    ) {
      switch (shopRow2) {
        case shophoe:
          {
            shopRow2 = shopscythe;
          }
          break;

        case shopscythe:
          {
            shopRow2 = shopbasket;
          }
          break;

        case shopbasket: {
          shopRow2 = shophoe;
        }
      }
    }

    if (
      dist(mouse.x, mouse.y, 590, 270) <= 30 &&
      mouseIsPressed &&
      mouseDownTime == 1 &&
      shopAnimationFrame == 30
    ) {
      switch (shopRow3) {
        case shopsilo:
          {
            shopRow3 = shopcoop;
          }
          break;

        case shopcoop:
          {
            shopRow3 = shopboat;
          }
          break;

        case shopboat: {
          shopRow3 = shopsilo;
        }
      }
    }

    if (
      (dist(mouse.x, mouse.y, 450, 130) <= 30 ||
        pointInPoly(mouse, [
          { x: 450, y: 95 },
          { x: 590, y: 95 },
          { x: 590, y: 155 },
          { x: 450, y: 155 },
        ])) &&
      mouseIsPressed &&
      dist(mouse.x, mouse.y, 590, 130) >= 30
    ) {
      switch (shopRow1) {
        case shopwheat:
          {
            if (coins >= 5 && !seedsUnlocked.includes(wheat)) {
              seedsUnlocked.splice(1, 0, wheat);
              coins -= 5;
            }
          }
          break;
        case shopcarrot:
          {
            if (coins >= 10 && !seedsUnlocked.includes(carrot)) {
              seedsUnlocked.splice(2, 0, carrot);
              coins -= 10;
            }
          }
          break;
        case shoptree: {
          if (coins >= 30 && !seedsUnlocked.includes(tree)) {
            seedsUnlocked.splice(3, 0, tree);
            coins -= 30;
          }
        }
      }
    }

    if (
      (dist(mouse.x, mouse.y, 450, 200) <= 30 ||
        pointInPoly(mouse, [
          { x: 450, y: 170 },
          { x: 590, y: 170 },
          { x: 590, y: 230 },
          { x: 450, y: 230 },
        ])) &&
      mouseIsPressed &&
      dist(mouse.x, mouse.y, 590, 200) >= 30
    ) {
      switch (shopRow2) {
        case shophoe:
          {
            if (coins >= 3 && !toolsUnlocked.includes(hoe)) {
              coins -= 3;

              toolsUnlocked.push(hoe);
            }
          }
          break;
        case shopscythe:
          {
            if (coins >= 3 && !toolsUnlocked.includes(scythe)) {
              coins -= 3;

              toolsUnlocked.push(scythe);
            }
          }
          break;
        case shopbasket: {
          if (coins >= 3 && !toolsUnlocked.includes(basket)) {
            coins -= 3;

            toolsUnlocked.push(basket);
          }
        }
      }
    }

    if (
      (dist(mouse.x, mouse.y, 450, 270) <= 30 ||
        pointInPoly(mouse, [
          { x: 450, y: 245 },
          { x: 590, y: 245 },
          { x: 590, y: 305 },
          { x: 450, y: 305 },
        ])) &&
      mouseIsPressed &&
      dist(mouse.x, mouse.y, 590, 270) >= 30
    ) {
      switch (shopRow3) {
        case shopsilo:
          {
            if (coins >= 20 && tileData[2] != tsilo) {
              tileData[2] = tsilo;
              coins -= 20;
            }
          }
          break;
        case shopcoop:
          {
            if (
              coins >= 50 &&
              tileData[21] != tcoop0 &&
              tileData[21] != tcoop1
            ) {
              tileData[21] = tcoop0;
              eggTimer = 600;
              coins -= 50;
            }
          }
          break;
        case shopboat: {
          if (coins >= 90 && !buildingsUnlocked.includes("boat")) {
            buildingsUnlocked.push("boat");
            coins -= 90;
          }
        }
      }
    }
  }
}
//-------------------
//Rendering functions
//-------------------
function renderBlockHitboxes() {
  stroke(0, 0, 0);
  for (let i = 0; i < tileCoords.length; i++) {
    if (tileData[i] == "t00") {
      fill(0, 255, 0, 50);
    }
    if (tileData[i] == "t01") {
      fill(0, 150, 0, 50);
    }
    if (tileData[i] == "t02") {
      fill(100, 100, 200, 50);
    }
    if (tileData[i] == "t03") {
      fill(0, 200, 100, 50);
    }
    if (tileData[i] == "t04") {
      fill(100, 100, 100, 50);
    }
    if (tileData[i] == "t05") {
      fill(250, 100, 0, 50);
    }

    if (pointInPoly(mouse, tileCoords[i])) {
      fill(100, 200, 255, 100);
    }

    beginShape();
    tileCoords[i].forEach((v) => vertex(v.x, v.y));
    endShape(CLOSE);
  }
  noStroke();
}
function renderTiles() {
  //-------------
  //Animate Tree
  //-------------
  switch (floor(frameCount / 15) % 4) {
    case 0:
      {
        tileData[3] = t05;
      }
      break;
    case 1:
      {
        tileData[3] = t05r;
      }
      break;
    case 2:
      {
        tileData[3] = t05;
      }
      break;
    case 3: {
      tileData[3] = t05l;
    }
  }
  //-------------
  //Render Tiles
  //-------------

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
      image(
        eval(tileData[5 * i + j]),

        islandpos.x -
          35 +
          j * tileWidth -
          i * tileHeight * Math.cos(tileAngle) -
          tileHeight * Math.sin(tileAngle) +
          77,
        islandpos.y -
          40 +
          i * tileHeight * Math.sin(tileAngle) +
          77 -
          17 *
            pointInPoly(mouse, tileCoords[5 * i + j]) *
            (shopAnimationFrame == 0),
        304,
        304
      );
    }
  }
}
function dayNight(t) {
  //day

  if (0 <= t && t < dayNightLength) {
    background(dayColour);

    if (floor(random(1, 300)) == 1) {
      cloudData.push({
        x: -100,
        y: floor(random(50, 550)),
        type: eval("cloud" + floor(random(1, 3.999))),
        speed: random(0.5, 1.5),
      });
    }
  }

  //1

  if (dayNightLength <= t && t < dayNightLength + twilightLength / 2) {
    background(dayColour);
    for (let i = 0; i < gradient; i++) {
      fill(lerpColor(dayColour, sunsetColour, i / gradient));
      rect(
        0,
        (h / gradient) * i +
          (h * (twilightLength - 4 * (t - dayNightLength + 1))) /
            twilightLength,
        w,
        h / gradient + 1
      );
    }

    for (let i = 0; i < gradient; i++) {
      fill(lerpColor(sunsetColour, nightColour, i / gradient));
      rect(
        0,
        (h / gradient) * (i + gradient) +
          (h * (twilightLength - 4 * (t - dayNightLength + 1))) /
            twilightLength,
        w,
        h / gradient + 1
      );
    }
  }

  //2

  if (
    dayNightLength + twilightLength / 2 <= t &&
    t < dayNightLength + twilightLength
  ) {
    background(nightColour);
    for (let i = 0; i < gradient; i++) {
      fill(lerpColor(dayColour, sunsetColour, i / gradient));
      rect(
        0,
        (h / gradient) * i +
          (h * (twilightLength - 4 * (t - dayNightLength + 1))) /
            twilightLength,
        w,
        h / gradient + 1
      );
    }

    for (let i = 0; i < gradient; i++) {
      fill(lerpColor(sunsetColour, nightColour, i / gradient));
      rect(
        0,
        (h / gradient) * (i + gradient) +
          (h * (twilightLength - 4 * (t - dayNightLength + 1))) /
            twilightLength,
        w,
        h / gradient + 1
      );
    }
  }

  //fade in stars

  if (
    dayNightLength + twilightLength <= t &&
    t < dayNightLength + twilightLength + 100
  ) {
    background(nightColour);
    fill(255, 255, 255, 1.8 * (t - (dayNightLength + twilightLength)));
    for (let s of starCoords) {
      rect(s.x, s.y, 5, 5);
    }
  }

  //night

  if (
    dayNightLength + twilightLength + 100 <= t &&
    t < 2 * dayNightLength + twilightLength - 100
  ) {
    background(nightColour);
    for (let s of starCoords) {
      fill(255, 255, 255, 180 + 75 * sin((s.x + t) / 20));
      rect(s.x, s.y, 5, 5);
    }
  }

  //fade out stars

  if (
    2 * dayNightLength + twilightLength - 100 <= t &&
    t < 2 * dayNightLength + twilightLength
  ) {
    background(nightColour);
    fill(
      255,
      255,
      255,
      200 - 1.8 * (t - (2 * dayNightLength + twilightLength - 100))
    );
    for (let s of starCoords) {
      rect(s.x, s.y, 5, 5);
    }
  }

  //3

  if (
    2 * dayNightLength + twilightLength <= t &&
    t < 2 * dayNightLength + (3 * twilightLength) / 2
  ) {
    background(nightColour);
    for (let i = 0; i < gradient; i++) {
      fill(lerpColor(nightColour, sunriseColour, i / gradient));
      rect(
        0,
        (h / gradient) * i +
          (h *
            (twilightLength -
              3 * (t - 2 * dayNightLength - twilightLength + 1))) /
            twilightLength,
        w,
        h / gradient + 1
      );
    }

    for (let i = 0; i < gradient; i++) {
      fill(lerpColor(sunriseColour, dayColour, i / gradient));
      rect(
        0,
        (h / gradient) * (i + gradient) +
          (h *
            (twilightLength -
              3 * (t - 2 * dayNightLength - twilightLength + 1))) /
            twilightLength,
        w,
        h / gradient + 1
      );
    }
  }

  //4

  if (
    2 * dayNightLength + (3 * twilightLength) / 2 <= t &&
    t < 2 * dayNightLength + twilightLength * 2
  ) {
    background(dayColour);
    for (let i = 0; i < gradient; i++) {
      fill(lerpColor(nightColour, sunriseColour, i / gradient));
      rect(
        0,
        (h / gradient) * i +
          (h *
            (twilightLength -
              3 * (t - 2 * dayNightLength - twilightLength + 1))) /
            twilightLength,
        w,
        h / gradient + 1
      );
    }

    for (let i = 0; i < gradient; i++) {
      fill(lerpColor(sunriseColour, dayColour, i / gradient));
      rect(
        0,
        (h / gradient) * (i + gradient) +
          (h *
            (twilightLength -
              3 * (t - 2 * dayNightLength - twilightLength + 1))) /
            twilightLength,
        w,
        h / gradient + 1
      );
    }
  }
  for (let c in cloudData) {
    cloudData[c].x += cloudData[c].speed;
    image(cloudData[c].type, cloudData[c].x, cloudData[c].y, 240, 100);
    if (cloudData[c].x >= 800) {
      cloudData.splice(c, 1);
    }
  }
}
function renderHarvestIcon() {
  iconRow = floor(selectedTile / 5);
  iconColumn = selectedTile % 5;

  if (mouseIsPressed && mouseDownTime <= 30 && shopAnimationFrame == 0) {
    switch (tileData[selectedTile]) {
      case t01:
      case t02:
      case t03:
        {
          image(
            eval("harvest" + nf(ceil(mouseDownTime / 2), 2)),
            iconColumn * 53 + islandpos.x - 90 + (5 - iconRow) * 20,
            iconRow * 24 + islandpos.y - 70,
            50,
            50
          );
        }
        break;
      case t00:
        {
          if (toolsUnlocked[currentTool] == hoe) {
            image(
              eval("hoe" + nf(ceil(mouseDownTime / 2), 2)),
              iconColumn * 53 + islandpos.x - 90 + (5 - iconRow) * 20,
              iconRow * 24 + islandpos.y - 70,
              50,
              50
            );
          } else {
            image(
              hoe01,
              iconColumn * 53 + islandpos.x - 90 + (5 - iconRow) * 20,
              iconRow * 24 + islandpos.y - 70,
              50,
              50
            );
          }
        }
        break;
      case t06:
        {
          if (seedsUnlocked[currentSeed] != noseed) {
            if (
              seedsUnlocked[currentSeed] == wheat &&
              coins < 1 &&
              mouseDownTime == 1
            ) {
              popup(
                1,
                iconColumn * 53 + islandpos.x - 90 + (5 - iconRow) * 20,
                iconRow * 24 + islandpos.y - 20
              );
            }
            if (
              seedsUnlocked[currentSeed] == carrot &&
              coins < 2 &&
              mouseDownTime == 1
            ) {
              popup(
                2,
                iconColumn * 53 + islandpos.x - 90 + (5 - iconRow) * 20,
                iconRow * 24 + islandpos.y - 20
              );
            }
            if (
              seedsUnlocked[currentSeed] == tree &&
              coins < 5 &&
              mouseDownTime == 1
            ) {
              popup(
                5,
                iconColumn * 53 + islandpos.x - 90 + (5 - iconRow) * 20,
                iconRow * 24 + islandpos.y - 20
              );
            }
            if (
              (seedsUnlocked[currentSeed] == wheat && coins >= 1) ||
              (seedsUnlocked[currentSeed] == carrot && coins >= 2) ||
              (seedsUnlocked[currentSeed] == tree && coins >= 5)
            ) {
              image(
                eval("plant" + nf(ceil(mouseDownTime / 2), 2)),
                iconColumn * 53 + islandpos.x - 90 + (5 - iconRow) * 20,
                iconRow * 24 + islandpos.y - 70,
                50,
                50
              );
            }
          }
          if (
            seedsUnlocked[currentSeed] == noseed &&
            toolsUnlocked[currentTool] == notool
          ) {
            image(
              eval("harvest" + nf(ceil(mouseDownTime / 2), 2)),
              iconColumn * 53 + islandpos.x - 90 + (5 - iconRow) * 20,
              iconRow * 24 + islandpos.y - 70,
              50,
              50
            );
          }
        }
        break;
      case twheat3:
      case tcarrot3:
        {
          if (toolsUnlocked[currentTool] == scythe) {
            image(
              eval("scythe" + nf(ceil(mouseDownTime / 2), 2)),
              iconColumn * 53 + islandpos.x - 90 + (5 - iconRow) * 20,
              iconRow * 24 + islandpos.y - 70,
              50,
              50
            );
          } else {
            image(
              scythe01,
              iconColumn * 53 + islandpos.x - 90 + (5 - iconRow) * 20,
              iconRow * 24 + islandpos.y - 70,
              50,
              50
            );
          }
        }
        break;
      case ttree3:
      case tcoop1: {
        if (toolsUnlocked[currentTool] == basket) {
          image(
            eval("basket" + nf(ceil(mouseDownTime / 2), 2)),
            iconColumn * 53 + islandpos.x - 90 + (5 - iconRow) * 20,
            iconRow * 24 + islandpos.y - 70,
            50,
            50
          );
        } else {
          image(
            basket01,
            iconColumn * 53 + islandpos.x - 90 + (5 - iconRow) * 20,
            iconRow * 24 + islandpos.y - 70,
            50,
            50
          );
        }
      }
    }
  }
}
function renderUI() {
  image(coin1, 15 + 30 / coins.toString().length, 75, 30, 30);
  for (let i = 0; i <= coins.toString().length - 1; i++) {
    image(
      eval("digit" + coins.toString().split("")[i]),
      50 + 30 / coins.toString().length + 30 * i,
      75,
      25,
      35
    );
  }

  image(
    seedsUnlocked[currentSeed],
    450,
    50,
    60 + 5 * (dist(mouse.x, mouse.y, 450, 50) <= 30 && !mouseIsPressed),
    60 + 5 * (dist(mouse.x, mouse.y, 450, 50) <= 30 && !mouseIsPressed)
  );
  image(
    toolsUnlocked[currentTool],
    520,
    50,
    60 + 5 * (dist(mouse.x, mouse.y, 520, 50) <= 30 && !mouseIsPressed),
    60 + 5 * (dist(mouse.x, mouse.y, 520, 50) <= 30 && !mouseIsPressed)
  );
  if (shopAnimationFrame == 30) {
    image(
      shopRow1,
      505,
      125,
      168 +
        5 *
          ((dist(mouse.x, mouse.y, 450, 130) <= 30 ||
            pointInPoly(mouse, [
              { x: 450, y: 95 },
              { x: 590, y: 95 },
              { x: 590, y: 155 },
              { x: 450, y: 155 },
            ])) &&
            !mouseIsPressed &&
            dist(mouse.x, mouse.y, 590, 130) >= 30),
      60 +
        5 *
          ((dist(mouse.x, mouse.y, 450, 130) <= 30 ||
            pointInPoly(mouse, [
              { x: 450, y: 95 },
              { x: 590, y: 95 },
              { x: 590, y: 155 },
              { x: 450, y: 155 },
            ])) &&
            !mouseIsPressed &&
            dist(mouse.x, mouse.y, 590, 130) >= 30)
    );
    image(
      shopRow2,
      505,
      200,
      168 +
        5 *
          ((dist(mouse.x, mouse.y, 450, 200) <= 30 ||
            pointInPoly(mouse, [
              { x: 450, y: 170 },
              { x: 590, y: 170 },
              { x: 590, y: 230 },
              { x: 450, y: 230 },
            ])) &&
            !mouseIsPressed &&
            dist(mouse.x, mouse.y, 590, 200) >= 30),
      60 +
        5 *
          ((dist(mouse.x, mouse.y, 450, 200) <= 30 ||
            pointInPoly(mouse, [
              { x: 450, y: 170 },
              { x: 590, y: 170 },
              { x: 590, y: 230 },
              { x: 450, y: 230 },
            ])) &&
            !mouseIsPressed &&
            dist(mouse.x, mouse.y, 590, 200) >= 30)
    );
    image(
      shopRow3,
      505,
      275,
      168 +
        5 *
          ((dist(mouse.x, mouse.y, 450, 270) <= 30 ||
            pointInPoly(mouse, [
              { x: 450, y: 245 },
              { x: 590, y: 245 },
              { x: 590, y: 305 },
              { x: 450, y: 305 },
            ])) &&
            !mouseIsPressed &&
            dist(mouse.x, mouse.y, 590, 270) >= 30),
      60 +
        5 *
          ((dist(mouse.x, mouse.y, 450, 270) <= 30 ||
            pointInPoly(mouse, [
              { x: 450, y: 245 },
              { x: 590, y: 245 },
              { x: 590, y: 305 },
              { x: 450, y: 305 },
            ])) &&
            !mouseIsPressed &&
            dist(mouse.x, mouse.y, 590, 270) >= 30)
    );

    if (
      (shopRow1 == shopwheat && seedsUnlocked.includes(wheat)) ||
      (shopRow1 == shopcarrot && seedsUnlocked.includes(carrot)) ||
      (shopRow1 == shoptree && seedsUnlocked.includes(tree))
    ) {
      image(
        shopsold,
        500,
        125,
        130 +
          5 *
            ((dist(mouse.x, mouse.y, 450, 130) <= 30 ||
              pointInPoly(mouse, [
                { x: 450, y: 95 },
                { x: 590, y: 95 },
                { x: 590, y: 155 },
                { x: 450, y: 155 },
              ])) &&
              !mouseIsPressed &&
              dist(mouse.x, mouse.y, 590, 130) >= 30),
        60 +
          5 *
            ((dist(mouse.x, mouse.y, 450, 130) <= 30 ||
              pointInPoly(mouse, [
                { x: 450, y: 95 },
                { x: 590, y: 95 },
                { x: 590, y: 155 },
                { x: 450, y: 155 },
              ])) &&
              !mouseIsPressed &&
              dist(mouse.x, mouse.y, 590, 130) >= 30)
      );
    }

    if (
      (shopRow2 == shophoe && toolsUnlocked.includes(hoe)) ||
      (shopRow2 == shopscythe && toolsUnlocked.includes(scythe)) ||
      (shopRow2 == shopbasket && toolsUnlocked.includes(basket))
    ) {
      image(
        shopsold,
        500,
        200,
        130 +
          5 *
            ((dist(mouse.x, mouse.y, 450, 200) <= 30 ||
              pointInPoly(mouse, [
                { x: 450, y: 170 },
                { x: 590, y: 170 },
                { x: 590, y: 230 },
                { x: 450, y: 230 },
              ])) &&
              !mouseIsPressed &&
              dist(mouse.x, mouse.y, 590, 200) >= 30),
        60 +
          5 *
            ((dist(mouse.x, mouse.y, 450, 200) <= 30 ||
              pointInPoly(mouse, [
                { x: 450, y: 170 },
                { x: 590, y: 170 },
                { x: 590, y: 230 },
                { x: 450, y: 230 },
              ])) &&
              !mouseIsPressed &&
              dist(mouse.x, mouse.y, 590, 200) >= 30)
      );
    }

    if (
      (shopRow3 == shopsilo && tileData[2] == tsilo) ||
      (shopRow3 == shopcoop &&
        (tileData[21] == tcoop0 || tileData[21] == tcoop1)) ||
      (shopRow3 == shopboat && buildingsUnlocked.includes("boat"))
    ) {
      image(
        shopsold,
        500,
        275,
        130 +
          5 *
            ((dist(mouse.x, mouse.y, 450, 270) <= 30 ||
              pointInPoly(mouse, [
                { x: 450, y: 245 },
                { x: 590, y: 245 },
                { x: 590, y: 305 },
                { x: 450, y: 305 },
              ])) &&
              !mouseIsPressed &&
              dist(mouse.x, mouse.y, 590, 270) >= 30),
        60 +
          5 *
            ((dist(mouse.x, mouse.y, 450, 270) <= 30 ||
              pointInPoly(mouse, [
                { x: 450, y: 245 },
                { x: 590, y: 245 },
                { x: 590, y: 305 },
                { x: 450, y: 305 },
              ])) &&
              !mouseIsPressed &&
              dist(mouse.x, mouse.y, 590, 270) >= 30)
      );
    }
  }

  if (shopAnimationFrame != 0) {
    image(
      shopseed,
      590,
      50 + 2.5 * shopAnimationFrame,
      60 +
        5 *
          (dist(mouse.x, mouse.y, 590, 130) <= 30 &&
            !mouseIsPressed &&
            shopAnimationFrame == 30),
      60 +
        5 *
          (dist(mouse.x, mouse.y, 590, 130) <= 30 &&
            !mouseIsPressed &&
            shopAnimationFrame == 30)
    );
    image(
      shoptool,
      590,
      50 + 5 * shopAnimationFrame,
      60 +
        5 *
          (dist(mouse.x, mouse.y, 590, 200) <= 30 &&
            !mouseIsPressed &&
            shopAnimationFrame == 30),
      60 +
        5 *
          (dist(mouse.x, mouse.y, 590, 200) <= 30 &&
            !mouseIsPressed &&
            shopAnimationFrame == 30)
    );
    image(
      shopbuilding,
      590,
      50 + 7.5 * shopAnimationFrame,
      60 +
        5 *
          (dist(mouse.x, mouse.y, 590, 270) <= 30 &&
            !mouseIsPressed &&
            shopAnimationFrame == 30),
      60 +
        5 *
          (dist(mouse.x, mouse.y, 590, 270) <= 30 &&
            !mouseIsPressed &&
            shopAnimationFrame == 30)
    );
  }

  image(
    shop,
    590,
    50,
    60 + 5 * (dist(mouse.x, mouse.y, 590, 50) <= 30 && !mouseIsPressed),
    60 + 5 * (dist(mouse.x, mouse.y, 590, 50) <= 30 && !mouseIsPressed)
  );
}
function renderCoins() {
  for (let c in coinAnimation) {
    image(
      eval("coin" + ceil(coinAnimation[c].frame / 5)),
      coinAnimation[c].x,
      coinAnimation[c].y,
      20,
      20
    );
    if (coinAnimation[c].frame == 30) {
      coinAnimation[c].frame = 1;
    } else {
      coinAnimation[c].frame += 1;
    }
    coinAnimation[c].x -= coinAnimation[c].vx;
    coinAnimation[c].y -= coinAnimation[c].vy;
    if (
      dist(
        coinAnimation[c].x,
        coinAnimation[c].y,
        15 + 30 / coins.toString().length,
        75
      ) <= 15
    ) {
      coinAnimation.splice(c, 1);
      coins += 1;
    }
  }
}
function renderPopups() {
  for (let p in popupAnimation) {
    push();
    tint(255, 255, 255, popupAnimation[p].opacity);
    image(coin1, popupAnimation[p].x - 10, popupAnimation[p].y, 25, 25);

    image(
      eval("digit" + popupAnimation[p].value),
      popupAnimation[p].x + 20,
      popupAnimation[p].y,
      15,
      21
    );
    pop();

    popupAnimation[p].y -= 1;
    popupAnimation[p].opacity -= 10;
    if (popupAnimation[p].opacity == 0) {
      popupAnimation.splice(p, 1);
    }
  }
}
function dropCoin(x, y) {
  coinAnimation.push({
    frame: floor(random(1, 6.999)),
    x: x,
    y: y,
    vx: 5 * cos(atan((75 - y) / (15 + 30 / coins.toString().length - x))),
    vy: 5 * sin(atan((75 - y) / (15 + 30 / coins.toString().length - x))),
  });
}
function popup(value, x, y) {
  popupAnimation.push({ x: x, y: y, value: value, opacity: 255 });
}
//----------------
//Engine functions
//----------------
function topTile(x, y) {
  return [
    { x: x, y: y },
    { x: x + tileWidth, y: y },
    {
      x: x + tileWidth - tileHeight * Math.cos(tileAngle),
      y: y + tileHeight * Math.sin(tileAngle),
    },
    {
      x: x - tileHeight * Math.cos(tileAngle),
      y: y + tileHeight * Math.sin(tileAngle),
    },
  ];
}
function sideTile(x, y) {
  return [
    { x: x, y: y },
    { x: x + tileWidth, y: y },
    { x: x + tileWidth, y: y + tileWidth },
    { x: x + tileHeight, y: y + tileWidth + Math.cos(tileAngle) * tileHeight },
    {
      x: x + tileWidth - tileHeight * Math.cos(tileAngle),
      y: y + tileHeight * Math.sin(tileAngle),
    },

    {
      x: x - tileHeight * Math.cos(tileAngle),
      y: y + tileHeight * Math.sin(tileAngle),
    },
  ];
}
function frontTile(x, y) {
  return [
    { x: x, y: y },
    { x: x + tileWidth, y: y },
    {
      x: x + tileWidth - tileHeight * Math.cos(tileAngle),
      y: y + tileHeight * Math.sin(tileAngle),
    },
    {
      x: x + tileWidth - tileHeight * Math.cos(tileAngle),
      y: y + tileHeight * Math.cos(tileAngle) + tileWidth,
    },
    {
      x: x + tileWidth - tileHeight * Math.cos(tileAngle) - tileWidth,
      y: y + tileHeight * Math.cos(tileAngle) + tileWidth,
    },
    {
      x: x - tileHeight * Math.cos(tileAngle),
      y: y + tileHeight * Math.sin(tileAngle),
    },
  ];
}
function frontCornerTile(x, y) {
  return [
    { x: x, y: y },
    { x: x + tileWidth, y: y },
    { x: x + tileWidth, y: y + tileWidth },
    {
      x: x + tileWidth - tileHeight * Math.cos(tileAngle),
      y: y + tileHeight * Math.cos(tileAngle) + tileWidth,
    },
    {
      x: x + tileWidth - tileHeight * Math.cos(tileAngle) - tileWidth,
      y: y + tileHeight * Math.cos(tileAngle) + tileWidth,
    },
    {
      x: x - tileHeight * Math.cos(tileAngle),
      y: y + tileHeight * Math.sin(tileAngle),
    },
  ];
}
function pointInPoly(p, poly) {
  let intersections = 0;
  for (let i = 0; i < poly.length; i++) {
    let vx1 = poly[i];
    let vx2 = poly[(i + 1) % poly.length];
    if (
      vx1.y > p.y !== vx2.y > p.y &&
      p.x < ((vx2.x - vx1.x) * (p.y - vx1.y)) / (vx2.y - vx1.y) + vx1.x
    ) {
      intersections++;
    }
  }
  return intersections % 2 === 1;
}
function mouseTile() {
  for (let T = 0; T < tileCoords.length; T++) {
    if (pointInPoly(mouse, tileCoords[T])) {
      return T;
    }
  }
  return null;
}
