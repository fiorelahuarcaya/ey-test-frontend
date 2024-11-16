import Logo from "./svg/Logo";


const Menu = () => {
  return (
    <div className="flex flex-row w-full justify-center items-center bg-gray-50 py-4">
      <div className="w-full wrapper flex flex-row items-center justify-between " >
        <a href="/">
          <Logo height="48"/>
        </a>
        <nav className="flex flex-row gap-6">
          <a className="text-black hover:underline" href="/">Proveedores</a>
          <a className="text-black hover:underline" href="/login">Login</a>
        </nav>

      </div>
    </div>
  );
};

export default Menu;


