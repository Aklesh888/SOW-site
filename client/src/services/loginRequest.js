const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const loginRequest = async ({ email, password }) => {
  try {
    const response = await fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};
