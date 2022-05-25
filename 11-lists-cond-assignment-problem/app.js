const app = Vue.createApp({
	data() {
		return {
			taskInputValue: '',
			tasks: [],
			isVisible: true,
		};
	},
	methods: {
		addTask() {
			this.tasks.push(this.taskInputValue);
			this.taskInputValue = '';
		},
		changeVisible() {
			this.isVisible = !this.isVisible;
		},
	},
	computed: {
		buttonCaption() {
			return this.isVisible ? 'Hide List' : 'Show List';
		},
	},
});

app.mount('#assignment');
