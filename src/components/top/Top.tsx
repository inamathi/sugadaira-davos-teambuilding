import imgKiyomiya from '../../assets/image/img_panelist-kiyomiya.webp'
import imgHirose from '../../assets/image/img_panelist-hirose.webp'
import imgNakatake from '../../assets/image/img_panelist-nakatake.webp'
import imgBnrKurumaisu from '../../assets/image/img_bnr-kurumaisu.webp'
import imgBnrMain from '../../assets/image/img_bnr-main.webp'
import imgSougei from '../../assets/image/img_sougei.webp'
import styles from './styles.module.scss'

const Top = () => {
  return (
    <>
      <section className="container p-4 mx-auto">
        <h2
          className={`${styles.maintitle} text-3xl max-sm:text-2xl max-sm:text-left  text-slate-800 my-8  text-center leading-[48px] drop-shadow-lg max-sm:my-4`}
        >
          ラグビー合宿の聖地・菅平から
          <br />
          スポーツ・ビジネス...
          <br className="max-sm:block hidden" />
          全てのチームリーダーへ
        </h2>
        <div className="flex gap-8 flex-row max-sm:flex-col">
          <div className="w-1/2 max-sm:w-full flex flex-col justify-start">
            <img src={imgBnrMain} className="w-full" />
            <img
              src={imgBnrKurumaisu}
              className="px-16 py-8 max-sm:p-0 max-sm:mt-4"
            />
          </div>
          <div className="flex flex-col gap-2 text-slate-00 mx-auto w-1/2 justify-start max-sm:w-full">
            <h2 className="text-2xl font-bold text-slate-800 border-l-[6px] border-orange-500 pl-4 leading-10">
              清宮・廣瀬が語り尽くす 「チームビルディング」
            </h2>
            <p className="text-[15px] leading-7 max-sm:text-sm max-sm:leading-6 indent-4 ">
              チームスポーツの代表格とも言える「ラグビー」において、チームビルディングの重要性は言うまでもありません。ビジネスにおいてもラグビーのチームビルディングには応用のヒントが豊富にあると言われています。
            </p>
            <p className="text-[15px] leading-7 max-sm:text-sm max-sm:leading-6 indent-4 ">
              本シンポジウムでは、ラグビー界の第一線でリーダーとして実績を残し、現在も多方面で活躍を続ける登壇者たちが、そのノウハウやプロセスをそれぞれの経験や視点から語ります。
            </p>
            <p className="text-[15px] leading-7 max-sm:text-sm max-sm:leading-6 indent-4 ">
              パネリストには、早稲田大学、サントリー、ヤマハ発動機、それぞれのラグビー部を監督として優勝に導いた清宮克幸氏（現・日本ラグビーフットボール協会
              副会長）、元日本代表キャプテンで、現在はチームビルディングのサポートやリーダーシップのアドバイスなど多方面に活躍する、廣瀬俊朗氏（現・ラグビー日本代表チームディレクター補佐）の２名。
              <br />
              ファシリテータには元・日本ラグビーフットボール協会コーチングディレクターで、フォロワーシップの概念を提唱し、現在は組織開発の分野で活躍する中竹竜二氏を迎えて議論します。
            </p>
            <p className="text-[15px] leading-7 max-sm:text-sm max-sm:leading-6 indent-4 ">
              スポーツ、ビジネス、その他、あらゆるフィールドで奮闘するリーダーに参加頂きたいシンポジウムです。
            </p>
            <h2 className="text-center font-bold text-xl text-orange-500 p-2 border-b-2 border-orange-500 mt-4">
              このシンポジウムは、
              <br />
              オフライン会場とオンライン視聴の
              <br className="hidden max-sm:block" />
              ハイブリッド開催です
            </h2>
            <dl className={`${styles.overview} mt-4`}>
              <div>
                <dt>開催日</dt>
                <dd className={styles.large}>
                  <span className={styles.small}>2024年</span>11
                  <span className={styles.small}>月</span>4
                  <span className={styles.small}>日</span>
                  <span className={styles.small}>（月・祝）</span>
                </dd>
              </div>
              <div>
                <dt>時間</dt>
                <dd className={styles.large}>
                  15:30〜18:00<span>*オフライン会場は18時より懇親会あり</span>
                </dd>
              </div>
              <div>
                <dt>オフライン会場 （８０名締切）</dt>
                <dd>
                  〒386-2204 長野県上田市菅平高原 1223-3930
                  <br />
                  プチホテル「ゾンタック」
                </dd>
              </div>
              <div>
                <dt>オンライン視聴 （２００名締切）</dt>
                <dd>Zoomでの配信を予定</dd>
              </div>
              <div>
                <dt>申し込み</dt>
                <dd>
                  <a href="">Peatixサイト</a>よりチケットご購入いただけます
                  <br />
                  10枚以上ご購入の方は特別価格ございます。
                  <br />
                  <a href="mailto:support@sugadaira-davos.com">メールにて</a>
                  お申し込みください
                </dd>
              </div>
            </dl>
            <a
              href="https://teambuilding-sugadaira.peatix.com/view"
              target="_blank"
              className="block bg-green-600 hover:bg-green-500 text-white p-8 rounded-xl font-bold text-lg max-sm:text-base mt-4 transition-colors text-center"
            >
              Peatixでチケットを購入する
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-4 my-8 min-md:flex-row max-md:flex-col max-md:my-4">
          <div className="flex gap-2 p-3 border border-slate-300 rounded-md flex-1 bg-slate-100">
            <div className="flex-1">
              <img src={imgKiyomiya} />
            </div>
            <dl className="flex flex-col gap-2 text-slate-800 flex-1">
              <dt className="font-bold text-sm text-slate-500">パネリスト</dt>
              <dt className="text-base font-bold">
                清宮 克幸
                <span className="text-sm font-normal block palt">
                  （きよみや かつゆき）
                </span>
              </dt>
              <dd className="text-sm max-sm:text-[12px]">
                公益財団法人日本ラグビーフットボール協会
                副会長／元早大・サントリー・ヤマハ発動機ラグビー部監督 他
              </dd>
            </dl>
          </div>
          <div className="flex gap-2 p-3 border border-slate-300 rounded-md flex-1 bg-slate-100">
            <div className="flex-1">
              <img src={imgHirose} />
            </div>
            <dl className="flex flex-col gap-2 text-slate-800 flex-1">
              <dt className="font-bold text-sm text-slate-500">パネリスト</dt>
              <dt className="text-base font-bold">
                廣瀬 俊朗
                <span className="text-sm font-normal block palt">
                  （ひろせ としあき）
                </span>
              </dt>
              <dd className="text-sm max-sm:text-[12px]">
                元ラグビー日本代表キャプテン／ラグビー日本代表チームディレクター補佐（リーダーシップ担当）
                他
              </dd>
            </dl>
          </div>
          <div className="flex gap-2 p-3 border border-slate-300 rounded-md flex-1 bg-slate-100">
            <div className="flex-1">
              <img src={imgNakatake} />
            </div>
            <dl className="flex flex-col gap-2 text-slate-800 flex-1">
              <dt className="font-bold text-sm text-slate-500">
                ファシリテータ
              </dt>
              <dt className="text-base font-bold">
                中竹 竜二
                <span className="text-sm font-normal block palt">
                  （なかたけ りゅうじ）
                </span>
              </dt>
              <dd className="text-sm max-sm:text-[12px]">
                元日本ラグビーフットボール協会コーチングディレクター 他
              </dd>
            </dl>
          </div>
        </div>
      </section>
      <div className="container flex gap-4 mx-auto max-sm:flex-col">
        <section className="container p-4 mx-auto">
          <h2 className="text-xl font-bold text-slate-800 my-2 border-l-4 border-orange-500 pl-4 max-sm:text-lg">
            協賛者講演「アスリートと医食同源米」
          </h2>
          <div className="flex flex-col gap-2 text-slate-800">
            <p className="text-sm leading-6">
              食品免疫の専門家である東京医科歯科大学安達貴大准教授、管理栄養士／公認スポーツ栄養士の吉谷佳代先生、医食同源米によって我が国の国難を解決するためのコンソーシアム世話役である東洋ライス（株）江原崇光氏を講師に、「スポーツと食」について考察します。
            </p>
          </div>
        </section>
        <section className="container p-4 mx-auto">
          <h2 className="text-xl font-bold text-slate-800 my-2 border-l-4 border-orange-500 pl-4 max-sm:text-lg">
            特別講演「菅平史点景」
          </h2>
          <div className="flex flex-col gap-2 text-slate-800">
            <p className="text-sm leading-6">
              元サンケイスポーツの吉田宏氏を講師に、長年の取材エピソードなどから、ラグビーそして菅平高原の魅力について語って頂きます。
            </p>
          </div>
        </section>
      </div>
      <section className="container mx-auto my-8 ">
        <div className="w-3/5 mx-auto border-2 border-slate-300 px-8 py-2 rounded-2xl max-sm:flex-col max-sm:py-4 max-sm:w-[90%]">
          <h3 className="font-bold text-slate-800 text-center mt-3">
            ＼ 会場参加の方へ ／
          </h3>
          <div className="w-full flex gap-8 mx-auto items-center max-md:flex-col">
            <div className="w-[300px] max-sm:w-[200px]">
              <img src={imgSougei} alt="宿泊施設から会場の無料送迎あります" />
            </div>
            <p className="leading-7 text-slate-800 text-base max-sm:text-sm max-sm:leading-7">
              菅平には会場となるプチホテル「ゾンタック
              」のほかにも数多くの宿泊施設がございます。ご宿泊の施設より会場へは無料送迎いたします。
              <div className="flex justify-center items-center">
                <a
                  href=""
                  className="text-center mt-8 py-2 px-8 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-100"
                >
                  菅平の宿泊施設（準備中）
                </a>
              </div>
            </p>
          </div>
        </div>
      </section>
      <section className="my-8">
        <dl className="container mx-auto flex justify-center gap-16 rounded-lg mt-8 text-slate-600 max-xl:flex-col max-xl:gap-1 max-xl:w-3/5">
          <div className="flex items-center max-sm:flex-col">
            <dt className="font-bold text-sm my-2">主 催 ：</dt>
            <dd>NPO法人日本ダボス会議</dd>
          </div>
          <div className="flex items-center max-sm:flex-col">
            <dt className="font-bold text-sm my-2">後 援 ：</dt>
            <dd className="palt">
              <a
                href="https://www.underarmour.co.jp/top/CSfTop.jsp"
                target="_blank"
                className="text-blue-500 hover:text-blue-300 hover:underline palt"
              >
                （株）ドーム（アンダーアーマー）
              </a>
              ／
            </dd>
            <dd>菅平高原観光協会</dd>
          </div>
          <div className="flex items-center max-sm:flex-col">
            <dt className="font-bold text-sm my-2">協 賛 ：</dt>
            <dd>医食同源米コンソーシアム／</dd>
            <dd className="palt">（株）フラグスポート 他</dd>
          </div>
        </dl>
      </section>
    </>
  )
}

export default Top
