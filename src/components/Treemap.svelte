<script>
  import TreemapNode from './TreemapNode.svelte'

  export let root
</script>

<pancake-treemap>
  <TreemapNode node={root} let:node>
    <slot {node} />
  </TreemapNode>
</pancake-treemap>

<style>
  pancake-treemap {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
</style>
