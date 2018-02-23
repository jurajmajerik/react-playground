import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const JSX = (
<div>
{/*COMMENT*/}
  <h1>Title</h1>
  <p>Decription</p>
  <ul>
    <li className="red">item</li>
    <li>item</li>
    <li>item2</li>
  </ul>

</div>
);

ReactDOM.render(JSX, document.getElementById('render-1'));

const MyComponent1 = function() {
  return (
    <div>"Some string"</div>
  );
};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <h1>Hello React!</h1>
      </div>
    );
  }
};

const ChildComponent = () => {
  return(
    <div>
    <p>Child element</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <h1>Parent Component</h1>
      <ChildComponent />
      </div>
    );
  }
};

const TypesOfFruit = () => {
  return (
    <div>
    <h2>Fruits:</h2>
    <ul>
    <li>Apples</li>
    <li>Oranges</li>
    </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
    <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
      <h1>Types of Food</h1>
      <Fruits />
      </div>
    );
  }
};

ReactDOM.render(<TypesOfFood />, document.getElementById('render-2'));

const CurrentDate = (props) => {
  return (
    <div>
      <p>
      The current date is: {props.date}
      </p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return(
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()}/>
      </div>
    );
  }
};

ReactDOM.render(<Calendar />, document.getElementById('render-3'));

const List = (props) => {
  return (<p>{props.tasks.join(', ')}</p>);
};

class ToDo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={['one', 'two']} />
        <h2>Tomorrow</h2>
        <List tasks={['one', 'two', 'three']} />
      </div>
    );
  }
};

ReactDOM.render(<ToDo />, document.getElementById('render-4'));

const Items = (props) => {
  return(
    <h1>Current Quantity: {props.quantity}</h1>
  );
};

Items.defaultProps = { quantity: 0 };

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Items quantity={10} />
    );
  }
};

ReactDOM.render(<ShoppingCart />, document.getElementById('render-5'));

class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <p>New password: <strong>{this.props.tempPassword}</strong></p>
      </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h2>Reset your password</h2>
        <ReturnTempPassword tempPassword={"asdfghjkl"} />
      </div>
    );
  }
};

ReactDOM.render(<ResetPassword />, document.getElementById('render-6'));

class Camper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
};

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <Camper />
      </div>
    );
  }
};

Camper.propTypes = { name : PropTypes.string.isRequired };
Camper.defaultProps = { name: 'CamperBot' };
ReactDOM.render(<CampSite />, document.getElementById('render-7'));

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Juraj'};
  }
  render() {
    return(
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

ReactDOM.render(<StatefulComponent />, document.getElementById('render-8'));

class ChangeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Initial State' };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ name: 'React Rocks!'});
  }
  render() {
    return(
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

ReactDOM.render(<ChangeButton />, document.getElementById('render-9'));

class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemCount: 0 };
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    this.setState({ itemCount: this.state.itemCount + 1 });
  }
  render() {
    return(
      <div>
        <button onClick={this.addItem}>Click Me</button>
        <h1>Current Count: {this.state.itemCount}</h1>
      </div>
    );
  }
};

ReactDOM.render(<AddButton />, document.getElementById('render-10'));

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visibility: false };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    (this.state.visibility) ?
      this.setState({ visibility: false }) :
      this.setState({ visibility: true });
  }
  render() {
    if (this.state.visibility) {
      return(
        <div>
          <h1>Now you see me!</h1>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    } else {
      return(
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};

ReactDOM.render(<ToggleButton />, document.getElementById('render-11'));

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
  reset() {
    this.setState({ count: 0});
  }
  render() {
    return(
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
        <h2>Current count: {this.state.count}</h2>
      </div>
    );
  }
};

ReactDOM.render(<Counter />, document.getElementById('render-12'));

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  render() {
    return(
      <div>
        <h4>Controlled Input</h4>
        <input type="text" value={this.state.input} onChange={this.handleChange} />
        <p>Input: {this.state.input}</p>
        <p>Characters: {this.state.input.length}</p>
      </div>
    );
  }
};

ReactDOM.render(<ControlledInput />, document.getElementById('render-13'));

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submit: this.state.input });
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.input} onChange={this.handleChange}></input>
        <button type='submit'>Submit!</button>
        <p>Submitted value: {this.state.submit}</p>
        </form>
      </div>
    );
  }
};

ReactDOM.render(<MyForm />, document.getElementById('render-14'));

// Pass state as props to child components
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Juraj' };
  }
  render() {
    return(
      <div>
        <Navbar name={this.state.name} />
      </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h1>Hello, my name is: {this.props.name}</h1>
      </div>
    );
  }
};

ReactDOM.render(<MyApp />, document.getElementById('render-15'));

class MyApp2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }
  render() {
    return(
      <div>
        <GetInput
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <RenderInput
          input={this.state.inputValue}
        />
      </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h3>Get input: </h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}
         />
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};

ReactDOM.render(<MyApp2 />, document.getElementById('render-16'));

class WillMountTest extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log('componentWillMount; testing');
  }
  render() {
    return(
      <div>
      </div>
    );
  }
};

ReactDOM.render(<WillMountTest />, document.getElementById('render-17'));

class DidMountTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeUsers: null };
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({ activeUsers: 1354 });
    }, 2000);
  }
  render() {
    return(
      <div>
        <h2>Active users: {this.state.activeUsers}</h2>
      </div>
    );
  }
};

ReactDOM.render(<DidMountTest />, document.getElementById('render-18'));

class EventListeners extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(event) {
    this.setState({ message: `You pressed '${event.key}'!` });
  }
  render() {
    return(
      <div>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
};

ReactDOM.render(<EventListeners />, document.getElementById('render-19'));

class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    console.log('Component is about to update...');
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }
  componentDidUpdate() {
    console.log('Component has been updated.');
  }
  render() {
    return(
      <div>
        <h2>{this.props.message}</h2>
      </div>
    );
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 'First Message' };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({ message: 'Second Message' });
  }
  render() {
    return(
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message} />
      </div>
    );
  }
};

ReactDOM.render(<Controller />, document.getElementById('render-20'));

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log('Receiving new props...');
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return(
      <h1>{this.props.value}</h1>
    );
  }
};

class Controller2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({ value: this.state.value + 1 });
  }
  render() {
    return(
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};

ReactDOM.render(<Controller2 />, document.getElementById('render-21'));

class Colorful extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div style={{
        color: 'red',
        fontSize: 50
      }}>
      Red text, size 50
      </div>
    );
  }
};

ReactDOM.render(<Colorful />, document.getElementById('render-22'));

const styles = {
  color: 'dodgerblue',
  fontSize: 40,
  fontFamily: 'Verdana',
  textTransform: 'uppercase',
  border: '2px dashed dodgerblue'
};

class VarStyles extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div style={styles}>
      Styled using a variable
      </div>
    );
  }
};

ReactDOM.render(<VarStyles />, document.getElementById('render-23'));

const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 4),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely'
    ];
    const answer = possibleAnswers[this.state.randomIndex];
    return(
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle} />
        <button
          onClick={this.ask}>
          Ask the Magic Eight Ball!
        </button>
        <h3>Answer:</h3>
        <p>{answer}</p>
      </div>
    );
  }
};

ReactDOM.render(<MagicEightBall />, document.getElementById('render-24'));
