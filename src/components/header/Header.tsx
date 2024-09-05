import headerImage from '../../assets/image/img_header.webp'
import headerImageMobile from '../../assets/image/img_header-mobile.webp'

const Header = () => {
  return (
    <>
      <div className="block max-sm:hidden border-b-4 border-orange-500">
        <img src={headerImage} className="w-full" />
      </div>
      <div className="hidden max-sm:block border-b-4 border-orange-500">
        <img src={headerImageMobile} className="w-full" />
      </div>
    </>
  )
}

export default Header
