const app = Vue.createApp({
	data() {
		return {
			courseGoalsA: 'Finishe the course and learn Vue!',
			courseGoalsB: 'Master Vue and build amazing apps!',
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
