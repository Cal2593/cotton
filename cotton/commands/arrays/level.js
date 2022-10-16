const levs = [ //Create an array
    {
        "level": 4,
        "movement": 15,
        "hp": 10,
        "effect1": "You get advantage on STR/DEX checks (not attacks/saving throws)",
        "effect2": "You are disliked by hungry NPCs",
        "effect3": "You have no interest in food/wealth"
    },
    {
        "level": 3,
        "movement": 10,
        "hp": 5,
        "effect1": "You get advantage on STR/DEX checks (not attacks/saving throws)",
        "effect2": "You are disliked by hungry NPCs",
        "effect3": null
    },
    {
        "level": 2,
        "movement": 5,
        "hp": 0,
        "effect1": "You get advantage on STR/DEX checks (not attacks/saving throws)",
        "effect2": null,
        "effect3": null
    },
    {
        "level": 1,
        "movement": 0,
        "hp": 0,
        "effect1": null,
        "effect2": null,
        "effect3": null
    },
    {
        "level": 0,
        "movement": 0,
        "hp": 0,
        "effect1": null,
        "effect2": null,
        "effect3": null
    },
    {
        "level": -1,
        "movement": -5,
        "hp": 0,
        "effect1": "You have disadvantage on CHA checks (not attacks/saving throws)",
        "effect2": null,
        "effect3": null
    },
    {
        "level": -2,
        "movement": -10,
        "hp": 0,
        "effect1": "You have disadvantage on all ability checks (not attacks/saving throws)",
        "effect2": null,
        "effect3": null
    },
    {
        "level": -3,
        "movement": -15,
        "hp": 0,
        "effect1": "You have disadvantage on all ability checks (not attacks/saving throws)",
        "effect2": "You start craving food/wealth wherever you see it",
        "effect3": null
    },
    {
        "level": -4,
        "movement": -20,
        "hp": -5,
        "effect1": "You have disadvantage on all ability checks (not attacks/saving throws)",
        "effect2": "You start craving food/wealth wherever you see it",
        "effect3": "You can either move OR attack on your turn"
    },
    {
        "level": -5,
        "movement": -20,
        "hp": -5,
        "effect1": "You have disadvantage on all ability checks (not attacks/saving throws)",
        "effect2": "You start craving food/wealth wherever you see it",
        "effect3": "You can either move OR attack on your turn",
        "effect4": "You are unable to make Athletics/Acrobatics checks"
    },
    {
        "level": -6,
        "movement": -20,
        "hp": 2,
        "effect1": "You have disadvantage on all ability checks (not attacks/saving throws)",
        "effect2": "You have an intense desire for food/wealth wherever you see it",
        "effect3": "You can either move OR attack on your turn",
        "effect4": "You are unable to make Athletics/Acrobatics checks",
        "effect5": "You must use your movement to move towards food",
        "effect6": "You get an extra attack against people with food"
    }
    
];

exports.levs = levs; //Make the array available to use in other files