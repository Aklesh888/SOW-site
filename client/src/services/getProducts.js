
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

        console.log(response.json, 'is response');
        
        return response.json();


    } catch (error) {
        throw error;
    }



}