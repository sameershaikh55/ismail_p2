import "./Style/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import { Route, Switch } from "react-router";
import { Provider } from "react-redux";

// IMPORTING PAGES
import Main from "./pages/Main";

function App() {
	return (
		<Provider store={store}>
			<Switch>
				<Route exact path="/" component={Main} />
			</Switch>
		</Provider>
	);
}

export default App;
