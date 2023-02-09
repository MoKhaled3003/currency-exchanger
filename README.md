# Currency Exchange
Node.js, Express.js web server stream currency rates through web socket using socket.io and user friendly UI with React.js to exchange from USD to BTC or ETH.

### Dependencies  
-   [Node.js](https://nodejs.org/en/)
-   [React.js](https://reactjs.org/)
- [Mongoose](https://mongoosejs.com/)
- [Socket.io](https://socket.io/)
- [CurrencyApi](https://rapidapi.com/currencyapinet/api/currencyapi-net/)

## Running the app in production mode
Note: please setup environment variables file so the application work properly at ```currency-exchanger/apps/backend```

- cd to 'currency-exchanger' directory

```bash
# production mode using docker
$ docker compose up
```
## Running the Node App in development mode

- cd to ```'currency-exchanger/apps/backend'``` directory
- set ```.example.env``` file with environment variables needed
- RATES_API_INTERVAL: the interval in which application will request rates from currencyApi and stream it.
- RAPID_API_KEY: the api key of your account at [CurrencyApi](https://rapidapi.com/currencyapinet/api/currencyapi-net/)
- MONGODB_URI: MongoDB connection string

```bash
# development mode to run Node.js application
$ npm install
$ npm start
```
## Running the React App in development mode
- cd to 'currency-exchanger/apps/frontend' directory
```bash
# development mode to run React.js application
$ npm install --force
$ npm start
```

## Stay in touch
- Author - [Mohamad Khaled](https://www.linkedin.com/in/engmokhaled/)
