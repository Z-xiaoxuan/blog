function fn(str) {
  const stack = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '}' && stack[stack.length - 1] === '{') {
      stack.pop()
    } else if (str[i] === ']' && stack[stack.length - 1] === '[') {
      stack.pop()
    } else if (str[i] === ')' && stack[stack.length - 1] === '(') {
      stack.pop()
    } else {
      stack.push(str[i])
    }
  }

  return stack.length === 0 ? true : false
}

console.log(fn('{(]}'))

console.log(fn('{}[]{}'))

console.log(fn('{]'))

console.log(fn('{[)]'))

console.log(fn('{[{}]}'))
