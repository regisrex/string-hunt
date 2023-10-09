## 📦 string-hunt
Fast text searching algorithms for small scale data

[![ci](https://github.com/regisrex/string-hunt/actions/workflows/ci.yml/badge.svg)](https://github.com/regisrex/string-hunt/actions/workflows/ci.yml)

```bash
$  yarn add string-hunt
```

## Usage
```Javascript
const search  = require('string-hunt')

const data = [
    {
        name : "Cedrick",
        age : 20
    },
    {
        name : "Marrick",
        age :  10
    }
]

(() => {
    const results = search(data.map(datum => JSON.stringify(datum)), 'rick0')
    console.log(results.length)    // 2
})()

```
## Contributing
Contributors are welcomed, you can contribute by  opening an issue or making a pull request (which is better 😀).

## Maintainers 
It is maintained by [@pacifiquem](https://github.com/pacifiquem) and [@regisrex](https://github.com/regisrex)

## Licence 
This project is under [MIT Licence](./LICENCE)

