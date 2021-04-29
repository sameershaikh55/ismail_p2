import "./Style/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import { Route, Switch } from "react-router";
import { Provider } from "react-redux";

// IMPORTING PAGES
import Main from "./pages/Main";
import StartAProject from "./pages/StartAProject";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";

function App() {
	return (
		<Provider store={store}>
			<ScrollToTop />
			<Switch>
				<Route exact path="/" component={Main} />
				<Route exact path="/start_A_Project" component={StartAProject} />
				<Route exact path="/aboutUs" component={AboutUs} />
			</Switch>
		</Provider>
	);
}

export default App;
