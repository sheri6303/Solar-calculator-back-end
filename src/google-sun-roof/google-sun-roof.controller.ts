import { Controller,Get } from '@nestjs/common';
import { GoogleSunRoofService } from './google-sun-roof.service'; 
@Controller('google-sun-roof')
export class GoogleSunRoofController {
    constructor(private readonly GoogleSunRoofService: GoogleSunRoofService) {}

  @Get()
  getHello(): string {
    return this.GoogleSunRoofService.getHello();
  }
}
