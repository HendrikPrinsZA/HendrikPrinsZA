<script>
  import CodersRankActivity from '@codersrank/activity'

  // register web component as <codersrank-skills-chart> element
  // @ts-ignore
  window.customElements.define('codersrank-activity', CodersRankActivity)

  // props
  export let username
</script>

<main>
  <codersrank-activity
    {username}
    labels="true"
    legend="true"
    tooltip="true"
    branding="false"
  />
</main>
