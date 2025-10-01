export const appointmentsFields = [
    {
        key: "name",
        label: "Customer Name",
        type: "text",
        placeholder: "Enter customer name",
        required: true,
    },
    {
        key: "service",
        label: "Service Type",
        type: "dropdown",
        // options: ["Consulting", "Maintenance", "Support", "Other"], // Or fetch from API
        options: [
            { label: "Consulting", value: "consulting" },
            { label: "Maintenance", value: "maintenance" },
            { label: "Support", value: "support" },
            { label: "Other", value: "other" },
        ],
        placeholder: "Select service",
        required: true,
    },
    {
        key: "date",
        label: "Available Date",
        type: "date",
        placeholder: "Select your date",
        required: true,
    },
    {
        key: "address",
        label: "Address",
        type: "textarea",
        placeholder: "Enter customer address",
        required: false,
    }
];