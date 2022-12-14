import { request } from "http";
import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import requests from "../utils/request";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <Navbar />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    } `
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
