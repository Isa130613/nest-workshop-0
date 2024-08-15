import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseFilters,
  BadRequestException,
} from '@nestjs/common';
import { LoansService } from './loans.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { HttpErrorFilter } from 'src/helpers/exceptionFIlter';

@Controller('loans')
@UseFilters(HttpErrorFilter)
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Post()
  create(@Body() createLoanDto: CreateLoanDto) {
    try {
      return `Loan of dto ${createLoanDto} created: ${this.loansService.calculateLoanRisk({ creditScore: Math.random() * 100 })}`;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Get(':id')
  getLoanStatus(@Param('id') id: string) {
    return `Status of loan ${id}`;
  }
}
