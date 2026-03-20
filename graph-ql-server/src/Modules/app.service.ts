import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  test(): string {
    return 'This is on a different URL!';
  }
}
