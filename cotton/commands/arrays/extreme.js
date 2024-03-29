const extreme = new Map([
    [1,"A fireball explodes with you at the center. You and each creature within 20 feet of you must make a Dexterity saving throw using your spell save DC, taking 5d6 fire damage on a failed save, or half as much damage on a successful one. You rolled a:5d6"],
    [2,"You lose the ability to hear for 1 day."],
    [3,"Each creature within 30 feet of you takes 1d10 necrotic damage. You regain hit points equal to the sum of damage dealt. You rolled a:1d10"],
    [4,"You teleport to an alternate plane, then return to the location where you started after 1 minute."],
    [5,"You transform into a large empty barrel for 1 minute, during which time you are considered petrified."],
    [6,"You are at the center of a darkness spell for 1 minute."],
    [7,"You are frightened by the nearest creature until the end of your next turn."],
    [8,"You are resistant to all damage types for 1 minute."],
    [9,"A random creature within 60 feet of you is poisoned for 1d4 hours. You rolled a:1d4"],
    [10,"Make a Wisdom saving throw against your own spell save DC. If you fail, you are polymorphed into a giant dragonfly for 1 minute."],
    [11,"Up to three creatures you choose within 30 feet of you take 4d10 lightning damage. You rolled a:4d10"],
    [12,"You immediately gain 20 temporary hit points."],
    [13,"You teleport up to 60 feet to an unoccupied space that you can see."],
    [14,"You are the center of a silence spell for 1 minute."],
    [15,"You are vulnerable to fiends for 1 hour. Such creatures gain advantage on attack rolls made against you."],
    [16,"For the next day, any time you make an ability check, roll 1d6 and subtract the result."],
    [17,"For any spell that requires a saving throw you cast within the next minute, the target gains advantage."],
    [18,"A demon whose CR is equal to your level appears near you. Make a Charisma saving throw against your spell save DC. If you make it, the demon is subservient, otherwise, it is hostile. The demon, if not banished or defeated, vanishes after 1 day."],
    [19,"For the next minute, every creature within 60 feet of you that hears you speak only hears insults as if you are casting vicious mockery at first level."],
    [20,"For the next day, you have advantage on the next 2d6 rolls you make where you don't already have advantage. You rolled a:2d6"],
    [21,"You are protected from Aberrations for 1 day. Such creatures can't attack you or harm you unless they save a Charisma saving throw against your spell save DC."],
    [22,"For 1 minute, a duplicate of yourself appears in the nearest open space which can take actions independently, and goes on the same Initiative as you. However, any damage it takes applies to you as well."],
    [23,"A loud boom emanates from you. All creatures within 15 feet take 2d8 thunder damage and must make a Constitution saving throw against your spell save DC or be deafened for 1 minute. You rolled a:2d8"],
    [24,"All creatures within 60 feet of you regain 2d8 hit points. You rolled a:2d8"],
    [25,"You transform into a marble statue of yourself for 1 minute, during which time you are considered petrified."],
    [26,"You are immune to disease for 1 week."],
    [27,"You immediately drop to 0 hit points."],
    [28,"Make a Wisdom saving throw against your own spell save DC. If you fail, you are transformed into a raven for 1 minute, as if by a polymorph spell."],
    [29,"You are protected from Beasts for 1 day. Such creatures can't attack you or harm you unless they save a Charisma saving throw against your spell save DC."],
    [30,"You transform into a stuffed toy resembling yourself for 1 minute, during which time you are considered petrified."],
    [31,"You stand at the center of a circular wall of fire with a radius of 15 feet. Any creature in any of the spaces covered by this fire must make a Dexterity saving throw against your spell DC or take 5d8 fire damage. The wall of fire remains for 1 minute. You rolled a:5d8"],
    [32,"You are vulnerable to Beasts for 1 hour. Such creatures gain advantage when attacking you."],
    [33,"You permanently lose the ability to smell. This sense can be restored with a spell that removes curses such as remove curse."],
    [34,"You are vulnerable to Celestials for 1 hour. Such creatures gain advantage when attacking you."],
    [35,"Make a Wisdom saving throw against your spell save DC. If you fail, you are transformed into a cat for 1 minute, as if by a polymorph spell."],
    [36,"You are vulnerable to Plants for 1 hour. Such creatures gain advantage when attacking you."],
    [37,"You gain the service of an arcane eye for 1 hour that does not require concentration."],
    [38,"You are protected from Celestials for 1 day. Such creatures can't attack you or harm you unless they succeed on a Charisma saving throw against your spell save DC."],
    [39,"You transform into a medium-sized potted plant for 1 minute, during which time you are considered petrified."],
    [40,"3d6 random gems appear near you, worth 50gp each. You rolled a:3d6"],
    [41,"All allies within 20 feet of you gain a +2 bonus to attack and damage rolls on any melee weapon attack they make within the next minute."],
    [42,"For 2d6 days, you glow bright yellow. You have disadvantage on Stealth checks and anyone trying to perceive you has advantage on their Perception check. You rolled a:2d6"],
    [43,"You stand at the center of a circular wall of force with a radius of 15 feet. Any creature in any of the spaces covered by this wall must make a Dexterity saving throw against your spell DC or take 5d8 force damage. The wall remains for 1 minute. You rolled a:5d8"],
    [44,"All creatures within 20 feet of you are knocked prone."],
    [45,"You are vulnerable to Aberrations for 1 hour. Such creatures gain advantage when attacking you."],
    [46,"For the next day, you are in the Border Ethereal near the location you were last in."],
    [47,"All allies within 20 feet of you gain a +2 bonus to attack and damage rolls on any ranged weapon attack they make within the next minute."],
    [48,"You are at the center of a 10-foot radius antimagic field that negates all magic equal to or less than your level for 1 hour and does not require concentration."],
    [49,"Make a Wisdom saving throw against your spell save DC. If you fail, you are transformed into a wolf for 1 minute, as if by a polymorph spell."],
    [50,"You are protected from Elementals for one day. Such creatures can't attack you or harm you unless they succeed on a Charisma saving throw against your spell save DC."],
    [51,"All of your hair permanently falls out. Only a spell such as remove curse can end this effect."],
    [52,"You gain the ability to speak one new language of your choice. However, you lose the ability to speak one language you already know."],
    [53,"A 30-foot cube hypnotic pattern appears with you at the center. All creatures within the pattern must succeed on a Wisdom saving throw or fall asleep for 1 minute or until they take damage."],
    [54,"You immediately take 2d10 psychic damage. You rolled a:2d10"],
    [55,"You are vulnerable to Undead for 1 hour. Such creatures gain advantage when attacking you."],
    [56,"You transform into an iron statue of yourself for 1 minute, during which time you are considered petrified."],
    [57,"If you die within the next minute, you come back to life as if by the reincarnate spell."],
    [58,"You are vulnerable to Elementals for 1 hour. Such creatures gain advantage when attacking you."],
    [59,"You are protected from Fey for 1 day. Such creatures can't attack you or harm you unless they succeed on a Charisma saving throw against your spell save DC."],
    [60,"You gain the service of an arcane sword that does not require concentration until your next short or long rest."],
    [61,"You permanently gain one cantrip. A spell such as remove curse can end this effect."],
    [62,"You permanently forget one cantrip. A spell such as remove curse can restore your memory."],
    [63,"All allies within 20 feet of you gain a -2 penalty on attack and damage rolls for any melee attack they make in the next minute."],
    [64,"All allies within 20 feet of you heal up to 3d8 hit points. You rolled a:3d8"],
    [65,"You lose the ability to see for 1 day. During this time, you have the blinded condition."],
    [66,"You gain the service of a phantom steed for 1 week."],
    [67,"You transform into a stone statue of yourself for 1 minute, during which time you are considered petrified."],
    [68,"All creatures within 20 feet of you, including you, must make a Dexterity save against your spell save DC or be affected by a faerie fire spell."],
    [69,"Make a Constitution saving throw against your spell save DC. If you fail, you are stunned for 1 minute."],
    [70,"Permanently increase one ability score of your choice by 1 point. Permanently decrease a different ability score of your choice by 1 point. A spell such as remove curse can end this effect."],
    [71,"You gain proficiency in one tool or weapon type you don\'t already have for 1 day."],
    [72,"Make a Wisdom saving throw against your spell save DC. If you fail, you are transformed into a giant spider for 1 minute, as if by the polymorph spell."],
    [73,"Gain the sympathy effects of the antipathy/sympathy spell for 3d6 days. You rolled a:3d6"],
    [74,"You are protected from Fiends for one day. Such creatures can't attack you or harm you unless they succeed on a Charisma saving throw against your spell save DC."],
    [75,"All allies within 20 feet of you gain a -2 penalty to attack and damage rolls for any ranged attack they make within the next minute."],
    [76,"Make a Wisdom saving throw against your spell save DC. If you fail, you are transformed into a giant rabbit for 1 minute, as if by the polymorph"],
    [77,"For the next day, you gain proficiency in all skills that you are not already proficient in."],
    [78,"You are vulnerable to Fey for 1 hour. Such creatures gain advantage when attacking you."],
    [79,"You transform into an empty wooden chest for 1 minute, during which time you are considered petrified."],
    [80,"Gain the antipathy effects of the antipathy/sympathy spell for 3d6 days. You rolled a:3d6"],
    [81,"All creatures within 30 feet of you must make a Wisdom saving throw. Any creature immune to magical sleep automatically succeeds on its saving throw. Those that fail fall asleep for 1d6 minutes. You rolled a:1d6"],
    [82,"You are protected from Plants for 1 day. Such creatures can't attack you or harm you unless they succeed on a Charisma saving throw against your spell save DC."],
    [83,"All your allies within 20 feet of you gain a +2 bonus to their AC for 1 minute."],
    [84,"The next time you fall below 0 hit points within the next month, you automatically fail your first death saving throw."],
    [85,"For the next day, any time you make an ability check, roll 1d6 and add the result."],
    [86,"Make a Wisdom saving throw against your spell save DC. If you fail, you are transformed into a sheep for 1 minute, as if by the polymorph spell."],
    [87,"All allies within 30 feet of you gain a -2 penalty to their AC for 1 minute."],
    [88,"You are protected from Undead for 1 day. Such creatures can't attack you or harm you unless they succeed on a Charisma saving throw against your spell save DC."],
    [89,"You jump forward in time exactly 1 minute, for 1 minute. From the perspective of everyone else, you cease to exist during that time."],
    [90,"Choose 1 permanent or triggered effect that has happened to you or somebody else that you\'ve received from this chart and remove it, even if it was beneficial."],
    [91,"The next time you rage, roll twice on this chart. Both effects will apply."],
    [92,"You get all spent uses of your rage back"],
    [93,"Your rage fails, you lose all unspent uses of rage until you next long rest"],
    [94,"Every time you speak during the next day, you inadvertently cast vicious mockery on the person that you are speaking to. A spell such as remove curse can end this effect."],
    [95,"1d20 platinum appears near you. You rolled a:1d20"],
    [96,"You instantly cast the Time Stop spell"],
    [97,"For the next 1 day you are able to control the weather as if casting the Control Weather spell."],
    [98,"For the next hour, your arms are transformed into a jelly like substance. During this time, you can't use your arms to perform any action."],
    [99,"You are granted a memory from your past."],
    [100,"For the next minute, each of your attacks do an additional 1d10 force damage."]
]);

exports.extreme = extreme; //Make the array available to use in other files