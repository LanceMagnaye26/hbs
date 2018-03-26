const express = require('express');
const hbs = require('hbs');
const os = require('os');
const fs = require('fs');

var app = express();
const port = process.env.PORT || 8080;


hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentUser', () => {
	return new Date().getFullYear()
})

hbs.registerHelper('message', (text) => {
	return text.toUpperCase();
})

// app.use((request, response, next) => {
// 	response.render('maintenance.hbs')
// });

//i modified it
app.get('/', (request, response) => {
	// response.send('<h1>Hello Express!</h1>');
	response.render('index.hbs', {
		title: 'Main Page',
		image: 'https://i.redd.it/ojadkcnxmqm01.jpg'
	})
});

app.get('/info', (request, response) => {
	response.render('about.hbs', {
		title: 'About Page',
		image: 'https://i.redd.it/ya41uu7y8rm01.png'
	});
});

app.get('/404', (request, response) => {
	response.send({
		error: 'Page not found'
	})
})

app.listen(port, () => {
	console.log('Server is up on the port 8080');
});