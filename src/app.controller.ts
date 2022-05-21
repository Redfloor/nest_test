import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('vouchers')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':n')
  getVouchers(  @Param('n')n: number): string[]  {
    return this.appService.getVouchers(n);
  }
}
