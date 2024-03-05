// Create web server
// Start web server
// Create route for /comments
// Create route for /comments/new
// Create route for /comments/:id
// Create route for /comments/:id/edit
// Create route for /comments/:id/delete
// Create route for /comments/:id/like
// Create route for /comments/:id/dislike
// Create route for /comments/:id/flag
// Create route for /comments/:id/reply
// Create route for /comments/:id/replies
// Create route for /comments/:id/replies/new
// Create route for /comments/:id/replies/:id
// Create route for /comments/:id/replies/:id/edit
// Create route for /comments/:id/replies/:id/delete
// Create route for /comments/:id/replies/:id/like
// Create route for /comments/:id/replies/:id/dislike
// Create route for /comments/:id/replies/:id/flag

// Require the modules
var express = require('express');
var router = express.Router();

// Create route for /comments
router.get('/', function(req, res) {
  res.send('GET /comments');
});

// Create route for /comments/new
router.get('/new', function(req, res) {
  res.send('GET /comments/new');
});

// Create route for /comments/:id
router.get('/:id', function(req, res) {
  res.send('GET /comments/:id');
});

// Create route for /comments/:id/edit
router.get('/:id/edit', function(req, res) {
  res.send('GET /comments/:id/edit');
});

// Create route for /comments/:id/delete
router.delete('/:id', function(req, res) {
  res.send('DELETE /comments/:id');
});

// Create route for /comments/:id/like
router.post('/:id/like', function(req, res) {
  res.send('POST /comments/:id/like');
});

// Create route for /comments/:id/dislike
router.post('/:id/dislike', function(req, res) {
  res.send('POST /comments/:id/dislike');
});

// Create route for /comments/:id/flag
router.post('/:id/flag', function(req, res) {
  res.send('POST /comments/:id/flag');
});

// Create route for /comments/:id/reply
router.get('/:id/reply