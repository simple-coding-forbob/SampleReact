import * as yup from "yup";
import messages from "../common/message";

const memberValidation = yup.object({
    name: yup.string().required(messages.required),
    age: yup.number().typeError(messages.number)
            .required(messages.required)
            .min(1, messages.age)
});

export default memberValidation;