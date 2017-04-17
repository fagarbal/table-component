## Table component with VanillaJS [DEMO](https://fagarbal.github.io/pyrite-table/)

### Installation

- NPM

``` bash
npm install pyrite-table
```

- Single-file [DOWNLOAD](https://raw.githubusercontent.com/fagarbal/pyrite-table/master/build/pyrite-table.min.js)

```html
<script src="pyrite-table.min.js"></script>
```

### Usage [EXAMPLES](https://github.com/fagarbal/pyrite-table/tree/master/examples)

- ES6

``` javascript
import Table from 'pyrite-table';

const config = { ... };
const model = [{ ... }, ... ];

Table.load(config, model);
```

- CommonJS

``` javascript
const Table = require('pyrite-table');

const config = { ... };
const model = [{ ... }, ... ];

Table.load(config, model);
```

- Single-file


``` javascript
var config = { ... };
var model = [{ ... }, ... ];

pyrite.Table.load(config, model);
```

### Config

``` javascript
{
	"table": "id-table",

	"fields": [{
		"title": "Col Title",
		"field": "property.in.model",
		"id": "id-for-filtering",
		"autorefresh": Number // Optional: Number of miliseconds.
	}, ... ],

	"search": {
		"id": "id-for-global-search",
		"fields": ["id-field", "id-another-field", ... ] // Optional: By default all fields.
	},

	"text": {
		"total": "id-total-text",
		"filter": "id-filter-text"
	}
}
```

### Model
``` javascript
[{
	"name": "Pepe",
	"lastname": "Garcia",
	"age": 21,
	"city": "Gijon"
}, {
	"name": "Jose",
	"lastname": "Alonso",
	"age": 12,
	"city": "Oviedo"
}, {
	"name": "Maria",
	"lastname": "Fernandez",
	"age": 22,
	"city": "Aviles"
}, {
	"name": "Pepa",
	"lastname": "Rodriguez",
	"age": 33,
	"city": "Loroñe"
}]
```
