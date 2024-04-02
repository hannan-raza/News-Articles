import axios from "axios";

export const fetchHeadlines = async () => {
  try {
    const apiKey = "0b44b367c511455fb5b3ff4785f9cfdf";

    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    const date = `${year}-${month}-${day}`;

    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=us&from=2024-03-31&sortBy=popularity&apiKey=${apiKey}`
    );
    return response.data.articles; // Access data property first
  } catch (error) {
    console.error("Error fetching headlines : ", error);
    throw error;
  }
};
