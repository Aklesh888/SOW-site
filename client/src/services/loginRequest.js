
const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const loginRequest = async ({email, password}) => {

    try {
        const response = await fetch(`${apiUrl}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        console.log(response);
        
        return response.json();


    } catch (error) {
        throw error;
    }



}