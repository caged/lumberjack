<script>
  import { Range, Note } from "@tonaljs/tonal";
  import { default as rwc } from "random-weighted-choice";
  import { randomNormal } from "d3";
  const notes = Range.chromatic(["C2", "B2"], { pitchClass: true });

  const fifths = Array.from({ length: 12 }, (_, i) => {
    let n = Note.get(Note.enharmonic(Note.transposeFifths("C", i)));
    if (n.pc === "Gb") n = Note.get("F#");
    return n.pc;
  });

  const rn = randomNormal(0.35, 0.4);

  function rand7() {
    return Array.from({ length: 7 }, (_, i) => rn(i));
  }

  const weights = [[0, 1, 0, 0, 0, 0, 0], rand7(), rand7(), rand7()];
  const fnote1 = fifths.pop();
  const allNotes = fifths.slice(0, 6);
  allNotes.unshift(fnote1);

  // weights.forEach((w, i) => {
  //   // const table = Object.fromEntries(allNotes.map((n, j) => [n, w[j]]));
  //   const table = [];

  //   allNotes.forEach((n, j) => {
  //     const item = { id: n, weight: w[j] };
  //     table.push(item);
  //   });

  //   const note = rwc(table);
  //   console.log(note);
  // });

  weights.forEach((w, i) => {
    // const table = Object.fromEntries(allNotes.map((n, j) => [n, w[j]]));
    const table = [];

    allNotes.forEach((n, j) => {
      const item = { id: n, weight: w[j] };
      table.push(item);
    });

    const note = rwc(table);
    console.log(note);
  });
</script>

<div class="p-5">
  notes: {notes}
</div>

<div class="p-5">
  five: {fifths}
</div>
