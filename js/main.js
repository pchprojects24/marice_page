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
