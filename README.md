# Udemy - Vue - The Complete Guide

This course was created by **[Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/)**

Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!

## \***\*What I have learned?\*\***

- Build amazing Vue.js Applications - all the Way from Small and Simple Ones up to Large Enterprise-level Ones
- Understand the Theory behind Vue.js and use it in Real Projects
- Leverage Vue.js in both Multi- and Single-Page-Applications (MPAs and SPAs)
- Learn the latest version of Vue (Vue 3), including the brand-new Composition API

# Notes

- Vue uses a declarative approach instead of regular JavaScript which normally uses an imperative approach (step-by-step). We decide the end results, not how to get them.
- It is a good practice not to put too much logic on your HTML code, the HTML code should be about outputting stuff.

# Core Concepts

## Create a Vue app

- Vue.createApp() → Global
- Has an object to configure Vue:
  - data → It is a function, everything returned by the data function can be used in the HTML controlled by Vue. Vue takes all the data in this object and merges it into a global instance Vue object, to access this global instance we need to use the keyword `this`.
  - methods → Allow you to define functions, it takes an object that holds as many functions as you may need.

```jsx
const app = Vue.createApp({
	data() {
		return {
			courseGoalsA: 'Finish the course and learn Vue!',
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
```

## Mount Vue App

- We control all child elements of the HTML element mounted by Vue.

```jsx
app.mount('#element-id');
```

## Directives

### **v-model**

A two-way binding (listening and writing through value attribute), makes Vue manage the property. A shortcut for a `v-bind:value` and `v-on:input`.

### **v-on**

Add an event listener: `<button v-on:click="addGoal">Add Goal</button>`

This directive has a shorter version: `@click`

### **v-for**

Loop thought the content of an array, creating an element for each one.

```html
<ul>
	<li v-for="goal in goals">{{ goal }}</li>
</ul>
```

### **v-bind**

Set a value to an attribute: `<input type="text" v-bind:value="myName" />`

This directive has a shorter version: `:value`

### **v-html**

Insert HTML content, but has security issues:

```html
<p v-html="myName"></p>
<script>
	[...]
		myName: "<h2>Diego Florença</h2>",
	[...]
</script>
```

### v-once

Any dynamic data binding, like interpolations, should only be evaluated once.

### Event modifier

Modify an event, for example prevent a form submission → `<form v-on:submit.prevent="submitForm">`

## Template

### Inserting Content

- To insert text content on the page we use the interpolation method by adding `{{ variable/expression }}`
- The interpolation only allows us to use simple JavaScript expressions or pure text, and always between HTML tags.

```html
<section id="assignment">
	<h2>{{ myName }}</h2>
	<p>{{ myAge }}</p>
	<p>Favorite Number: {{ Math.random() }}</p>
</section>
```

### Calling a functions

We can call a function using `v-bind` or `v-html` but these methods are not the best way for outputting some dynamically calculated values.

We can also call a function like this: `{{ functionX() }}`, but this way Vue will automatically rerun this function on every change because it doesn`t know what this function does.

### Methods

Use with event binding OR data binding.

```jsx
const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
		};
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
		},
	},
});
```

Data binding `{{ }}` methods are executed for every “re-render” cycle of the component. Use for events or data that really needs to be re-evaluated all the time.

### Computer properties

Used only with data binding, not with events. They are essentially like methods but Vue is aware of their dependencies and only re-execute them if one of the dependencies changed. Use for data that depends on other data.

```jsx
const app = Vue.createApp({
	data() {
		return {
			...
		};
	},
	computed: {
		fullname() {
			console.log('Running again...');
			if (this.name === '') return '';
			return this.name + ' ' + 'Florença';
		},
	},
	methods: {
		...
	},
});
```

Used as a data property not like a function: `<p>Your Name: {{ fullname }}</p>`.

From the performance perspective using computed properties is better than methods for outputting values in most cases but events cannot be bound to computed properties.

### Watchers

Not used directly in template. A function that executes some logic when a bound property changes. Ideal to change a data property when something happens. Use for any non-data update you want to make.

```jsx
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
	},
});
```

Allows you to run any code in reaction to some changed data. Could be used with HTTP requests or timers.

## Dynamic styling

Vue supports a dynamic class `:class` that can be applied when a data property is true.

```html
<section id="styling">
	<div class="demo" :class="{active: boxASelected}" @click="boxSelected('A')"></div>
	<div class="demo" :class="{active: boxBSelected}" @click="boxSelected('B')"></div>
	<div class="demo" :class="{active: boxCSelected}" @click="boxSelected('C')"></div>
</section>
```

```jsx
data() {
		return {
			boxASelected: false,
			...
		};
	},
	methods: {
		boxSelected(box) {
			if (box === 'A') {
				this.boxASelected = !this.boxASelected;
			} ...
			}
		},
	},
```

A better approach for complexes use cases could be to use computed properties to keep the logic separated from the HTML.

```html
<section id="styling">
	<div class="demo" :class="boxAClasses" @click="boxSelected('A')"></div>
	<div class="demo" :class="boxBClasses" @click="boxSelected('B')"></div>
	<div class="demo" :class="boxCClasses" @click="boxSelected('C')"></div>
</section>
```

```jsx
computed: {
		boxAClasses() {
			return { active: this.boxASelected };
		}, ...
	},
```

It`s also possible to use an array as classes, this could allow more dynamic changes in styling.
