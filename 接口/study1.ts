interface A {
  name: string;
}

interface A {
  age: number;
}
//接口重名会合并 必须满足两个接口声明的类型
let obj: A = {
  name: "你好",
  //   age:'15'  不能将类型“string”分配给类型“number” 类型不符合会报错
  age: 1,
};
