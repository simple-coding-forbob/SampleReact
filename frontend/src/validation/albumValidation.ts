import * as yup from 'yup';
import messages from '../common/message';

const albumValidation = yup.object({
    userId: yup.number().typeError(messages.number)
            .required(messages.required),
    title: yup.string().required(messages.required),
})

export default albumValidation;