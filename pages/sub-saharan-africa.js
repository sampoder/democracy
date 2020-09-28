import Head from "next/head";
import styles from "../styles/Home.module.css";
import { orderBy, filter } from "lodash";
import { flag, code, name, countries } from "country-emoji";
import ReactCountryFlag from "react-country-flag";
import * as rdd from "react-device-detect";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sub-Saharan Africa - The State of Democracy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article
        className={styles.header}
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(100, 75, 37, 0.74), rgba(100, 75, 37, 0.74))
            ,url("https://media.npr.org/assets/img/2016/06/20/venezuela-june-20-16_wide-288b85ef48230d7e987f81fc7d7a06fc56d53f4b.jpg?s=1400")`,
        }}
      >
        <p className={styles.description}><a href="/" style={{ textDecoration: 'none' }}>The State of Democracy</a></p>
        <h1 className={styles.title}>
          <span className={styles.titleUnderline}>Sub-saharan Africa</span>
        </h1>
      </article>

      <main className={styles.main}>
        <div className={styles.grid}>
          {props.countries.map((country) => (
            <div className={styles.card} style={{ display: "flex" }}>
              <div style={{ flex: "80%" }}>
                <h1
                  style={{ marginBlockStart: "0.3em", marginBlockEnd: "0.2em" }}
                >
                  <ReactCountryFlag
                    countryCode={country.emoji}
                    svg={rdd.isMacOs + rdd.isIOS13 < 1}
                  />{" "}
                  <span style={{ fontSize: "0.7em" }}>#{country.rank}</span>
                </h1>
                <h1
                  style={{ marginBlockStart: "0.2em", marginBlockEnd: "0.2em" }}
                >
                  {country.name}{" "}
                </h1>
              </div>

              <div style={{ flex: "30%", paddingTop: "0.5em" }}>
                <CircularProgressbar
                  value={country.score * 10}
                  text={country.score}
                  className={styles.CircularProgressbar}
                  styles={buildStyles({
                    pathColor: `${country.colour}`,
                    textColor: `${country.colour}`,
                  })}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://sampoder.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by <strong style={{ marginLeft: "4px" }}>@sampoder</strong>.
        </a>
      </footer>
    </div>
  );
}

export const getServerSideProps = async () => {
  const countries = await fetch(
    "http://sampoder-api.herokuapp.com/v0.1/Democracy/Countries"
  )
    .then((r) => r.json())
    .then((countries) =>
      countries.map(({ id, fields }) => ({
        id,
        name: fields["Country"],
        emoji: code(fields["Emoji"]),
        score: fields["Overall"],
        rank: fields["Rank"],
        colour: fields["Colour"],
        region: fields["Region"],
      }))
    )
    .then((countries) => orderBy(countries, "score", "desc"))
    .then((countries) => filter(countries, country => country.region === 'Sub-Saharan Africa'));

  return { props: { countries } };
};
