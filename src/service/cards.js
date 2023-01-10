import aang from 'assets/cardsAssets/aang.gif';
import wind from 'assets/cardsAssets/noise-wind.mp3';
import katara from 'assets/cardsAssets/katara.gif';
import water from 'assets/cardsAssets/noise-water.mp3';
import sokka from 'assets/cardsAssets/sokka.gif';
import sword from 'assets/cardsAssets/noise-sword.mp3';
import toph from 'assets/cardsAssets/toph.gif';
import earth from 'assets/cardsAssets/noise-earth.mp3';
import zuko from 'assets/cardsAssets/zuko.gif';
import fire from 'assets/cardsAssets/noise-fire.mp3';

const cards = [
    {
        name: "Aang",
        image: aang,
        attributes: { Ataque: 3, Defesa: 6 },
        ability:
            "Vento: Reduz a sua defesa em 60% e reduz o ataque do oponente em 50%",
        modifiers: {
            playerAtq: ["Ataque", 1],
            machineAtq: ["Ataque", 0.5],
            playerDef: ["Defesa", 0.4],
            machineDef: ["Defesa", 1]
        },
        noise: wind
    },

    {
        name: "Katara",
        image: katara,
        attributes: { Ataque: 6, Defesa: 4 },
        ability:
            "Água: Reduz o ataque e defesa do oponente em 30% e reduz o seu ataque em 40%",
        modifiers: {
            playerAtq: ["Ataque", 0.6],
            machineAtq: ["Ataque", 0.7],
            playerDef: ["Defesa", 1],
            machineDef: ["Defesa", 0.7]
        },
        noise: water
    },

    {
        name: "Sokka",
        image: sokka,
        attributes: { Ataque: 4, Defesa: 5 },
        ability:
            "Berserker: Reduz a sua defesa em 50% e aumenta o seu ataque em 150%",
        modifiers: {
            playerAtq: ["Ataque", 1.5],
            machineDef: ["Ataque", 1],
            playerDef: ["Defesa", 0.5],
            machineAtq: ["Defesa", 1]
        },
        noise: sword
    },

    {
        name: "Toph",
        image: toph,
        attributes: { Ataque: 5, Defesa: 5 },
        ability:
            "Terra: Reduz o seu ataque e defesa em 40% e Reduz em 60% o ataque e defesa do oponente",
        modifiers: {
            playerAtq: ["Ataque", 0.6],
            machineDef: ["Ataque", 0.4],
            playerDef: ["Defesa", 0.6],
            machineAtq: ["Defesa", 0.4]
        },
        noise: earth
    },

    {
        name: "Zuko",
        image: zuko,
        attributes: { Ataque: 6, Defesa: 3 },
        ability:
            "Fogo: Reduz em 50% a defesa do oponente e reduz o seu ataque em 20%",
        modifiers: {
            playerAtq: ["Ataque", 0.8],
            machineDef: ["Ataque", 1],
            playerDef: ["Defesa", 1],
            machineAtq: ["Defesa", 0.5]
        },
        noise: fire
    },
];

export default cards;