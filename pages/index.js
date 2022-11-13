import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Manikandan | Home</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi I'm <b>Manikandan.</b> I'm a Software Engineer{" "}
          <a href="https://kula.ai" target={"_blank"}>
            @kula
          </a>
          {". "}
          Learning things by building projects.
        </p>
      </section>
    </Layout>
  );
}
