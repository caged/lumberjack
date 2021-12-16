/* src/Waveform.svelte generated by Svelte v3.44.3 */
import {
	SvelteComponent,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from "../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let div;

	return {
		c() {
			div = element("div");
			div.textContent = "test";
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

class Waveform extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Waveform;