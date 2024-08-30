import imgKiyomiya from '../../assets/image/img_panelist-kiyomiya.webp'

const Top = () => {
  return (
    <>
      <section className="container p-4 mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 my-8 border-l-[6px] border-orange-500 pl-4">
          清宮・廣瀬が語り尽くす「チームビルディング」
        </h2>
        <div className="flex gap-4 flex-row">
          <div className="w-full">
            <img src={imgKiyomiya} />
          </div>
          <div className="flex flex-col gap-2 text-slate-800 mx-auto">
            <p className="text-base leading-8">
              チームスポーツの代表格とも言える「ラグビー」において、チームビルディングの重要性は言うまでもありません。ビジネスにおいてもラグビーのチームビルディングには応用のヒントが豊富にあると言われています。
            </p>
            <p className="text-base leading-8">
              本シンポジウムでは、ラグビー界の第一線でリーダーとして実績を残し、現在も多方面で活躍を続ける登壇者たちが、そのノウハウやプロセスをそれぞれの経験や視点から語ります。
            </p>
            <p className="text-base leading-8">
              パネリストには、早稲田大学、サントリー、ヤマハ発動機、それぞれのラグビー部を監督として優勝に導いた清宮克幸氏（現・日本ラグビーフットボール協会
              副会長）、元日本代表キャプテンで、現在はチームビルディングのサポートやリーダーシップのアドバイスなど多方面に活躍する、廣瀬俊朗氏（現・ラグビー日本代表チームディレクター補佐）の２名。
              <br />
              ファシリテータには元・日本ラグビーフットボール協会コーチングディレクターで、フォロワーシップの概念を提唱し、現在は組織開発の分野で活躍する中竹竜二氏を迎えて議論します。
            </p>
            <p className="text-base leading-8">
              スポーツ、ビジネス、その他、あらゆるフィールドで奮闘するリーダーに参加頂きたいシンポジウムです。
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 my-4 min-md:flex-row">
          <div className="flex gap-2 p-3 border border-slate-300 rounded-md">
            <div className="w-full">
              <img src={imgKiyomiya} />
            </div>
            <dl className="flex flex-col gap-2 text-slate-800">
              <dt className="font-bold text-sm text-slate-500">パネリスト</dt>
              <dt className="text-base font-bold">
                清宮 克幸
                <span className="text-sm font-normal block">
                  （きよみや かつゆき）
                </span>
              </dt>
              <dd className="text-sm">
                元早稲田大学ラグビー部監督／サントリーラグビー部監督／ヤマハ発動機監督
              </dd>
            </dl>
          </div>
          <div className="flex gap-2 p-3 border border-slate-300 rounded-md">
            <div className="w-full">
              <img src={imgKiyomiya} />
            </div>
            <dl className="flex flex-col gap-2 text-slate-800">
              <dt className="font-bold text-sm text-slate-500">パネリスト</dt>
              <dt className="text-base font-bold">
                清宮 克幸
                <span className="text-sm font-normal block">
                  （きよみや かつゆき）
                </span>
              </dt>
              <dd className="text-sm">
                元早稲田大学ラグビー部監督／サントリーラグビー部監督／ヤマハ発動機監督
              </dd>
              <dd className="text-[12px] border-blue-500 border text-center text-blue-500 mt-auto rounded-sm py-1">
                <a href="">プロフィール詳細</a>
              </dd>
            </dl>
          </div>
          <div className="flex gap-2 p-3 border border-slate-300 rounded-md">
            <div className="w-full">
              <img src={imgKiyomiya} />
            </div>
            <dl className="flex flex-col gap-2 text-slate-800">
              <dt className="font-bold text-sm text-slate-500">パネリスト</dt>
              <dt className="text-base font-bold">
                清宮 克幸
                <span className="text-sm font-normal block">
                  （きよみや かつゆき）
                </span>
              </dt>
              <dd className="text-sm">
                元早稲田大学ラグビー部監督／サントリーラグビー部監督／ヤマハ発動機監督
              </dd>
            </dl>
          </div>
        </div>
      </section>
      <div className="container flex gap-4 mx-auto">
        <section className="container p-4 mx-auto">
          <h2 className="text-xl font-bold text-slate-800 my-2 border-l-4 border-orange-500 pl-4">
            協賛者講演「アスリートと医食同源米」
          </h2>
          <div className="flex flex-col gap-2 text-slate-800">
            <p className="text-sm leading-6">
              食品免疫の専門家である東京医科歯科大学安達貴大准教授、公認スポーツ栄養士であり、阪神タイガースの栄養アドバイザーを務める吉谷佳代先生、医食同源米によって我が国の国難を解決するためのコンソーシアム世話役である東洋ライス（株）江原崇光氏を講師に、「スポーツと食」について考察します。
            </p>
          </div>
        </section>
        <section className="container p-4 mx-auto">
          <h2 className="text-xl font-bold text-slate-800 my-2 border-l-4 border-orange-500 pl-4">
            協賛者講演「菅平史点景」
          </h2>
          <div className="flex flex-col gap-2 text-slate-800">
            <p className="text-sm leading-6">
              元サンケイスポーツの吉田宏氏を講師に、長年の取材エピソードなどから、ラグビーそして菅平高原の魅力について語って頂きます。
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Top
