import JdLogo from '../../assets/image/img_logo-jd.svg'

const Footer = () => {
  return (
    <>
      <div className="bg-[#333] p-8 text-white">
        <div className="flex flex-col justify-center items-center gap-2">
          <img src={JdLogo} className="w-[80px]" />
          <div className="text-[#e7e7e7] text-sm font-bold">
            NPO法人 日本ダボス会議
          </div>
        </div>
        <ul className="text-sm flex gap-4 justify-center mt-4 max-sm:flex-col max-sm:items-center max-sm:mt-8">
          <li>
            <a href="/about">日本ダボス会議について</a>
          </li>
          <li>
            <a href="/term-of-sales">特定商取引法についての表記</a>
          </li>
          <li>
            <a href="/privacy">プライバシーポリシー</a>
          </li>
        </ul>
      </div>
      <div className="bg-[#1a1a1a] text-white py-2 text-[12px] text-center">
        © NPO法人 日本ダボス会議 2024
      </div>
    </>
  )
}

export default Footer
