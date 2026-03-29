import {test , expect} from '@playwright/test';
import { request } from 'node:http';

test('check API response',async({request})=>{
   const response = await request.get('https://api.github.com');
   expect(response.status()).toBe(200);
})