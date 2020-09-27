import Head from "next/head";
import styles from "../styles/Home.module.css";
import { orderBy } from "lodash";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>The State of Democracy</title>
        <link rel="icon" href="/favicon.ico" />
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
          democracy is in its <strong>most fragile state</strong> since the
          first edition in 2006.
          <br />
          <br />
          This is the story of freedom (or lack of) in the <strong>
            22
          </strong>{" "}
          full democracies, <strong>54</strong> authoritarian states and the{" "}
          <strong>91</strong> nations that find themselves somewhere in between
          the two.
          <br />
          <br />
          Read on for a summary, or jump straight to the data.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h1 className={styles.bigNumber}>5.44</h1>
            <h3>Global average score, the lowest it's been since 2006</h3>
          </div>

          <div className={styles.card}>
            <h1 className={styles.textIcon}>⚖︎</h1>
            <h3 style={{ marginBottom: "10px" }}> Where are we struggling?</h3>
            <p>
              With only an average score of <strong>4.8</strong>, the world
              struggles the most with maintaining functional governments.
              Furthermore, 8 countries lack any sort of functional government.
            </p>
          </div>
          <div className={styles.cardFull + " " + styles.card}>
            <h1>
              "It is clear that there is a growing deficit of trust between
              people and political establishments, and rising threats to the
              social contract."
            </h1>
            <p>UN Secretary-General António Guterres, October 2019</p>
          </div>
          <div className={styles.card}>
            <h1>🇧🇫🇧🇯🇰🇲🇿🇲🇲🇱</h1>
            <h1>Sub-Saharan Africa reverses progress.</h1>
            <p>
              With widespread public dissatisfaction, the region's decade of
              rocky progress was reversed with it's regional score now at{" "}
              <strong>4.26</strong>.
            </p>
          </div>
          <div className={styles.card}>
            <h1>🇧🇴🇬🇾🇬🇹🇭🇹🇻🇪</h1>
            <h1>Latin America continues to fall.</h1>
            <p>
              With restrictions placed on political activity and major fraud
              around the region it's score continues to drop and is now{" "}
              <strong>6.13</strong>.
            </p>
          </div>

          <div className={styles.cardFull + " " + styles.card}>
            <h1>The Greatest Drop: 🇨🇳 China (PRC)</h1>
            <p>
              With growing surveillance of the population and increased
              discrimination against minorities led to China's score dropping by{" "}
              <strong>1.06</strong> and further cemented their status as an
              authoritarian regime. This is despite progress made by it's
              neighbors.
            </p>
          </div>
          <div className={styles.card}>
            <h1>🇨🇱 Chile, </h1>
            <h1>
              🇫🇷 France <span className={styles.and}>&</span>
            </h1>
            <h1>🇵🇹 Portugal</h1>
            <h3>
              were upgraded to{" "}
              <span className={styles.green}>full democracies</span>.
            </h3>
          </div>

          <div className={styles.card}>
            <h1>🇳🇴🇮🇸🇸🇪🇫🇮🇩🇰</h1>
            <h1>
              Nordic nations continue{" "}
              <span className={styles.green}>leading</span>.
            </h1>
            <p>
              All five nations in the Nordic region remain in the top seven and
              the regional score is <strong>9.46</strong>.
            </p>
          </div>
          <div className={styles.cardFull + " " + styles.card}>
            <h1>
              The Most <span className={styles.green}>Gains:</span> 🇹🇭
              Thailand
            </h1>
            <p>
              Thailand moved up from a “hybrid regime” to a “flawed democracy”
              as it's scored improved by <strong>1.69</strong> thanks to
              continued progress in the nation.
            </p>
          </div>
        </div>

        <h1 style={{ textAlign: "left", width: "100%", fontSize: "3em" }}>
          Explore the data
        </h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h1>🌏🌎🌍</h1>
            <h1>Every country</h1>
            <p>
              <i>(Not including microstates)</i>
            </p>
          </div>
          <div className={styles.card}>
            <h1>🇳🇿🇰🇷🇸🇬🇰🇭🇨🇳</h1>
            <h1>
              Asia <span className={styles.and}>&</span> Oceania
            </h1>
            <p>
              Averages <strong>5.67</strong> overall.
            </p>
          </div>
          <div className={styles.card}>
            <h1>🇪🇪🇧🇬🇲🇰🇷🇺🇹🇲</h1>
            <h1>
              Central <span className={styles.and}>&</span> East Europe
            </h1>
            <p>
              Averages <strong>5.42</strong> overall.
            </p>
          </div>
          <div className={styles.card}>
            <h1>🇺🇾🇦🇷🇧🇷🇲🇽🇨🇺</h1>
            <h1>Latin America</h1>
            <p>
              Averages <strong>6.13</strong> overall.
            </p>
          </div>
          <div className={styles.card}>
            <h1>🇮🇱🇯🇴🇶🇦🇧🇭🇸🇾</h1>
            <h1 style={{ fontSize: "1.6em" }}>Middle East <span className={styles.and}>&</span> North Africa</h1>
            <p>
              Averages <strong>3.53</strong> overall.
            </p>
          </div>
          <div className={styles.card}>
            <h1>🇨🇦🇺🇸</h1>
            <h1>North America</h1>
            <p>
              Averages <strong>8.59</strong> overall.
            </p>
          </div>
          <div className={styles.card}>
            <h1>🇲🇺🇳🇦🇺🇬🇧🇫🇨🇩</h1>
            <h1>Sub-Saharan Africa</h1>
            <p>
              Averages <strong>4.26</strong> overall.
            </p>
          </div>
          <div className={styles.card}>
            <h1>🇳🇴🇮🇪🇩🇪🇲🇹🇹🇷</h1>
            <h1>Western Europe</h1>
            <p>
              Averages <strong>8.35</strong> overall.
            </p>
          </div>
        </div>

        <p style={{ maxWidth: "800px", padding: "auto" }}>
          {props.countries.map((country) => (
            <a href={"#"}>
              <button className={styles.countryButton}>
                {country.emoji} {country.name}
              </button>
            </a>
          ))}
        </p>
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
        emoji: fields["Emoji"],
      }))
    )
    .then((countries) => orderBy(countries, "name"));
  console.log(countries);
  return { props: { countries } };
};
