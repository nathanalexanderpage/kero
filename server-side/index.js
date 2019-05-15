require('dotenv').config();
const cors = require('cors');
const express = require('express');
const expressJWT = require('express-jwt')
const favicon = require('serve-favicon');
const logger = require('morgan');
const path = require('path');

// App instance
const app = express();

// Set up middleware
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: false}));


// Controllers
// TODO: Ensure all auth routes are protected except for
// POST to /auth/login and /auth/signup
// Remember to pass the JWT_SECRET to ExpressJWT (it will break without it!)
// NOTE on ExpressJWT: The unless portion is only needed if you need exceptions
app.use('/auth', expressJWT({
  secret: process.env.JWT_SECRET
}).unless({
  path: [{
    url: '/auth/login',
    methods: ['POST']
  },{
    url: '/auth/signup',
    methods: ['POST']
  }
]
}), require('./controllers/auth'));

app.use('/projects', expressJWT({
  secret: process.env.JWT_SECRET
}), require('./controllers/projects'))

app.use('/sprints', expressJWT({
  secret: process.env.JWT_SECRET
}), require('./controllers/sprints'))

app.use('/tasks', expressJWT({
  secret: process.env.JWT_SECRET
}), require('./controllers/tasks'))


// This is the catch-all route. Ideally you don't get here unless you made a mistake on your front-end
app.get('*', function(req, res, next) {
	res.status(404).send({ message: 'Not Found' });
});

// Listen on specified PORT or default to 3000
app.listen((process.env.PORT || 3000), () => {
  console.log(`server listening on port ${process.env.PORT || 3000}`);
});
