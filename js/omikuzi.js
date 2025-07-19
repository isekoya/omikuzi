function Omikuji() {

  let omikuji = ["大吉","吉","中吉","小吉","末吉","凶","大凶"];
  let r = Math.floor( Math.random() * omikuji.length) ;//おみくじぶんの数字を作ります
  document.getElementById("contents").innerHTML = omikuji[r];//結果をid="contents"に表示します
}