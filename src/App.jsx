import { Provider } from "react-redux"
import { store } from "./components/redux/store"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"


function App() {

  return (
    <Provider store={store}>
      <div>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  )
}


export default App
