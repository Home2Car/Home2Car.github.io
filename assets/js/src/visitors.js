async function trackVisit() {

const scriptURL = 'https://script.google.com/macros/s/AKfycbxEiEVdmm2o3HACyr-pAvYckZLqrC4tFWGnxZns__N5P7RAD804gJSw23Yu2TViRFXXiw/exec';

try {
    const response = await fetch(scriptURL + '?action=visitor',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
        })
    });
} catch (error) {

}
}
document.addEventListener('DOMContentLoaded', trackVisit);
