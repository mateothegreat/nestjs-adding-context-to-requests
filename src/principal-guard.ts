import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { User } from './user';

/**
 * Principal Guard for protecting routes and automatically retrieving the users profile.
 */
@Injectable()
export class PrincipalGuard implements CanActivate {

    /**
     * Called before a route is executed.
     *
     * @param {ExecutionContext} context
     * @returns {Promise<boolean>}
     */
    public async canActivate(context: ExecutionContext): Promise<boolean> {

        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();

        if (request.headers.authorization) {

            const split = request.headers.authorization.split(' ');

            try {

                //
                // Verify and decode the JWT token.
                //
                // const decoded = jwt.verify(split[1], process.env.JWT_SECRET);
                const decoded = {
                    id: 123
                };

                //
                // Call your database or whatever to get the user by the id from
                // the jwt token (decoded['id']).
                //
                const user: User = {
                    id: decoded['id'],
                    email: 'matthew@matthewdavis.io',
                    website: 'https://matthewdavis.io',
                    secret: 'super'
                };

                //
                // Assuming that the user is found, set the user on the request.
                //
                if (user) {
                    request['principal'] = user;
                    return true;
                }

            } catch (e) {
                return false;
            }
        }
    }
}
