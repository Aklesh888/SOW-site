
const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const getProducts = async () => {

    try {
        const response = await fetch(`${apiUrl}/products`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
          },
        });

        if (response.status === 401) {
          throw new Error('Unauthorized: Invalid token');
        }
        else if (!response.ok) {
          throw new Error('Failed to get the products');
        }
        
        return response.json();


    } catch (error) {
        throw error;
    }



}