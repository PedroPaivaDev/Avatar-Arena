const cards = [
    {
        name: "Aang",
        image: "https://data.whicdn.com/images/115410440/original.gif",
        attributes: { attack: 3, defense: 6 },
        ability:
            "Vento: Reduz a sua defesa em 60% e reduz o ataque do oponente em 50%",
        modifiers: {
            playerAtq: ["Ataque", 1],
            machineAtq: ["Ataque", 0.5],
            playerDef: ["Defesa", 0.4],
            machineDef: ["Defesa", 1]
        },
        noise: "https://cdn.videvo.net/videvo_files/audio/premium/audio0083/watermarked/Electronic%206039_51_3_preview.mp3"
    },

    {
        name: "Katara",
        image:
            "https://i.gifer.com/origin/b6/b6e7c73f2dd2dc560f78926f739174ab_w200.webp",
        attributes: { attack: 6, defense: 4 },
        ability:
            "Água: Reduz o ataque e defesa do oponente em 30% e reduz o seu ataque em 40%",
        modifiers: {
            playerAtq: ["Ataque", 0.6],
            machineAtq: ["Ataque", 0.7],
            playerDef: ["Defesa", 1],
            machineDef: ["Defesa", 0.7]
        },
        noise: "https://cdn.videvo.net/videvo_files/audio/premium/audio0194/watermarked/WaterSplash%20L2WATER_57_2_preview.mp3"
    },

    {
        name: "Sokka",
        image:
            "https://comicvine.gamespot.com/a/uploads/original/11135/111350907/7590968-0946627975-Q7gl..gif",
        attributes: { attack: 4, defense: 5 },
        ability:
            "Berserker: Reduz a sua defesa em 50% e aumenta o seu ataque em 150%",
        modifiers: {
            playerAtq: ["Ataque", 1.5],
            machineDef: ["Ataque", 1],
            playerDef: ["Defesa", 0.5],
            machineAtq: ["Defesa", 1]
        },
        noise: "https://cdn.videvo.net/videvo_files/audio/premium/audio0171/watermarked/SwordBody%20IE01_86_2_preview.mp3"
    },

    {
        name: "Toph",
        image:
            "https://i.pinimg.com/originals/dd/b2/82/ddb282fbf268d850984d655121f1d0ee.gif",
        attributes: { attack: 5, defense: 5 },
        ability:
            "Terra: Reduz o seu ataque e defesa em 40% e Reduz em 60% o ataque e defesa do oponente",
        modifiers: {
            playerAtq: ["Ataque", 0.6],
            machineDef: ["Ataque", 0.4],
            playerDef: ["Defesa", 0.6],
            machineAtq: ["Defesa", 0.4]
        },
        noise: "https://cdn.videvo.net/videvo_files/audio/premium/audio0152/watermarked/RockFall%20IE01_80_3_preview.mp3"
    },

    {
        name: "Zuko",
        image:
            "https://64.media.tumblr.com/069102c477d32ed5bbdeb4c8e714a3c5/22cd28551892b1a6-d2/s500x750/c62951aad4a18f29c35177e0833a392f61156d7a.gifv",
        attributes: { attack: 6, defense: 3 },
        ability:
            "Fogo: Reduz em 50% a defesa do oponente e reduz o seu ataque em 20%",
        modifiers: {
            playerAtq: ["Ataque", 0.8],
            machineDef: ["Ataque", 1],
            playerDef: ["Defesa", 1],
            machineAtq: ["Defesa", 0.5]
        },
        noise: "https://cdn.videvo.net/videvo_files/audio/premium/audio0089/watermarked/Fire%206083_83_2_preview.mp3"
    },
];

export default cards;