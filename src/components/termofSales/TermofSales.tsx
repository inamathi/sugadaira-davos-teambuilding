import styles from './styles.module.scss'

const TermofSales = () => {
  return (
    <div className="w-1/2 mx-auto my-8 max-sm:w-full max-sm:px-4">
      <h1 className="text-2xl font-bold">特定商取引法についての表記</h1>
      <table className={`${styles.basic} my-8`}>
        <tbody>
          <tr>
            <th>URL：</th>
            <td>https://sugadaira-davos.com/term-of-sales</td>
          </tr>
          <tr>
            <th>販売事業者名：</th>
            <td>NPO法人 日本ダボス会議</td>
          </tr>
          <tr>
            <th>運営責任者名：</th>
            <td>寺坂信也</td>
          </tr>
          <tr>
            <th>問い合わせ窓口：</th>
            <td>
              <a href="mailto:support@sugadaira-davos.com" className="block">
                support@sugadaira-davos.com
              </a>
              電話番号開示をご希望の場合は、上記メールアドレスにご連絡いただければ、遅延なく開示いたします
            </td>
          </tr>
          <tr>
            <th>法人所在地：</th>
            <td>〒386-2204 長野県上田市菅平高原 1223-3930</td>
          </tr>
          <tr>
            <th>商品以外の必要代金：</th>
            <td>銀行振り込み、コンビニ決済など、支払いに関わるその手数料</td>
          </tr>
          <tr>
            <th>お支払い方法：</th>
            <td>
              開催イベントのチケット販売は、Peatixにて行っております。Peatixにて用意された支払い方法に準じます
            </td>
          </tr>
          <tr>
            <th>代金の支払い時期：</th>
            <td>
              開催イベントのチケット販売は、Peatixにて行っております。Peatixにて用意された支払い方法の支払い時期に準じます
            </td>
          </tr>
          <tr>
            <th>サービスの実施時期：</th>
            <td>イベント開催当日にサービスをご提供いたします</td>
          </tr>
          <tr>
            <th>チケットのキャンセルについて：</th>
            <td>
              開催イベントのチケット販売は、Peatixにて行っております。
              <br />
              Peatixの当該イベントページにキャンセル条件を提示しております。
              <br />
              ただし、主催者都合やなんらかの事情でイベントが中止になった場合は全額返金いたします
            </td>
          </tr>
        </tbody>
      </table>
      <button className="block border px-4 py-2 border-blue-500 rounded-md mx-auto text-sm text-blue-500 my-8">
        <a href="/">トップに戻る</a>
      </button>
    </div>
  )
}

export default TermofSales
