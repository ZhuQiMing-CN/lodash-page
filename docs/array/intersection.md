# lodash intersection

::: tip
创建唯一值的数组，这个数组包含所有给定数组都包含的元素。
:::

## 使用

```javascript
_.intersection([arrays])
```

创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用 `SameValueZero` 进行相等性比较。（注：可以理解为给定数组的交集）

## 引入版本

0.1.0

## 参数

1. `[arrays]` (...Array): 待检查的数组。

## 返回

(Array): 返回一个包含所有传入数组交集元素的新数组。

## 例子

```javascript
_.intersection([2, 1], [4, 2], [1, 2]);
// => [2]
```
