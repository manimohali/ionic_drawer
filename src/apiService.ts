const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products/2801223`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};


