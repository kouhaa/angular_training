import { TrainingWebPage } from './app.po';

describe('training-web App', function() {
  let page: TrainingWebPage;

  beforeEach(() => {
    page = new TrainingWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
