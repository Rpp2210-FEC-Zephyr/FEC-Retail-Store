module.exports = (date) => {
  var rawDate = new Date(date);

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var dateMonth = months[rawDate.getMonth()];
  var dateDay = rawDate.getDate();
  var dateYear = rawDate.getFullYear();

  var formattedDate = dateMonth + " " + dateDay + ", " + dateYear;

  return formattedDate;
};
