import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { orderBy, filter } from "lodash";
import { flag, code, name, countries } from "country-emoji";
import ReactCountryFlag from "react-country-flag";
import * as rdd from "react-device-detect";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{props.country.name} - The State of Democracy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article
        className={styles.header}
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(100, 75, 37, 0.74), rgba(100, 75, 37, 0.74))
            ,url("https://flagcdn.com/w1280/${props.country.emoji.toLowerCase()}.png")`,
        }}
      >
        <p className={styles.description}>
          <a href="/" style={{ textDecoration: "none" }}>
            The State of Democracy
          </a>
        </p>
        <h1 className={styles.title}>
          <span className={styles.titleUnderline}>{props.country.name}</span>
        </h1>
      </article>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.cardFull + " " + styles.card}>
            <h1>
              {props.country.name} is{" "}
              {props.country.type[0] == "A" ? "an" : "a"}{" "}
              <span style={{ color: props.country.colour }}>
                {props.country.type.toLowerCase()}
              </span>
              .
            </h1>
            <p>
              {props.country.type == "Full democracy"
                ? `Full democracies are
              nations where civil liberties and fundamental political freedoms
              are not only respected but also reinforced by a political culture
              conducive to the thriving of democratic principles.`
                : ""}
              {props.country.type == "Flawed democracy"
                ? `Flawed democracies are nations 
              where elections are fair and free and
              basic civil liberties are honoured but may
              have issues (e.g. media freedom infringement and 
              minor suppression of political opposition and critics).`
                : ""}
              {props.country.type == "Hybrid regime"
                ? `Hybrid regimes are nations with 
              regular electoral frauds, preventing them
              from being fair and free democracies. These
              nations commonly have governments that apply
              pressure on political opposition, non-independent
              judiciaries, widespread corruption, harassment
              and pressure placed on the media, anaemic rule of law,`
                : ""}
              {props.country.type == "Authoritarian regime"
                ? `Authoritarian regimes are nations where political
                pluralism is nonexistent or severely limited. These
                nations are often absolute monarchies or dictatorships,
                may have some conventional institutions of democracy
                but with meagre significance, infringements and abuses
                of civil liberties are commonplace, elections (if they
                take place) are not fair and free, the media is
                often state-owned or controlled by groups associated 
                with the ruling regime, the judiciary is not independent,
                and censorship and suppression of governmental criticism 
                are commonplace.`
                : ""}
            </p>
          </div>
          <div className={styles.card}>
            <h1
              className={styles.bigNumber}
              style={{ color: props.country.colour }}
            >
              {props.country.score}
            </h1>
            <h3>Overall democracy score, recorded in 2019.</h3>
          </div>
          <div className={styles.card}>
            <h1 className={styles.bigNumber}>5.44</h1>
            <h3>Global average score, the lowest it's been since 2006</h3>
          </div>
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

export const getServerSideProps = async (context) => {
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
        type: fields["Regime type"],
      }))
    )
    .then((countries) => orderBy(countries, "score", "desc"))
    .then((countries) =>
      filter(
        countries,
        (country) => country.name.toLowerCase() === context.params.country.toLowerCase()
      )
    );
  const country = countries[0];
  console.log(country);
  return { props: { country } };
};
