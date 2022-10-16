<script>
  import CodersRankLogo from './assets/codersrank.svg'
  import CodersRankSummary from './components/CodersRankSummary.svelte'
  import CodersRankSkills from './components/CodersRankSkills.svelte'
  import CodersRankActivity from './components/CodersRankActivity.svelte'
  import WakaTimeLogo from './assets/wakatime.svg'
  import WakaTimeBadge from './components/WakaTimeBadge.svelte'
  import WakaTimeLanguages from './components/WakaTimeLanguages.svelte'
  import FlightMap from './components/FlightMap.svelte'
  import PopulationChart from './components/PopulationChart.svelte'
  import CodersRankLanguages from './components/CodersRankLanguages.svelte'
  import CodersRankFloormap from './components/CodersRankFloormap.svelte'

  const username = 'HendrikPrinsZA'
</script>

<main>
  <div>
    <a
      href="https://profile.codersrank.io/user/{username}"
      target="_blank"
      rel="noreferrer"
    >
      <img src={CodersRankLogo} class="logo" alt="Vite Logo" />
    </a>
  </div>
  <CodersRankSummary {username} />
  <CodersRankLanguages />
  <CodersRankSkills {username} />
  <CodersRankActivity {username} />

  <div>
    <a href="https://wakatime.com/@{username}" target="_blank" rel="noreferrer">
      <img src={WakaTimeLogo} class="logo" alt="Vite Logo" />
    </a>
  </div>
  <WakaTimeBadge />
  <WakaTimeLanguages />

  <h1 class="logo">Samples</h1>
  <CodersRankFloormap />
  <PopulationChart />
  <FlightMap />
</main>

<style>
  .logo {
    height: 3em;
    padding: 1em;
    will-change: filter;
    filter: drop-shadow(0 0 2em #fff);
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #2dde98);
  }
</style>
