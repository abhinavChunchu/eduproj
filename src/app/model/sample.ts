export class SampleService {

    private dataStore: any ;

    set setData(data) {
        this.dataStore = data;
    }

    get getdata() {
        return this.dataStore;
    }
}
