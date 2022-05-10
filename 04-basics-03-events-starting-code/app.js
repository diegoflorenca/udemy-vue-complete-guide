const app = Vue.createApp({
	data() {
		return {
			counter: 0,
		};
	},
	methods: {
		addCounter() {
			this.counter++;
		},
		reduceCounter() {
			this.counter >= 1 ? this.counter-- : 0;
		},
	},
});

app.mount('#events');
