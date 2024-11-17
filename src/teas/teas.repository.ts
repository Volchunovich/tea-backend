import { Injectable } from '@nestjs/common';
import { POSTGRES_TABLE_NAMES } from '../infrastructure/database/postgres.constant';
import { Knex, InjectKnex } from 'nestjs-knex';

@Injectable()
export class TeasRepository {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  getTeas() {
    return this.knex(POSTGRES_TABLE_NAMES.TEAS).select();
  }

  async addTea(tea: any) {
    return this.knex(POSTGRES_TABLE_NAMES.TEAS).insert(tea).returning('id');
  }

  async deleteTea(id: string) {
    return this.knex(POSTGRES_TABLE_NAMES.TEAS).where({ id }).delete();
  }
}
