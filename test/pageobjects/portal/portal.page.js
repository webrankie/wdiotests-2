import Page from '../page';

export default class PortalPage extends Page {
    get linkCourses () { return $('[data-qa="topmenu-Courses"]'); }
    get linkCards () { return $('[data-qa="topmenu-Cards"]'); }
    get linkDiary () { return $('[data-qa="topmenu-Diary"]'); }
    get linkChallenges () { return $('[data-qa="topmenu-Challenges"]'); }

    async goToCourses() {
       return (await this.linkCourses).click();
    }

    async goToCards() {
        return (await this.linkCards).click();
    }

    async goToDiary() {
       return (await this.linkDiary).click();
    }

    async goToChallenges() {
       return (await this.linkChallenges).click();
    }
}