import { Component, createContext } from "react";
import { onAuthStateListener } from "../utils/firebase.util";

// as the actual value to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export class UserContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
    }
  }

  setCurrentUser = (user) => {
    this.setState({ currentUser: user })
  }

  componentDidMount() {
    const unsubscribe = onAuthStateListener((user) => {
      console.log(user);
      this.setCurrentUser(user)
    });
    return unsubscribe;
  }

  render() {
    const { children } = this.props;
    const { currentUser } = this.state;
    const { setCurrentUser } = this;
    const value = { currentUser, setCurrentUser };
    return <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  }
} 