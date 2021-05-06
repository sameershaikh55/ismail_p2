import "./Style/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from "./redux/store";
import { Route, Switch } from "react-router";
import { Provider } from "react-redux";

// IMPORTING PAGES
import Main from "./pages/Main";
import StartAProject from "./pages/StartAProject";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import WebDevelopment from "./pages/WebDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import UIUX from "./pages/UIUX";
import MVPDevelopment from "./pages/MVPDevelopment";
import Error from "./pages/Error";
import CaseStudies from "./pages/CaseStudies";
import ICB from "./pages/ICB";
import Travel from "./pages/Travel";
import ECommerceWeb from "./pages/ECommerceWeb";
import TravelHelps from "./pages/TravelHelps";
import Healthcare from "./pages/Healthcare";
import Construction from "./pages/Construction";
import Education from "./pages/Education";

function App() {
	return (
		<Provider store={store}>
			<ScrollToTop />
			<Switch>
				<Route exact path="/" component={Main} />
				<Route exact path="/start_A_Project" component={StartAProject} />
				<Route exact path="/aboutUs" component={AboutUs} />
				<Route exact path="/blog" component={Blog} />
				<Route exact path="/webDevelopment" component={WebDevelopment} />
				<Route exact path="/appDevelopment" component={AppDevelopment} />
				<Route exact path="/UIUX" component={UIUX} />
				<Route exact path="/mvpDevelopment" component={MVPDevelopment} />
				<Route exact path="/caseStudies" component={CaseStudies} />
				<Route exact path="/icb" component={ICB} />
				<Route exact path="/travel" component={Travel} />
				<Route exact path="/eCommerce" component={ECommerceWeb} />
				<Route exact path="/travelHelp" component={TravelHelps} />
				<Route exact path="/healthcare" component={Healthcare} />
				<Route exact path="/construction" component={Construction} />
				<Route exact path="/education" component={Education} />
				<Route component={Error} />
			</Switch>
		</Provider>
	);
}

export default App;
