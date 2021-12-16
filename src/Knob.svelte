<script type="ts">
  export let min: number = 0;
  export let max: number = 100;
  export let scale: number = max;
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
    const val = target.value as unknown as number;
    if (target) value = format(val);
  };
</script>

<div class="inline-block">
  <div class="text-center mb-1 text-xs">
    <span class:moving>{label}</span>
    <span class:moving={!moving} class="text-blue-400">{value}</span>
  </div>
  <input-knob
    {scale}
    {min}
    {max}
    {value}
    on:knob-move-start={onKnobMoveStart}
    on:knob-move-end={onKnobMoveEnd}
    on:knob-move-change={onKnobMoveChange}
  >
    <svg
      viewBox="0 0 100 100"
      class="w-full h-full text-gray-600 text-opacity-50"
    >
      <circle
        cx="50%"
        cy="50%"
        r="32"
        stroke="currentColor"
        stroke-width="12"
        stroke-dasharray="3 6"
        fill="none"
        shape-rendering="crispEdges"
      />
      <circle
        class="stroke-blue-300"
        cx="50%"
        cy="50%"
        r="44"
        stroke="currentColor"
        stroke-width="3"
        fill="none"
        shape-rendering="crispEdges"
      />
      <rect x="48" y="6" width="4" height="20" fill="white" />
    </svg>
  </input-knob>
</div>

<style>
  input-knob::part(rotator) {
    @apply relative box-border border-double border-2 rounded-full bg-gray-800 border-blue-700;
  }

  .moving {
    @apply hidden;
  }
</style>
