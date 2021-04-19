import { Test, TestingModule } from '@nestjs/testing';
import { ThirdPartyAccountsController } from './third-party-accounts.controller';

describe('ThirdPartyAccountsController', () => {
  let controller: ThirdPartyAccountsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThirdPartyAccountsController],
    }).compile();

    controller = module.get<ThirdPartyAccountsController>(ThirdPartyAccountsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
