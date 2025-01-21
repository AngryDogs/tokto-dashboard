const specialDates = [
  '22-01-2025',
  '19-02-2025',
  '19-03-2025',
  '23-04-2025',
  '21-05-2025',
  '18-06-2025',
  '23-07-2025',
  '20-08-2025',
  '17-09-2025',
  '22-10-2025',
  '19-11-2025',
  '24-12-2025',
  '21-01-2026',
  '18-02-2026',
  '18-03-2026',
  '22-04-2026',
  '20-05-2026',
  '17-06-2026',
  '22-07-2026',
  '19-08-2026',
  '23-09-2026',
  '21-10-2026',
  '18-11-2026',
  '23-12-2026',
];

const names = [
  'Alberto',
  'Antonio',
  'Jesus',
  'Huljo',
  'Rodrigo',
  'Pedro',
  'Diego',
  'Maria',
  'Pablo',
  'Guillermo',
  'Isabella',
  'Miguel',
];

const today = new Date();
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
const todayFormatted = formatDate(today);

const futureDates = specialDates.filter((date) => {
  const [day, month, year] = date.split('-');
  const dateObj = new Date(`${year}-${month}-${day}`);
  return dateObj >= today;
});

const matchedDates = futureDates.map((date, index) => {
  const name = names[index % names.length];
  return { date, name };
});

const loadNamesAndDates = () => {
  const parentElement = document.getElementById('names');
  const dates = matchedDates.slice(0, 5);

  dates.forEach((value) => {
    const dateDiv = document.createElement('div');
    dateDiv.textContent = `🍺 ${value.date} - ${value.name}`;
    dateDiv.classList.add('date-item');
    parentElement.appendChild(dateDiv);
  });
};

window.onload = () => {
  console.log(matchedDates);
  loadNamesAndDates();
};
