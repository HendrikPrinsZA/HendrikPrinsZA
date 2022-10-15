<script>
  import CodersRankLogo from './assets/codersrank.svg'
  import CodersRankSummary from './components/CodersRankSummary.svelte'
  import CodersRankSkills from './components/CodersRankSkills.svelte'
  import CodersRankActivity from './components/CodersRankActivity.svelte'

  import WakaTimeLogo from './assets/wakatime.svg'
  import WakaTimeBadge from './components/WakaTimeBadge.svelte'
  import WakaTimeLanguages from './components/WakaTimeLanguages.svelte'

  const username = 'HendrikPrinsZA'
</script>

<main>
  <div>
    <a href="https://profile.codersrank.io/user/{username}" target="_blank">
      <img src={CodersRankLogo} class="logo" alt="Vite Logo" />
    </a>
  </div>
  <CodersRankSummary {username} />
  <CodersRankSkills {username} />
  <CodersRankActivity {username} />

  <div>
    <a href="https://wakatime.com/@{username}" target="_blank">
      <img src={WakaTimeLogo} class="logo" alt="Vite Logo" />
    </a>
  </div>
  <WakaTimeBadge />
  <WakaTimeLanguages />
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
