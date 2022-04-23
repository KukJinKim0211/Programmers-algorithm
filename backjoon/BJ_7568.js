// 덩치
const data = require('fs').readFileSync('example.txt').toString().split(/\n/);
const dataCount = Number(data[0]);
// 각 사람의 스탯을 관리할 클래스 선언
class People {
  constructor(weight, height) {
    this.weight = weight;
    this.height = height;
    this.rank = 0;
  }
}
// 객체를 관리할 배열 생성
const peoples = [];
// 사람의 정보를 객체 배열에 저장
for (let i = 1; i <= dataCount; i++) {
  peoples.push(new People(Number(data[i].split(/\s/)[0]), Number(data[i].split(/\s/)[1])));
}
let answer = [];
for (let i = 0; i < peoples.length; i++) {
  // 배열 순서대로 정보 가져오기
  const curpeople = peoples[i];
  // filter를 이용해서 무게,키가 큰 사람을 모은 배열을 새로 생성
  const peopleArray = peoples.filter(people => people.weight > curpeople.weight && people.height > curpeople.height);
  // 생성된 배열 길이의 + 1이 등수
  answer.push(peopleArray.length + 1);
}
console.log(answer.join(' '));