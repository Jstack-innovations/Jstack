export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  const apiKey = "66e47d59086af2af250337e8777cc88b";
  const apiUrl = `https://gnews.io/api/v4/top-headlines?lang=en&country=us&token=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
