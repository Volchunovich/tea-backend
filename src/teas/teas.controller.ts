import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TeasService } from './teas.service';

@Controller('teas')
export class TeasController {
  constructor(private readonly teasService: TeasService) {}

  @Get()
  getTeas() {
    return this.teasService.getTeas();
  }

  @Post()
  async addTea(@Body() body: any) {
    return await this.teasService.addTea(body);
  }

  @Delete('/:id')
  async deleteTea(@Param() { id }: { id: string }) {
    return await this.teasService.deleteTea(id);
  }
}
