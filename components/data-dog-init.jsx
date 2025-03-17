import { datadogRum } from "@datadog/browser-rum";

datadogRum.init({
  applicationId: "7a39514a-29e4-4374-95bd-978b5829aebe",
  clientToken: "pub0b26c1c751b072cd65243e03b28b52b1",
  site: "datadoghq.com",
  service: "logging-fe-test",
  env: "production",
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  defaultPrivacyLevel: "mask-user-input",
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  forwardErrorsToLogs: true,
});

// Production에서만 DatadogRUM이 실행되지 않음
export default function DataDogInit() {
  return null;
}
