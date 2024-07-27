import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { studentModule } from './student/student.module';
import { redisStore } from 'cache-manager-redis-yet';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load:[config],
      isGlobal:true
    }),
    
    CacheModule.registerAsync({
    isGlobal: true,
    imports: [ConfigModule],
    useFactory: async (config) => {
      const store = await redisStore({socket:{
        host:config.get('redis.host'),
        port:config.get('redis.port')
    },
  })
    return { store};
    },
    inject: [ConfigService],
  }),
  studentModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
