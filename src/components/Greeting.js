import ReactDOM from "react-dom";
import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";


function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={true} />,
    document.getElementById('root')
);

export default Greeting;