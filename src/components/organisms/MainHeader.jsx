import Logo from "../molecules/header/Logo"
import MainMenu from "../molecules/header/MainMenu"

const MainHeader = () => {
  return (
    <div className="w-full fixed bg-gradient z-10">
      <div className="w-full m-auto flex items-center lg:max-w-256">
        <Logo />
        <MainMenu />

      </div>
    </div>
  )
}


export default MainHeader