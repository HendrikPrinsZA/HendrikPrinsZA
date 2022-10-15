<script>
  import CodersrankSummary from '@codersrank/summary'

  // @ts-ignore
  window.customElements.define('codersrank-summary', CodersrankSummary)

  // props
  export let username
</script>

<main>
  <codersrank-summary {username} branding="false" />
</main>
