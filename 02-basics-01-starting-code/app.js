const app = Vue.createApp({
	data() {
		return {
			courseGoals: 'Finishe the course and learn Vue!',
			vueLink: 'http://www.vuejs.org/',
		};
	},
	methods: {
		outputGoal() {
			const randomNumber = Math.random();
			return randomNumber < 0.5 ? 'Learn Vue!' : 'Master Vue!';
		},
	},
});

app.mount('#user-goal');
