import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchoolController } from './school/school.controller';
import { SchoolModule } from './school/school.module';

@Module({
  imports: [SchoolModule],
  controllers: [AppController, SchoolController],
  providers: [AppService],
})
export class AppModule {}
