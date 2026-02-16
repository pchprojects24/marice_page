const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const countdownCard = document.querySelector(".countdown-card");

if (countdownCard) {
  const returnDateValue = countdownCard.getAttribute("data-return-date");
  const returnDate = returnDateValue ? new Date(returnDateValue) : null;

  const daysEl = countdownCard.querySelector("[data-countdown-days]");
  const hoursEl = countdownCard.querySelector("[data-countdown-hours]");
  const minutesEl = countdownCard.querySelector("[data-countdown-minutes]");
  const progressBar = countdownCard.querySelector("[data-progress-bar]");

  const updateCountdown = () => {
    if (!returnDate) {
      return;
    }

    const now = new Date();
    const totalMs = returnDate - now;
    const totalDays = Math.max(Math.ceil(totalMs / (1000 * 60 * 60 * 24)), 0);
    const hours = Math.max(Math.floor((totalMs / (1000 * 60 * 60)) % 24), 0);
    const minutes = Math.max(Math.floor((totalMs / (1000 * 60)) % 60), 0);

    if (daysEl) {
      daysEl.textContent = totalDays;
    }
    if (hoursEl) {
      hoursEl.textContent = hours;
    }
    if (minutesEl) {
      minutesEl.textContent = minutes;
    }

    if (progressBar) {
      const startDate = countdownCard.getAttribute("data-start-date");
      if (startDate) {
        const start = new Date(startDate);
        const totalSpan = returnDate - start;
        const elapsed = now - start;
        const percent = totalSpan > 0 ? Math.min(Math.max(elapsed / totalSpan, 0), 1) : 0;
        progressBar.style.width = `${Math.round(percent * 100)}%`;
      } else {
        progressBar.style.width = totalMs > 0 ? "35%" : "100%";
      }
    }
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

const loveNotes = {
  funny: [
    "I miss you more than Alice misses stealing Beatrice's treats on the stairs.",
    "By now the cats have probably convinced you that I used to feed them 47 times a day. Don't fall for it.",
    "Remember: whatever the cats destroy while I'm gone is legally YOUR problem. Sorry, I don't make the rules.",
    "I hope the cats haven't forgotten about Fort Building. We have some serious architectural work to do when I get back.",
    "By the time I'm home, I'm pretty sure the cardboard recycling will have achieved sentience and formed its own government.",
    "Three snowstorms. THREE. You're a superhero and I owe you so many back massages.",
    "Alice still won't let me touch her, but she's probably living her best life snuggling with you 24/7 while I'm gone.",
    "Olive is definitely wondering where her nightly robe-and-head-rubs guy went. Tell her I'll be back soon.",
    "I bet Beatrice has been extra dramatic about her bum pats. Don't worry, I'll take over swat duty when I get home.",
    "Every time Alice runs to the basement stairs for treats, just know I'm spiritually there, also caving because she's too cute.",
    "Plot twist: I'm not actually deployed. I'm just hiding in the basement watching you deal with all three cats alone. (JK I miss you)",
    "If the cats have unionized and demanded better treat distribution policies, I don't blame them. Also, don't negotiate with terrorists.",
    "I'm at sea, so technically if you eat ice cream for dinner, I'll never know. I fully support this decision.",
    "Alice is probably running the house by now. Olive is her loyal deputy. Beatrice is the elder statescat. Good luck.",
    "Missing you is hard. Missing fort building with three demanding cats is also hard. But mostly missing you.",
    "I can't wait to come home and find out which household task you've been avoiding. My money's on the cardboard pile.",
    "Do the cats remember me, or do they think you've just been really bad at belly rubs for six weeks?",
    "You're stuck with composting, recycling, snow shoveling, AND three cats. I'm pretty sure that violates the Geneva Convention.",
    "When I get back, we're building the cats the greatest fort of all time. They deserve it for putting up with us.",
    "I know Olive hasn't been on the bed at night since I left. Tell her I miss our robe sessions too.",
    "Somewhere right now, Alice is plotting her next treat heist. Stay strong. Don't let her con you.",
    "If Beatrice swats you away when she's had enough attention, just remember: she learned that attitude from me.",
    "The good news: you only have to deal with the snow yourself one more time. The bad news: it's probably going to be a big one.",
    "I miss watching you cave and give the cats treats because they're sitting there being adorable. It's our greatest weakness.",
    "By the time I'm home, you'll have single-handedly managed more chaos than most people handle in a year. You're incredible. Also, sorry about the cardboard."
  ],
  sweet: [
    "I don't need adventures or excitement. Just you, me, and three cats at home. That's my whole world.",
    "Every time you smile, something lights up inside me. Even thinking about it now makes me feel warm.",
    "I miss watching you get ready for bed. That quiet time when it's just us and the day is winding down - that's my favorite part of any day.",
    "Sometimes when you're asleep, I just want to pull you close and hold you, but I don't want to wake you. So I just watch you and feel grateful you're mine.",
    "Home isn't a place. It's you, me, Beatrice, Olive, and Alice. That's all I need.",
    "I'm counting down the days until I can watch you fall asleep next to me again.",
    "The best nights are when I'm in bed first and I get to watch you going through your bedtime routine. I never get tired of it.",
    "Your smile could light up the darkest ship at sea. It certainly lights up every part of me.",
    "I miss the weight of you next to me in bed. I miss the sound of your breathing. I miss everything.",
    "Six weeks feels like forever when all I want is to be home on the couch with you and our three chaos agents.",
    "Some people chase thrills. I just want to come home to you every single day.",
    "I'm out here on the ocean, but my heart is at home with you - probably watching you try to give Alice a treat while Olive photobombs.",
    "When I get home, before anything else, I'm giving you the biggest hug and I'm not letting go until my arms get tired.",
    "I can't wait to rub my hands all over your back and massage those shoulders while squeezing you tight. You deserve it.",
    "Remember: someday it's going to be us, a big house, a barn full of rescue cats, and all the time in the world.",
    "One day we're going to win that lottery and rescue a hundred cats together. And I can't wait to build them the best fort empire they've ever seen.",
    "Every sunrise at sea reminds me I'm one day closer to you.",
    "You're the first thought when I wake up and my last before sleep. Always.",
    "I love how much you love our kitties. Watching you with them makes me fall in love with you all over again.",
    "The way you care for Beatrice, Olive, and Alice shows me exactly who you are. And I'm so lucky you're mine.",
    "I miss the little things most. Your laugh. Your warmth. The way you make everything feel like home.",
    "Distance makes me appreciate you even more. Not that I needed the reminder - you're everything.",
    "I don't just miss you. I miss US. The life we built. The quiet moments. The chaos. All of it.",
    "When I'm back, let's just spend a whole day doing nothing but being together. You, me, and three judgemental cats.",
    "Thank you for being my home, my peace, and my favorite person. I'm the luckiest guy alive."
  ],
  encouraging: [
    "I know work has been brutal lately. I see how hard you push yourself, and I'm in awe of you every single day.",
    "You've rebuilt your career so many times because of my postings, and every single time you've crushed it. That takes serious strength.",
    "I wish I could take some of the load off your shoulders. You're handling everything - work, the cats, the house - and you make it look easy even though I know it's not.",
    "Remember: it's okay to rest. You don't have to be 'on' all the time. The cats won't judge you, and neither will I.",
    "Ten years at that job and you're still killing it. I know it's not where your heart wants to be, but I'm so grateful for everything you do for us.",
    "I hate that my career means you're doing this alone right now. You shouldn't have to be this strong, but damn, you are.",
    "Your bosses are lucky to have you, even if they don't always show it. I hope you know how valuable you are.",
    "Some days I wish I could tell your bosses to back off and let you breathe. You deserve so much better than the stress they put on you.",
    "I know you'd rather be somewhere else doing something different, but the way you show up every day despite that? That's real strength.",
    "You've moved cities, changed jobs, started over - all because of my career. And you've never once made me feel bad about it. That's love, and I see it.",
    "I know the recycling is piling up. I know the snow is relentless. I know it's all too much. But you're handling it, and I see you.",
    "You're dealing with snowstorms, cardboard mountains, and three demanding cats. Most people couldn't handle one of those things. You're amazing.",
    "Every job you've ever had, you've excelled. Not because it was easy, but because YOU are exceptional.",
    "I'm so proud of how you've built a career despite all the moving and starting over. Not everyone could do that.",
    "You work harder than anyone I know. I just wish you didn't have to. You deserve to relax and breathe.",
    "When things get overwhelming, remember: you've survived 100% of your hardest days. You've got this.",
    "I know you're tired. I know it's hard. But you're doing an incredible job, and I'm so grateful for you.",
    "You handle more in a week than most people handle in a month. Never forget how strong you are.",
    "Long hours, difficult bosses, and everything at home - and you're still standing. That's not luck. That's YOU.",
    "I see you carrying the weight of everything. I wish I could be there to help. But I know you've got this because you always do.",
    "You don't give yourself enough credit. But I see it all - the strength, the resilience, the grace. You're incredible.",
    "One day we'll have that big house, those rescue cats, and you won't have to work so hard anymore. I promise we'll get there.",
    "The way you adapt and thrive no matter where we move? That's not normal. That's extraordinary. That's YOU.",
    "I know you're exhausted. Please take care of yourself. The world needs you, but I need you more.",
    "You are enough. Even on the days you don't feel like it. You are more than enough."
  ],
  flirty: [
    "Counting down the days until I can hold you again. And trust me, I'm not letting go.",
    "Can't wait to come home and make up for all this time apart.",
    "I miss everything about you. And I mean everything.",
    "When I see you at the pier, I'm kissing you before you can even say hello.",
    "I've been thinking about that big hug, that squeeze, and those shoulder massages I owe you. Among other things.",
    "Six weeks is way too long to go without touching you.",
    "First thing when I get home: big hug, big squeeze, hands all over your back. You've been warned.",
    "I can't wait to pull you close and remind you exactly how much I've missed you.",
    "The countdown timer isn't the only thing that's been building anticipation.",
    "I miss your smile. I miss your laugh. I miss the way you feel in my arms.",
    "When I'm back, we're making up for lost time. All of it.",
    "I'm coming home with six weeks' worth of hugs, kisses, and affection. Prepare yourself.",
    "You have no idea how much I'm looking forward to that reunion hug.",
    "I've been at sea dreaming about coming home to you. Let's just say I have plans.",
    "Can't wait to watch you get ready for bed again. I've really missed that view.",
    "When I get home, I'm not leaving the couch. Or you. For at least 48 hours.",
    "Missing you like this should be illegal. Can't wait to fix that problem.",
    "I'm coming home ready to give you all the attention you deserve. And then some.",
    "You've been handling everything alone for six weeks. Time for me to handle YOU for a change.",
    "I miss the way you fit perfectly in my arms. Coming home to fix that ASAP.",
    "Every night I think about coming home and holding you close. Won't be long now.",
    "The cats might need attention when I get back, but you're first on my list. By a lot.",
    "I've got six weeks of missing you to make up for. Hope you cleared your schedule.",
    "I can't wait to see you, touch you, and remind you exactly why you married me.",
    "This deployment has been long, but the reunion is going to be worth the wait. Trust me."
  ],
  random: [
    "Did you check on Beatrice today? She's probably plotting world domination from the couch.",
    "Thank you for being my anchor, even when I'm literally at sea.",
    "Niagara Falls to PEI to see Greta Van Fleet twice in one summer? Best year ever. Can't wait for concert number four.",
    "I wonder if Beatrice, Olive, and Alice have been plotting new fort designs while I've been gone.",
    "I'm grateful for you. For us. For this life we've built together, even when it's hard.",
    "Some days I think about how lucky I am. You could have chosen anyone. You chose me.",
    "I hope you're taking time for yourself. You deserve it more than anyone.",
    "Remember that dream we have? The big house, the barn, the rescue cats? We're going to get there.",
    "Just wanted to remind you that you're doing an amazing job. At everything.",
    "If I could tell you one thing right now, it's this: I love you more than words can say.",
    "I'm proud of you. For everything. Always.",
    "The cats are lucky to have you. I'm lucky to have you. We all know it.",
    "You make the hard days bearable and the good days incredible. Thank you.",
    "I can't wait to hear about everything - your days, your stress, your wins. All of it.",
    "Every GVF song reminds me of you now. Especially the ones we heard together.",
    "One day we'll look back on this deployment and remember how we got through it. Together.",
    "You've got this. Whatever today throws at you, you've got this.",
    "The best part of my day is thinking about you. The worst part is not being there.",
    "I miss random Tuesday nights on the couch with you doing absolutely nothing. Can't wait for more of those.",
    "You're my favorite person. My best friend. My home.",
    "Thank you for loving me through the distance, the deployments, the chaos. I don't deserve you, but I'm keeping you.",
    "When this is over, let's just be. No pressure. No stress. Just us.",
    "I believe in you. Even on the days you don't believe in yourself.",
    "We've done this before, and we'll do it again. But for now, we're almost done.",
    "I love you. More today than yesterday. More tomorrow than today. Always."
  ]
};

const loveNotesSection = document.querySelector(".love-notes");

if (loveNotesSection) {
  const categoryButtons = loveNotesSection.querySelectorAll("[data-category]");
  const noteCategory = loveNotesSection.querySelector("[data-note-category]");
  const noteText = loveNotesSection.querySelector("[data-note-text]");
  const saveButton = loveNotesSection.querySelector("[data-save-note]");
  const favoritesList = document.querySelector("[data-favorites-list]");

  let currentCategory = null;
  let currentNote = null;
  const pools = {};

  const getPool = (category) => {
    if (!pools[category] || pools[category].length === 0) {
      pools[category] = [...loveNotes[category]];
    }
    return pools[category];
  };

  const pickNote = (category) => {
    const pool = getPool(category);
    const index = Math.floor(Math.random() * pool.length);
    const [note] = pool.splice(index, 1);
    return note;
  };

  const updateFavorites = () => {
    if (!favoritesList) {
      return;
    }
    const stored = JSON.parse(localStorage.getItem("loveNotesFavorites") || "[]");
    favoritesList.innerHTML = "";
    if (stored.length === 0) {
      const empty = document.createElement("li");
      empty.className = "favorites-empty";
      empty.textContent = "No favorites yet. Save a note to see it here.";
      favoritesList.appendChild(empty);
      return;
    }
    stored.forEach((entry) => {
      const item = document.createElement("li");
      item.className = "favorite-item";
      item.textContent = entry.text;
      favoritesList.appendChild(item);
    });
  };

  const showNote = (category) => {
    const note = pickNote(category);
    currentCategory = category;
    currentNote = note;
    if (noteCategory) {
      noteCategory.textContent = `${category} note`;
    }
    if (noteText) {
      noteText.classList.remove("fade-in");
      void noteText.offsetWidth;
      noteText.textContent = note;
      noteText.classList.add("fade-in");
    }
    if (saveButton) {
      saveButton.disabled = false;
    }
  };

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const category = button.dataset.category;
      if (!category || !loveNotes[category]) {
        return;
      }
      showNote(category);
    });
  });

  if (saveButton) {
    saveButton.addEventListener("click", () => {
      if (!currentNote || !currentCategory) {
        return;
      }
      const stored = JSON.parse(localStorage.getItem("loveNotesFavorites") || "[]");
      const exists = stored.some((entry) => entry.text === currentNote);
      if (!exists) {
        stored.unshift({ text: currentNote, category: currentCategory });
        localStorage.setItem("loveNotesFavorites", JSON.stringify(stored));
        updateFavorites();
      }
    });
  }

  updateFavorites();
}

const triviaQuestions = {
  easy: [
    {
      question: "Where is Greta Van Fleet from?",
      answers: ["Detroit, Michigan", "Frankenmuth, Michigan", "Nashville, Tennessee", "Los Angeles, California"],
      correct: 1,
      category: "Band Basics"
    },
    {
      question: "What year was Greta Van Fleet formed?",
      answers: ["2010", "2012", "2015", "2017"],
      correct: 1,
      category: "Band Basics"
    },
    {
      question: "Which classic rock band is Greta Van Fleet most commonly compared to?",
      answers: ["The Rolling Stones", "Led Zeppelin", "Pink Floyd", "The Who"],
      correct: 1,
      category: "Band Basics"
    },
    {
      question: "How many members are in Greta Van Fleet?",
      answers: ["Three", "Four", "Five", "Six"],
      correct: 1,
      category: "Band Basics"
    },
    {
      question: "What genre of music does Greta Van Fleet play?",
      answers: ["Country", "Pop", "Rock", "Hip Hop"],
      correct: 2,
      category: "Band Basics"
    },
    {
      question: "What was Greta Van Fleet's breakthrough hit single?",
      answers: ["Safari Song", "Highway Tune", "Heat Above", "Age of Man"],
      correct: 1,
      category: "Albums & Songs"
    },
    {
      question: "What is the name of their debut studio album?",
      answers: ["Black Smoke Rising", "From the Fires", "Anthem of the Peaceful Army", "The Battle at Garden's Gate"],
      correct: 2,
      category: "Albums & Songs"
    },
    {
      question: "Which album features the song 'Heat Above'?",
      answers: ["Anthem of the Peaceful Army", "From the Fires", "The Battle at Garden's Gate", "Starcatcher"],
      correct: 2,
      category: "Albums & Songs"
    },
    {
      question: "What year was their debut EP 'Black Smoke Rising' released?",
      answers: ["2015", "2017", "2018", "2019"],
      correct: 1,
      category: "Albums & Songs"
    },
    {
      question: "Which is the name of their 2023 album?",
      answers: ["Dreams in Gold", "Highway Dreams", "Starcatcher", "Garden's Gate"],
      correct: 2,
      category: "Albums & Songs"
    },
    {
      question: "Has Greta Van Fleet won a Grammy Award?",
      answers: ["Yes", "No", "They've been nominated but never won", "They've won five"],
      correct: 0,
      category: "Awards & Achievements"
    },
    {
      question: "Approximately how many concert tickets has Greta Van Fleet sold worldwide?",
      answers: ["100,000", "500,000", "Over 1 million", "Over 5 million"],
      correct: 2,
      category: "Awards & Achievements"
    },
    {
      question: "What was the name of their 2022-2023 tour?",
      answers: ["Highway Tour", "Dreams in Gold", "Starcatcher Tour", "Peaceful Army Tour"],
      correct: 1,
      category: "Tours & Live Shows"
    },
    {
      question: "What was the name of their 2023-2024 tour?",
      answers: ["Dreams in Gold", "Battle Tour", "Starcatcher World Tour", "Highway World Tour"],
      correct: 2,
      category: "Tours & Live Shows"
    },
    {
      question: "Greta Van Fleet is known for incorporating what into their live shows?",
      answers: ["Holograms", "Pyrotechnics", "Costume changes", "Dance routines"],
      correct: 1,
      category: "Tours & Live Shows"
    },
    {
      question: "Who is the lead vocalist of Greta Van Fleet?",
      answers: ["Jake Kiszka", "Josh Kiszka", "Sam Kiszka", "Danny Wagner"],
      correct: 1,
      category: "Band Basics"
    },
    {
      question: "What is the first track on 'From the Fires' EP?",
      answers: ["Highway Tune", "Safari Song", "Edge of Darkness", "Talk on the Street"],
      correct: 0,
      category: "Albums & Songs"
    },
    {
      question: "Which song features the lyric 'Can you hear that thunder roar'?",
      answers: ["Safari Song", "Highway Tune", "When the Curtain Falls", "You're the One"],
      correct: 1,
      category: "Albums & Songs"
    },
    {
      question: "What instrument does Josh Kiszka primarily play?",
      answers: ["Guitar", "Drums", "He's the vocalist, no instrument", "Keyboards"],
      correct: 2,
      category: "Band Basics"
    },
    {
      question: "Which streaming platform features Greta Van Fleet prominently?",
      answers: ["All of them", "Spotify only", "Apple Music only", "YouTube only"],
      correct: 0,
      category: "Band Basics"
    },
    {
      question: "What year did 'Anthem of the Peaceful Army' release?",
      answers: ["2017", "2018", "2019", "2020"],
      correct: 1,
      category: "Albums & Songs"
    },
    {
      question: "Which song was featured on the TV show 'Shameless'?",
      answers: ["Safari Song", "Highway Tune", "When the Curtain Falls", "You're the One"],
      correct: 1,
      category: "Albums & Songs"
    },
    {
      question: "What color is most associated with Greta Van Fleet's visual aesthetic?",
      answers: ["Blue and purple", "Red and orange", "Gold and earth tones", "Black and white"],
      correct: 2,
      category: "Band Basics"
    },
    {
      question: "Greta Van Fleet's music is often described as what era of rock?",
      answers: ["Modern rock", "Classic rock revival", "Punk rock", "Emo rock"],
      correct: 1,
      category: "Band Basics"
    },
    {
      question: "Which of these festivals has Greta Van Fleet performed at?",
      answers: ["Coachella", "Lollapalooza", "Both", "Neither"],
      correct: 2,
      category: "Tours & Live Shows"
    }
  ],
  medium: [
    {
      question: "Jake and Josh Kiszka are:",
      answers: ["Cousins", "Twin brothers", "Not related", "Father and son"],
      correct: 1,
      category: "Band Basics"
    },
    {
      question: "What is Danny Wagner's role in the band?",
      answers: ["Lead guitar", "Bass", "Drums", "Keyboards"],
      correct: 2,
      category: "Band Basics"
    },
    {
      question: "Which Kiszka brother is the youngest?",
      answers: ["Josh", "Jake", "Sam", "They're all the same age"],
      correct: 2,
      category: "Band Basics"
    },
    {
      question: "What instrument does Jake Kiszka play?",
      answers: ["Drums", "Lead guitar", "Bass", "Keyboards"],
      correct: 1,
      category: "Band Basics"
    },
    {
      question: "Sam Kiszka plays which two instruments primarily?",
      answers: ["Guitar and drums", "Bass and keyboards", "Guitar and keyboards", "Drums and bass"],
      correct: 1,
      category: "Band Basics"
    },
    {
      question: "Which album won the Grammy for Best Rock Album in 2019?",
      answers: ["Anthem of the Peaceful Army", "From the Fires", "Black Smoke Rising", "The Battle at Garden's Gate"],
      correct: 1,
      category: "Awards & Achievements"
    },
    {
      question: "What year was 'The Battle at Garden's Gate' released?",
      answers: ["2019", "2020", "2021", "2022"],
      correct: 2,
      category: "Albums & Songs"
    },
    {
      question: "What is the title of the acoustic song from Starcatcher?",
      answers: ["Sacred the Thread", "Light My Love", "Meeting the Master", "The Archer"],
      correct: 0,
      category: "Albums & Songs"
    },
    {
      question: "Which EP became their first to chart on Billboard 200?",
      answers: ["Black Smoke Rising", "From the Fires", "Anthem Sessions", "Highway Sessions"],
      correct: 1,
      category: "Albums & Songs"
    },
    {
      question: "What song features the lyric 'Can you see the mist of what is coming?'",
      answers: ["Highway Tune", "Age of Machine", "Safari Song", "The Weight of Dreams"],
      correct: 1,
      category: "Albums & Songs"
    },
    {
      question: "In what year did Greta Van Fleet win their Grammy?",
      answers: ["2017", "2018", "2019", "2020"],
      correct: 2,
      category: "Awards & Achievements"
    },
    {
      question: "How many Grammy nominations did they receive in 2019?",
      answers: ["Two", "Three", "Four", "Five"],
      correct: 2,
      category: "Awards & Achievements"
    },
    {
      question: "What late-night show did Greta Van Fleet perform on in 2017?",
      answers: ["The Tonight Show", "Jimmy Kimmel Live!", "Saturday Night Live", "Late Night with Seth Meyers"],
      correct: 2,
      category: "Awards & Achievements"
    },
    {
      question: "Which chart did 'Highway Tune' top for four consecutive weeks?",
      answers: ["Billboard Hot 100", "Billboard Mainstream Rock", "Alternative Songs", "Top 40"],
      correct: 1,
      category: "Awards & Achievements"
    },
    {
      question: "In 2024, which festival did Greta Van Fleet headline in Prince Edward Island?",
      answers: ["Cavendish Beach Music Festival", "Sommo Festival", "PEI Rock Fest", "Maritime Music Fest"],
      correct: 1,
      category: "Tours & Live Shows"
    },
    {
      question: "What venue did Greta Van Fleet play in Niagara Falls, Ontario in August 2024?",
      answers: ["FirstOntario Centre", "Scotiabank Centre", "OLG Stage at Fallsview Casino", "Budweiser Stage"],
      correct: 2,
      category: "Tours & Live Shows"
    },
    {
      question: "Which band did NOT open for Greta Van Fleet on the Dreams in Gold Tour?",
      answers: ["Houndmouth", "Rival Sons", "Robert Finley", "The Black Keys"],
      correct: 3,
      category: "Tours & Live Shows"
    },
    {
      question: "What health issue forced Josh Kiszka to postpone shows in October 2022?",
      answers: ["Broken leg", "Ruptured eardrum", "Vocal cord strain", "Pneumonia"],
      correct: 1,
      category: "Tours & Live Shows"
    },
    {
      question: "Which song opens 'The Battle at Garden's Gate'?",
      answers: ["Heat Above", "My Way, Soon", "Built by Nations", "Age of Machine"],
      correct: 0,
      category: "Albums & Songs"
    },
    {
      question: "What is the longest song on 'Anthem of the Peaceful Army'?",
      answers: ["Lover, Leaver (Taker, Believer)", "Age of Man", "The New Day", "Anthem"],
      correct: 1,
      category: "Albums & Songs"
    },
    {
      question: "Which music video features the band in a desert setting?",
      answers: ["Highway Tune", "When the Curtain Falls", "Safari Song", "You're the One"],
      correct: 1,
      category: "Albums & Songs"
    },
    {
      question: "What year did Greta Van Fleet sign with Lava Records?",
      answers: ["2015", "2016", "2017", "2018"],
      correct: 2,
      category: "Awards & Achievements"
    },
    {
      question: "Which song features prominent organ/keyboard work?",
      answers: ["Highway Tune", "Safari Song", "Light My Love", "Age of Man"],
      correct: 3,
      category: "Albums & Songs"
    },
    {
      question: "What is the closing track on 'Starcatcher'?",
      answers: ["The Archer", "Farewell for Now", "The Falling Sky", "Runway Blues"],
      correct: 1,
      category: "Albums & Songs"
    },
    {
      question: "Which brother is the tallest?",
      answers: ["Josh", "Jake", "Sam", "They're all the same height"],
      correct: 2,
      category: "Band Basics"
    },
    {
      question: "What amplifier brand does Jake Kiszka famously use?",
      answers: ["Marshall", "Fender", "Vox", "Orange"],
      correct: 0,
      category: "Band Basics"
    },
    {
      question: "Which song was released as the lead single from 'The Battle at Garden's Gate'?",
      answers: ["Age of Machine", "My Way, Soon", "Heat Above", "Broken Bells"],
      correct: 1,
      category: "Albums & Songs"
    },
    {
      question: "What is the runtime of 'The Weight of Dreams'?",
      answers: ["About 5 minutes", "About 7 minutes", "About 9 minutes", "About 11 minutes"],
      correct: 2,
      category: "Albums & Songs"
    }
  ],
  hard: [
    {
      question: "What was the name of the band before they became Greta Van Fleet?",
      answers: ["The Kiszka Brothers", "They never had a different name", "Highway Tune", "Frankenmuth Four"],
      correct: 1,
      category: "Band Basics"
    },
    {
      question: "Where did the band name 'Greta Van Fleet' come from?",
      answers: ["A family member's name", "An elderly resident of their hometown", "A character in a book", "They made it up randomly"],
      correct: 1,
      category: "Band Basics"
    },
    {
      question: "In what year did Danny Wagner officially join the band?",
      answers: ["2010", "2013", "2015", "2017"],
      correct: 1,
      category: "Band Basics"
    },
    {
      question: "How many tracks are on 'The Battle at Garden's Gate'?",
      answers: ["10", "11", "12", "14"],
      correct: 2,
      category: "Albums & Songs"
    },
    {
      question: "What was the first single released from Starcatcher?",
      answers: ["The Falling Sky", "Meeting the Master", "Sacred the Thread", "Frozen Light"],
      correct: 1,
      category: "Albums & Songs"
    },
    {
      question: "Which song is the longest on 'The Battle at Garden's Gate'?",
      answers: ["Age of Man", "Built by Nations", "The Weight of Dreams", "Broken Bells"],
      correct: 2,
      category: "Albums & Songs"
    },
    {
      question: "What album features the song 'Lover, Leaver'?",
      answers: ["From the Fires", "Anthem of the Peaceful Army", "Black Smoke Rising", "The Battle at Garden's Gate"],
      correct: 0,
      category: "Albums & Songs"
    },
    {
      question: "Who produced the album 'Starcatcher'?",
      answers: ["Al Shux", "Marlon Young", "Dave Cobb", "Greg Kurstin"],
      correct: 2,
      category: "Albums & Songs"
    },
    {
      question: "What is the opening track on 'Anthem of the Peaceful Army'?",
      answers: ["When the Curtain Falls", "Age of Man", "The Cold Wind", "Watching Over"],
      correct: 1,
      category: "Albums & Songs"
    },
    {
      question: "How many continents have Greta Van Fleet performed on?",
      answers: ["Three", "Four", "Five", "Six"],
      correct: 2,
      category: "Awards & Achievements"
    },
    {
      question: "What year did 'Highway Tune' top the rock charts?",
      answers: ["2016", "2017", "2018", "2019"],
      correct: 1,
      category: "Awards & Achievements"
    },
    {
      question: "Which record label signed Greta Van Fleet in March 2017?",
      answers: ["Republic Records", "Warner Records", "Lava Records", "Columbia Records"],
      correct: 2,
      category: "Awards & Achievements"
    },
    {
      question: "In what city did Josh Kiszka rupture his eardrum during a 2022 concert?",
      answers: ["Portland, Maine", "Bangor, Maine", "Boston, Massachusetts", "Providence, Rhode Island"],
      correct: 1,
      category: "Tours & Live Shows"
    },
    {
      question: "Which band opened for Greta Van Fleet in Niagara Falls, August 2024?",
      answers: ["The Beaches", "Half Moon Run", "Crown Lands", "Danko Jones"],
      correct: 2,
      category: "Tours & Live Shows"
    },
    {
      question: "What month/year did the Dreams in Gold Tour originally launch?",
      answers: ["January 2022", "March 2022", "September 2022", "November 2022"],
      correct: 1,
      category: "Tours & Live Shows"
    },
    {
      question: "What studio did Greta Van Fleet record 'Starcatcher' in?",
      answers: ["Abbey Road Studios", "Electric Lady Studios", "RCA Studios", "Sunset Sound"],
      correct: 2,
      category: "Albums & Songs"
    },
    {
      question: "Which song features the lyric 'Thunder in my heart, rain in my eyes'?",
      answers: ["Broken Bells", "Trip the Light Fantastic", "Stardust Chords", "Light My Love"],
      correct: 3,
      category: "Albums & Songs"
    },
    {
      question: "What was the B-side to the 'Highway Tune' single?",
      answers: ["Safari Song", "Edge of Darkness", "Cloud Train", "Flower Power"],
      correct: 2,
      category: "Albums & Songs"
    },
    {
      question: "How many songs are on the 'From the Fires' EP?",
      answers: ["6", "7", "8", "9"],
      correct: 2,
      category: "Albums & Songs"
    },
    {
      question: "What guitar does Jake Kiszka primarily play?",
      answers: ["Fender Stratocaster", "Gibson Les Paul", "Gibson SG", "PRS Custom"],
      correct: 1,
      category: "Band Basics"
    },
    {
      question: "Which song did NOT appear on 'Black Smoke Rising' EP?",
      answers: ["Highway Tune", "Edge of Darkness", "Flower Power", "Talk on the Street"],
      correct: 3,
      category: "Albums & Songs"
    },
    {
      question: "What year was Jake Kiszka diagnosed with pneumonia, causing tour postponements?",
      answers: ["2021", "2022", "2023", "2024"],
      correct: 1,
      category: "Tours & Live Shows"
    },
    {
      question: "Which song features Danny Wagner's drum solo in live performances?",
      answers: ["Safari Song", "Highway Tune", "Motown Funk (drum solo)", "The Weight of Dreams"],
      correct: 2,
      category: "Tours & Live Shows"
    },
    {
      question: "What is the subtitle/tagline of 'The Battle at Garden's Gate' album?",
      answers: ["A New Beginning", "The Journey Continues", "There is no subtitle", "Rise Above"],
      correct: 2,
      category: "Albums & Songs"
    },
    {
      question: "Which festival did Greta Van Fleet headline in 2019 that was their largest crowd to date at the time?",
      answers: ["Coachella", "Lollapalooza", "Rock Werchter", "Pinkpop"],
      correct: 2,
      category: "Tours & Live Shows"
    },
    {
      question: "What is Sam Kiszka's signature bass?",
      answers: ["Fender Precision Bass", "Music Man StingRay", "Yamaha BB", "Gibson Thunderbird"],
      correct: 2,
      category: "Band Basics"
    },
    {
      question: "Which song was performed acoustically on 'The Battle at Garden's Gate' tour?",
      answers: ["Light My Love", "Age of Man", "Flower Power", "Broken Bells"],
      correct: 0,
      category: "Tours & Live Shows"
    },
    {
      question: "What year did Greta Van Fleet perform at the Rock and Roll Hall of Fame induction ceremony?",
      answers: ["2017", "2018", "2019", "They haven't performed there"],
      correct: 3,
      category: "Awards & Achievements"
    }
  ],
  personal: [
    {
      question: "How many times have Chad and Marice seen Greta Van Fleet live?",
      answers: ["Once", "Twice", "Three times", "Four times"],
      correct: 2,
      category: "Personal"
    },
    {
      question: "In what year did Chad and Marice see GVF for the first time?",
      answers: ["2020", "2021", "2022", "2023"],
      correct: 2,
      category: "Personal"
    },
    {
      question: "Which concert was at a music festival?",
      answers: ["Bangor, Maine", "Niagara Falls, Ontario", "Sommo Festival, PEI", "None of them"],
      correct: 2,
      category: "Personal"
    },
    {
      question: "Where did Chad and Marice see their first Greta Van Fleet concert?",
      answers: ["Halifax, Nova Scotia", "Bangor, Maine", "Niagara Falls, Ontario", "Charlottetown, PEI"],
      correct: 1,
      category: "Personal"
    },
    {
      question: "How many GVF concerts did Chad and Marice attend in 2024?",
      answers: ["One", "Two", "Three", "Four"],
      correct: 1,
      category: "Personal"
    },
    {
      question: "What tour were they seeing at the Niagara Falls concert?",
      answers: ["Dreams in Gold Tour", "Battle at Garden's Gate Tour", "Starcatcher World Tour", "Anthem Tour"],
      correct: 2,
      category: "Personal"
    },
    {
      question: "What date did Chad and Marice see GVF at Sommo Festival?",
      answers: ["September 13, 2024", "September 14, 2024", "September 15, 2024", "September 20, 2024"],
      correct: 1,
      category: "Personal"
    },
    {
      question: "Which concert did they see first chronologically?",
      answers: ["Niagara Falls", "Sommo Festival PEI", "Bangor, Maine", "They saw all three at once"],
      correct: 2,
      category: "Personal"
    },
    {
      question: "What venue did they see GVF at in Bangor?",
      answers: ["Bangor Auditorium", "Cross Insurance Center", "Darling's Waterfront Pavilion", "Maine Savings Amphitheater"],
      correct: 1,
      category: "Personal"
    },
    {
      question: "What special event happened during the Bangor concert?",
      answers: ["It was their anniversary", "Josh Kiszka ruptured his eardrum during the show", "The band played an extra-long set", "They met the band backstage"],
      correct: 1,
      category: "Personal"
    }
  ]
};

const triviaSection = document.querySelector(".gvf-trivia");

if (triviaSection) {
  const setupCard = triviaSection.querySelector("[data-trivia-setup]");
  const quizCard = triviaSection.querySelector("[data-trivia-quiz]");
  const resultsCard = triviaSection.querySelector("[data-trivia-results]");
  const difficultyButtons = triviaSection.querySelectorAll("[data-difficulty]");
  const countButtons = triviaSection.querySelectorAll("[data-count]");
  const startButton = triviaSection.querySelector("[data-start-trivia]");
  const progressEl = triviaSection.querySelector("[data-trivia-progress]");
  const scoreEl = triviaSection.querySelector("[data-trivia-score]");
  const categoryEl = triviaSection.querySelector("[data-trivia-category]");
  const questionEl = triviaSection.querySelector("[data-trivia-question]");
  const answersEl = triviaSection.querySelector("[data-trivia-answers]");
  const feedbackEl = triviaSection.querySelector("[data-trivia-feedback]");
  const nextButton = triviaSection.querySelector("[data-next-question]");
  const scorelineEl = triviaSection.querySelector("[data-trivia-scoreline]");
  const messageEl = triviaSection.querySelector("[data-trivia-message]");
  const playAgainButton = triviaSection.querySelector("[data-play-again]");
  const shareButton = triviaSection.querySelector("[data-share-score]");

  let selectedDifficulty = null;
  let selectedCount = 10;
  let questions = [];
  let currentIndex = 0;
  let score = 0;

  const shuffle = (items) => {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const updateSetupButtonStates = (buttons, activeValue) => {
    buttons.forEach((button) => {
      button.classList.toggle("active", button.dataset[activeValue.key] === activeValue.value);
    });
  };

  const updateProgress = () => {
    if (progressEl) {
      progressEl.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
    }
    if (scoreEl) {
      scoreEl.textContent = `Score: ${score}`;
    }
  };

  const renderQuestion = () => {
    const current = questions[currentIndex];
    if (!current) {
      return;
    }
    if (categoryEl) {
      categoryEl.textContent = current.category;
    }
    if (questionEl) {
      questionEl.textContent = current.question;
    }
    if (feedbackEl) {
      feedbackEl.textContent = "";
    }
    if (nextButton) {
      nextButton.disabled = true;
    }
    if (answersEl) {
      answersEl.innerHTML = "";
      current.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-button";
        button.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;
        button.addEventListener("click", () => handleAnswer(button, index));
        answersEl.appendChild(button);
      });
    }
    updateProgress();
  };

  const handleAnswer = (button, index) => {
    const current = questions[currentIndex];
    if (!current || !answersEl) {
      return;
    }
    const buttons = answersEl.querySelectorAll(".answer-button");
    buttons.forEach((btn) => (btn.disabled = true));
    const isCorrect = index === current.correct;
    if (isCorrect) {
      score += 1;
      button.classList.add("correct");
      if (feedbackEl) {
        feedbackEl.textContent = "Correct! 🎸";
      }
    } else {
      button.classList.add("incorrect");
      const correctButton = buttons[current.correct];
      if (correctButton) {
        correctButton.classList.add("correct");
      }
      if (feedbackEl) {
        feedbackEl.textContent = "Not quite, but keep rocking! 🎵";
      }
    }
    if (nextButton) {
      nextButton.disabled = false;
    }
    updateProgress();
  };

  const showResults = () => {
    if (quizCard) {
      quizCard.classList.add("hidden");
    }
    if (resultsCard) {
      resultsCard.classList.remove("hidden");
    }
    const percentage = questions.length ? Math.round((score / questions.length) * 100) : 0;
    if (scorelineEl) {
      scorelineEl.textContent = `Score: ${score}/${questions.length} (${percentage}%)`;
    }
    if (messageEl) {
      if (percentage >= 90) {
        messageEl.textContent = "Ultimate GVF Superfan! 🎸";
      } else if (percentage >= 70) {
        messageEl.textContent = "Solid GVF Knowledge! 🎵";
      } else if (percentage >= 50) {
        messageEl.textContent = "Getting There! Keep Listening! 🎶";
      } else {
        messageEl.textContent = "Time for a GVF Deep Dive! 🎧";
      }
    }
  };

  const startTrivia = () => {
    if (!selectedDifficulty) {
      if (startButton) {
        startButton.textContent = "Please select a difficulty first!";
        setTimeout(() => { startButton.textContent = "Start Trivia"; }, 2000);
      }
      return;
    }
    const pool = triviaQuestions[selectedDifficulty] || [];
    const shuffled = shuffle(pool);
    questions = shuffled.slice(0, Math.min(selectedCount, shuffled.length));
    currentIndex = 0;
    score = 0;
    if (setupCard) {
      setupCard.classList.add("hidden");
    }
    if (resultsCard) {
      resultsCard.classList.add("hidden");
    }
    if (quizCard) {
      quizCard.classList.remove("hidden");
    }
    renderQuestion();
  };

  const nextQuestion = () => {
    currentIndex += 1;
    if (currentIndex >= questions.length) {
      showResults();
    } else {
      renderQuestion();
    }
  };

  difficultyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedDifficulty = button.dataset.difficulty;
      updateSetupButtonStates(difficultyButtons, { key: "difficulty", value: selectedDifficulty });
    });
  });

  countButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedCount = Number(button.dataset.count) || 10;
      updateSetupButtonStates(countButtons, { key: "count", value: String(selectedCount) });
    });
  });

  if (startButton) {
    startButton.addEventListener("click", startTrivia);
  }

  if (nextButton) {
    nextButton.addEventListener("click", nextQuestion);
  }

  if (playAgainButton) {
    playAgainButton.addEventListener("click", () => {
      if (resultsCard) {
        resultsCard.classList.add("hidden");
      }
      if (setupCard) {
        setupCard.classList.remove("hidden");
      }
    });
  }

  if (shareButton) {
    shareButton.addEventListener("click", async () => {
      const percentage = questions.length ? Math.round((score / questions.length) * 100) : 0;
      const message = `I scored ${score}/${questions.length} (${percentage}%) on the GVF trivia!`;
      try {
        if (navigator.share) {
          await navigator.share({ text: message });
        } else {
          await navigator.clipboard.writeText(message);
          shareButton.textContent = "Copied!";
          setTimeout(() => { shareButton.textContent = "Share Score"; }, 2000);
        }
      } catch {
        // User cancelled share dialog or clipboard access denied
      }
    });
  }

  if (countButtons.length > 0) {
    countButtons[0].classList.add("active");
  }
}
