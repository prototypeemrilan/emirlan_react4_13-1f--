import './App.css';
import AboutUs from './pages/aboutUs/aboutUs';
import UsersPage from './pages/usersPage/usersPage';
import BlogPage from "./pages/blogPage/BlogPage";
import ClassPage from "./pages/ClassPage/ClassPage";
import PageClass from "./pages/ClassPage/PageClass";
import ContactsPage from "./pages/contactsPage/contactsPage";
import ProductsPage from "./pages/productsPage/ProductsPage";
import PortfoliePage from "./pages/portfoliePage/PortfoliePage";
import DataPage from "./pages/dataPage/DataPage";

    // function App() {
    //     return (
    //         <div>
    //             <ContactsPage title="From app"/>
    //         </div>
    //     )

function App() {
    const product = {
        // name: "IT-Academy",
        // address: "Максима Горького 18",
        // number: "+996558153587"
    }

    return (
        <div className="container">
            {/*<ContactsPage/>*/}
            {/*<ProductsPage/>*/}
            {/*<PortfoliePage/>*/}
            <DataPage/>
        </div>
)
}

export default App;
