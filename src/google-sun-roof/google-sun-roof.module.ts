import { Module } from '@nestjs/common';
import { GoogleSunRoofService } from './google-sun-roof.service';
import { GoogleSunRoofController } from './google-sun-roof.controller';

@Module({
  providers: [GoogleSunRoofService],
  controllers: [GoogleSunRoofController]
})
export class GoogleSunRoofModule {}
