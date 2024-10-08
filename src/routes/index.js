import {
    BrowserRouter,
    Routes,
    Route,
    // Outlet,
    // Navigate,
} from "react-router-dom";
import Home from "../page/home";
import MainLayout from "../component/layout/mainLayout";
import ContactUs from "../page/contactUs";
import Offerings from "../page/offerings";

//   const PrivateRoutes = () => {
//     const user = localStorage.getItem("user");
//     if (!user) {
//       return <Navigate to="/" />;
//     }
//     return <Outlet />;
//   };

// const OtherRoutes = () =>{

//   const user = useRecoilValue(userState);
//   if(user){
//     console.log(user,'other route')
//     return <Navigate to="/" />;
//   }
//   return <Outlet />;
// }

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<MainLayout><Home /></MainLayout>} />
                <Route exact path="/contact-us" element={<MainLayout><ContactUs /></MainLayout>} />
                <Route exact path="/offerings" element={<MainLayout><Offerings /></MainLayout>} />
                {/* <Route exact path="/template" element={<Template />} /> */}
                {/* <Route element={<PrivateRoutes />}>

          </Route> */}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
