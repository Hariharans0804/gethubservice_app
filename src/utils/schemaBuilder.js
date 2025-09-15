// utils/schemaBuilder.js
import * as Yup from 'yup';

export const buildSchema = (fields) => {
    return Yup.object().shape(
        fields.reduce((acc, field) => {
            let validation;

            // base type
            switch (field.type) {
                case 'number':
                    validation = Yup.number()
                        .typeError(`${field.label} must be a number`);
                    break;
                case 'textarea':
                case 'text':
                default:
                    validation = Yup.string();
            }

            // required
            if (field.required) {
                validation = validation.required(`${field.label} is required`);
            }

            // special cases (like email)
            if (field.key === 'email') {
                validation = Yup.string()
                    .email('Invalid email')
                    .required('Email is required');
            }

            acc[field.key] = validation;
            return acc;
        }, {})
    );
};
