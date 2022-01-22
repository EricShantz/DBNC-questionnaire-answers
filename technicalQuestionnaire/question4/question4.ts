/*
    The errors in the code are that the url for the fetch call is obviously not going to work. However I imagine that 
    it's a placeholder. Further to that the line "server_echo = response.json().echo" should simply be "server_echo = response.json()".
    echo is a linux command that displays a line of text that's passed in as an argument
*/


// code direct from the google doc 
var server_echo;
var json = {
    json: JSON.stringify({
        a: 1,
        b: 2
    }),
    delay: 3
};
fetch('/echo/', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
})
.then(function (response) {
    server_echo = response.json().echo
    return response.json();
})
.then(function (result) {
    alert(result);
})
.catch (function (error) {
    console.log('Request failed', error);
});
server_echo.forEach(
    element => console.log(element)
)
