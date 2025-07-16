async function fetchNews() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=ff305e0511634795a859be4745fdddf5');
    const data = await response.json();

    const container = document.getElementById('news-container');
    data.articles.forEach(article => {
      const newsItem = `
        <div style="border:1px solid #ccc; margin:10px; padding:10px;">
          <img src="${article.urlToImage}" alt="news image" style="max-width:100%; height:auto;" />
          <h3>${article.title}</h3>
          <p>${article.description}</p>
          <a href="${article.url}" target="_blank">Read more</a>
        </div>
      `;
      container.innerHTML += newsItem;
    });
  }

  fetchNews();
  
  
  
  
  
  
  
  
