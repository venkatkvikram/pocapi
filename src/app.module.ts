import * as yaml from 'js-yaml';
import * as fs from 'fs';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/user.entity';
import { UserModule } from './users/user.module';

const dbConfigFile = fs.readFileSync('config/dbConfig.yml', 'utf8');
const dbConfig = yaml.load(dbConfigFile);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dbConfig,
      entities: [User],
      synchronize: false,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
