import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { data } from "../lib/data/2022.js";
import { orderBy } from "lodash";
import { flag, code, name, countries } from "country-emoji";
import ReactCountryFlag from "react-country-flag";
import * as rdd from "react-device-detect";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The State of Democracy</title>
        <meta property="og:title" content="The State of Democracy" />
        <meta name="twitter:title" content="The State of Democracy" />
        <meta name="og:url" content="https://state-of-democracy.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="The State of Democracy" />
        <meta
          name="description"
          content={`Global democracy is in its most fragile state 
          since the first edition of the Democracy Index in 2006. This site looks at the state of democracy around the world in 2022.`}
        />
        <meta
          property="og:description"
          content={`Global democracy is in its most fragile state 
          since the first edition of the Democracy Index in 2006. This site looks at the state of democracy around the world in 2022.`}
        />
        <meta
          name="twitter:description"
          content={`Global democracy is in its most fragile state 
          since the first edition of the Democracy Index in 2006. This site looks at the state of democracy around the world in 2022.`}
        />
        <meta property="og:image" content="https://cloud-qh19uwe09-hack-club-bot.vercel.app/0group_1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://cloud-qh19uwe09-hack-club-bot.vercel.app/0group_1.png" />
        <meta name="msapplication-TileColor" content="#644c24" />
        <meta name="theme-color" content="#644c24" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <article className={styles.header}>
        <p className={styles.description}>The state of</p>
        <h1 className={styles.title}>
          <span className={styles.titleUnderline}>DEMOCRACY</span>
        </h1>
      </article>

      <main className={styles.main}>
        <p className={styles.intro}>
          In early 2020, the Economist Intelligence Unit produced the 12th
          edition of the Democracy Index. The report concluded that global
          democracy is in its most fragile state since the
          first edition in 2006. Then, <strong>in 2021 & 2022 the numbers 
          became even worse</strong>.
          <br />
          <br />
          This is the story of freedom (or lack of) in the <strong>
            24
          </strong>{" "}
          full democracies, <strong>59</strong> authoritarian states and the{" "}
          <strong>84</strong> nations and regions that find themselves somewhere in between
          the two.
          <br />
          <br />
          All scores are out of ten, unless otherwise noted.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h1 className={styles.bigNumber}>5.29</h1>
            <h3>Global average score, the lowest it's been since 2006</h3>
          </div>

          <div className={styles.card}>
            <h1 className={styles.textIcon}>⚖︎</h1>
            <h3 style={{ marginBottom: "10px" }}> Where are we struggling?</h3>
            <p>
              With only an average score of <strong>4.70</strong>, the world
              struggles the most with maintaining functional governments.
              Furthermore, 10 countries lack any sort of functional government.
            </p>
          </div>
          <div className={styles.cardFull + " " + styles.card}>
            <h1>
              "It is clear that there is a growing{" "}
              <span className={styles.red}>deficit of trust</span> between
              people and political establishments, and rising threats to the
              social contract."
            </h1>
            <p>UN Secretary-General António Guterres, October 2019</p>
          </div>
        </div>
        <div className={styles.grid}>
          <Link
            href="/category/top-thirty"
            className={styles.card + " " + styles.cardHover}
          >
            <div className={styles.card + " " + styles.cardHover}>
            <h1>🗳🗳🗳</h1>
            <h1>Top 30</h1>
            <p>Leading the way towards freedom.</p>
            </div>
          </Link>

          <Link
            href="/category/lower-thirty"
            className={styles.card + " " + styles.cardHover}
          >
            <div className={styles.card + " " + styles.cardHover}>
            <h1>🙅🏻‍♀️🙅🏽‍♀️🙅🏿‍♀️</h1>
            <h1>Bottom 30</h1>
            <p>Still have a long way to go.</p>
            </div>
          </Link>
          <Link
            href="/category/all"
            
          >
            <div className={styles.card + " " + styles.cardHover}>
            <h1>🌏🌎🌍</h1>
            <h1>Every country</h1>
            <p>
              <i>(Not including microstates)</i>
            </p>
            </div>
          </Link>
          <Link
            href="/category/asia-pacific"
            className={styles.card + " " + styles.cardHover}
          >
            <div className={styles.card + " " + styles.cardHover}>
            <h1>
              <ReactCountryFlag
                countryCode={code("🇳🇿")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇰🇷")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇸🇬")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇰🇭")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇨🇳")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
            </h1>
            <h1>Asia Pacific</h1>
            <p>
              Averages <strong>5.62</strong> overall.
            </p>
            </div>
          </Link>
          <Link
            href="/category/eastern-europe"
            className={styles.card + " " + styles.cardHover}
          >
            <div className={styles.card + " " + styles.cardHover}>
            <h1>
              <ReactCountryFlag
                countryCode={code("🇪🇪")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇧🇬")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇲🇰")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇷🇺")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇹🇲")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
            </h1>
            <h1>
              Central <span className={styles.and}>&</span> East Europe
            </h1>
            <p>
              Averages <strong>5.36</strong> overall.
            </p>
            </div>
          </Link>
          <Link
            href="/category/latin-america"
            className={styles.card + " " + styles.cardHover}
          >
            <div className={styles.card + " " + styles.cardHover}>
            <h1>
              <ReactCountryFlag
                countryCode={code("🇺🇾")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇦🇷")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇧🇷")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇲🇽")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇨🇺")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
            </h1>
            <h1>Latin America</h1>
            <p>
              Averages <strong>6.09</strong> overall.
            </p>
            </div>
          </Link>
          <Link
            href="/category/middle-east-north-africa"
            className={styles.card + " " + styles.cardHover}
          >
            <div className={styles.card + " " + styles.cardHover}>
            <h1>
              <ReactCountryFlag
                countryCode={code("🇮🇱")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇯🇴")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇶🇦")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇧🇭")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇸🇾")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
            </h1>
            <h1 style={{ fontSize: "1.6em" }}>
              Middle East <span className={styles.and}>&</span> North Africa
            </h1>
            <p>
              Averages <strong>3.44</strong> overall.
            </p>
            </div>
          </Link>
          <Link
            href="/category/north-america"
            className={styles.card + " " + styles.cardHover}
          >
            <div className={styles.card + " " + styles.cardHover}>
            <h1>
              <ReactCountryFlag
                countryCode={code("🇨🇦")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇺🇸")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
            </h1>
            <h1>North America</h1>
            <p>
              Averages <strong>8.58</strong> overall.
            </p>
            </div>
          </Link>
          <Link
            href="/category/sub-saharan-africa"
            className={styles.card + " " + styles.cardHover}
          >
            <div className={styles.card + " " + styles.cardHover}>
            <h1>
              <ReactCountryFlag
                countryCode={code("🇲🇺")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇳🇦")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇺🇬")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇧🇫")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇨🇩")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
            </h1>
            <h1>Sub-Saharan Africa</h1>
            <p>
              Averages <strong>4.16</strong> overall.
            </p>
            </div>
          </Link>
          <Link
            href="/category/western-europe"
            className={styles.card + " " + styles.cardHover}
          >
            <div className={styles.card + " " + styles.cardHover}>
            <h1>
              <ReactCountryFlag
                countryCode={code("🇳🇴")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇮🇪")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇩🇪")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇲🇹")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
              <ReactCountryFlag
                countryCode={code("🇹🇷")}
                svg={rdd.isMacOs + rdd.isIOS13 < 1}
                style={{
                  marginLeft: "4px",
                }}
              />
            </h1>
            <h1>Western Europe</h1>
            <p>
              Averages <strong>8.29</strong> overall.
            </p>
            </div>
          </Link>
          
        </div>

        <p style={{ maxWidth: "800px", padding: "auto" }}>
          {data.map((country) => (
            <Link href={
              "/country/" + 
              country.Country.toLowerCase().replaceAll(" ", '_')
            }>
              <button className={styles.countryButton}>
                <ReactCountryFlag
                  countryCode={code(country.Emoji)}
                  svg={rdd.isMacOs + rdd.isIOS13 < 1}
                />{" "}
                {country.Country}
              </button>
            </Link>
          ))}
        </p>
      </main>

      <footer className={styles.footer}>
        Created by{" "}
        <a
          href="https://sampoder.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: "4px", fontWeight: "600" }}
        >
          @sampoder
        </a>
        , always{" "}
        <a
          href="https://github.com/sampoder/democracy"
          style={{ marginLeft: "4px", fontWeight: "600" }}
        >
          {" "}
          open source
        </a>
        .
      </footer>
    </div>
  );
}

