import test from 'ava';
import rq from 'request-promise';

test.skip('http', async t => {
  const options = {
    method: 'POST',
    uri: 'http://localhost:3000/verify-token',
    form: {
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNTc0NTNlMzViMjdmMjc1MTIwZDQwM2NlIiwiZGV2aWNlX2lkIjoiOUE5MjQzNjktQ0EyRi00M0M2LTlFNDAtNjM2Q0EyRUUwM0U2IiwidHMiOjE0ODE4NzU4OTM3MzUsImFwcF9pZCI6IjU2YzZjMzA5MjQzY2I3MjgyMDVhM2RmZiIsImlhdCI6MTQ4MTg3NTg5M30.sqqw0wP4c-vQ7ZZZqieOvtWpMfyiZLoPOQ-ARZES6Yo',
    },
    json: true
  };
  try {
    const result = await rq(options);
    console.log('result', result);
    t.truthy(result);
  } catch (err) {
    console.log('err---->', err);
    t.falsy(err);
  }
});

test('get', async t => {
  const options = {
    method: 'GET',
    uri: 'http://localhost:3000/verify-token',
    form: {
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNTc0NTNlMzViMjdmMjc1MTIwZDQwM2NlIiwiZGV2aWNlX2lkIjoiOUE5MjQzNjktQ0EyRi00M0M2LTlFNDAtNjM2Q0EyRUUwM0U2IiwidHMiOjE0ODE4NzU4OTM3MzUsImFwcF9pZCI6IjU2YzZjMzA5MjQzY2I3MjgyMDVhM2RmZiIsImlhdCI6MTQ4MTg3NTg5M30.sqqw0wP4c-vQ7ZZZqieOvtWpMfyiZLoPOQ-ARZES6Yo',
    },
    json: true
  };
  try {
    const result = await rq(options);
    console.log('result', result);
    t.truthy(result);
  } catch (err) {
    console.log('err---->', err);
    t.falsy(err);
  }
});
