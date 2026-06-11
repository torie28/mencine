"use client";

import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import React, { createContext, useContext, useMemo } from "react";

type RecaptchaContextType = {
  executeRecaptcha:
    | ReturnType<typeof useGoogleReCaptcha>["executeRecaptcha"]
    | undefined;
};

const RecaptchaContext = createContext<RecaptchaContextType>({
  executeRecaptcha: undefined,
});

function RecaptchaInternal({ children }: { children: React.ReactNode }) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const value = useMemo(
    () => ({
      executeRecaptcha,
    }),
    [executeRecaptcha],
  );

  return (
    <RecaptchaContext.Provider value={value}>
      {children}
    </RecaptchaContext.Provider>
  );
}

export function ReCaptchaProvider({ children }: { children: React.ReactNode }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    return (
      <RecaptchaContext.Provider value={{ executeRecaptcha: undefined }}>
        {children}
      </RecaptchaContext.Provider>
    );
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
      }}
    >
      <RecaptchaInternal>{children}</RecaptchaInternal>
    </GoogleReCaptchaProvider>
  );
}

export const useOptionalReCaptcha = () => useContext(RecaptchaContext);
