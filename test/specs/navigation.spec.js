import MainPage from '../pageobjects/portal/main.portal.page';
import CoursesPage from '../pageobjects/portal/courses.portal.page';

describe('Navigation', () => {
    before(() => {
        browser.login(process.env.LOGIN, process.env.PASSWORD);
    });

    beforeEach(() => {
        MainPage.open();
    });

    it('courses page opens', async () => {
       await MainPage.goToCourses();
        await CoursesPage.isOpen();
    });
});