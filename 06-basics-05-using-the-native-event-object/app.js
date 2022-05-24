const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			fullname: '',
		};
	},
	watch: {
		counter(value) {
			if (value > 50) {
				this.counter = 0;
			}
		},
		name(value) {
			if (value === '') {
				return (this.fullname = '');
			} else {
				this.fullname = value + ' ' + 'Florença';
			}
		},
	},
	computed: {
		fullnameFunction() {
			console.log('Running again...');
			if (this.name === '') return '';
			return this.name + ' ' + 'Florença';
		},
	},
	methods: {
		setName(event, lastName) {
			this.name = event.target.value + ' ' + lastName;
		},
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
			// this.counter--;
		},
	},
});

app.mount('#events');
