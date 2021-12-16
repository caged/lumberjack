<script lang="ts">
  import "input-knob";
  import Knob from "./Knob.svelte";
</script>

<div>
  <div class="grid grid-cols-2 gap-2 p-5 w-1/3">
    <div class="w-12 h-12">
      <Knob value={12} label="Pitch" />
    </div>
    <div class="w-12 h-12">
      <Knob value={50} max={50} label="Cent" />
    </div>
  </div>
</div>

<style>
</style>
