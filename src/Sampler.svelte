<script type="ts">
  import {
    ElementaryWebAudioRenderer as core,
    el,
  } from "@nick-thompson/elementary";

  import Waveform from "./Waveform.svelte";
  import Knob from "./Knob.svelte";

  let loaded = false;

  async function load(event: Event) {
    event.preventDefault();

    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const audioBuffer = await fetch("drumloop.wav");
    const buf = await audioBuffer.arrayBuffer();
    const adata = await ctx.decodeAudioData(buf);
    const bdata = new Float32Array(adata.length);
    adata.copyFromChannel(bdata, 0);

    const node = await core.initialize(ctx, {
      numberOfInputs: 0,
      numberOfOutputs: 1,
      outputChannelCount: [2],
      processorOptions: {
        virtualFileSystem: {
          "/drumloop.wav": bdata,
        },
      },
    });

    node.connect(ctx.destination);
  }

  core.on("load", () => {
    loaded = true;
    const sample = el.sample(
      { path: "/drumloop.wav", channel: 0 },
      el.train(0)
    );
    core.render(sample, sample);
  });
</script>

<div class="h-96">
  <div class="w-full h-1/2 border border-blue-500">
    {#if !loaded}
      <button on:click={load}>Load sample...</button>
    {:else}
      <Waveform />
    {/if}
  </div>

  <div
    class="h-1/2 grid grid-cols-2 gap-2 p-5 border border-blue-500 border-t-0"
  >
    <div class="w-12 h-12">
      <Knob value={12} label="Pitch" />
    </div>
    <div class="w-12 h-12">
      <Knob value={25} max={50} label="Cent" />
    </div>
  </div>
</div>
