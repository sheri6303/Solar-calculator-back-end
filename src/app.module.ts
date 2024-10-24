import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleSunRoofModule } from './google-sun-roof/google-sun-roof.module';

@Module({
  imports: [ GoogleSunRoofModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
