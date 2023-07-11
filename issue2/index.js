//javaScript課題①-2

let answer = "";

while (answer !== "東京") {
  answer = prompt("日本の首都は？");
  if (answer === "東京") {
    alert("正解です！");
  } else {
    alert("不正解です！");
  }
}
