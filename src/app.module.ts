// src/app.module.ts
import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config';
import { studentModule } from './student/student.module';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const redisUrl = configService.get<string>('redis.url');
        return {
          store: await redisStore({
            url: redisUrl,
          }),
        };
      },
      inject: [ConfigService],
    }),
    studentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
