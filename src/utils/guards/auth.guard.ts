import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { FirebaseAuthService } from 'src/firebase';
import { Reflector } from '@nestjs/core';

@Injectable()
export class FirebaseGuard implements CanActivate {
  constructor(
    private firebaseAuthService: FirebaseAuthService,
    private reflector: Reflector,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.headers.authorization) {
      return false;
    }
    const result = await this.firebaseAuthService.verifyToken(
      request.headers.authorization,
    );
    const types = this.reflector.get<string[]>('types', context.getHandler());
    if (result) {
      if (types) {
        if (types.includes(result.type)) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
}
