# Udemy - Vue - The Complete Guide

Created: May 10, 2022 11:33 AM
Link: https://www.udemy.com/course/vuejs-2-the-complete-guide/
Master Tag: https://www.notion.so/Dev-5bd9903657394562b067a42df4e7f522
Tag: Frontend, Vue
Tipo: Nota

# Udemy - Vue: The Complete Guide

This course was created by **[Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/)**

Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!

## ****What I have learned?****

- Build amazing Vue.js Applications - all the Way from Small and Simple Ones up to Large Enterprise-level Ones
- Understand the Theory behind Vue.js and use it in Real Projects
- Leverage Vue.js in both Multi- and Single-Page-Applications (MPAs and SPAs)
- Learn the latest version of Vue (Vue 3), including the brand-new Composition API

# Notes

- Vue uses a declarative approach instead of regular JavaScript which normally uses an imperative approach (step-by-step). We decide the end results, not how to get them.

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

### **v-on**

Triggers a method where an event occurs: `<button v-on:click="addGoal">Add Goal</button>`

### **v-for**

Loop thought the content of an array, creating an element for each one.

```html
<ul>
  <li v-for="goal in goals">{{ goal }}</li>
</ul>
```

### **v-bind**

Insert HTML attributes: `<input type="text" v-bind:value="myName" />`

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