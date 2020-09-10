export class User {
    constructor(
        public email: string,
        public phone: number,
        public password: string,
        public topic: string,
        public timePreference: string,
        public subscribe: boolean
    ) { }
}
