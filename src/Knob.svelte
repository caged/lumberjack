<script type="ts">
  export let label: string = "";
  export let value: number;
  export let format: (value: number) => number = (value) => Math.round(value);

  let moving: boolean = false;

  const onKnobMoveStart = (e: Event) => {
    moving = true;
    return true;
  };

  const onKnobMoveEnd = (e: Event) => {
    moving = false;
    return true;
  };

  const onKnobMoveChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target) value = format(target.value);
  };
</script>

<div class="inline-block">
  <div class="text-center mb-1 text-xs">
    <span class:moving>{label}</span>
    <span class:moving={!moving}>{value}</span>
  </div>
  <input-knob
    scale="100"
    min="0"
    max="100"
    on:knob-move-start={onKnobMoveStart}
    on:knob-move-end={onKnobMoveEnd}
    on:knob-move-change={onKnobMoveChange}
  >
    <svg viewBox="0 0 100 100" class="w-full h-full text-white text-opacity-50">
      <circle
        cx="50%"
        cy="50%"
        r="40"
        stroke="currentColor"
        stroke-width="9"
        stroke-dasharray="3 6"
        fill="none"
      />
      <circle
        class="stroke-black"
        cx="50%"
        cy="50%"
        r="44"
        stroke="currentColor"
        stroke-width="6"
        fill="none"
      />
      <rect x="48" y="6" width="4" height="20" fill="white" />
    </svg>
  </input-knob>
</div>

<style>
  input-knob::part(rotator) {
    @apply relative box-border border-double border rounded-full bg-gray-700 border-black;
  }

  .moving {
    @apply hidden;
  }
</style>
