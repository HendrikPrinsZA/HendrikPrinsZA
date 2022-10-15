<script>
  import CodersrankSummary from '@codersrank/summary'

  // @ts-ignore
  window.customElements.define('codersrank-summary', CodersrankSummary)

  // props
  export let username
</script>

<main>
  <codersrank-summary {username} 
    layout="horizontal"
    badges="3"
    show-avatar="true"
    branding="false" 
  />
</main>

<style>
codersrank-summary {
  --bg-color: #0d1117;
  --header-bg-color: #0d1117;
  --name-font-size: 20px;
  --badge-bg-color: #19212e;
  --badge-text-color: #fff;
}
</style>
