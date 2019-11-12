import { Test, TestingModule } from '@nestjs/testing';
import { Call } from './call';

describe('Call', () => {
  let provider: Call;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Call],
    }).compile();

    provider = module.get<Call>(Call);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
