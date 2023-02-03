# lodash pullAll

::: tip
类似 `_.pull`，这个方法接收一个要移除值的数组。
:::

## 使用

```javascript
_.pullAll(array, values)
```

这个方法类似 `_.pull`，区别是这个方法接收一个要移除值的数组。

**Note:** 不同于 `_.difference`, 这个方法会改变数组 `array`。

## 引入版本

4.0.0

## 参数

1. `array` (Array): 要修改的数组。
2. `values` (Array): 要移除值的数组。

## 返回

(Array): 返回 `array`。

## 例子

```javascript
var array = [1, 2, 3, 1, 2, 3];
 
_.pullAll(array, [2, 3]);
console.log(array);
// => [1, 1]
```
