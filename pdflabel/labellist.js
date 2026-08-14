// ラベル用紙プリセットのデータ
// file:// で直接開けるよう .json ではなく .js として定義する
//
// 各メーカーの公式サイト（エーワン: a-one.co.jp、ヒサゴ: hisago.co.jp）で
// 製品ページを確認し、「ラベルサイズ」「列数×行数」を実データとして採用した。
// ただし上下左右の余白・ラベル間余白の正確な値は公式サイトでも図解画像でしか
// 示されておらず数値としては取得できなかったため、
// 余白=左右または上下で均等割り、ラベル間余白=0mmと仮定してA4サイズ
// （210mm×297mm）から逆算した概算値である。
// 実際の市販ラベル用紙に印刷する際は、必ず購入した用紙の仕様と照合すること。
const labelList = [
  {
    name: '手動設定'
    // 数値を上書きしない（現在の入力値をそのまま維持する）
  },
  {
    name: 'エーワン 72202（2面）',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    labelWidth: 210,
    labelHeight: 148.5,
    labelGap: 0
  },
  {
    name: 'エーワン 72204（4面）',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    labelWidth: 105,
    labelHeight: 148.5,
    labelGap: 0
  },
  {
    name: 'エーワン 72206（6面）',
    marginTop: 28.5,
    marginRight: 10.5,
    marginBottom: 28.5,
    marginLeft: 10.5,
    labelWidth: 63,
    labelHeight: 120,
    labelGap: 0
  },
  {
    name: 'エーワン 72208（8面）',
    marginTop: 10.5,
    marginRight: 8,
    marginBottom: 10.5,
    marginLeft: 8,
    labelWidth: 97,
    labelHeight: 69,
    labelGap: 0
  },
  {
    name: 'エーワン 72210（10面）',
    marginTop: 21.5,
    marginRight: 18.6,
    marginBottom: 21.5,
    marginLeft: 18.6,
    labelWidth: 86.4,
    labelHeight: 50.8,
    labelGap: 0
  },
  {
    name: 'ヒサゴ OP861（12面）',
    marginTop: 21.6,
    marginRight: 21.2,
    marginBottom: 21.6,
    marginLeft: 21.2,
    labelWidth: 83.8,
    labelHeight: 42.3,
    labelGap: 0
  },
  {
    name: 'エーワン 72212（12面）',
    marginTop: 21.6,
    marginRight: 18.6,
    marginBottom: 21.6,
    marginLeft: 18.6,
    labelWidth: 86.4,
    labelHeight: 42.3,
    labelGap: 0
  },
  {
    name: 'エーワン 72218（18面）',
    marginTop: 9,
    marginRight: 9.75,
    marginBottom: 9,
    marginLeft: 9.75,
    labelWidth: 63.5,
    labelHeight: 46.5,
    labelGap: 0
  },
  {
    name: 'エーワン 72220（20面）',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    labelWidth: 42,
    labelHeight: 74.25,
    labelGap: 0
  },
  {
    name: 'エーワン 72221（21面）',
    marginTop: 15.15,
    marginRight: 9.75,
    marginBottom: 15.15,
    marginLeft: 9.75,
    labelWidth: 63.5,
    labelHeight: 38.1,
    labelGap: 0
  },
  {
    name: 'エーワン 72324（24面）',
    marginTop: 12.9,
    marginRight: 0,
    marginBottom: 12.9,
    marginLeft: 0,
    labelWidth: 70,
    labelHeight: 33.9,
    labelGap: 0
  },
  {
    name: 'ヒサゴ OP863（24面）',
    marginTop: 0.1,
    marginRight: 0,
    marginBottom: 0.1,
    marginLeft: 0,
    labelWidth: 35,
    labelHeight: 74.2,
    labelGap: 0
  },
  {
    name: 'エーワン 72230（30面）',
    marginTop: 21.5,
    marginRight: 25.05,
    marginBottom: 21.5,
    marginLeft: 25.05,
    labelWidth: 53.3,
    labelHeight: 25.4,
    labelGap: 0
  },
  {
    name: 'エーワン 72244（44面）',
    marginTop: 8.8,
    marginRight: 8.4,
    marginBottom: 8.8,
    marginLeft: 8.4,
    labelWidth: 48.3,
    labelHeight: 25.4,
    labelGap: 0
  },
  {
    name: 'エーワン 72265（65面）',
    marginTop: 10.7,
    marginRight: 9.75,
    marginBottom: 10.7,
    marginLeft: 9.75,
    labelWidth: 38.1,
    labelHeight: 21.2,
    labelGap: 0
  },
  {
    name: 'エーワン 72200（200面）',
    marginTop: 48.5,
    marginRight: 25,
    marginBottom: 48.5,
    marginLeft: 25,
    labelWidth: 20,
    labelHeight: 8,
    labelGap: 0
  }
];
