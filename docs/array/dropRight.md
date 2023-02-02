# lodash dropRight

::: tip
创建一个切片数组，去除 `array` 尾部的n个元素。
:::

## 使用

```javascript
_.dropRight(array, [n=1])
```

创建一个切片数组，去除 `array` 尾部的n个元素。（n默认值为1。）

## 引入版本

3.0.0

## 参数

1. `array` (Array): 要查询的数组。
2. `[n=1]` (number): 要去除的元素个数。

## 返回

(Array): 返回 `array` 剩余切片。

## 例子

```javascript
_.dropRight([1, 2, 3]);
// => [1, 2]
 
_.dropRight([1, 2, 3], 2);
// => [1]
 
_.dropRight([1, 2, 3], 5);
// => []
 
_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
```
