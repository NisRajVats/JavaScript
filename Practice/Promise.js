


document.addEventListener('DOMContentLoaded', function() {
    // --- Get DOM Elements ---
    const form = document.getElementById('contactForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const inquiryType = document.getElementById('inquiryType');
    const message = document.getElementById('message');
    const terms = document.getElementById('terms');
    const submitBtn = document.getElementById('submitBtn');
    const submissionStatus = document.getElementById('submission-status');

    // --- Helper Functions for Validation Feedback ---
    const showError = (input, message) => {
        const formGroup = input.parentElement;
        const errorDiv = formGroup.querySelector('.error-message');
        
        input.classList.remove('success');
        input.classList.add('error');
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    };

    const showSuccess = (input) => {
        const formGroup = input.parentElement;
        const errorDiv = formGroup.querySelector('.error-message');
        
        input.classList.remove('error');
        input.classList.add('success');
        errorDiv.style.display = 'none';
    };
    
    // --- Validation Logic Functions ---
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const validateRequired = (input) => {
        return input.value.trim() !== '';
    };

    const validateLength = (input, min) => {
        return input.value.trim().length >= min;
    };
    
    const validateCheckbox = (checkbox) => {
        return checkbox.checked;
    };

    // --- Main Validation Function ---
    const validateForm = () => {
        let isFormValid = true;

        // Full Name
        if (!validateRequired(fullName)) {
            showError(fullName, 'Full name is required.');
            isFormValid = false;
        } else {
            showSuccess(fullName);
        }

        // Email
        if (!validateRequired(email)) {
            showError(email, 'Email is required.');
            isFormValid = false;
        } else if (!validateEmail(email.value)) {
            showError(email, 'Please enter a valid email address.');
            isFormValid = false;
        } else {
            showSuccess(email);
        }

        // Inquiry Type
        if (!validateRequired(inquiryType)) {
            showError(inquiryType, 'Please select a reason for your inquiry.');
            isFormValid = false;
        } else {
            showSuccess(inquiryType);
        }

        // Message
        if (!validateLength(message, 10)) {
            showError(message, 'Message must be at least 10 characters long.');
            isFormValid = false;
        } else {
            showSuccess(message);
        }

        // Terms
        if (!validateCheckbox(terms)) {
            showError(terms.parentElement, 'You must agree to the terms and conditions.'); // A bit different for checkbox
             isFormValid = false;
        } else {
            showSuccess(terms.parentElement); // A bit different for checkbox
        }
        
        return isFormValid;
    };


    // --- Form Submission Event Listener ---
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default page reload

        if (validateForm()) {
            // --- Form is valid, handle submission ---
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitting...';
            submissionStatus.style.display = 'block';
            submissionStatus.textContent = 'Processing your request...';
            submissionStatus.className = '';

            // Simulate an API call (e.g., sending data to a server)
            setTimeout(() => {
                // On success
                submissionStatus.textContent = 'Success! Your message has been sent.';
                submissionStatus.classList.add('success');
                
                // Reset form
                form.reset();
                // Remove success/error classes
                document.querySelectorAll('.form-control, .form-group-checkbox').forEach(el => {
                    el.classList.remove('success', 'error');
                });
                
                // Re-enable button after a short delay
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Submit';
                    submissionStatus.style.display = 'none';
                }, 3000);

            }, 2000); // 2-second simulation
        }
    });

});