//1. object란 ?
//primitive 는 변수를 하나밖에 선언하지 못한다.
// object = {key: value} 오브젝트는 키와 벨류의 집합
//1. literals and properties
const name = 'ellie';
const age = '4';
// object 만드는법
const obj1 = {}; // 'object literal' 괄호를 만든것
const obj2 = new Object(); // 'object constructor' 키워드를 이용 ,class 라는 템플릿을 이용하여 만든다.

function print(person){
  console.log(person.name);
  console.log(person.age);
}
const ellie = {name :'ellie', age: 4};
print(ellie);

//2. computed properties
// key 는 string타입으로 가져와야 한다.
console.log(ellie.name);
console.log(ellie['name']);
//ex
function printvalue(obj, key){
  console.log(obj[key]);
}
printvalue(ellie, 'name');
printvalue(ellie, 'age');

//3. Property value shorthand , 4.constructor function
const person4 = new Person('ellie', 30);
console.log(person4);
function Person(name, age){
  this.name = name;
  this.age = age
}
//5. in operator
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);

//6. for..in vs for..of
//ellie 의 자료들을 보여준다
for (key in ellie){
  console.log(key)
}
// 순차적으로 값을 배열해준다.
const array = [1, 2, 3, 5];
for(value of array){
  console.log();
}

//7. Fun cloning

//object.assgin(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'};
const user2 = user;
//user2.name = 'coder';
console.log(user);
//user ref 에 user2 값을 복사했다
// 두번째. old way
const user3 = {};
for (key in user){
  user3[key] = user[key];
}
console.log(user3);
// for문을 이용해서 user에 있는 ref를 user3으로 이동하였다.

// 세번째. object.assign()
/*const user4 = {};
Object.assgin(user4, user);*/
// 위에꺼를 간략히 한것 ↓ (전달하려는 값이 비어있는 경우)
const user4 = Object.assign({}, user);
console.log(user4);

//test. 무엇이 출력될까요?
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
// blue 와 big 이 출력된다. 그 이유는 fruit2가 fruit1을 덮어 씌우기 때문에 fruit1이 출력된다.(뒤에 있는것이 앞에있는 것을 잡아먹는디. )
