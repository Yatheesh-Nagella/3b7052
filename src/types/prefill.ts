export interface PrefillMapping {
    sourceFormName: string;
    sourceFieldName: string;
}

export interface FormField {
    name: string;
    prefill?: PrefillMapping;
}
