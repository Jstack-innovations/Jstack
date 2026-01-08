document.addEventListener("DOMContentLoaded", fetchGNews);

async function fetchGNews() {
  //const apiUrl = "/api/news"; // <- call your Vercel serverless function
   const apiUrl="https://globalnews-pi.vercel.app/api/news.js";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.articles || data.articles.length === 0) {
      document.getElementById('news-container').innerHTML = "<p style='color:gray;'>No news articles available.</p>";
      return;
    }

    const container = document.getElementById('news-container');
    container.innerHTML = ""; // Clear existing

    data.articles.forEach(article => {
      const newsCard = document.createElement("div");
      newsCard.style.background = "#ddd";
      newsCard.style.color = "#000";
      newsCard.style.borderRadius = "10px";
      newsCard.style.padding = "15px";
      newsCard.style.margin = "10px";
      newsCard.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";

      newsCard.innerHTML = `
        <img src="${article.image || ''}" alt="news image" style="width:100%; border-radius:8px; margin-bottom:10px;" />
        <h4 style="color:peru;">${article.title}</h4>
        <p>${article.description || ''}</p>
        <a href="${article.url}" target="_blank" style="color:skyblue;">Read more</a>
      `;

      container.appendChild(newsCard);
    });
  } catch (error) {
    console.error("Failed to load news:", error);
    document.getElementById('news-container').innerHTML = "<p style='color:red;'>Failed to fetch news. Please try again later.</p>";
  }
}
