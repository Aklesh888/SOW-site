
const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const getLoginTexts = async (language) => {

    try {
        const response = await fetch(`${apiUrl}/loginTexts?lang=${language}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log(response);
        
        return response.json();


    } catch (error) {
        throw error;
    }



}