import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
    console.log("Captcha value:", value);
}

export default function Captcha() {

    return <>
        <ReCAPTCHA sitekey="6LeNWUIgAAAAALMCiTigBlZ9xFcC01RctoHiMJnY" onChange={onChange} />
    </>
}