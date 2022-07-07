import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RobotsModule } from './robots/robots.module';
import { MysqlTypeOrmModule } from './db';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [RobotsModule, MysqlTypeOrmModule, UtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
