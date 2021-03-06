import * as EmailValidator from 'email-validator';
const rules = {
    required(val, required) {
        if (!Boolean(val) && required)
            return 'This field is required';
    },
    maxlen(val, maxSize) {
        if (val.length > maxSize)
            return `This field has a maximum size of ${maxSize}`;
    },
    minlen(val, minSize) {
        if (val.length < minSize)
            return `This field has a minimum size of ${minSize}`;
    },
    number(val, required) {
        if (!(/^[0-9]+$/).test(val) && required)
            return 'This field should be a number';
    },
    alpha(val) {
        if (!/^[A-z\s]+$/.test(val))
            return 'This field should only contain letters and spaces';
    },
    min(val, min) {
        if (Number(val) < min)
            return `This field should be above ${min}`;
    },
    max(val, max) {
        if (Number(val) > max)
            return `This field should be below ${max}`;
    },
    tel(val, required) {
        // TODO: Phone number checking
        if (required)
            return 'NO';
        // if (!isValidNumber (val)) return 'This field should be a telephone number';
    },
    email(val, required) {
        if (!EmailValidator.validate(val))
            return 'Invalid email';
    }
};
export default rules;
