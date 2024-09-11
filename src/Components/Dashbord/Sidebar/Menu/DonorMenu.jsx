import { IoCreateOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom'
import MenuItem from "./MenuItem";

const DonorMenu = () => {
    return (
        <div>

            <MenuItem label= 'Create Request' address='create-donation-request' icon={IoCreateOutline}/>
            <MenuItem label= 'My Request' address='my-listings' icon={IoCreateOutline}/>
            

        </div>
    );
};

export default DonorMenu;