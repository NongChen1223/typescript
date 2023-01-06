interface Person {
  name: string;
  age?: number; // ?代表类型是可选的 非必要
  [index: number]: string; //索引签名 索引签名属性必须是 string 或者 number
}
let p: Person = {
  name: "李思",
  age: 1,
};
