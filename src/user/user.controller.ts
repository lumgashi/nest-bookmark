import { Controller, Get, UseGuards, Patch } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('profile')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  updateProfile() {
    return '';
  }
}
