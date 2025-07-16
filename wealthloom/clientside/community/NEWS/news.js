document.addEventListener("DOMContentLoaded", function () {
  const newsData = [
    {
      title: "Market Hits New High",
      summary: "The market is seeing unprecedented growth...",
      url: "#"
    },
    {
      title: "Bitcoin Surges",
      summary: "Bitcoin crossed the $60,000 mark...",
      url: "#"
    }
  ];

  const container = document.getElementById("news-container");

  if (container) {
    newsData.forEach(news => {
      const div = document.createElement("div");
      div.classList.add("news-item");
      div.style.background = "#111";
      div.style.padding = "15px";
      div.style.borderRadius = "10px";
      div.style.color = "#fff";

      div.innerHTML = `
        <h3 style="color:lime;">${news.title}</h3>
        <p>${news.summary}</p>
        <a href="${news.url}" style="color:skyblue;">Read More</a>
      `;
      container.appendChild(div);
    });
  }
});
