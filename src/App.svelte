<script>
  // import CodersRankLogo from './assets/codersrank.svg'
  import CodersRankSummary from './components/CodersRankSummary.svelte'
  import CodersRankSkills from './components/CodersRankSkills.svelte'
  import CodersRankActivity from './components/CodersRankActivity.svelte'
  // import WakaTimeLogo from './assets/wakatime.svg'
  // import WakaTimeBadge from './components/WakaTimeBadge.svelte'
  import WakaTimeLanguages from './components/WakaTimeLanguages.svelte'
  import FlightMap from './components/FlightMap.svelte'
  import PopulationChart from './components/PopulationChart.svelte'
  import CodersRankLanguages from './components/CodersRankLanguages.svelte'
  import CodersRankFloormap from './components/CodersRankFloormap.svelte'

  const username = 'HendrikPrinsZA'
</script>

<main>
  <!-- <div>
    <a
      href="https://profile.codersrank.io/user/{username}"
      target="_blank"
      rel="noreferrer"
    >
      <img src={CodersRankLogo} class="logo" alt="Vite Logo" />
    </a>
  </div> -->
  <CodersRankSummary {username} />

  <hr />
  <h3 class="logo">
    <a href="https://codersrank.io/HendrikPrinsZA">CodersRank</a> language ranking
  </h3>
  <p>
    Relative ranking of languages versus the rest of the world. Note that this
    is compared to the limited community on <a
      href="https://codersrank.io/HendrikPrinsZA">CodersRank</a
    >, so the results may be misleading.
  </p>
  <CodersRankLanguages {username} />

  <hr />
  <h3 class="logo">
    <a href="https://codersrank.io/HendrikPrinsZA">CodersRank</a> language progression
  </h3>
  <p>
    The graph below depicts the evolution of programming languages practiced
    based on my public profile, since July 2014. Hover over the graph to see
    more details.
  </p>
  <CodersRankSkills {username} />

  <hr />
  <h3 class="logo">
    <a href="https://codersrank.io/HendrikPrinsZA">CodersRank</a> activity graph
  </h3>
  <p>
    The activity graph below might be more realistic to that of GitHub, as their
    contributions also include that of automated bots.
  </p>
  <CodersRankActivity {username} />

  <hr />
  <!-- <div>
    <a href="https://wakatime.com/@{username}" target="_blank" rel="noreferrer">
      <img src={WakaTimeLogo} class="logo" alt="Vite Logo" />
    </a>
  </div> -->
  <!-- <WakaTimeBadge /> -->
  <h3 class="logo">
    <a href="https://codersrank.io/HendrikPrinsZA">WakaTime</a> languages
  </h3>
  <p>
    Activity per language over the last year. Note that these stats are actively
    recorded directly through the code editor.
  </p>
  <WakaTimeLanguages />

  <hr />
  <h3 class="logo">Random samples</h3>
  <p>
    The following are some random visualisations stolen from other contributors
    as an experiment to eventually depict some deeper-level experience graphs.
  </p>
  <CodersRankFloormap />
  <PopulationChart />
  <FlightMap />
</main>

<style>
  .logo {
    /* height: 3em; */
    /* padding: 1em; */
    will-change: filter;
    filter: drop-shadow(0 0 2em #fff);
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #2dde98);
  }
  h3 {
    text-align: left;
    /* padding: 0; */
    /* padding-top: 5px; */
    /* height: auto; */
  }
  p {
    text-align: left;
    /* border: 1px solid red; */
  }
</style>
