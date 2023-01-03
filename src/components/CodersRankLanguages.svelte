<script>
  import { onMount } from 'svelte'
  import Chart from 'svelte-frappe-charts'
  export let username

  let loading = true
  const tooltipOptions = {
    formatTooltipX: (d) => `Language: ${d}`,
    formatTooltipY: (d) =>
      d % 1 === 0 ? d : '#' + parseInt(`${d}`.split('.')[1]),
  }

  const data = {
    labels: [],
    datasets: [
      {
        name: 'World',
        chartType: 'bar',
        values: [],
      },
      {
        name: 'Rank',
        chartType: 'line',
        values: [],
      },
    ],
  }

  onMount(async () => {
    fetch(`https://api.codersrank.io/v2/users/${username}/languages`)
      .then((response) => response.json())
      .then((responseData) => {
        for (var prop in responseData) {
          if (Object.prototype.hasOwnProperty.call(responseData, prop)) {
            const total = responseData[prop].world_wide_all

            const pos = responseData[prop].world_wide_rank / 10000000
            const rank = total - responseData[prop].world_wide_rank + pos

            data.labels.push(prop)
            data.datasets[0].values.push(total)
            data.datasets[1].values.push(rank)
          }
        }
        loading = false
      })
      .catch((error) => {
        console.log(error)
        return []
      })
  })
</script>

<main>
  {#if loading}
    <p>Loading</p>
  {:else}
    <Chart {data} {tooltipOptions} type="line" />
  {/if}
</main>
