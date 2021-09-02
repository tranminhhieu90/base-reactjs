require('dotenv').config();
import App from './app';
import validateEnv from './utils/validateEnv';
import AccountController from './controllers/account.controller';
import AuthenController from './controllers/authen.controller';
import RewardController from './controllers/reward.controller';
import CodeController from './controllers/code.controller';
import WinnerController from './controllers/winner.controller';

validateEnv();
const app = new App(
  [
    new AccountController(),
    new RewardController(),
    new CodeController(),
    new WinnerController(),
  ],
);
app.listen();
