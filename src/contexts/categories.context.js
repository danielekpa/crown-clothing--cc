import { Component, createContext } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase.util";

// as the actual value to access
export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategories: () => null,
});

export class CategoriesContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoriesMap: {},
    }
  }

  componentDidMount() {
    const categories = async () => await getCategoriesAndDocuments();

    categories().then((map) => this.setState({ categoriesMap: map }))
  }

  render() {
    const { children } = this.props;
    const { categoriesMap } = this.state;
    const value = { categoriesMap };
    return <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  }
} 