import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeasModule } from './teas/teas.module';
import { KnexModule } from 'nestjs-knex';

@Module({
  imports: [
    TeasModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KnexModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        config: {
          client: configService.get<string>('DB_SQL_CLIENT', 'pg'),
          connection: {
            host: configService.get<string>('DB_SQL_HOST', 'localhost'),
            port: configService.get<number>('DB_SQL_PORT', 5432),
            user: configService.get<string>('DB_SQL_USERNAME', 'your_user'),
            password: configService.get<string>(
              'DB_SQL_PASSWORD',
              'your_password',
            ),
            database: configService.get<string>(
              'DB_SQL_DATABASE',
              'tea-backend-db',
            ),
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
