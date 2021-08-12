export function fiveAndGreaterOnly(arr) {
    return arr.filter((num) => {
        if (num >= 5) {
            return num;
        }
    })
}

export function evensOnly(arr) {
    return arr.filter(function(x) {
        if (x % 2 === 0 || x === 0) {
          return x;
        }
      })
}

export function fiveCharactersOrFewerOnly(arr){
  return arr.filter(string => string.length <= 5)
}

export function peopleWhoBelongToTheIlluminati(arr){
  return arr.filter((name) => {
      if(name.member === true) {
          return name;
      }
  })
}

export function ofAge(arr){
  return arr.filter((people) => {
      if(people.age > 18)
      return people;
  })
}