import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { FirebaseAuthService } from './auth/auth.service';
const firebaseAuthService = new FirebaseAuthService();

export const FirebaseUser = createParamDecorator(
  async (data: unknown, ctx: ExecutionContext) => {
    const token = ctx.switchToHttp().getRequest().headers.authorization;
    const result = await firebaseAuthService.verifyToken(token);
    return result;
  },
);
