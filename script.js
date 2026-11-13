function recommendCrop() {

    let soil = document.getElementById("soil").value;
    let season = document.getElementById("season").value;
    let water = document.getElementById("water").value;

    let crops = "";

    if (season === "Kharif") {
        crops = "Rice, Maize and Millets";
    } else if (season === "Rabi") {
        crops = "Wheat, Chickpea and Mustard";
    } else {
        crops = "Suitable Summer Millets";
    }

    document.getElementById("result").innerHTML =
        "<h3>Suggested Crops</h3>" +
        crops +
        "<p>Soil: " + soil +
        "<br>Water: " + water + "</p>" +
        "<small>Illustrative suggestions only. Confirm suitability locally.</small>";
}

function getWeather() {
    let city = document.getElementById("city").value;

    if (city.trim() === "") {
        alert("Please enter a city name");
        return;
    }

    document.getElementById("weatherResult").innerHTML =
        "Weather API connection is required to show live weather for " +
        city + ".";
}

function changeLanguage() {

    let language = document.getElementById("language").value;

    if (language === "te") {
        document.getElementById("tagline").innerText =
            "సాంకేతికతతో మెరుగైన వ్యవసాయం";

        document.getElementById("welcome").innerText =
            "అగ్రి కనెక్ట్‌కు స్వాగతం";

    } else {
        document.getElementById("tagline").innerText =
            "Smart Technology, Better Farming";

        document.getElementById("welcome").innerText =
            "Welcome to AgriConnect";
    }
}
async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const result = document.getElementById("weatherResult");

  if (!city) {
    result.innerHTML = "Please enter your city name.";
    return;
  }

  result.innerHTML = "Loading weather...";

  try {
    // Find city coordinates
    const geoURL =
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

    const geoResponse = await fetch(geoURL);
    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      result.innerHTML = "City not found. Try another name.";
      return;
    }

    const place = geoData.results[0];

    // Get current weather
    const weatherURL =
      `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m&timezone=auto`;

    const weatherResponse = await fetch(weatherURL);
    const weatherData = await weatherResponse.json();

    const weather = weatherData.current;

    result.innerHTML = `
      <h3>Weather in ${place.name}</h3>
      <p>🌡️ Temperature: ${weather.temperature_2m} °C</p>
      <p>💧 Humidity: ${weather.relative_humidity_2m}%</p>
      <p>🌧️ Precipitation: ${weather.precipitation} mm</p>
      <p>💨 Wind Speed: ${weather.wind_speed_10m} km/h</p>
      <p>🕒 Updated: ${weather.time}</p>
    `;

  } catch (error) {
    result.innerHTML =
      "Unable to load weather. Please check your internet connection.";
    console.error(error);
  }
}

    const crop = document.getElementById("cropDisease").value;

    const teluguMessages = {
        rice: "మీరు వరి పంటను ఎంచుకున్నారు. వరి పంటలో బ్లాస్ట్ వ్యాధి రావచ్చు. ఆకులపై మచ్చలు కనిపిస్తాయి. ఆరోగ్యకరమైన విత్తనాలు ఉపయోగించండి.",
        cotton: "మీరు పత్తి పంటను ఎంచుకున్నారు. పత్తిలో ఆకు ముడత వ్యాధి రావచ్చు. ఆకులు ముడుచుకుంటాయి. తెల్లదోమలను గమనించండి.",
        tomato: "మీరు టమాటా పంటను ఎంచుకున్నారు. టమాటాలో ఎర్లీ బ్లైట్ వ్యాధి రావచ్చు. ఆకులపై గోధుమ రంగు మచ్చలు కనిపిస్తాయి.",
        maize: "మీరు మొక్కజొన్న పంటను ఎంచుకున్నారు. ఆకుమచ్చ వ్యాధి రావచ్చు. ఆకులపై పొడవైన మచ్చలు కనిపిస్తాయి."
    };

    if (!crop) {
        alert("ముందుగా పంటను ఎంచుకోండి.");
        return;
    }

    const speech = new SpeechSynthesisUtterance(
        teluguMessages[crop]
    );

    speech.lang = "te-IN";
    speech.rate = 0.85;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);

function speakDisease() {
    const crop = document.getElementById("cropDisease").value;

    const teluguMessages = {
        rice: "మీరు వరి పంటను ఎంచుకున్నారు. వరి పంటలో బ్లాస్ట్ వ్యాధి రావచ్చు. ఆకులపై మచ్చలు కనిపిస్తాయి. ఆరోగ్యకరమైన విత్తనాలు ఉపయోగించండి.",
        cotton: "మీరు పత్తి పంటను ఎంచుకున్నారు. పత్తిలో ఆకు ముడత వ్యాధి రావచ్చు. ఆకులు ముడుచుకుంటాయి. తెల్లదోమలను గమనించండి.",
        tomato: "మీరు టమాటా పంటను ఎంచుకున్నారు. టమాటాలో ఎర్లీ బ్లైట్ వ్యాధి రావచ్చు. ఆకులపై గోధుమ రంగు మచ్చలు కనిపిస్తాయి.",
        maize: "మీరు మొక్కజొన్న పంటను ఎంచుకున్నారు. ఆకుమచ్చ వ్యాధి రావచ్చు. ఆకులపై పొడవైన మచ్చలు కనిపిస్తాయి."
    };

    if (!crop) {
        alert("ముందుగా పంటను ఎంచుకోండి.");
        return;
    }

    const speech = new SpeechSynthesisUtterance(
        teluguMessages[crop]
    );

    speech.lang = "te-IN";
    speech.rate = 0.85;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
}
let cameraStream;

async function startCamera() {
    const video = document.getElementById("camera");

    try {
        cameraStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" },
            audio: false
        });

        video.srcObject = cameraStream;
        video.style.display = "block";

    } catch (error) {
        alert("Camera access not available. Please allow camera permission.");
    }
}

function capturePhoto() {
    const video = document.getElementById("camera");
    const canvas = document.getElementById("canvas");
    const preview = document.getElementById("cropPreview");

    if (!video.srcObject || !video.videoWidth) {
        alert("Please open the camera first.");
        return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    canvas.getContext("2d").drawImage(
        video, 0, 0, canvas.width, canvas.height
    );

    preview.src = canvas.toDataURL("image/png");
    preview.style.display = "block";
