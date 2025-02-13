//app.use(express.static('public'));

console.log('data-----')

window.history.replaceState(null, null, window.location.href);
window.onpopstate = function(event) {
console.log(
"newone"
);
window.location.href = '/scholarlogin';
};

console.log('data-------------')
