const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const getLoginTexts = async (language) => {
  try {
    const response = await fetch(`${apiUrl}/loginTexts?lang=${language}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to get login texts")
    }
  } catch (error) {
    throw error;
  }
};
