import emailjs from '@emailjs/browser';

export async function sendContactForm(formElement) {
    return emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
}