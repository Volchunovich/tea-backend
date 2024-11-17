import { Module } from '@nestjs/common';
import { TeasController } from './teas.controller';
import { TeasService } from './teas.service';
import { TeasRepository } from './teas.repository';
import { KnexModule } from 'nestjs-knex';

@Module({
  imports: [KnexModule],
  controllers: [TeasController],
  providers: [TeasService, TeasRepository],
})
export class TeasModule {}
