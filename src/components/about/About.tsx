import styles from './styles.module.scss'

const About = () => {
  return (
    <div className="w-1/2 mx-auto my-8 max-sm:w-full max-sm:px-4">
      <h1 className="text-2xl font-bold">日本ダボス会議について</h1>
      <table className={`${styles.basic} my-8`}>
        <tr>
          <th>設立：</th>
          <td>2006年8月10日</td>
        </tr>
        <tr>
          <th>所在地：</th>
          <td>長野県上田市菅平高原1223番地3930</td>
        </tr>
        <tr>
          <th>目的：</th>
          <td>
            菅平高原の潜在的能力の開発と、
            <br />
            より一層の活性化および発展のための施策を提言し、その実現を支援すること
          </td>
        </tr>
        <tr>
          <th>理事長：</th>
          <td>口元習策（2024.8〜）前理事長は故・奥島孝康元早大総長</td>
        </tr>
        <tr>
          <th>事務局理事：</th>
          <td>
            寺坂 信也{' '}
            <a href="mailto:terasaka@terramgmt.co.jp">
              terasaka@terramgmt.co.jp
            </a>
          </td>
        </tr>
      </table>
      <button className="block border px-4 py-2 border-blue-500 rounded-md mx-auto text-sm text-blue-500 my-8">
        <a href="/">トップに戻る</a>
      </button>
    </div>
  )
}

export default About
