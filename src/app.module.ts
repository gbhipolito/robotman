import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RobotsModule } from './robots/robots.module';
import { MysqlTypeOrmModule } from './db';

@Module({
  imports: [RobotsModule, MysqlTypeOrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
