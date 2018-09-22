import { AppMainNavModule } from './app-main-nav.module';

describe('AppMainNavModule', () => {
  let appMainNavModule: AppMainNavModule;

  beforeEach(() => {
    appMainNavModule = new AppMainNavModule();
  });

  it('should create an instance', () => {
    expect(appMainNavModule).toBeTruthy();
  });
});
