console.info('option/prints.js: File is loaded from line 1. Please check error console for any errors during the process.')
console.warn('option/prints.js: Process is validated. SSL and https:// has loaded successfuly.')
//███████ ████████  ███████  ██████     ██
//██         ██     ██   ██  ██   ██    ██
//███████    ██     ██   ██  ██████     ██
//     ██    ██     ██   ██  ██
//███████    ██     ███████  ██         ██
// CONTACT A WDS OR CEO AT THIS POINT. MESSING THIS CODE UP WILL RESULT IN A BAN.
//window.onerror = function(message, source, lineno, colno, error) {
  //  console.error('option/prints.js: prints.js has detected bugs. Please refer to error console or check with WDS to solve it.');
    //console.error(`Error Message: ${message}`);
   // console.error(`Source: ${source}`);
   // console.error(`Line: ${lineno}, Column: ${colno}`);
   // console.error(`Stack Trace: ${error ? error.stack : 'No stack trace available'}`);
   // return true; // DO NOT DELETE!
//};

//████████  ██   ██  ███████   ██    ██        ██
//   ██     ██   ██  ██     █  ████  ██      ██████
//   ██     ██   ██  ███████   ██  ████    ██████████
//   ██     ██   ██  ██ ██     ██    ██        ██
//   ██      █████   ██   ██   ██    ██        ██
// TURN BACK! THIS IS SENSITIVE CODE THAT WILL NOT BE TOUCHED!
// THIS CODE SHALL NOT BE DELETED OR YOU WILL BE EXILED AND FINED UP TO 1500 RBX.



//TURN NOW!





















// YOU WILL BE FINED PAST THIS POINT









//CODE

// 1. Basic Security: Preventing Cross-Site Scripting (XSS)
function sanitizeInput(input) {
    const element = document.createElement('div');
    element.innerText = input;
    return element.innerHTML; // Returns sanitized string
}

// Example Usage
const userInput = sanitizeInput('<script>alert("xss")</script>');
console.log(userInput); // This will output &lt;script&gt;alert("xss")&lt;/script&gt;

// 2. Setting HTTP-Only Cookies (for security)
document.cookie = "userSession=abcd1234; Secure; HttpOnly; SameSite=Strict; path=/";

// 3. Input Validation (for forms or APIs)
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

const email = "example@example.com";
if (!isValidEmail(email)) {
    console.error("Invalid email address");
}

// 4. Preventing Form Resubmission on Page Reload
if (performance.navigation.type === 1) {
    window.location.reload();
} else {
    // Continue loading the page as usual
}

// 5. Preventing Multiple Form Submissions
document.getElementById('submitBtn').addEventListener('click', function() {
    this.disabled = true; // Disables the submit button after it's clicked
    // Continue with form submission process...
});

// 6. Loading Resources Asynchronously
const scriptTag = document.createElement('script');
scriptTag.src = 'your-script.js';
scriptTag.async = true;
document.head.appendChild(scriptTag);

const linkTag = document.createElement('link');
linkTag.rel = 'stylesheet';
linkTag.href = 'your-stylesheet.css';
linkTag.media = 'all';
document.head.appendChild(linkTag);

// 7. Tracking User Interaction (Google Analytics or Custom Events)
document.getElementById('yourButton').addEventListener('click', function() {
    // Example custom event logging
    console.log('User clicked the button');
    // Send event to Google Analytics or your custom tracking
    ga('send', 'event', 'button', 'click', 'cta');
});

// 8. Graceful Error Handling and Logging
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error(`Error: ${msg} at ${url}:${lineNo}:${columnNo}`);
    // Optionally send this to your server for logging
    return true; // Prevent default browser error
};

// 9. Redirecting Users After a Specific Action (e.g., after form submission)
document.getElementById('yourForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Submit form logic here...
    window.location.href = '/thank-you-page'; // Redirect after success
});

// 10. Handling Missing Files or Resources
function loadImageWithFallback() {
    const img = new Image();
    img.src = 'path-to-image.jpg';
    img.onerror = function() {
        console.error('Image failed to load. Displaying fallback image.');
        img.src = 'fallback-image.jpg'; // Fallback image
    };
    document.body.appendChild(img);
}
loadImageWithFallback();

// Additional Important Code:

// Measure Page Load Time
window.onload = () => {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(3)} ms`);
};

// Error Detection for the Site
window.addEventListener('error', function(event) {
    console.error('option/prints.js: prints.js has detected bugs. Please refer to error console or check with WDS to solve it.');
    console.error(`Error message: ${event.message}`);
    console.error(`Error source: ${event.filename}`);
    console.error(`Error line: ${event.lineno}`);
    console.error(`Error column: ${event.colno}`);
    console.error(`Error stack: ${event.error ? event.error.stack : 'No stack available'}`);
});

// Example of Sanitizing User Input before Using It
const inputText = '<script>alert("test")</script>';
const sanitizedText = sanitizeInput(inputText);
console.log(`Sanitized input: ${sanitizedText}`);

// Example Usage of Preventing Form Resubmission
document.getElementById('submitBtn').addEventListener('click', function() {
    this.disabled = true; // Disables the submit button
    // Form submission logic goes here...
    console.log('Form submitted');
});


//LOADED
console.error(`
██    ██    ██  ███████    ██████    ██      ██   ██
██    ██    ██  ██   ██  ██      ██  ██      ██   ██
██    ██    ██  ██   ██  ██████████  ██████████   ██
██    ██    ██  ██   ██  ██      ██  ██      ██
  ████  ████    ███████  ██      ██  ██      ██   ██
line 178: All functions/security tabs have been opened. Please refer to error console to see if there are any problems.
If there are any problems, please contact a Web Developement Staff (WDS) or manager to report a bug. You may also submit a tip.
`)
