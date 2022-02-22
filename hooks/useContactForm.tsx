import { useCallback, useState } from "react";

export function useContactForm() {
  const [contactState, setContactState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const setFieldValue = useCallback((e: any) => {
    setContactState({
      ...contactState,
      [e.target.name]: e.target.value,
    });
  }, []);

  const sendContactInfo = useCallback((e: any) => {
    // console.log(`🚀 ~ useContactForm ~ contactState`, contactState);
  }, []);

  return { contactState, setFieldValue, sendContactInfo };
}
