/**
 * @copyright 2024-2025 Nicola Ferrarese
 * @license Proprietario
 *
 * Questo file è proprietà intellettuale esclusiva del suo autore.
 * Vedere il file LICENSE.md nella root del repository per i termini completi.
 */


async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = {
        name: form.name.value,
        email: form.email.value,
        possession: form.possession.value,
        message: form.message.value,
        timestamp: new Date().toISOString()
    };

    if (!formData.name || !formData.email || !formData.possession || !formData.message) {
        alert('Please fill in all required fields');
        return;
    }

    try {
        const submitButton = form.querySelector('button');
        const originalButtonText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = 'Invio...';

        console.log('Submitting form', formData);
        const response = await fetch('https://script.google.com/macros/s/AKfycbxEiEVdmm2o3HACyr-pAvYckZLqrC4tFWGnxZns__N5P7RAD804gJSw23Yu2TViRFXXiw/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        console.log('Form submitted', formData);

        form.reset();
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;

        alert('Grazie per averci contattato!');

    } catch (error) {
        console.error(error);
    }
}

window.handleSubmit = handleSubmit;