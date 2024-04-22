import { createBrowserRouter } from "react-router-dom";
import { IndexPage } from "src/pages/IndexPage";

function setIsOpenCart(open: boolean): void {
    console.log(`Cart is now ${open ? 'open' : 'closed'}`);
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage setIsOpenCart={setIsOpenCart}/>
    }
])

