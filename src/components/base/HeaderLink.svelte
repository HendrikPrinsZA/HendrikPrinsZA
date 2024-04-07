<script>
  export let href;
  export let title;
  export let target = '_self';
</script>

<a
  class="inline-block decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
  href={href}
  target={target}
>
  <h2 class="text-2xl decoration-dashed hover:underline hover:text-skin-accent">{title}</h2>
</a>
