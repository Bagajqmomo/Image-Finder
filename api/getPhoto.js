export default async function handler(req, res) {
  const { query } = req.query; // Get the search term from the request query
  const API_KEY = process.env.VITE_API_KEY; // Securely access your API key

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${query}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch photos" });
  }
}
