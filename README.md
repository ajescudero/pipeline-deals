# Pipeline Deals Challenge

Solution to challenge implemented using RoR and ReactJS.

## Installation

Run Bundler and yarn to install required packages.

```bash
bundler install
```
and
```bash
yarn install
```

## API
Add your api key to pipeline-deals/config/webpack/development.js 

```javascript
process.env.REACT_APP_API_KEY = your_key
```

## Run application
```bash
rails s
```

## Run tests
```bash
yarn test
```

## Test coverage
```bash
yarn test -- --coverage --watchAll=false
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
