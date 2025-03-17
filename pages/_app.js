import "@/styles/globals.css";
import DataDogInit from "@/components/data-dog-init";

export default function App({ Component, pageProps }) {
  console.log("환경", process.env.NODE_ENV);

  return (
    <>
      <Component {...pageProps} />
      <DataDogInit />
    </>
  );
}
