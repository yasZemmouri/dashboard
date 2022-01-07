class Review extends React.Component {
  render() {
    return (
      <div id="review">
        <h2>Reviews</h2>
        <h3>1,281</h3>
      </div>
    );
  }
}
class Menu extends React.Component {
  render() {
    return (
      <div id="menu">
        <ul>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Widget</a>
          </li>
          <li>
            <a href="#">Reviews</a>
          </li>
          <li>
            <a href="#">Customers</a>
          </li>
          <li>
            <a href="#">Online Analysis</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </div>
    );
  }
}
class Visitor extends React.Component {
  render() {
    return (
      <div id="visitor">
        <h2>Website Visitors</h2>
        <h3>821</h3>
        <Chart />
      </div>
    );
  }
}
class Chart extends React.Component {
  render() {
    return <div id="chart"></div>;
  }
}
class Sentiment extends React.Component {
  render() {
    return (
      <div id="sentiment">
        <h2>Sentiment Analysis</h2>
        <ul>
          <li>960</li>
          <li>122</li>
          <li>321</li>
        </ul>
      </div>
    );
  }
}
class Rating extends React.Component {
  render() {
    return (
      <div id="rating">
        <h2>Average Rating</h2>
        <h3>4.6</h3>
      </div>
    );
  }
}

//App
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Review />
        <Rating />
        <Sentiment />
        <Visitor />
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  // <h1>Commence menu Creation!</h1>,
  // document.querySelector("main")
  <App />,
  document.querySelector("main")
);
