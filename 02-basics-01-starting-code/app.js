const app = Vue.createApp({
	data() {
		return {
			courseGoalsA: 'Finishe the course and learn Vue!',
			courseGoalsB: '<h2>Master Vue and build amazing apps!</h2>',
			vueLink: 'http://www.vuejs.org/',
		};
	},
	methods: {
		outputGoal() {
			const randomNumber = Math.random();
			return randomNumber < 0.5 ? this.courseGoalsA : this.courseGoalsB;
		},
	},
});

app.mount('#user-goal');
