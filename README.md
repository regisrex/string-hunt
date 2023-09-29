# Full Text Search Algorithm
___

A simple implementation of finding text search results from JSON data.

```bash
$  yarn add ftsa
```

## Usage
```Javascript
const { search }  = require('ftsa')

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
(async () => {
    const results = search(data.map(datum => JSON.stringify(datum)), 'rick0')
    console.log(results.length)    // 2
})()

```
## Contributing
Contributors are welcomed, you can contribute by  opening an issue or making a pull request (with is better 😀).

## Maintainers 
It is maintained by [@pacifiquem](https://github.com/pacifiquem) and [@regisrex](https://github.com/regisrex)

## Licence 
This project is under [MIT Licence](./LICENCE)

