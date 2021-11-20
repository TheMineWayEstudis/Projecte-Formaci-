import cookie from 'react-cookies';

export default class CookiesService {
    static setOrUpdate(name: string, value: number): number {
        cookie.save(name, value, {sameSite: true});
        return value;
    }

    static get(name: string, ifMissing: number): number {
        return parseInt(cookie.load(name) || ifMissing);
    }
}