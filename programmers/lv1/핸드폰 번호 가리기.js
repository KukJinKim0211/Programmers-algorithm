function solution(phone_number) {
  var answer = "";
  let new_phone = "";
  console.log(phone_number.slice(phone_number.length - 4, phone_number.length));

  for (let i = 0; i < phone_number.length - 4; i++) {
    new_phone += "*";
  }
  answer = new_phone.concat(
    phone_number.slice(phone_number.length - 4, phone_number.length),
  );
  console.log(answer);
  return answer;
}

solution("01048535704");
