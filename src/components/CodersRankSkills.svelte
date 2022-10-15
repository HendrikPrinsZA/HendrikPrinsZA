<script>
  import CodersRankSkillsChart from '@codersrank/skills-chart'

  // register web component as <codersrank-skills-chart> element
  // @ts-ignore
  window.customElements.define('codersrank-skills-chart', CodersRankSkillsChart)

  // props
  export let username
</script>

<main>
  <codersrank-skills-chart
    style="width: 100%;"
    {username}
    labels="true"
    legend="true"
    tooltip="true"
    branding="false"
  />
</main>
