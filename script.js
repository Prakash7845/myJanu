function calculateMonths() {
  const marriageDate = new Date(2023, 7, 23); // August is month 7 (0-based index)
  const now = new Date();
  
  let months =
    (now.getFullYear() - marriageDate.getFullYear()) * 12 +
    (now.getMonth() - marriageDate.getMonth());

  if (now.getDate() < marriageDate.getDate()) {
    months -= 1; // Adjust if current day is before the 23rd
  }

  return months + 1; // Because we count the starting month too
}

function showLove() {
  document.getElementById('surprise').classList.remove('hidden');

  // Set months message
  const months = calculateMonths();
  document.getElementById('monthsMessage').textContent =
    `🎉 Happy ${months} month${months > 1 ? 's' : ''} of love & marriage, my Janu! ❤️`;
}
