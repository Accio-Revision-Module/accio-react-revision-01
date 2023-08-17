# ReactJS Revision

## Introduction

- React is a JavaScript library for building user interfaces.
- Developed by Facebook.
- Focuses on the view layer of the application.

```javascript
function App() {
  return <div>Hello, React!</div>;
}
ReactDOM.render(<App />, document.getElementById("root"));
```

## Advantages of Using React

- Reusable components save development time.
- Virtual DOM improves performance.
- JSX makes writing UI code more intuitive.

```javascript
function Button(props) {
  return <button>{props.label}</button>;
}
```

## Limitations of React

- Not a full framework, just a library for the view layer.
- JSX is a barrier for some developers.
- Might be overkill for simple applications.

## Components

- React's building blocks.
- Encapsulate functionality and UI.
- Can be class-based or function-based.

```javascript
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Use of Babel

- Transpiles JSX into JavaScript.
- Ensures compatibility with older browsers.

```javascript
// Before Babel
const element = React.createElement("h1", null, "Hello, world");

// After Babel
const element = <h1>Hello, world</h1>;
```

## JSX (JavaScript XML)

- XML-like syntax extension for JavaScript.
- Makes writing React components easier.

```javascript
const element = <h1 className="greeting">Hello, world!</h1>;
```

## Virtual DOM

- In-memory representation of the actual DOM.
- Allows React to only update changed parts, improving performance.

```javascript
// React automatically handles Virtual DOM updates
this.setState({ name: "John" });
```

## Controlled vs. Uncontrolled Components

- Controlled components have their state controlled by React.
- Uncontrolled components have their state controlled by the DOM.

```javascript
// Controlled
<input type="text" value={this.state.value} onChange={this.handleChange} />

// Uncontrolled
<input type="text" defaultValue="Default value" />
```

## Styling React Components

- Can use traditional CSS, inline styles, or CSS-in-JS.

```javascript
// Inline style
<div style={{ color: "blue" }}>Blue text</div>
```

## this Keyword Binding in Class Components

- `this` does not automatically bind to class methods.
- Use `.bind()` or arrow functions.

```javascript
// Using .bind()
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}

// Using arrow function
handleClick = () => {
  console.log(this);
}
```
