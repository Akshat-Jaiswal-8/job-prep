const express = require('express');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const {IamAuthenticator} = require("ibm-watson/auth");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
        apikey: '5k6yub_cNB1vTyfzCw9bsoZ2Qp30M9TYSKxHiuS6Y0hK',
    }),
    serviceUrl: 'https://api.au-syd.text-to-speech.watson.cloud.ibm.com/instances/58e30916-115e-4684-8074-79492f803fe4',
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
