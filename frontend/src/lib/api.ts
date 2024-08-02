import axios from 'axios';

export async function sendPostRequest(emailText: string): Promise<any> {
	try {
		const response = await axios.post('/api/predict', {
			email_text: emailText,
		});
		return response.data;
	} catch (error) {
		console.error('Error sending POST request:', error);
		throw error;
	}
}
