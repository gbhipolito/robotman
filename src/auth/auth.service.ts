import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        ) {}

   async validateUser(username: string, pass: string) {
        let user;
        try {
            user = await this.usersService.findByUsername(username); // TODO user findUserForAuth w/c uses UserCredEntity instead
        } catch (error) {
            console.error(error);

            throw error;
        }

        if (user?.password === pass) { // TODO hashing
            const {password, ...result} = user; // strip password property

            return result;
         }

         return null;
   }

   async login(user) {
    const payload = { username: user.username, sub: user.id };

    return {
        access_token: this.jwtService.sign(payload),
    };
   }
}