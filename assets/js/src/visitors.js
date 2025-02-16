async function trackVisit() {

const scriptURL = 'https://script.google.com/macros/s/AKfycbwRFRUBA7b85As1jBbu0nQx70jJCtyFnTKFsaqjamELLoHwNq1zLRqpKjI_v-3Q0HoVUg/exec';

try {
    const response = await fetch(scriptURL + '?action=trackVisit',{
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
