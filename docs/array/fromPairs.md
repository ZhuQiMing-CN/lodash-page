# lodash fromPairs

::: tip
返回一个由键值对 `pairs` 构成的对象。
:::

## 使用

```javascript
_.fromPairs(pairs)
```

与 `_.toPairs` 正好相反；这个方法返回一个由键值对 `pairs` 构成的对象。

## 引入版本

4.0.0

## 参数

1. `pairs` (Array): 键值对 `pairs`。

## 返回

(Object): 返回一个新对象。

## 例子

```javascript
_.fromPairs([['fred', 30], ['barney', 40]]);
// => { 'fred': 30, 'barney': 40 }
```
