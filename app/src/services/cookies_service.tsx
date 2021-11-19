import cookie from 'react-cookies';

export default class CookiesService {
    static setOrUpdate(name: string, value: string | number) {
        cookie.save(name, value, {});
    }

    static get(name: string, ifMissing: string | number): string | number {
        return cookie.load(name) || ifMissing;
    }
}