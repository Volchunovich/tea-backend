import { Injectable } from '@nestjs/common';
import { TeasRepository } from './teas.repository';

@Injectable()
export class TeasService {
  constructor(private readonly teasRepository: TeasRepository) {}

  getTeas() {
    return this.teasRepository.getTeas();
  }

  async addTea(tea: any) {
    return this.teasRepository.addTea(tea);
  }

  async deleteTea(id: string) {
    return this.teasRepository.deleteTea(id);
  }
}
