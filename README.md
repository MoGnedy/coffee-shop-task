# To be able to run the app please do the following:

- `npm i`

- Add your own configuration to: `config/config.json`

- Copy .env.example to .env

- Create the required DBs in mysql (coffee_shop_dev, coffee_shop_test, coffee_shop).

- `npm run sequelize db:migrate`
- `npm run sequelize db:seed:all`
- `npm start`


## To run the test cases
-  `npm test`
## APIs

1- `GET /api/v1/coffee-machines`

2- `GET /api/v1/coffee-pods`



## API Documentaion
- [API's Postman Documentaion](https://documenter.getpostman.com/view/1970211/Tzeah5TL)
