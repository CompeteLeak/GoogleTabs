// Load the configuration from config.json
fetch('config.json')
    .then(response => response.json())
    .then(config => {
        const apiKey = config.apiKey;
        loadGoogleMaps(apiKey);
    })
    .catch(error => {
        console.error('Error loading configuration:', error);
    });

// Initialize the map with the Google Maps API
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7128, lng: -74.0060 }, // Default map center (New York City)
        zoom: 12, // Default zoom level
    })
}

// Load the Google Maps API with the provided API key
function loadGoogleMaps(apiKey) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onerror = function() {
        console.error('Error loading the Google Maps API.');
    };
    document.head.appendChild(script);
}

