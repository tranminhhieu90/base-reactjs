import HttpException from './httpException';

export class AccountAlreadyExistsException extends HttpException {
  constructor(data: string) {
    super(500, `Account ${data} is exist.`);
  }
}

export class EmailAlreadyExistsException extends HttpException {
  constructor(data: string) {
    super(500, `Email ${data} is exist.`);
  }
}

