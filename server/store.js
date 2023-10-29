import { Level } from 'level';
import _ from 'lodash';

const db = new Level('lottery-register-db', { valueEncoding: 'json' });

export async function register(userId, deviceId, appId) {
    const data = await (db.get(deviceId).catch(err => ({})));
    data[appId] = userId;
    console.log(data);
    return db.put(deviceId, data);
}

export function allUsers() {

}
