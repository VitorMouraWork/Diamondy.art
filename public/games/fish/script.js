var clicker = {
    fish:0,
    fpsmultiplier:0,
    buildings:{
        bait:{
            amount:0,
            cost:15,
            fps:1/10,
            multiplier:1,
            unlocked: false,
            unlock:0,
            name:"Bait",
            icon:('0px'),
            description: "catches fish automatically. <br> Catches ${clicker.buildings.bait.fps} fish per second.",
        },
        fisherman:{
            amount:0,
            cost:100,
            fps:1,
            multiplier:1,
            unlocked: false,
            unlock:0,
            name:"Fisherman",
            icon:('-74px'),
            description: "A nice Fisherman to catch more fish. <br> Reels in ${clicker.buildings.fisherman.fps} fish per second.",
        },
        fishingBoat:{
            amount:0,
            cost:1100,
            fps:8,
            multiplier:1,
            unlocked: false,
            unlock:30,
            name:"Fishing Boat",
            icon:('-147px'),
            description: "boats with huge nets to catch more fish. <br> Catches ${clicker.buildings.fishingBoat.fps} fish per second.",
        },
        pisciculture:{
            amount:0,
            cost:12000,
            fps:47,
            multiplier:1,
            unlocked: false,
            unlock:100,
            name:"Pisciculture",
            icon:('-220px'),
            description: "Large cages that lures in roudy fishes underwater. <br> Catches ${clicker.buildings.pisciculture.fps} fish per second.",
        },
        imported:{
            amount:0,
            cost:130000,
            fps:260,
            multiplier:1,
            unlocked: false,
            unlock:1100,
            name:"Imported",
            icon:('-293px'),
            description: "huge airplanes that dumps hundreds of fish from other bodies of water. <br> Catches ${clicker.buildings.imported.fps} fish per second.",
        },
    },
    upgrades:{
        bait1:{
            bought: false,
            buyable: 15,
            cost: 100,
            multiplying:'{clicker.buildings.bait.multiplier}',
            multiplier: 2,
            name: "bait 1",
            id: 1,
            icon: ('/games/fish/midia/bait.png'),
            description: "doubles bait's fish production.",

        },
        bait2:{
            bought: false,
            buyable: 100,
            cost: 500,
            multiplying:'clicker.buildings.bait.multiplier',
            multiplier: 2,
            name: "bait 2",
            id: 2,
            icon: ('/games/fish/midia/bait.png'),
            description: "doubles bait's fish production.",
        },
        wormcan1:{
            bought: false,
            buyable: 1100,
            cost: 5000,
            multiplying:'defclick',
            multiplier: "5% ",
            name: "can o' worms",
            id: 3,
            icon: ('/games/fish/midia/wormCan.png'),
            description: "clicking gains 5% of total fps.",
        },
    },
};

var defclick = 1;
var delay = 0;
var fps = 0;
var totalpersecond = 0;

//---------buying buildings/upgrades--------
//buildings
function building_click(building){
    if(clicker.buildings[building].cost <= clicker.fish){
    clicker.fish-= clicker.buildings[building].cost;
    clicker.buildings[building].amount++
    clicker.buildings[building].cost += Math.round(clicker.buildings[building].cost*0.15)
    update_buildings();
    };   
};

/* upgrades --- ainda não implementei o multiplicador de cada achievement, porém o
   resto todo (comprar o achievement, fazer ele ter um icone e desaparecer) funciona.*/
function upgrade_click(upgrade){
    if(clicker.upgrades[upgrade].cost <= clicker.fish){
    clicker.fish-= clicker.upgrades[upgrade].cost;
    document.querySelector(".upgraderow").innerHTML-=`<button class="upgrade" onclick="upgrade_click('${i}')" id="${clicker.upgrades[i].id}"><img src="${clicker.upgrades[i].icon}"></button>`;
    clicker.upgrades[upgrade] = "bought";
    update_upgrades();
    };   
}

//---------updating fish counter & prices on the web page, save and load--------
//buildings
function update_buildings(){
    document.querySelector("#buildings").innerHTML="";
    for(i in clicker.buildings){
        if(clicker.buildings[i].unlocked){
        document.querySelector("#buildings").innerHTML+=`<button class="building" onclick="building_click('${i}')"><div class="bicon" style="background: url(/games/fish/midia/buildings.png); background-size: 1170px; background-position-x: ${clicker.buildings[i].icon}; width: 70px; height: 70px;"></div> <div class="bcontent"><div class="btext"><h3>${clicker.buildings[i].name}</h3> <br> <div class="bbuy"><div id="b10" onclick="buyten">10</div> <div id="bmax" onclick="buymax">max</div></div> </div> <div class="btext"><div class="bstats"><p class="buildingCost">${numberformat.format(clicker.buildings[i].cost)} fish</p> <br> <p class="bowned">${numberformat.format(clicker.buildings[i].amount)} owned.</p> </div></div></div> </button>`;
        totalpersecond += clicker.buildings[i].fps * clicker.buildings[i].amount;
        }
    };
    fps = totalpersecond;
}
//upgrades
function update_upgrades(){
    document.querySelector(".upgraderow").innerHTML="";
    for(i in clicker.upgrades){
        if(clicker.upgrades[i].bought){
        document.querySelector(".upgraderow").innerHTML+=`<button class="upgrade" onclick="upgrade_click('${i}')" id="${clicker.upgrades[i].id}"><img src="${clicker.upgrades[i].icon}" width="70"></button>`;
        }
    };
}
//counter
function updatecount(){
    if(Cookies.get("clicker") != null && Cookies.get("clicker") != "undefined"){
        var clicker1 = JSON.parse(Cookies.get("clicker"));
        for(i in clicker.buildings){
            if(clicker1.buildings[i]==null){
                clicker1.buildings[i] = clicker.buildings[i];
            }
        };
        for(i in clicker.upgrades){
            if(clicker1.upgrades[i]==null){
                clicker1.upgrades[i] = clicker.upgrades[i];
            }
        }
        clicker = clicker1;
    };
    update_buildings();
    update_upgrades();
    setInterval(() => {
    for(i in clicker.buildings){
        clicker.fish+=clicker.buildings[i].amount*clicker.buildings[i].fps/20;
    };
    document.querySelector("#counter").innerHTML = " "+ numberformat.format(Number(String(clicker.fish).split(".")[0]))+" fish";
    for(i in clicker.buildings){
        if(!clicker.buildings[i].unlocked && clicker.buildings[i].unlock <= clicker.fish){
            clicker.buildings[i].unlocked = true;
            update_buildings();
        }
    };
    for(i in clicker.upgrades){
        if(!clicker.upgrades[i].bought && clicker.upgrades[i].buyable <= clicker.fish){
            clicker.upgrades[i].bought = true;
            update_upgrades();
        }
    };
    document.querySelector("#fps").innerHTML = "per second: "+numberformat.format(fps);
    delay++;
    if(delay>=40){
        Cookies.set("clicker",JSON.stringify(clicker), {expires: 100000});
        Cookies.set("lasttime", Date.now(), {expires: 100000})
        delay = 0;
    }
    },50);
};

//audio
//faz um sfx de bolha, vê como faz musica de fundo tocar, etc

var musIdle = null;
var musAction = "/games/fish/fish_music.mp3";
var sfxBubble = null;
var sfxClick = "/games/fish/fish.mp3";
var a = new Audio();


// click animation
