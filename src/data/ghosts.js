export const ghosts = [
  {
    name: 'Raiju',
    evidence: {
      0: {
        name: 'EMF Level 5',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/f/f2/EMFReader_Render.png',
      },
      1: {
        name: 'Ghost Orb',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/d/db/GhostOrb_Sprite.png',
      },
      2: {
        name: 'D.O.T.S. Projector',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/7/73/DOTS_projector_sprite.png',
      },
    },
    strength:
      'A Raiju can siphon power from nearby electrical devices, making it move faster',
    weakness:
      'Raiju are constantly disrupting electronic equipment when attacking, making it easier to track',
    abilities:
      'Siphons power from electronic equipment, increasing aggression and bolstering speed during a hunt',
    behavior:
      "When a Raiju manifests during a ghost event or a hunt, it has a larger range from which it can interfere with electronic equipment, a range that increases with a larger map size.When nearby activated electronic equipment, the Raiju's hunt sanity threshold is increased to 65%, similar to a Yokai with talking. If a Raiju is close enough to at least one electronic equipment that is turned on such that it can interfere with it, the Raiju will have an increased movement speed of approximately 2.5 m/s, rivaling (though not matching) the speed of a Revenant. This applies to all electronics, both when held in the hand and items dropped on the floor. Only head mounted cameras, motion sensors and sound sensors do not count towards the speed boost.",
    strategies:
      "In order to mitigate the risk of an early hunt, it is best to turn off and/or remove any unneeded electronic equipment from the Ghost Room; this also prevents the Raiju from harnessing this equipment to empower itself while hunting. Lazily discarding such equipment is a reliable way to make a Raiju extremely dangerous. Additionally, players often have the reflex of discarding electronic items behind them when a hunt starts to not attract the ghost's attention to them; this should be avoided with Raijus to not leave a trail of electronic equipment to power his speed ability. Instead, players should either switch to a non-electronic item or an electronic item that can be turned off. The Raiju may be readily-identified by being mindful of its speed during a hunt, particularly on small maps, so long as there are active electronic items nearby. If the ghost continues to walk very quickly when roaming (and not chasing particular players), then it is most likely a Raiju",
    excluded: false,
  },
  {
    name: 'Demon',
    evidence: {
      0: {
        name: 'Fingerprints',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/4/41/Fingerprints_3.png',
      },
      1: {
        name: 'Ghost Writing',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/2/2c/ClosedBook_Render.png',
      },
      2: {
        name: 'Freezing Temperatures',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/e/e4/Thermometer_Render.png',
      },
    },
    strength: 'Hunts more often than any other type of ghost',
    weakness: 'Increased effective crucifix range',
    abilities:
      'Can hunt from 70% sanity. Rare chance to hunt at any sanity percentage',
    behavior:
      'A Demon can begin a hunt when the average sanity is below 70% instead of the usual 50% threshold, making the first hunt begin much earlier on average in the game. Additionally, the Demon has a rare chance to hunt at any time, regardless of current sanity level, including at the very beginning of a mission. On top of all this, Demons also have a minimum cooldown of 20 seconds between hunts, instead of the usual 25 seconds. Smudging a Demon will prevent hunts for only 60 seconds, as opposed to the standard 90 seconds. As a weakness, the effective range of a crucifix is 5 meters instead of the standard 3 meters.',
    strategies:
      "To identify a Demon via its traits, players may time the cooldown between hunts, or watch out for signs of a very early hunt. Given the Demon's relative aggressiveness in hunting, players should plan their route to the ghost room and what they wish to bring for any objecties, while considering whether to hide or to smudge the ghost if it hunts. Sprint may need to be conserved once approaching the ghost room. With the crucifix's increased effective range, preventing hunts will be easier, especially in slightly larger rooms like garages or house hallways, though difficulties may still be encountered in even larger rooms or areas.",
    excluded: false,
  },
  {
    name: 'Hantu',
    evidence: {
      0: {
        name: 'Fingerprints',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/4/41/Fingerprints_3.png',
      },
      1: {
        name: 'Ghost Orb',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/d/db/GhostOrb_Sprite.png',
      },
      2: {
        name: 'Freezing Temperatures',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/e/e4/Thermometer_Render.png',
      },
    },
    strength: 'Lower temperatures allow the Hantu to move at faster speeds.',
    weakness: 'Hantus move slower in warmer areas.',
    abilities:
      'Moves much quicker in colder areas during hunts. Emits frosty breath in freezing rooms',
    behavior:
      "During a hunt, a Hantu's speed is affected by the temperature of the rooms that it goes through. This means that the Hantu is highly dependent on the map's breaker state, as the presence of power keeps the investigation area warm and thus slows the Hantu down.\r\n\r\nThe Hantu is twice as likely to choose turning off the breaker as an interaction, compared to other ghosts.\r\n\r\nWhen the Hantu manifests itself during a hunt, it will emit freezing breath when it is in a room with a temperature equal to or lower than 3°C (37.4°F). Dead players cannot see this breath.\r\n\r\nUnlike all other ghosts, the Hantu does not accelerate while maintaining line of sight during hunts.",
    strategies:
      "The Hantu's ability to emit freezing breath in freezing rooms makes it easier to identify; players may carry smudge sticks to a cold location near the Hantu, smudge the ghost when it hunts, and use the few seconds in which it ignores the player to look for any freezing breath. Players may also consider turning off the breaker to reduce the time it takes for the Hantu to freeze a room if it roams or changes rooms, though the Hantu's increased speed in cold weather and player sanity drain should also be considered when deciding whether to do so.\r\n\r\nWhen the breaker is on and room temperatures are at their highest, it may be possible to loop the ghost during a hunt around a large furniture piece such as a kitchen counter, though players should consider that the mere presence of the ghost in that room will cool it down and make it increasingly harder to loop, especially during longer hunts.\r\n\r\nThe Hantu loses speed in real-time as it moves from a cold room to a warm room and vice-versa; players engage in risk to spot this behaviour, potentially allowing for the Hantu to be identified without evidence.",
    excluded: false,
  },
  {
    name: 'Revenant',
    evidence: {
      0: {
        name: 'Ghost Orb',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/d/db/GhostOrb_Sprite.png',
      },
      1: {
        name: 'Ghost Writing',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/2/2c/ClosedBook_Render.png',
      },
      2: {
        name: 'Freezing Temperatures',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/e/e4/Thermometer_Render.png',
      },
    },
    strength: '',
    weakness: '',
    abilities: 'Travels significantly faster when chasing its target',
    behavior:
      'When a Revenant is hunting, it will have one of two speeds: if it is not chasing a player in line of sight, it will roam at 0.5 times the speed of most other ghosts, but if it is actively chasing a player, it will do so at 2 times the speed of most other ghosts. The Revenant does not gain a speed bonus when in an extended chase with players.',
    strategies: '',
    excluded: false,
  },
  {
    name: 'Banshee',
    evidence: {
      0: {
        name: 'Fingerprints',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/4/41/Fingerprints_3.png',
      },
      1: {
        name: 'Ghost Orb',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/d/db/GhostOrb_Sprite.png',
      },
      2: {
        name: 'D.O.T.S. Projector',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/7/73/DOTS_projector_sprite.png',
      },
    },
    strength:
      'Focuses on the same player until that player is killed or has left the game',
    weakness: 'Makes unique paranormal sounds on a parabolic microphone',
    abilities: '',
    behavior:
      "At the start of the game, a Banshee will randomly select a primary target. If the primary target dies or leaves the game, a new primary target will be selected.\r\n\r\nA Banshee will only check for their primary target's sanity when trying to initiate a hunt. When a Banshee hunts, it will mostly follow standard hunt rules, but it will ignore all players other than its target, unlike other ghosts, which generally chase any opportune player. It will not attempt to chase other players and will not kill them, even if it comes into contact with a non-target player. The Banshee will react to Smudge Sticks lit by other players, but this will not allow for completion of the \"Repel a ghost while it is chasing someone\" optional objective, unless the Banshee is also chasing its target when it is lit.\r\n\r\nIf a Banshee begins a hunt while its primary target is outside the building, the Banshee will temporarily select another target for that hunt, returning to its primary target once the hunt ends.\r\n\r\nThe Banshee also has a mechanic similar to the Phantom's, where it is more likely to roam to the location of its chosen target outside of a hunt.\r\n\r\nA Banshee will prefer to cause ghost events where it sings over other types of ghost events. When it performs a singing event near its target, they will have an additional 5% sanity drop on top of the standard sanity drain.\r\n\r\nOther than the effects stated above, being the Banshee's target does not appear to affect other mechanics such as the rate of interactions.\r\n\r\nWhen a Parabolic Microphone is used, the Banshee has a chance of making a unique shriek-like paranormal sound different from other ghosts.",
    strategies:
      'Identifying the target player of a Banshee both conclusively identifies it, and can provide players with a significant edge, such as making hunt-related objectives much easier and for other players to continue investigating during hunts in impunity. Note that the target player must be inside the investigation area for this to be applicable. There are some ways players may identify a Banshee:\r\n\r\nBanshees will only check for the individual sanity level of the target player when attempting to hunt. If the ghost hunts very frequently despite a relatively high team average sanity, check the sanity levels of other players on the sanity monitor inside the truck: the one with the lowest sanity is most likely the target.\r\n\r\nIf the latter method proves to be inconclusive or when playing on the Nightmare difficulty, having players act as "baits" with smudge sticks and/or escape routes ready can definitively identify the target. Bait players should stand in plain sight and attempt to actively attract the ghost (either by talking into the microphone or holding active electronics); if the ghost ignores the bait, have another player repeat the process then proceed by elimination until the target is found.\r\n\r\nBanshees tend to wander towards their target outside of hunts; a player reporting frequent activity or even hunts starting near them and far away from the ghost room is most likely the target.\r\n\r\nNote that if the target player dies or disconnects, a new target will be selected. This also applies on the Nightmare difficulty: if the Banshee manages to kill its target, it will immediately select another player and continue hunting.It is more difficult to determine if the ghost is a Banshee via its target ability if one is playing solo, as its ability is only distinguishable in group encounters.',
    excluded: false,
  },
  {
    name: 'Mare',
    evidence: {
      0: {
        name: 'Spirit Box',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/d/d2/SpiritBox_Render.png',
      },
      1: {
        name: 'Ghost Orb',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/d/db/GhostOrb_Sprite.png',
      },
      2: {
        name: 'Ghost Writing',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/2/2c/ClosedBook_Render.png',
      },
    },
    strength:
      'Can hunt at higher sanity levelsWill try to turn off lights more often',
    weakness: 'Turning lights on will lower its hunt sanity threshold to 40%',
    abilities: '',
    behavior:
      'If a player turns on a light near a Mare, it has a chance of turning the light off almost immediately. The Mare also has a higher chance of wandering into darker rooms. Mares are more likely to choose turning off lights as an interaction.\r\n\r\nA Mare has a modified hunt sanity threshold depending on whether the room it is currently in is lit. If the lights are turned off, the hunt sanity threshold is increased 60%, and if the lights are turned on, the threshold is decreased to 40%. Other sources of light, such as brought-in equipment and candles, do not affect this threshold. Mares cannot turn on lights by interacting with them, though they can turn them off.\r\n\r\nWhen performing a ghost event, Mares are more likely to choose one where the light bulbs explode, as this will disable the lights, making it easier to hunt.',
    strategies:
      "Mares can be identified by its traits in several ways: its ability to turn the lights back off the moment a player turns them on, its preference for light-breaking ghost events, and its increased hunt sanity threshould when in the dark. A ghost turning on the light directly eliminates the possibility of it being a Mare. On the other hand, any ghost may choose to never turn on a light throughout the entire game, so this negative should not be used to confirm the ghost type.\r\n\r\nPlayers should be cautious when using the Spirit Box where the ghost is or looking for Ghost Orbs, as the Mare is more likely to hunt when the lights in its room are off, potentially catching players dangerously close to the Mare when it begins to hunt. Keep any other players informed when these evidences are confirmed or conclusively ruled out, so that the lights can be turned back on. This also applies in general when not looking to start a hunt and for other ghosts.\r\n\r\nAs the Mare's ability is dependent on the brightness of its room, the simplest way to delay a hunt is to keep the lights on in the ghost room and its vicinity, as this is what actually lowers the Mare's hunt sanity threshold. Be aware of the locations of light switches and the fuse box, as having them off is to the Mare's advantage. Keeping a player near them can help to counteract the Mare's ability if they are turned off, whether by the ghost or from an electrical overload. Note that this will be much less useful if the average team sanity is already below 40%.\r\n\r\nWhether the player(s) themselves are in a lit room does not affect the Mare's hunt sanity threshold, though this is useful in general if players aim to greatly delay the ghost from hunting.",
    excluded: false,
  },
  {
    name: 'The Twins',
    evidence: {
      0: {
        name: 'EMF Level 5',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/f/f2/EMFReader_Render.png',
      },
      1: {
        name: 'Spirit Box',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/4/4c/SpiritBox_Ghost.png',
      },
      2: {
        name: 'Freezing Temperatures',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/e/e4/Thermometer_Render.png',
      },
    },
    strength: 'Either Twin can be angered and initiate an attack on their prey',
    weakness:
      'The Twins will often interact with the environment at the same time',
    abilities: '',
    behavior:
      'When The Twins are not hunting, they can move separately and interact with the environment on their own, or at the same time. There is one "main" Twin, which creates Freezing Temperatures, can respond to Spirit Box prompts, and can leave EMF Level 5 interactions. The "decoy" Twin does not set off motion sensors, and cannot respond to the Spirit Box nor spread Freezing Temperatures, but its interactions can give off EMF Level 5.\r\n\r\nWhen the ghost attempts to initiate a hunt, there is a 50% chance for it to begin at the "main" Twin, and a 50% chance for it to begin at the Twin that last interacted with the environment. When this happens, the Twin which initiated the hunt will follow standard hunting rules like most other ghost types. Both Twins cannot hunt at the same time, and they will follow the standard grace period between hunts.\r\n\r\nEach Twin has a different moving speed during hunts. The "main" Twin is said to move at either the normal ghost speed or 10% slower, while the "decoy" Twin will move 10% faster. Noticing a subtle change in speed from one hunt to another might indicate that the player is dealing with Twins.\r\n\r\nWhen using a crucifix in an attempt to prevent hunts, regardless of which Twin tries to hunt, the crucifix will check for the "main" Twin, even if the hunt is trying to start from far away.',
    strategies:
      'The Twin\'s primary strength is their ability to misdirect: the wandering Twin can very easily conjure red herring interactions at parts of the map far from the main Twin that grants evidence, misleading hunters and delaying their efforts to gather evidence. However, the wandering Twin\'s inability to give evidence past EMF Level 5 can also be used against it: using a thermometer and noting a lack of Freezing Temperatures (or, at the very least, notable temperature drops) where ghost activity is noted, or failing to receive Spirit Box responses in rooms near where interactions occurred, are strong signs of the antics of a wandering Twin causing trouble.\r\n\r\nDue to The Twins having two choices in regards to angles of attack for any given hunt, it is recommended to plan for the event that one of the Twins "blocks" a planned escape route. It\'s worth noting that when the location of the "main" Twin is, crucifixes should be focused on them, as the "main" Twin is used to check for hunts.',
    excluded: false,
  },
  {
    name: 'Poltergeist',
    evidence: {
      0: {
        name: 'Spirit Box',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/d/d2/SpiritBox_Render.png',
      },
      1: {
        name: 'Ghost Writing',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/2/2c/ClosedBook_Render.png',
      },
      2: {
        name: 'Fingerprints',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/4/41/Fingerprints_3.png',
      },
    },
    strength: 'Can throw multiple objects at once',
    weakness: 'Ineffective in empty rooms with no throwables',
    abilities: 'Decrease sanity by throwing objects',
    behavior:
      'When a Poltergeist interacts with the environment, it has a chance of throwing multiple items at once. This will decrease the sanity of all player near the ghost by an amount equal to the number of items thrown multiplied by 2%. This will create an EMF level 3 reading. Poltergeists can also throw items with higher force than other ghosts.\r\n\r\nIf there are no items near a Poltergeist, it is unable to use its ability. This, however, will not prevent a hunt.',
    strategies:
      "A Poltergeist's ability to manipulate multiple objects at once may make it easier to identify. Players may throw multiple objects in close proxmity and observe whether the ghost throws multiple items at once.\r\n\r\nUnlike other ghosts, objects thrown by Poltergeists have the ability to decrease player sanity, even when they are not looking at the objects being thrown. This can also help to identify the ghost; if a player notices a dip in their sanity after they hear physical disturbances in nearby rooms, they can guess it is likely a Poltergeist they are facing.",
    excluded: false,
  },
  {
    name: 'Obake',
    evidence: {
      0: {
        name: 'EMF Level 5',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/f/f2/EMFReader_Render.png',
      },
      1: {
        name: 'Fingerprints',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/4/41/Fingerprints_3.png',
      },
      2: {
        name: 'Ghost Orb',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/d/db/GhostOrb_Sprite.png',
      },
    },
    strength: '',
    weakness: 'May leave behind six-fingered handprints',
    abilities: 'Can leave fingerprints that disappear quicker',
    behavior:
      'When interacting with a valid surface, the Obake has a 75% chance of creating fingerprints, instead of the usual 100%. Additionally, when creating handprints, there is an estimated 20%-25% chance that it will create a unique handprint that has 6 fingers instead of the usual 5.\r\n\r\nThe Obake occassionally triggers an ability to reduce the remaining time for all existing, lingering fingerprints on the map by half. For example, two fingerprints lingering on the map with 40 seconds and 70 seconds before timing out and disappearing are cut in half to 20 and 35 seconds remaining respectively. This ability can be triggered multiple times on the same fingerprints, making it possible for a fingerprint to disappear mere seconds after appearing.\r\n\r\nContrary to popular myths claiming otherwise, an Obake will not morph into a player model, does not have a unique ghost model that they can morph into, nor does it change models between manifestations and hunts. An Obake is still able to change between its fully-visible form, its translucent form, and its shadowy form between ghost events, which all ghosts are able to do. As such, one cannot tell whether a ghost is an Obake just by looking at its model.',
    strategies:
      'Each handprint from an Obake may have five or six fingers. The number of fingers may differ, even if the Obake touches the same surface multiple times. Because the six-fingered handprint is unique to the Obake, it conclusively identifies it. A five-fingered handprint does not necessarily rule Obake out, however.\r\n\r\nOn Nightmare, acquiring EMF Level 5 and Ghost Orbs allows for the Obake to be safely ruled out, as it always has Fingerprints as one of its two types of evidence.',
    excluded: false,
  },
  {
    name: 'Yurei',
    evidence: {
      0: {
        name: 'Ghost Orb',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/d/db/GhostOrb_Sprite.png',
      },
      1: {
        name: 'Freezing Temperatures',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/e/e4/Thermometer_Render.png',
      },
      2: {
        name: 'D.O.T.S. Projector',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/7/73/DOTS_projector_sprite.png',
      },
    },
    strength: 'Yureis have been known to have a stronger effect on sanity.',
    weakness:
      "Smudging the Yurei's place of death will trap it temporarily, reducing how much it wanders.",
    abilities: 'Stronger effect on player Sanity',
    behavior:
      'During a ghost event or a hunt, if the player is within 10 metres of a Yurei, their sanity will drop by 0.4% per second compared to 0.2% per second with most other ghosts, an ability similar to the Phantom.\r\n\r\nA Yurei has the ability to drop the sanity of all players within 7.5 metres by about 12.5%. When this happens, one selected door in the room that the ghost is currently in will close, similar to a manifestation ghost event, but the ghost will not actually appear or hiss. The Yurei will also prefer ghost events where it does a "hiss".\r\n\r\nWhen Smudge Sticks are used on the Yurei, it will not leave the room that it is currently in for 90 seconds.',
    strategies:
      "Generally, keeping doors wide open near the ghost will help one to observe when the Yurei uses its ability. If the ghost fully shuts a door from an open state, then it is likely a Yurei. Note that any ghost can shut a door if the door is only slightly ajar, especially if players open the door in that manner.\r\n\r\nBe sure to get away from the Yurei when it does manifest if you aren't taking a photo of it, as it will quickly degrade sanity. Additionally, try to minimize having more than a couple hunters in the Ghost Room at any time as to lessen the impact when it uses its sanity drain power.",
    excluded: false,
  },
  {
    name: 'Wraith',
    evidence: {
      0: {
        name: 'EMF Level 5',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/f/f2/EMFReader_Render.png',
      },
      1: {
        name: 'Spirit Box (Evidence)',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/d/d2/SpiritBox_Render.png',
      },
      2: {
        name: 'D.O.T.S. Projector',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/7/73/DOTS_projector_sprite.png',
      },
    },
    strength: "Almost never touches the ground and doesn't leave footprints",
    weakness: 'Has a toxic reaction to Salt',
    abilities:
      'No footprints after stepping on a salt pile. Teleports to players randomly.',
    behavior:
      "When the Wraith is not hunting, it has a chance to teleport within 3 meters of a random player, generating an EMF Level 2 reading, with a 25% chance for this to be an EMF Level 5 reading instead. Wraiths cannot teleport during hunts, but may teleport just before initiating one.\r\n\r\nWhen a Wraith steps in a salt pile, indicated by the presence of an imprint, it will never leave any UV-visible footprints, even if it moves and makes footstep noises. It will also temporarily have an increased amount of ghost activity.\r\n\r\nWraiths cannot and do not:\r\n\r\nAttempt to avoid salt piles, even during hunts\r\nFail to leave imprints in salt; they will always do so if they step in it\r\nFloat off the ground, whether during hunts or manifestations. You cannot identify a Wraith just by looking at its ghost model\r\nSee through physical objects such as walls and doors, despite the Journal's description of the Wraith suggesting otherwise\r\nWalk quietly; Wraiths will emit footstep noises at the same volume as most other ghosts\r\nWalk through walls, even during hunts; they can only walk through doors (which all other ghosts are also able to do).",
    strategies:
      "Be on the lookout for seemingly random EMF level 2 or 5 readings; it may mean a Wraith teleported to you.\r\n\r\nA relatively accurate method for identifying a Wraith without gathering evidence is placing salt piles near it, with a UV Flashlight or glowstick ready. When the ghost passes through the salt, aim the UV light toward the ghost's footstep noises. If no footprints are visible, even under UV light, the ghost is most likely a Wraith; at the same time, visible footprints definitely rule out a Wraith. Note that any ghost can step in salt and choose not to move afterwards, generating no footprints; players should listen for multiple footstep sounds before checking for footprints.\r\n\r\nAs Wraiths leave no footprints and no fingerprints, they are notoriously difficult to get maximum photo rewards with. Try placing props around the ghost's general location for interaction photos, or utilize a Ouija Board if one spawns.",
    excluded: false,
  },
  {
    name: 'The Mimic',
    evidence: {
      0: {
        name: 'Spirit Box',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/4/4c/SpiritBox_Ghost.png',
      },
      1: {
        name: 'Fingerprints',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/4/41/Fingerprints_3.png',
      },
      2: {
        name: 'Freezing Temperatures',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/e/e4/Thermometer_Render.png',
      },
    },
    strength: 'Can mimic the actions of other ghosts',
    weakness: 'Induces Ghost Orbs as fourth evidence',
    abilities: '',
    behavior:
      'The Mimic is able to mirror the traits of other ghosts, such as leaving a six-fingered handprint that would otherwise identify an Obake. The Mimic may occasionally change the ghost type that it chooses to imitate every 30 seconds to about 2 minutes.\r\n\r\nThe Mimic also provides "evidence" of Ghost Orbs in addition to its three main evidence types, which also appear on Nightmare difficulty. In effect, this is the only ghost that would appear to have four types of evidence (or three on Nightmare). The Ghost Orbs, along with the other evidences if none are hidden due to the difficulty, will always exist regardless of the type of ghost that The Mimic chooses to imitate.',
    strategies:
      "The Mimic's fundamental nature means that it is unpredictable: it can theoretically have the powers of almost any ghost type at any time, most notably ghost abilities that could enable early hunts. The safest way to handle a Mimic is to treat it as if it had every potential modifier that could increase its aggression, and make sure to utilize if not all, then at least a few tactics that would be used to dissuade attacks from other ghost types:\r\n\r\nTry to minimize speaking when near the ghost (Yokai)\r\nTurn off electronics that are no longer needed (Raiju)\r\nKeep the lights on in the Ghost Room (Mare)\r\nMake sure to have a source of flame in the Ghost Room (Onryo)\r\n\r\nIn general, be prepared for the possibility of early hunts (Demon)Additionally, it is recommended to have Smudge Sticks handy once nearing average hunt thresholds, as The Mimic may imitate ghosts such as the Revenant that can quickly end a chase.\r\n\r\nThe presence of Ghost Orbs with The Mimic means that players have to take care when trying to identify the ghost with three pieces of evidence, including Ghost Orbs, if there is a potential overlap between The Mimic and another ghost. For example, identifying Fingerprints, Ghost Orbs, and Freezing Temperatures usually indicates a Hantu, but as The Mimic creates orbs, Spirit Box evidence has to be definitively ruled out before a Hantu can be confirmed. Players should be conscientious searching for evidence if such a situation arises. Greater attention will have to be paid to this point in Nightmare difficulty, as players will normally be given only two evidences, though conclusively identifying three pieces of evidence in Nightmare will also confirm the ghost as The Mimic.\r\n\r\nConcerning evidence, noting the behavior of specific ghost types, but getting evidence that they do not have, can bring The Mimic into suspicion, allowing for more focused evidence-gathering. For example, if the ghost touches two doors on different parts of the map in very close succession, which is usually a strong indication of The Twins, but Fingerprints are successfully noted, then The Mimic can be strongly presumed.",
    excluded: false,
  },
  {
    name: 'Onryo',
    evidence: {
      0: {
        name: 'Spirit Box',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/4/4c/SpiritBox_Ghost.png',
      },
      1: {
        name: 'Ghost Orb',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/d/db/GhostOrb_Sprite.png',
      },
      2: {
        name: 'Freezing Temperatures',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/e/e4/Thermometer_Render.png',
      },
    },
    strength: 'Can hunt from a flame extinguishing',
    weakness: 'Lit flames prevent the ghost from hunting',
    abilities: '',
    behavior:
      "Onryo have a hunt sanity threshold of 60%, compared to the standard 50% baseline.\r\n\r\nWhen a lit candle, lighter, or campfire (in Maple Lodge Campsite) is extinguished near an Onryo, whether by itself or blown out by the ghost, there is a chance for the Onryo to begin a hunt, regardless of average sanity. Candles extinguishing due to being thrown does not count. The first three flames extinguished near the ghost in a contract will not result in a hunt. Subsequent flames extinguished have a 50% chance of resulting in a hunt. In multiplayer, this chance to hunt increases when players die, with a near-guaranteed chance when at least two players are dead.\r\n\r\nIf a flame is present near the ghost, the flame acts as a crucifix, preventing it from hunting within a range of 4m (versus a crucifix's 3m range). If it attempts to start a hunt within range of the flame, the hunt will fail and it will blow out the candle instead. Lit flames have priority to stop hunts over normal crucifixes. However, having a lit flame for this purpose also risks triggering an early hunt based on the previously mentioned mechanic. Multiple lit flames in close proximity can potentially cause a chain reaction.\r\n\r\nThe Onryo also has a higher chance to blow out a flame than other ghosts, further complicating the task of countering one.\r\n\r\nContrary to the Journal quote, the Onryo does not attempt to escape from lit candles.",
    strategies:
      "The Onryo's aversion to fire is a double-edged sword. Sufficient candles and constant relighting may help to keep it from hunting, and this may also serve as identification for the ghost in Nightmare difficulty. On the other hand, having the Onryo within range of only one candle increases the risk of it hunting as a result of blowing it out. The latter is even riskier if one or more players have died, as a hunt is much more likely with one dead teammate and almost ensured with two. Players should consider whether having flames lit near the ghost is worth it to prevent hunts.",
    excluded: false,
  },
  {
    name: 'Oni',
    evidence: {
      0: {
        name: 'EMF Reader',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/f/f2/EMFReader_Render.png',
      },
      1: {
        name: 'Thermometer',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/e/e4/Thermometer_Render.png',
      },
      2: {
        name: 'D.O.T.S. Projector',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/7/73/DOTS_projector_sprite.png',
      },
    },
    strength:
      'More active when people are nearbyThrows objects at great speeds',
    weakness: "Easy to identify if it's more active.",
    abilities: '',
    behavior:
      "The Oni is more active, interacting with objects more often and causing more ghost events. An Oni cannot perform the smoke/mist-type ghost event that causes a hiss, but can still perform a manifestation (ghost) event and may hiss in that case. It also has a higher chance of showing in its full form during a manifestation event as opposed to a shadowy or translucent form.\r\n\r\nWhen interacting with objects, an Oni has a chance of throwing it higher and/or with more force, making it land further away. Unlike Poltergeists, they cannot throw multiple items at once, nor does interacting with items reduce the players' sanity.",
    strategies:
      'Since it is one of the most active ghosts in the game, it will more readily give up evidence to players, which can make for generous and swift investigations if an Oni is quick to reveal the necessary evidence. Players may also infer from the Oni throwing an item at great speed or height, though care should be taken to distinguish this from a Poltergeist using its abilities.\r\n\r\nSince the Oni cannot create the smoke-type ghost event, an Oni can be ruled out if the ghost performs such an event. The Oni could still cause a hiss if it performs the manifestation ghost event.',
    excluded: false,
  },
  {
    name: 'Goryo',
    evidence: {
      0: {
        name: 'EMF Reader',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/f/f2/EMFReader_Render.png',
      },
      1: {
        name: 'Fingerprints',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/4/41/Fingerprints_3.png',
      },
      2: {
        name: 'D.O.T.S. Projector',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/7/73/DOTS_projector_sprite.png',
      },
    },
    strength: '',
    weakness: '',
    abilities: 'Only shows itself passing through D.O.T.S. on video camera',
    behavior:
      'A Goryo will only interact with a D.O.T.S. Projector if no players are nearby. In addition, its D.O.T.S. silhouette is only visible through a Video Camera, and cannot be seen with the naked eye. A Goryo will still manifest normally during ghost events and hunts with its ghost model, which does not require any special equipment to be seen.\r\n\r\nA Goryo is less likely to roam outside its ghost room when they are not hunting.',
    strategies:
      "It is necessary to have a Video Camera either placed facing an active D.O.T.S. Projector, or held by a player outside the ghost's room. If D.O.T.S. evidence is visible in the camera's screen, but invisible in direct view, the ghost is likely to be a Goryo. Conversely, if D.O.T.S. is seen without the aid of a video camera, or if D.O.T.S. is seen while players are in the ghost's room, a Goryo can be safely ruled out.\r\n\r\nIt is important to note that its power only affects its silhouette with the D.O.T.S. Projector. A Goryo should not be ruled out simply because it has manifested during ghost events or hunts.\r\n\r\nWhile EMF 5 and Fingerprints normally indicate a possible Goryo, having both of them in Nightmare difficulty rules the Goryo out entirely, due to D.O.T.S. always being one of the Goryo's two given pieces of evidence.",
    excluded: false,
  },
  {
    name: 'Phantom',
    evidence: {
      0: {
        name: 'Spirit Box (Evidence)',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/d/d2/SpiritBox_Render.png',
      },
      1: {
        name: 'Fingerprints',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/4/41/Fingerprints_3.png',
      },
      2: {
        name: 'D.O.T.S. Projector',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/7/73/DOTS_projector_sprite.png',
      },
    },
    strength: 'Drains Sanity from those who look at it.',
    weakness: 'Temporarily disappears after a photo is taken of it.',
    abilities: 'N/A',
    behavior: '',
    strategies: '',
    excluded: false,
  },
  {
    name: 'Yokai',
    evidence: {
      0: {
        name: 'Spirit Box (Evidence)',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/d/d2/SpiritBox_Render.png',
      },
      1: {
        name: 'Ghost Orb',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/d/db/GhostOrb_Sprite.png',
      },
      2: {
        name: 'D.O.T.S. Projector',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/7/73/DOTS_projector_sprite.png',
      },
    },
    strength: '',
    weakness: 'Can only hear and detect electronics within 2 metres of it',
    abilities: 'Talking near it will increase its chance of hunting',
    behavior:
      "The abilities of a Yokai pertain to the presence of players' voices near it. The Yokai's hunt sanity threshold is increased to 80% while players are talking within a certain range of it, otherwise, it has the normal threshold of 50%. Talking near the Yokai at any sanity will also increase its activity.\r\n\r\nDuring hunts, a Yokai can only hear voices or sense electronics that are within 2 meters of it.",
    strategies:
      "If a Yokai is suspected or confirmed, players wishing to avoid hunts or death should avoid talking near the ghost or ghost room. With the Yokai's increased aggressiveness when players are talking, it is able to initiate hunt at very high average sanity levels and therefore very early into an investigation. Otherwise, players wanting the ghost to hunt for certain objectives could even rant at the ghost, if that is what they want.\r\n\r\nGiven that the Yokai's weakness is its short hearing radius during hunts, as long as the ghost is far enough and players do not talk near stairways (as the ghost may come up or down without players noticing), it is safe for players to talk without attracting the ghost. Additionally, this may be useful for identifying the ghost; one player get near the ghost without any electronics or line-of-sight, but should keep smudge sticks and a lighter handy. If talking continuously fails to attract the ghost, then it is likely a Yokai. If it attracts the ghost, then the smudge sticks may come into play. On the other hand, if not testing for the ghost in this manner, it is generally much safer to simply remain quiet during a hunt rather than try to exploit its reduced hearing to communicate at the risk of it coming within earshot of the player.",
    excluded: false,
  },
  {
    name: 'Spirit',
    evidence: {
      0: {
        name: 'EMF Level 5',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/f/f2/EMFReader_Render.png',
      },
      1: {
        name: 'Spirit Box',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/d/d2/SpiritBox_Render.png',
      },
      2: {
        name: 'Ghost Writing',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/2/2c/ClosedBook_Render.png',
      },
    },
    strength: '',
    weakness:
      'Using Smudge Sticks on it will prevent it from Hunting for a long time',
    abilities: '',
    behavior:
      'When a Smudge Stick is used near a Spirit, it cannot initiate a hunt for 180 seconds instead of 90 seconds with most other ghosts.\r\n\r\nSpirits have no other special behaviour.',
    strategies:
      'The main (and usually only) way to confirm or deny a Spirit without using evidences is to lower the average sanity to below 50%, and smudge the ghost while it is not hunting; if it hunts before the three minutes is up, it is not a Spirit. If it hunts only after three minutes, it is very likely (though not conclusively) a Spirit. Note that if it hunts within the first minute of the smudge stick being used, then the smudge stick did not work, and the player should attempt to smudge it again. In Nightmare difficulty, players should wait for a crucifix to burn at least once to confirm that the average sanity is low enough.',
    excluded: false,
  },
  {
    name: 'Shade',
    evidence: {
      0: {
        name: 'EMF Level 5',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/f/f2/EMFReader_Render.png',
      },
      1: {
        name: 'Ghost Writing',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/2/2c/ClosedBook_Render.png',
      },
      2: {
        name: 'Freezing Temperatures',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/e/e4/Thermometer_Render.png',
      },
    },
    strength: '',
    weakness: '',
    abilities: 'Rarely performs actions in the presence of multiple people',
    behavior:
      "Shades can hunt only below an average sanity of 35%, lower than most other ghosts.\r\n\r\nShades are less likely to perform interactions than most other ghosts when at least one player is in the same room as the ghost. When at least one player is in the same room as a Shade, the chance of it hunting will also be negated. This does not mean the Shade cannot hunt, however, as it can initiate a hunt in another room without the presence of players.\r\n\r\nShades are less likely to perform ghost events at high sanities. At 100% average sanity, an attempted ghost event will succeed 0% of the time. This success rate increases by 2% per percentage of average sanity lost; at an average sanity of 50%, an attempted ghost event will always succeed.\r\n\r\nWhen it performs a ghost event, Shades will prefer hissing into the player's ear instead of a full-manifestation. If it does manifest for a ghost event, it has a higher chance of not appearing fully solid.",
    strategies:
      "Due to the Shade's aforementioned shyness, the lack of interactions may give it away, or players may become frustruated at the ghost not producing evidence. Players may need to coax it to perform interactions by using smudge sticks or specific cursed possessions that will increase the chance of the ghost interacting with the environment. Turning off the lights in the ghost's area may also help.\r\n\r\nGiven the Shade's inability to hunt in a room with players, if it is needed to bait out the ghost into hunting mode, make sure that there are no players in the ghost room. Some rooms that seem like a single room are actually broken down into multiple rooms, and vice-versa; for example, the cell blocks on the Prison map consist of five rooms, and the master bedroom and attached closet and bathroom of Tanglewood Street House are all one room.\r\n\r\nIn singleplayer on Nightmare difficulty, one useful way to identify a Shade is to drop the average sanity to zero, before using two sanity pills to restore the player's sanity to 50%, then allowing a small drop of sanity for a few seconds within the investigation area before stopping it via candles or room lights (ideally by also standing far away from the ghost room to not witness ghost events or interactions that might actively drop the player's sanity). A ghost that refuses to hunt at this sanity may indicate that the ghost is a Shade. Note that this is less useful on multiplayer with Nightmare difficulty, especially for games with 3 or 4 players where using all the sanity pills will not be enough to bring the average sanity above the hunting threshold.\r\n\r\nUsing a Summoning Circle forces the Shade to manifest. When summoned, the Shade appears as a transparent shadow, distinguishing it from other ghosts.",
    excluded: false,
  },
  {
    name: 'Jinn',
    evidence: {
      0: {
        name: 'EMF Level 5',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/f/f2/EMFReader_Render.png',
      },
      1: {
        name: 'Fingerprints',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/4/41/Fingerprints_3.png',
      },
      2: {
        name: 'Freezing Temperatures',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/e/e4/Thermometer_Render.png',
      },
    },
    strength: '',
    weakness: '',
    abilities: 'Travels at faster speeds if its target is far away',
    behavior: '',
    strategies:
      "A Jinn can be identified using its speed abilities. The fuse box should be turned on, and a player should wait in a large or long room for the ghost to hunt, with smudge sticks ready. The player should stand far away from where the ghost is expected to enter the room, with line-of-sight all the way through. When the ghost appears, observe whether it instantly gains speed to chase the player, then smudge it and escape. Repeat the test but with the fuse box off. If the ghost now chases the player at a slower speed, it is likely a Jinn. Note that the Revenant will also gain speed upon seeing a player, though this can be further differentiated by listening to its footsteps when not chasing a player, to see if it is moving slowly or at a normal speed.\r\n\r\nTurning off the location's breaker will prevent the Jinn from using its abilities. However, this will render the map's electrical lights inactive, thus leading to the players' sanity draining in the dark. Players will need to decide if preventing the Jinn from using its ability is worth dealing with more frequent hunts as a result of lower average sanity.",
    excluded: false,
  },
  {
    name: 'Myling',
    evidence: {
      0: {
        name: 'EMF Level 5',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/f/f2/EMFReader_Render.png',
      },
      1: {
        name: 'Fingerprints',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/4/41/Fingerprints_3.png',
      },
      2: {
        name: 'Ghost Writing',
        img: 'https://static.wikia.nocookie.net/phasmophobia/images/2/2c/ClosedBook_Render.png',
      },
    },
    strength: 'Has quieter footsteps during hunts',
    weakness: 'Produces paranormal sounds more frequently',
    abilities: '',
    behavior:
      "When not hunting, a Myling will make paranormal sounds more often than other ghosts. These can be heard through a Parabolic Microphone.\r\n\r\nWhen hunting, a Myling's footstep sounds will only be audible to players within 9 meters, similar to the distance required for electronic interference. Other hunting sounds (laugh, sing, wheeze, etc.) will remain audible at the same distance as other ghosts.",
    strategies:
      "Players can hear an idle ghost's paranormal sounds (voices, growls, etc.) only through a Parabolic Microphone. Frequent paranormal sounds may indicate that the ghost is a Myling.\r\n\r\nA hunting Myling's footstep sound distance is about the same as the distance within which electronics will become interfered with. During a hunt, a player can drop a flashlight on the floor. When the ghost is on the same floor, if footsteps are audible only when the flashlight starts flickering, the ghost is probably a Myling.",
    excluded: false,
  },
];
