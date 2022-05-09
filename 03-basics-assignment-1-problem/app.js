const app = Vue.createApp({
	data() {
		return {
			myName: 'Diego Florença',
			myAge: 38,
			imageURL: 'https://m.media-amazon.com/images/I/71VlSL8pqgL._AC_SL1500_.jpg',
		};
	},
	methods: {
		randomNumber() {
			return Math.random();
		},
	},
});

app.mount('#assignment');
