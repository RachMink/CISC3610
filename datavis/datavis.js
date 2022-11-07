const publicData = {
  labels: ["Brooklyn", "Manhattan", "Staten Island", "Bronx", "Queens"],
  datasets: [
    {
      label: "Public Wi-Fi Hotspots",
      backgroundColor: ["#4287f5", "#1a3c73", "#4d0ec9", "#bb9bfa", "#9be8fa"],
      data: [700, 1672, 100, 316, 531],
    },
  ],
};

new Chart(document.getElementById("bar-chart"), {
  type: "bar",
  data: publicData,
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Public Wi-Fi Hotspots In NYC",
    },
  },
});

new Chart(document.getElementById("doughnut-chart"), {
  type: "doughnut",
  data: publicData,
  options: {
    title: {
      display: true,
      text: "Public Wi-Fi Hotspots In NYC",
    },
  },
});
