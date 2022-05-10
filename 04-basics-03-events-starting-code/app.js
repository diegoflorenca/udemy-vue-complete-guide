const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			userName: '',
		};
	},
	methods: {
		addCounter(num) {
			this.counter += num;
		},
		reduceCounter(num) {
			this.counter >= 1 ? (this.counter -= num) : 0;
		},
		setName(event, lastName) {
			this.userName = `${event.target.value} ${lastName}`;
		},
	},
});

app.mount('#events');
