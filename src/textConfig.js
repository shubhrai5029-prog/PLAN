const textConfig = {
  landing: {
    title: "Happy Birthday, Cutiee! 🎂✨",
    subtitle: "Today is all about celebrating the most amazing sister in my world. I've created something magical just for you on your special day...",
    lastLine: "Ready for your birthday surprise?",
    button: "Let's Gooo",
    footer: "Made with endless love for your special day 💕",
  },

  // ActivityPage/Letter configuration
  letter: {
    headerTitle: "A Birthday Letter 💌",
    headerSubtitle: "From my heart to the birthday girll",
    letterHeaderTitle: "To My Birthday Princess",
    letterMessage: `My sweetest Sister!!,

A veryy veryy happy Birthday Bunnyy!! Yk, you are the best best person I could ever get in my lifee.... Ya sometimes we have fought together..sometimes misunderstood each other,but thats the best part of you that you havent still left me because of my childish and irritated behaviour, than kyou for being in my life, being my saviour, being my entertainment partner and what nott... a tonnes of thank yous would even be less for youu!!! and on this day I wish you get all the wishes you have ever dreamt off!! Ya we haven,t spent a lot of time together, but the time spent was and would ever be the bestt!!

You bring so much joy, laughter, and love to my world world - and into my life. You deserve all the magic, all the dreams, and all the love this world has to offer. 💕`,
    signature: " your's Doc💕",
    envelopeClickHint: "Click to open your birthday surprise",
    specialDeliveryText: "Birthday Special Delivery 🎂",
    continueButton: "Continue It ✨"
  },

  // Updated and complete Cake Cutting configuration
  cakeCutting: {
    heading: "It's Cake Time! 🎂",
    subheading: "Make your birthday wish come true!",
    instructions: "Draw a line across the middle of the cake to cut it ✂️",
    cuttingPrompt: "Cut your birthday cake, birthday girl! 🔪",
    dragHint: "Drag here to cut! ✂️",
    progressText: "Cutting Progress",
    encouragementText: "Almost there!",
    makeWishTitle: "Time to Make a Wish! ✨",
    wishPrompt: "Close your eyes and make your birthday wish! 🌟",
    wishInstructions: "Think of something wonderful for your new year!",
    wishButton: "I've Made My Wish! 💫",
    wishMadeText: "Wish Complete! 🎉",
    congratulations: "Perfect Cut! 🎉",
    celebrationMessage: "May this year bring you everything your heart desires! ✨",
    continueButton: "Continue Birthday Celebration 🎵",
    sparkleMessages: [
      
    ]
  },

  chillZone: {
    heading: "Birthday Vibes Playlist 🎵",
    subheading: "Songs to celebrate your special day",
    chooseTrackHint: "Choose your birthday soundtrack ✨",
    continueButton: "Continue to Birthday Surprises ✨",
    tracks: [
      { id: 1, title: "Hum hai bhojpuriya don", caption: "Kyuki attitude toh tumhara waisa hii hai 😩" },
      { id: 2, title: "Ninja Hattori", caption: "Because you have always been my saviour 👑" },
      { id: 2, title: "Sunn re sajaniya", caption: "because I cannot imagine my life without your existence 💖" },
    ]
  },

  cards: {
    heading: "Birthday Wishes Cards 🎁",
    subheading: "Click each card to reveal a birthday message!",
    tapLabel: "✨ Open!",
    progress: {
      start: "Start discovering your birthday surprises ✨",
      discovered: (n, total) => `${n} of ${total} birthday wishes unlocked! Keep going 🎉`,
      complete: "Amazing! All birthday wishes revealed! 🎂✨"
    },
    popup: {
      title: "All Birthday Wishes Unlocked!",
      message: "Each wish carries my love and hopes for your amazing new year ahead. ✨",
      openFinal: "Open Final Birthday Letter 💌",
      stay: "Enjoy the wishes a bit longer"
    },
    cardMessages: [
      "Happy Birthday to the girl who makes every day feel like a celebration! 🎉💕",
      "Another year of being absolutely incredible, beautiful, and perfect just the way you are! ✨",
      "May this new year bring you endless joy, love, and all the dreams your heart desires! 🌟💖"
    ]
  },

  finalLetter: {
    // Page header
    pageTitle: "Final Birthday Letter",
    pageSubtitle: "A special message sealed with love 💕",
    
    // Letter content
    title: "Final Birthday Letter",
    letterIcon: "💌",
    stickerAlt: "letter",
    
    // Sealing animation
    sealingText: "Sealing your birthday wishes...",
    sealingEmoji: "💌",
    
    // Buttons
    sealButton: "Seal The Letter 🎂",
    restartButton: "Experinece Again",
    
    // Sealed state
    sealedTitle: "Birthday Letter Sealed with Love",
    sealedSubtitle: "Happy Birthday, My Everything 🎉",
    sealedEmoji: "💝",
    heartCount: 7,
    
    // Signature and actions
    typedDefault: "Forever Yours, Happy Birthday! 💕🎂",
    experienceAgain: "Experience Birthday Magic Again ✨",
    sendKissButton: "Send Birthday Love ❤️",
    dateLocale: "en-US",
    
    // Decorative elements
    decorativeEmojis: {
      topRight: "💕",
      bottomLeft: "💖"
    },
    
    // Letter content
    letterGreeting: "My dearest birthday princess,",
    letterParagraphs: [
      "May this new year bring you everything your heart desires and more joy than you can imagine.",
      "Happy Birthday, my bestieee. You deserve the world and so much more. 🎂✨"
    ],
    sealingNote: "Sealing will complete your birthday experience."
  },

  common: {
    continue: "Continue Birthday Adventure ✨",
    close: "Close",
    ok: "OK"
  }
};

export default textConfig;