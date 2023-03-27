# Assignment: React, ReactDOM and Babel

## Answer the questions given below

1. Create a div HTML element with the id of root using React.createElement
```js
React.createElement('div',{id:'root'})
```

2. In the given HTML find out the tag name , attributes and children while using React.createElement.
```html
<span class="sub--heading" id="main"
  >Hello React Element</span
>
```
```js
tag name=<span>
attribute={class:'sub--heading',id:'main'}
children='Hello React Element'
 ```

3. Create a h1 React element with text Hello React🔥 and class heading
```js
React.createElement('h1',{class:'heading'},'Hello React🔥')
```

4. Convert this React element into HTML element and JSX
```js
React.createElement('input', {
  type: 'checkbox',
  placeholder: 'What are you learning?',
});

HTML:
<input type='checkout' placeholder='What are you learning'>

JSX:
<input type='checkout' placeholder='What are you learning'/>

```

5. Using ReactDOM render the element created in step 4 into DOM. (div with id root).

```js
ReadDOM.render(<input type='checkout' placeholder='What are you learning'/>,getElemetById('root'))
```

6. Convert the following HTML element into React element using React.createElement. After converting to React.createElement convert the code below to JSX.

```html
<div class="container">
  <img
    src="https://images.unsplash.com/photo-1610847034016-49565e0c068a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
  >
  <input type="checkbox" >
  <p>Learing React</p>
  <span>Delete</span>
</div>
```
```js
React.createElement(
    'div',
    {class:'container'},
    React.createElement('img',{src:"https://images.unsplash.com/photo-1610847034016-49565e0c068a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"}),
    React.createElement('input',{type:'checkout'}),
    React.createElement('p',{},'Learning React'),
    React.createElement('span',{},'Delete'))

    JSX:
    <div class="container">
  <img
    src="https://images.unsplash.com/photo-1610847034016-49565e0c068a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
  />
  <input type="checkbox" />
  <p>Learing React</p>
  <span>Delete</span>
</div>

```

7. Convert the following HTML element into React element using React.createElement. After converting to React.createElement convert the code below to JSX.

```js
<div>
  <div class="preference">
    <label for="cheese">Do you like cheese?</label>
    <input type="checkbox" name="cheese" id="cheese" />
  </div>
  <div class="preference">
    <label for="peas">Do you like peas?</label>
    <input type="checkbox" name="peas" id="peas" />
  </div>
  <h2>List of numbers!</h2>
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
</div>

JSX
<div>
  <div className="preference">
    <label for="cheese">Do you like cheese?</label>
    <input type="checkbox" name="cheese" id="cheese" />
  </div>
  <div className="preference">
    <label for="peas">Do you like peas?</label>
    <input type="checkbox" name="peas" id="peas" />
  </div>
  <h2>List of numbers!</h2>
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
</div>

React.createElement(
    'div',
    null,
React.createElement('div',{className:"preference"},React.createElement('label',{htmlFor:"cheese"},"Do you like cheese"),React.createElement('input',{type:"checkbox",name:"cheese",id:"cheese"},"Do you like cheese?")),
React.createElement('div',{className:"preference"},React.createElement('label',{htmlFor:"peas"},"Do you like peas"),React.createElement('input',{type:"checkbox",name:"peas",id:"peas"},"Do you like peas?")),
React.createElement('h2',null,"List of numbers"),
React.createElement('ul',null,React.createElement('li',{},"one"),React.createElement('li',{},"two"),React.createElement('li',{},"three")
)

)
```

8. Why you need to name the components capital case? Explain with examples.

`In JSX, lower-case tag names are considered to be HTML tags. However, lower-case tag names with a dot (property accessor) aren't.

See HTML tags vs React Components.

<component /> compiles to React.createElement('component') (html tag) <Component /> compiles to React.createElement(Component) <obj.component /> compiles to React.createElement(obj.component)

Edit Answer`