Intro to JSX:
(Javascript XML) is a  syntax extension for js in react js ;it allows us to write html code in react 
--make sus easier to write html in react 
JSX: JSX code gets compiled into JS.
Babel: a tool converts translates into js
Keypoints:
<br/>
<img/
>
class = className

without jsx:


Expressions in jsx:
With jsx, you can write the expressions
using  a function call:
You can call the function call directly whith in the jsx expressions
<div id=”a”></div>
<script type = ‘text/babel”>
function getGreeting(name){
return  ‘hello ,$[name}! welcome to React’
}
//Component that uses the function in jsx 
function Greetings 


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <!-- <div id="app"></div>
    <script type="text/babel">
        const element = <h1 className="a">Hello JSX</h1>  // creating a element in jsx
        const root=ReactDOM.createRoot(document.getElementById('app'))
        root.render(element)
    </script> 
    -->
    <div id="'app">
    </div>
    <script type="text/babel">
        const n=10;
        const m= <h1>React is {n*2} times better than jsx </h1>
        const r = ReactDOM.createRoot(document.getElementById('a'))
        root.render(m)
    </script>

    
</body>
</html>
