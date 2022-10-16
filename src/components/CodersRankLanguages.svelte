<script>
  // @ts-nocheck
  import Chart from 'svelte-frappe-charts'

  export const hydrate = false

  const data = {
    labels: [
      'Batchfile',
      'C',
      'C#',
      'CSS',
      'CoffeeScript',
      'Go',
      'HTML',
      'JSON',
      'JavaScript',
      'Less',
      'PHP',
      'PLpgSQL',
      'Perl',
      'Python',
      'Ruby',
      'Rust',
      'SCSS',
      'SQL',
      'Shell',
      'Svelte',
      'TSQL',
      'TypeScript',
      'Vue',
      'Yacc',
    ],
    datasets: [
      {
        name: 'World',
        chartType: 'bar',
        values: [
          78890, 80422, 51286, 178998, 29318, 20609, 196706, 189381, 188072,
          33301, 67604, 4122, 14072, 107722, 34037, 8861, 87912, 35070, 91361,
          2750, 35333, 77968, 24111, 4446,
        ],
      },
      {
        name: 'Me',
        chartType: 'line',
        values: [
          4336, 3896, 3127, 323, 798, 4547, 1217, 777, 424, 375, 61, 1003, 90,
          2308, 3353, 1912, 2477, 92, 70, 301, 81, 9793, 439, 439,
        ],
      },
    ],
  }

  /*
  const data = {
    labels: [],
    datasets: []
  }

  const datasetWorld = {
    name: 'World',
    chartType: 'bar',
    values: []
  };

  const datasetMe = {
    name: 'Me',
    chartType: 'line',
    values: []
  };

  onMount(async () => {
    const res = await fetch(`https://api.codersrank.io/v2/users/HendrikPrinsZA/languages`);
    const resObject = await res.json();
		
    for (var field in resObject) {
      if (Object.prototype.hasOwnProperty.call(resObject, field)) {
        data.labels.push(field);
        datasetWorld.values.push(resObject[field].world_wide_all);
        datasetMe.values.push(resObject[field].world_wide_rank);
      } 
    }
    
    data.datasets.push(datasetWorld);
    data.datasets.push(datasetMe);
  });
  */
</script>

<main>
  <Chart {data} type="line" />
</main>
