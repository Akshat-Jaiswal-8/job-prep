const sdk = require("microsoft-cognitiveservices-speech-sdk");

// Replace with your Azure Speech Service subscription key and region
const subscriptionKey = "a3ffa5d321e6457eb03c339787653c7a";
const serviceRegion = "centralindia";

// Set up the configuration
const speechConfig = sdk.SpeechConfig.fromSubscription(
  subscriptionKey,
  serviceRegion
);

// Create a speech recognizer
const audioConfig = sdk.AudioConfig.fromMicrophoneInput("BTHENUM\Dev_DAC73D9E64F0"
);
const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

// Handle recognition events
recognizer.recognizing = (s, e) => {
  console.log(`RECOGNIZING: ${e.result.text}`);
};

recognizer.recognized = (s, e) => {
  if (e.result.reason === sdk.ResultReason.RecognizedSpeech) {
    console.log(`RECOGNIZED: ${e.result.text}`);
  } else if (e.result.reason === sdk.ResultReason.NoMatch) {
    console.log("No speech could be recognized.");
  }
};

recognizer.canceled = (s, e) => {
  console.log(`CANCELED: Reason=${e.reason}`);

  if (e.reason === sdk.CancellationReason.Error) {
    console.log(`CANCELED: ErrorCode=${e.ErrorCode}`);
    console.log(`CANCELED: ErrorDetails=${e.errorDetails}`);
  }
};

// Start real-time speech recognition
console.log("Say something...");
recognizer.startContinuousRecognitionAsync();

// To stop recognition, you can use recognizer.stopContinuousRecognitionAsync()

// Keep the process running or add your application logic here
console.log("Press Enter to stop...");
process.stdin.addListener("data", () => {
  recognizer.stopContinuousRecognitionAsync(() => {
    process.exit();
  });
});
