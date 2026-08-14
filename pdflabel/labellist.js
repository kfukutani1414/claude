// ラベル用紙プリセットのデータ
// file:// で直接開けるよう .json ではなく .js として定義する
//
// 「A4 24面」「A4 44面」はエーワン™の実製品仕様（ラベルサイズ・列数×行数）を
// 公式サイトで確認できたが、上下左右の余白・ラベル間余白の正確な値は
// 図解画像でのみ示されており数値としては取得できなかったため、
// 余白=左右または上下で均等割り、ラベル間余白=0mmと仮定して逆算した概算値。
// 「A4 72面」はエーワン™に該当製品が見当たらず、面数一覧サイトごとにサイズが
// バラバラだったため、6列×12行になるよう自作アプリの計算式から逆算した
// 汎用的な概算値（特定の実製品には対応しない）。
// 実際の市販ラベル用紙に印刷する際は、必ず購入した用紙の仕様と照合すること。
const labelList = [
  {
    name: '手動設定'
    // 数値を上書きしない（現在の入力値をそのまま維持する）
  },
  {
    name: 'A4 72面',
    marginTop: 8.5,
    marginRight: 8,
    marginBottom: 8.5,
    marginLeft: 8,
    labelWidth: 31.5,
    labelHeight: 22.4,
    labelGap: 1
  },
  {
    name: 'A4 24面',
    marginTop: 12.9,
    marginRight: 0,
    marginBottom: 12.9,
    marginLeft: 0,
    labelWidth: 70,
    labelHeight: 33.9,
    labelGap: 0
  },
  {
    name: 'A4 44面',
    marginTop: 8.8,
    marginRight: 8.4,
    marginBottom: 8.8,
    marginLeft: 8.4,
    labelWidth: 48.3,
    labelHeight: 25.4,
    labelGap: 0
  }
];
