//javaScript課題①-3

const getCurrentTasks = [`掃除`, `買い物`, `散歩`];
// ここで最初のタスクを表示する
getCurrentTasks.forEach((task,index) => {
  console.log(index + `:` + task);
});
const newTask = prompt("確認,追加,削除、終了の4つのいずれかを入力してください");
if (newTask) {
  getCurrentTasks.push(newTask);
  alert("新しいタスクを追加しました。");
}
getCurrentTasks.forEach((task,index) => {
  console.log(index + `:` + task);
});