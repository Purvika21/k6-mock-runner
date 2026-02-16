import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = __ENV.LOAD_STATEGY === 'ramp'
?{
stages: [
        { duration: '30s', target: 5 },
        { duration: '30s', target: 15 },
        { duration: '30s', target: 0 },
      ],
    }
: {
      vus: __ENV.VUS ? parseInt(__ENV.VUS) : 10,
      duration: __ENV.DURATION || '1m',
    };
   

export default function () {
  const res = http.get('https://test.k6.io');

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
