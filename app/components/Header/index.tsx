import Link from "next/link";
import { Button, HeaderComponent } from "./style";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";

const Header = () => {
    return ( 
        <HeaderComponent>
            <Link href="/">
                <Image src="/logo.png" alt="FSW Barber" height={22} width={120}/>
            </Link>

            <Button>
                <LuMenu size={16} />
            </Button>

            {/* <DrawerMenu opened={openedMenu} close={closeMenu} />
            <DrawerShoppingCart opened={openedShoppingCart} close={closeShoppingCart} /> */}
        </HeaderComponent>
     );
}
 
export default Header;