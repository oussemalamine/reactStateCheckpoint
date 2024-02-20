import react, {Component} from 'react'; 


class App extends Component {
  state = {
    person: {
      fullName: 'oussema lamine',
      bio: 'Every Web site has stories to tell—stories that will not only engage, inform and surprise audience, but that will also deliver on measurable business goals. And I am the conduit between Web sites and consumer.',
      imgSrc: 'https://media.licdn.com/dms/image/D4D03AQFVsSk4rmah3A/profile-displayphoto-shrink_400_400/0/1702577117116?e=1714003200&v=beta&t=su5R2FLJxM31iUZ-i2fuk8o7gE2ZhRenJCJ52MljQvI', 
      profession: 'Marketing Manager'
    },
    show: true,
    timeInterval: 0
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  toggleProfile = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };
  render() {
    const { person, show, timeInterval } = this.state;

    return (
      <div>
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time since component mounted: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
