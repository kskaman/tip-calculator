export const useValidation = () => {
    const validateNumericInput = (value: string): boolean => /^[0-9]*$/.test(value);
    const validateDecimalInput = (value: string): boolean => /^\d*\.?\d{0,2}$/.test(value);

    return { validateNumericInput, validateDecimalInput }
}