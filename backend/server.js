const express = require('express');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const {IamAuthenticator} = require("ibm-watson/auth");
const cors = require('cors');
const {configDotenv} = require("dotenv");
const app = express();
app.use(cors());
app.use(express.json());
configDotenv()

const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
        apikey: process.env.IBM_KEY,
    }),
    serviceUrl: process.env.IBM_URL,
    disableSslVerification: true,
});

app.post('/synthesize', async (req, res) => {
    const {text} = req.body;

    try {
        const response = await textToSpeech.synthesize({
            text: text,
            accept: 'audio/wav',
            voice: 'en-US_AllisonV3Voice',
        });

        const buffer = await textToSpeech.repairWavHeaderStream(response.result);

        res.set('Content-Type', 'audio/wav');
        res.send(buffer);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error synthesizing speech');
    }
});

app.listen(8000, () => console.log('Server running on port 8000'));
