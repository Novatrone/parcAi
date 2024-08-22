const api = "https://us-central1-procreators.cloudfunctions.net"

export const createUser = async (Data) => {
    const url = `${api}/praci-contact-us`;


    try {
        const response = await fetch(api + "/praci-contact-us", {
            method: 'POST',
            headers: {
                // 'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data)
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('Error creating template:', error);
            return;
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};