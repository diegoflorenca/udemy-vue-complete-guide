const app = Vue.createApp({
	data() {
		return {
			counter: 10,
			userName: '',
			confirmedName: '',
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
		submitForm() {
			// event.preventDefault();
			alert('Submitted!');
		},
		confirmInput() {
			this.confirmedName = this.userName;
		},
	},
});

app.mount('#events');
