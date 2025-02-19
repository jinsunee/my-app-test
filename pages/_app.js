import "@/styles/globals.css";
import { datadogRum } from "@datadog/browser-rum";
import { datadogLogs } from "@datadog/browser-logs";

export default function App({ Component, pageProps }) {
  datadogRum.init({
    applicationId: "965bdec2-4074-452c-9102-9af0d7b3e5ed",
    clientToken: "pub537e27e53779bc91c76d75272d0d4e0b",
    site: "datadoghq.com",
    service: "datadog-logging-fe-test",
    env: "production",
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    defaultPrivacyLevel: "mask-user-input",
    forwardErrorsToLogs: true, // 자동 오류 감지
  });

  return <Component {...pageProps} />;
}
