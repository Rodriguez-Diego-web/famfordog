import { useState, useCallback } from 'react';

type ValidationRule<T> = {
  validator: (value: any, formData: T) => boolean;
  message: string;
};

type ValidationRules<T> = {
  [K in keyof T]?: ValidationRule<T>[];
};

/**
 * Hook für einfache Formularvalidierung
 * @param initialData Die initialen Formulardaten
 * @param validationRules Die Validierungsregeln für jedes Feld
 * @returns Alles Nötige für die Formularvalidierung
 */
export function useFormValidation<T extends Record<string, any>>(
  initialData: T,
  validationRules: ValidationRules<T>
) {
  const [formData, setFormData] = useState<T>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});

  // Handler für Änderungen in Formularfeldern
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Markiere das Feld als berührt
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Lösche den Fehler, wenn das Feld geändert wird
    if (errors[name as keyof T]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  }, [errors]);

  // Validiere ein einzelnes Feld
  const validateField = useCallback((name: keyof T) => {
    const fieldRules = validationRules[name];
    if (!fieldRules) return true;
    
    for (const rule of fieldRules) {
      if (!rule.validator(formData[name], formData)) {
        setErrors(prev => ({
          ...prev,
          [name]: rule.message
        }));
        return false;
      }
    }
    
    // Lösche den Fehler, wenn die Validierung erfolgreich ist
    setErrors(prev => ({
      ...prev,
      [name]: undefined
    }));
    
    return true;
  }, [formData, validationRules]);

  // Validiere das gesamte Formular
  const validateForm = useCallback(() => {
    let isValid = true;
    
    // Markiere alle Felder als berührt
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key as keyof T] = true;
      return acc;
    }, {} as Partial<Record<keyof T, boolean>>);
    
    setTouched(allTouched);
    
    // Validiere jedes Feld
    for (const key in validationRules) {
      const isFieldValid = validateField(key as keyof T);
      if (!isFieldValid) {
        isValid = false;
      }
    }
    
    return isValid;
  }, [formData, validateField, validationRules]);

  // Setze das Formular zurück
  const resetForm = useCallback(() => {
    setFormData(initialData);
    setErrors({});
    setTouched({});
  }, [initialData]);

  return {
    formData,
    setFormData,
    errors,
    touched,
    handleChange,
    validateField,
    validateForm,
    resetForm
  };
}
