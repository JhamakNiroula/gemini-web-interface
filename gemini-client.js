async function askGemini(userPrompt) {
    try {
        const response = await fetch('https://gemini-proxy-backend.onrender.com/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: userPrompt })
        });

        if (!response.ok) {
            throw new Error(`Server returned status: ${response.status}`);
        }

        const data = await response.json();
        return data.result;
    } catch (error) {
        console.error('Error connecting to proxy:', error);
        return 'Unable to process request right now.';
    }
}