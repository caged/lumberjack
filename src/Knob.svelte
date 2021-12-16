<script type="ts">
  export let label: string = "";
  export let value: number;
</script>

<div class="inline-block">
  {label} label
  <input-knob value="0" scale="100" min="0" max="100">
    <div class="mark">&bull;</div>
    {value}
  </input-knob>
</div>

<style>
</style>
