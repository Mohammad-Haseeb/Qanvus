import HeaderMain from './MainHeader/CompleteHeader';
import ColorLine from './HomePage/ColorLines';
import LastLogo from './HomePage/TurnkeyServicesAndList/lastLogo';
export default function Layout({ children }) {
  return (
    <>
      <HeaderMain />
      <ColorLine />
      <main>{children}</main>
      <LastLogo />
      <ColorLine />
    </>
  )
}
