const EMAILJS_CONFIG = {
    // EmailJS Public Key (User ID)
    USER_ID: "Lgn31CPd_UYIEgNFY",

    //EmailJS Service ID
    SERVICE_ID: "service_bwr8gt9",

    //EmailJS Template ID 
    TEMPLATE_ID: "template_210gz6g",

    // Recipient email address - Where form submissions will be sent
    RECIPIENT_EMAIL: "abdullahkhalid204606@gmail.com"
};

// Initialize EmailJS
(function () {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.USER_ID);
        console.log('EmailJS initialized successfully');
    } else {
        console.error('EmailJS SDK not loaded. Make sure to include the CDN script.');
    }
})();

/**
 * Send email using EmailJS
 * @param {HTMLFormElement} form - The form element
 * @param {string} formType - Either 'contact' or 'home' to determine which fields to use
 * @returns {Promise} - Promise that resolves on success or rejects on error
 */
function sendEmail(form, formType = 'contact') {
    // Gather form data based on form type
    let templateParams = {
        to_email: EMAILJS_CONFIG.RECIPIENT_EMAIL
    };

    if (formType === 'contact') {
        // Full contact form (contact.html)
        templateParams = {
            ...templateParams,
            from_name: document.getElementById('contact-name')?.value || '',
            from_email: document.getElementById('contact-email')?.value || '',
            company: document.getElementById('contact-company')?.value || '',
            phone: document.getElementById('contact-phone')?.value || '',
            interest: document.getElementById('contact-interest')?.value || '',
            message: document.getElementById('contact-message')?.value || '',
            newsletter: document.getElementById('contact-newsletter')?.checked ? 'Yes' : 'No'
        };
    } else {
        // Home page quick form (index.html)
        templateParams = {
            ...templateParams,
            from_name: document.getElementById('home-name')?.value || '',
            from_email: document.getElementById('home-email')?.value || '',
            company: document.getElementById('home-company')?.value || '',
            phone: '',
            interest: 'General Inquiry',
            message: document.getElementById('home-message')?.value || '',
            newsletter: 'No'
        };
    }

    // Send the email
    return emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
    )
        .then(function (response) {
            console.log('Email sent successfully!', response.status, response.text);
            return response;
        })
        .catch(function (error) {
            console.error('Failed to send email:', error);
            throw error;
        });
}

/**
 * Handle form submission with EmailJS
 * @param {Event} event - The submit event
 * @param {string} formType - Either 'contact' or 'home'
 */
function handleFormSubmit(event, formType = 'contact') {
    event.preventDefault();

    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    sendEmail(form, formType)
        .then(function () {
            // Success - show message and reset form
            alert('Thank you for your message! We\'ll get back to you within 24 hours.');
            form.reset();
        })
        .catch(function (error) {
            // Error - show error message
            alert('Sorry, there was an error sending your message. Please try again or email us directly at ' + EMAILJS_CONFIG.RECIPIENT_EMAIL);
        })
        .finally(function () {
            // Re-enable button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        });
}
