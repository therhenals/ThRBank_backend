import { Test, TestingModule } from '@nestjs/testing';
import { ThirdPartyAccountsService } from './third-party-accounts.service';

describe('ThirdPartyAccountsService', () => {
  let service: ThirdPartyAccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThirdPartyAccountsService],
    }).compile();

    service = module.get<ThirdPartyAccountsService>(ThirdPartyAccountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
