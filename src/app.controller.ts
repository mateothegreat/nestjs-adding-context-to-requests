import { Controller, Get, UseGuards } from '@nestjs/common';
import { Principal } from './principal';
import { PrincipalGuard } from './principal-guard';
import { User } from './user';

@Controller()
export class AppController {

    @Get()
    @UseGuards(PrincipalGuard)
    public test(@Principal() principal: User): User {
        return principal;
    }
}
