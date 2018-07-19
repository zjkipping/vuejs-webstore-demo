# vue-demo-project

I decided to explore Vue.js for this assignment.
The reason for this is because I have been doing Angular development for the past 4 years since AngularJS through Angular 2,4,5 and currently 6.
I feel Vue is a decent competitor to Angular and it's always interesting to see how other frameworks implement similar core ideas of SPAs.

I started at the guide here: https://vuejs.org/v2/guide/

and then quickly decided that link was a waste of time and went straight to the CLI guide page here: https://cli.vuejs.org/guide/

Since I work with the latest version of Angular 6 at my job I have ample experience using CLIs and don't feel like doing the manual setup anymore.

I ran through that guide and installed the CLI they provide while looking at the page here: https://cli.vuejs.org/guide/plugins-and-presets.html

The CLI guide mentioned something about Typescript in the plugins section of the website and since I hate not using TS at this point, I gave it a look over.

Found out you can easily add plugins to existing projects so I decided to make a new project using the "vue create".

From here I found I could manually pick the default plugins I wanted on a project.
So, I ended up choosing the options:
	Babel,
	TS,
	Router,
	VueX,
	Linter/Formatter

The next step in the CLI asked if I wanted to use class style component syntax. I googled it and found this link: https://github.com/vuejs/vue-class-component
It seems similar to what I am used to with Angular 6; so, I opted in to it.

I then chose Yes to using Babel alongside TS for autodetecting polyfills and TSLint for my linter (obviously).
Next I chose "Lint on Save" since it made more since then Linting on commit and then chose individual config files for Babel, TSLint, etc...

The creation of Presets for CLI process is neat! I went ahead and made one for the explained setup above since it was the next step.

Also I chose to use Yarn for the creation of the project since it's more reliable on bad wifi networks. Tried NPM for an hour and it kept failing on the create command.
(running NPM on unreliable networks is a crapshoot at best)

Just to quickly mention the demo app I plan on creating is a basic web store and I will commit progress to a github repo (link at end).
Concepts I want to implement through Vue.js (might not get to all of it, currently on vacation!):
	- Routing -> more specifically a home page, product list, product details, cart, checkout.
	- State Management -> using VueX create some type of state for the product list (basic load/read) and the cart (add/edit/remove items)
	- Overall look at how Vue does certain template rendering ideas such as: looping, expressions, binding, events

I use VS Code so at this point I installed the Vetur extension so I could have tools for Vue.

At this point I just poked around to see what was similar to Angular 6 and what wasn't.

I found it interesting that Vue typically has everything about a View in one file, basically an html file.

The file contains a <template></template> with the View's html inside, a <script></script> with the TS component inside, and a <style></style> with the css inside.

These were the generated files; so, I'll stick with this approach when creating my views.

First off I created my view files I need and added them as routes:
	- Home
	- Product List
	- Product Details (needs route props of an ID)
	- Cart
	- Checkout

I used this link, https://github.com/vuejs/vue-router/tree/dev/examples, to setup my routes, route props, etc...

While poking around and editing files I noticed the console in my chrome recommended me to get the Vue Devtools extension here:
https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd

At a certain point I wanted to use Bootstrap 4 with Vue, since I can make a demo faster using Bootstrap's css.
I followed this blog, https://www.techiediaries.com/vue-bootstrap/, to accomplish this.

I then just followed the docs here https://bootstrap-vue.js.org for any components/directives I needed.

I then created a component for the navbar to stick above my router-view using the nav component from bootstrap-vue.


