import { Injectable } from '@nestjs/common';
import {createVouchers} from "./svc/createVouchers";

@Injectable()
export class AppService {
  getVouchers(n: number): string[] {
    return createVouchers(n)
  }
}
