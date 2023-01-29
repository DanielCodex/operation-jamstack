import Container from "@components/Container";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className="w-full bg-blue-500">
      <Container>
        <p className="text-2xl m-0 text-white">Amir&apos;s store</p>
        <p className="m-0 flex items-center gap-2 justify-center text-white">
          <FaShoppingCart />
          $0.00
        </p>
      </Container>
    </header>
  );
}
export default Header;
