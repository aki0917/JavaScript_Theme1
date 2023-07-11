//javaScript課題①-4

const tasks = [
  { name: '掃除', genre: '家事' },
  { name: '買い物', genre: '外出' },
  { name: '散歩', genre: '運動' }
];

// 最初のタスクを表示する
tasks.forEach((task, index) => {
  console.log(`${index} : [内容]${task.name}、[ジャンル]${task.genre}`);
});

const newTaskName = prompt("タスクを入力してください：");
const newTaskGenre = prompt("ジャンルを入力してください：");

if (newTaskName && newTaskGenre) { 
  tasks.push({ name: newTaskName, genre: newTaskGenre });
  alert("新しいタスクを追加しました。");
}

// 更新されたタスクを表示する
tasks.forEach((task, index) => {
  console.log(`${index} : [内容]${task.name}、[ジャンル]${task.genre}`);
});
