//javaScript課題①-4

const tasks = [
  { content: '掃除', genre: '家事' },
  { content: '買い物', genre: '外出' },
  { content: '散歩', genre: '運動' }
];

// 最初のタスクを表示する
tasks.forEach((task, index) => {
  console.log(`${index} : [内容]${task.content}、[ジャンル]${task.genre}`);
});

const content = prompt("タスクを入力してください：");
const genre = prompt("ジャンルを入力してください：");

if (content && genre) { 
  tasks.push({ content, genre });
  alert("新しいタスクを追加しました。");
}

// 更新されたタスクを表示する
tasks.forEach((task, index) => {
  console.log(`${index} : [内容]${task.content}、[ジャンル]${task.genre}`);
});
