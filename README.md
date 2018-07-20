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

I created some random data in a json file to use.
For images I used: https://www.placecage.com/
For text I used: https://lipsum.com/feed/html

At this point I started to poke around in the docs for VueX here: https://vuex.vuejs.org/guide/

I created my state, fully typed, as follows:
	- Array of Products
	- Array of CartItems
	- LoggedIn (boolean)

I created my mutations:
	- Add to cart
	- Subtract from cart
	- Remove from cart
	- Set product list
	- Set logged in

Might have done a shoddy job at the Add and Subtract, but I wanted to get it done fast.

I then wanted to create an action for retrieving my mock data I created in the json file.
So, I started looking at the recommended plugin, Axios, for handling http requests.

Vue doesn't natively use observable for handling Async functionality so I just made use of async/await throught the demo where needed.

Couldn't for the life of me get static data files to work with Vue's webpack setup; so, I just threw the json file on an ec2 instance and used, https://mnaoumov.wordpress.com/2018/02/05/download-google-drive-file-via-ajax-ignoring-cors/, to get around the CORS problem.

Never do the above in a real application. I'm too lazy to make an actual server for this demo, and I'll change the link in the production build that goes on the ec2 instance to locally retrieve the file.

Once I got data into my app using VueX and Axios, I went about setting up my views. 

I started with the ProductList view first. Using https://vuejs.org/v2/guide/list.html to render the data

I made use of bootstrap-vue's Card component and https://vuejs.org/v2/guide/syntax.html to create cards for each product on the list page.

Next I went about creating the Product Details view, allowing users to see the details of a product and add the item to their cart if they are logged in.

To do this I made use of these docs: https://vuejs.org/v2/guide/events.html and https://vuejs.org/v2/guide/conditional.html

Used this when trying to load the details of the product in the details view https://012.vuejs.org/guide/best-practices.html#Data_Initialization
and this https://router.vuejs.org/guide/advanced/data-fetching.html#fetching-after-navigation

Used this when trying to manually navigate when the product details are requested for doesn't exist https://router.vuejs.org/guide/essentials/navigation.html

Used this to create responsive images https://bootstrap-vue.js.org/docs/components/image/

Used this for buttons https://bootstrap-vue.js.org/docs/components/button/#button-element-type

Used this to help with using mapState + other properties in the computed component object
https://stackoverflow.com/questions/47204038/vue-computed-syntax-error-with-mapstates

Used this on cart page to make a table https://bootstrap-vue.js.org/docs/components/table/

Used this to make a button group in a table cell https://bootstrap-vue.js.org/docs/components/button-group#sizing

Used this as reference for making a form https://bootstrap-vue.js.org/docs/components/form/

Used this since I forgot how to disable refresh on submit https://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit
