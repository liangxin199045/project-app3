import { getUser } from 'framework';

export default class BookConnect {

    private xml = false;
    public account : string ='';

    public settings() {
      const user = getUser();
      return {
        status: true,
        cookie: true,
        xml: this.xml,
        userInfo: user
      };
    }
}