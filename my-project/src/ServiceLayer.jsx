// api.js
export const fetchAllEvents = async () => {
    const serverUrl = 'https://unimate-webserver-dev-un47nwyyta-et.a.run.app'

    try {
        const response = await fetch(`${serverUrl}/v1/event`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch events');
        }

        const data = await response.json();
        return data.events;
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
};
