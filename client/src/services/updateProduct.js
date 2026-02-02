const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const updateProduct = async (productId, updatedData) => {
  try {
    const response = await fetch(`${apiUrl}/product/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("Failed to update the products");
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};
