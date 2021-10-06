import React from "react";
import validate from "validate.js";

export const validateForm = (formId, rules, ignored = []) => {
    const values = validate.collectFormValues(formId);
    const errors = {};
    const validStatus = validate(values, rules);

    if (validStatus) {
        Object.keys(validStatus).forEach((key) => {
            if (!ignored.includes(key)) errors[key] = validStatus[key][0];
        });
    }

    return { isFormValid: Object.keys(errors).length <= 0, errors };
};
