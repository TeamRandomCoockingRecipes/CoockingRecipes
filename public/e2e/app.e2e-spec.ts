import { CoockingRecipesPage } from './app.po';

describe('coocking-recipes App', function() {
  let page: CoockingRecipesPage;

  beforeEach(() => {
    page = new CoockingRecipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
