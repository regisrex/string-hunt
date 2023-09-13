# Full Text Search Algorithm
___

A simple implementation of finding text search results from JSON data.

```bash
$  yarn add ftsa
```

## Usage
```Javascript
const { search }  = require('ftsa')

(async () => {
    const results = await search(myjsondata, 'searchquery')
    console.log(results)
})()

```
## Contributing
Contributors are welcomed, you can contribute by  opening an issue or making a pull request (with is better 😀)
Just follow the [CONTRIBUTING.md](./CONTRIBUTING.md) to know how to set up this project.
locally.

## Maintainers 
It is maintained by [@pacifiquem](https://github.com/pacifiquem) and [@regisrex](https://github.com/regisrex)

## Licence 
This project is under [MIT Licence](./LICENCE)

