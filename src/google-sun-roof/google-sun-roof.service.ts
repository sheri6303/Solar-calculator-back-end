import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleSunRoofService {
    getHello(): string {
        return 'Hello from google sun roof module!';
      }
}
