/*
 * Webブース予約 設定ファイル
 * 別の環境へ移すときは、基本的にこのファイルだけを書き換えます。
 */
window.WEBBOOTH_CONFIG = {
  /*
   * 予約の保存先
   *   "gas"   … Googleスプレッドシート（GitHub Pages など、どこに置いても共有できる）
   *   "php"   … 同じサーバーの api.php → data/bookings.csv（PHPが動くサーバー）
   *   "local" … この端末のブラウザだけ（動作確認用）
   *   "auto"  … gasUrl があれば gas、api.php が動けば php、どちらもなければ local
   */
  backend: "auto",

  // Apps Script を「ウェブアプリ」としてデプロイしたときの URL（…/exec）
  gasUrl: "",

  // api.php の場所（index.html からの相対パス）
  phpUrl: "api.php",

  // 他の人の予約を読み直す間隔（秒）
  pollSeconds: 10,

  // 教室の一覧（先頭が初期表示）。id は保存データに記録される値
  places: [
    { id: "331", name: "331教室" }
  ]
};
