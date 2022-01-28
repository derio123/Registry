import Home from "../pages/home/Home";
import User from "../pages/user/User";

const routesConfig = [
    {
        id:1,
        path: "/",
        component:Home,
        exact:true
    },
    {
        id:2,
        path: "/user",
        component:User,
        exact:true
    }
]

export default routesConfig