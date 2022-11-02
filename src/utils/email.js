import emailjs from '@emailjs/browser';

export default function email(templateParams) {
    emailjs.send('service_6wks4io', 'template_6pmctkm', templateParams, '-y5WHj3X9RoUpwNtG')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

}

