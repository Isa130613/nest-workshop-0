import { Injectable } from '@nestjs/common';
@Injectable()
export class LoansService {
  calculateLoanRisk(userProfile: { creditScore: number }): string {
    if (userProfile.creditScore > 700) {
      return 'Low Risk';
    } else {
      return 'High Risk';
    }
  }
}
