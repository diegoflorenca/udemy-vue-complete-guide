const app = Vue.createApp({
	data() {
		return {
			user: '',
			userStyling: '',
			classParagraph: 'visible',
		};
	},
	methods: {
		updateUser(event) {
			this.user = event.target.value;
		},
		updateUserStyling(event) {
			this.userStyling = event.target.value;
		},
		toggleParagraph() {
			if (this.classParagraph === 'visible') {
				this.classParagraph = 'hidden';
			} else {
				this.classParagraph = 'visible';
			}
		},
	},
	computed: {
		userClass() {
			if (this.user === 'user1' || this.user === 'user2') {
				return this.user;
			}
		},
	},
});

app.mount('#assignment');
