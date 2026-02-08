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
