import * as yup from "yup";
import messages from "../common/message";

const faqValidation = yup.object({
    title: yup.string().required(messages.required),
    content: yup.string().required(messages.required)
});

export default faqValidation;