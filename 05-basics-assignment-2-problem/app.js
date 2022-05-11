const app = Vue.createApp({
	data() {
		return {
			output: '',
			confirmedOutput: '',
		};
	},
	methods: {
		showAlert() {
			alert('This is an alert!');
		},
		updateOutput(event) {
			this.output = event.target.value;
		},
		confirmOutput(event) {
			this.confirmedOutput = this.output + event.target.value;
		},
	},
});

app.mount('#assignment');
