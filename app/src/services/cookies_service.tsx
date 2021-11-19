import cookie from 'react-cookies';

export default class CookiesService {
    static setOrUpdate(name: string, value: string | number): string | number {
        cookie.save(name, value, {});
        return value;
    }

    static get(name: string, ifMissing: string | number): string | number {
        return cookie.load(name) || ifMissing;
    }
}