import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { orderBy, filter } from "lodash";
import { flag, code, name, countries } from "country-emoji";
import ReactCountryFlag from "react-country-flag";
import * as rdd from "react-device-detect";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Home(props) {
  if (!props.FourOhFour) {
    return (
      <div className={styles.container}>
        <Head>
          <title>{props.title} - The State of Democracy</title>
          <link rel="icon" href="/favicon.ico" />
          <title>The State of Democracy</title>
          <meta property="og:title" content={props.title+" - The State of Democracy"} />
          <meta name="twitter:title" content={props.title+" - The State of Democracy"} />
          <meta name="og:url" content="https://state-of-democracy.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="The State of Democracy" />
          <meta
            name="description"
            content={`Global democracy is in its most fragile state 
          since the first edition of the Democracy Index in 2006. 
          This site looks at the state of democracy around the world.`}
          />
          <meta
            property="og:description"
            content={`Global democracy is in its most fragile state 
          since the first edition of the Democracy Index in 2006. 
          This site looks at the state of democracy around the world.`}
          />
          <meta
            name="twitter:description"
            content={`Global democracy is in its most fragile state 
          since the first edition of the Democracy Index in 2006. 
          This site looks at the state of democracy around the world.`}
          />
          <meta
            property="og:image"
            content={props.image}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content={props.image}
          />
          <meta name="msapplication-TileColor" content="#644c24" />
          <meta name="theme-color" content="#644c24" />
          <link rel="icon" href="favicon.ico" />
        </Head>
        <article
          className={styles.header}
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(100, 75, 37, 0.74), rgba(100, 75, 37, 0.74))
            ,url("${props.image}")`,
          }}
        >
          <p className={styles.description}>
            <a href="/" style={{ textDecoration: "none" }}>
              The State of Democracy
            </a>
          </p>
          <h1 className={styles.title}>
            <span className={styles.titleUnderline}>{props.title}</span>
          </h1>
        </article>

        <main className={styles.main}>
          <div className={styles.grid}>
            {props.countries.map((country) => (
              <a
                href={"/country/" + country.name.toLowerCase()}
                className={styles.card}
                style={{ display: "flex" }}
              >
                <div style={{ flex: "80%" }}>
                  <h1
                    style={{
                      marginBlockStart: "0.3em",
                      marginBlockEnd: "0.2em",
                    }}
                  >
                    <ReactCountryFlag
                      countryCode={country.emoji}
                      svg={rdd.isMacOs + rdd.isIOS13 < 1}
                    />{" "}
                    <span style={{ fontSize: "0.7em" }}>#{country.rank}</span>
                  </h1>
                  <h1
                    style={{
                      marginBlockStart: "0.2em",
                      marginBlockEnd: "0.2em",
                    }}
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
              </a>
            ))}
          </div>
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
  } else {
    return (
      <div className={styles.container}>
        <Head>
          <title>All Nations - The State of Democracy</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <article
          className={styles.header}
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(100, 75, 37, 0.74), rgba(100, 75, 37, 0.74))
        ,url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80")`,
          }}
        >
          <h1 className={styles.title}>
            <span className={styles.titleUnderline}>404</span>
          </h1>
          <p className={styles.description}>
            <a href="/" style={{ textDecoration: "none" }}>
              The State of Democracy
            </a>
          </p>
        </article>
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
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: "all" } },
      { params: { category: "lower-thirty" } },
      { params: { category: "top-thirty" } },
      { params: { category: "asia-pacific" } },
      { params: { category: "eastern-europe" } },
      { params: { category: "latin-america" } },
      { params: { category: "middle-east-north-africa" } },
      { params: { category: "north-america" } },
      { params: { category: "sub-saharan-africa" } },
      { params: { category: "western-europe" } }
    ],
    fallback: false
  };
}

export const getStaticProps = async (context) => {
  if (context.params.category === "all") {
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
      .then((countries) => orderBy(countries, "score", "desc"));
    const title = "All Nations";
    const image =
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80";
    return { props: { countries, image, title } };
  } else if (context.params.category === "lower-thirty") {
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
    const title = "Lowest 30 Nations";
    const image =
      "https://static01.nyt.com/images/2019/05/01/world/01venezuela5-sub/01venezuela5-sub-facebookJumbo-v2.jpg";
    return { props: { countries, image, title } };
  } else if (context.params.category === "top-thirty") {
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
      .then((countries) => orderBy(countries, "score", "desc").slice(0, 30));
    const title = "Top 30 Nations";
    const image =
      "https://images.unsplash.com/photo-1561057160-ce83b1bd72f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
    return { props: { countries, image, title } };
  } else if (context.params.category === "top-thirty") {
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
      .then((countries) => orderBy(countries, "score", "desc").slice(0, 30));
    const title = "Top 30 Nations";
    const image =
      "https://images.unsplash.com/photo-1561057160-ce83b1bd72f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
    return { props: { countries, image, title } };
  } else if (context.params.category === "asia-pacific") {
    const countries = await fetch(
      "http://sampoder-api.herokuapp.com/v0.1/Democracy/Countries"
    )
      .then((r) => r.json())
      .then((countries) =>
        countries.map(({ id, fields }) => ({
          id,
          name: fields["Country"],
          emoji: code(fields["Emoji"]),
          region: fields["Region"],
          score: fields["Overall"],
          rank: fields["Rank"],
          colour: fields["Colour"],
        }))
      )
      .then((countries) => orderBy(countries, "score", "desc"))
      .then((countries) =>
        filter(countries, (country) => country.region === "Asia & Australasia")
      );
    const title = "Asia Pacific";
    const image =
      "https://images.unsplash.com/photo-1560090277-2394465b49b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80";
    return { props: { countries, image, title } };
  } else if (context.params.category === "eastern-europe") {
    const countries = await fetch(
      "http://sampoder-api.herokuapp.com/v0.1/Democracy/Countries"
    )
      .then((r) => r.json())
      .then((countries) =>
        countries.map(({ id, fields }) => ({
          id,
          name: fields["Country"],
          emoji: code(fields["Emoji"]),
          region: fields["Region"],
          score: fields["Overall"],
          rank: fields["Rank"],
          colour: fields["Colour"],
        }))
      )
      .then((countries) => orderBy(countries, "score", "desc"))
      .then((countries) =>
        filter(countries, (country) => country.region === "Eastern Europe")
      );
    const title = "Eastern Europe";
    const image =
      "https://images.pexels.com/photos/5119451/pexels-photo-5119451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    return { props: { countries, image, title } };
  } else if (context.params.category === "latin-america") {
    const countries = await fetch(
      "http://sampoder-api.herokuapp.com/v0.1/Democracy/Countries"
    )
      .then((r) => r.json())
      .then((countries) =>
        countries.map(({ id, fields }) => ({
          id,
          name: fields["Country"],
          emoji: code(fields["Emoji"]),
          region: fields["Region"],
          score: fields["Overall"],
          rank: fields["Rank"],
          colour: fields["Colour"],
        }))
      )
      .then((countries) => orderBy(countries, "score", "desc"))
      .then((countries) =>
        filter(countries, (country) => country.region === "Latin America")
      );
    const title = "Latin America";
    const image =
      "https://media.npr.org/assets/img/2016/06/20/venezuela-june-20-16_wide-288b85ef48230d7e987f81fc7d7a06fc56d53f4b.jpg?s=1400";
    return { props: { countries, image, title } };
  } else if (context.params.category === "middle-east-north-africa") {
    const countries = await fetch(
      "http://sampoder-api.herokuapp.com/v0.1/Democracy/Countries"
    )
      .then((r) => r.json())
      .then((countries) =>
        countries.map(({ id, fields }) => ({
          id,
          name: fields["Country"],
          emoji: code(fields["Emoji"]),
          region: fields["Region"],
          score: fields["Overall"],
          rank: fields["Rank"],
          colour: fields["Colour"],
        }))
      )
      .then((countries) => orderBy(countries, "score", "desc"))
      .then((countries) =>
        filter(
          countries,
          (country) => country.region === "Middle East & North Africa"
        )
      );
    const title = "Middle East & North Africa";
    const image =
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/Ghanem_al-Dosari.jpg";
    return { props: { countries, image, title } };
  } else if (context.params.category === "north-america") {
    const countries = await fetch(
      "http://sampoder-api.herokuapp.com/v0.1/Democracy/Countries"
    )
      .then((r) => r.json())
      .then((countries) =>
        countries.map(({ id, fields }) => ({
          id,
          name: fields["Country"],
          emoji: code(fields["Emoji"]),
          region: fields["Region"],
          score: fields["Overall"],
          rank: fields["Rank"],
          colour: fields["Colour"],
        }))
      )
      .then((countries) => orderBy(countries, "score", "desc"))
      .then((countries) =>
        filter(countries, (country) => country.region === "North America")
      );
    const title = "North America";
    const image =
      "https://images.pexels.com/photos/4614165/pexels-photo-4614165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    return { props: { countries, image, title } };
  } else if (context.params.category === "sub-saharan-africa") {
    const countries = await fetch(
      "http://sampoder-api.herokuapp.com/v0.1/Democracy/Countries"
    )
      .then((r) => r.json())
      .then((countries) =>
        countries.map(({ id, fields }) => ({
          id,
          name: fields["Country"],
          emoji: code(fields["Emoji"]),
          region: fields["Region"],
          score: fields["Overall"],
          rank: fields["Rank"],
          colour: fields["Colour"],
        }))
      )
      .then((countries) => orderBy(countries, "score", "desc"))
      .then((countries) =>
        filter(countries, (country) => country.region === "Sub-Saharan Africa")
      );
    const title = "Sub-Saharan Africa";
    const image =
      "https://goinggreenrecyclingnigeria.org/home/wp-content/uploads/2014/11/kenya_boy_cameraview_in_water_2.jpg";
    return { props: { countries, image, title } };
  } else if (context.params.category === "western-europe") {
    const countries = await fetch(
      "http://sampoder-api.herokuapp.com/v0.1/Democracy/Countries"
    )
      .then((r) => r.json())
      .then((countries) =>
        countries.map(({ id, fields }) => ({
          id,
          name: fields["Country"],
          emoji: code(fields["Emoji"]),
          region: fields["Region"],
          score: fields["Overall"],
          rank: fields["Rank"],
          colour: fields["Colour"],
        }))
      )
      .then((countries) => orderBy(countries, "score", "desc"))
      .then((countries) =>
        filter(countries, (country) => country.region === "Western Europe")
      );
    const title = "Western Europe";
    const image =
      "https://images.unsplash.com/photo-1544993570-064eb94847e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
    return { props: { countries, image, title } };
  } else {
    const FourOhFour = true;
    return { props: { FourOhFour } };
  }
};
