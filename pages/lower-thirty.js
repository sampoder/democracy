import Head from "next/head";
import styles from "../styles/Home.module.css";
import { orderBy } from "lodash";
import { flag, code, name, countries } from "country-emoji";
import ReactCountryFlag from "react-country-flag";
import * as rdd from "react-device-detect";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lowest 30 Nations - The State of Democracy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article
        className={styles.header}
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(100, 75, 37, 0.74), rgba(100, 75, 37, 0.74))
            ,url("https://static01.nyt.com/images/2019/05/01/world/01venezuela5-sub/01venezuela5-sub-facebookJumbo-v2.jpg")`,
        }}
      >
        <p className={styles.description}>The State of Democracy</p>
        <h1 className={styles.title}>
          <span className={styles.titleUnderline}>Lowest 30 Nations</span>
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
      }))
    )
    .then((countries) => orderBy(countries, "score").slice(0, 30))
    .then((countries) => orderBy(countries, "score", "desc"));
  console.log(countries);
  return { props: { countries } };
};
