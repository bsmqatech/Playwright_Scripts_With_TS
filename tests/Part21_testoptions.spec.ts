

import { expect, test } from '@playwright/test';
test('title test', async () => {
    console.log('title test');
});

test('url test', async () => {
    console.log('url test');
});

// test.only('search test', async () => {
//     console.log('search test');
// });

test.skip('cart test', async () => {
    console.log('cart test');
    //WIP
});

test('payment test', async () => {
    test.fixme();//known inssue, fix it later
    console.log('payment test');
});


test('Order test', async () => {
    test.fail(); //this test is expected to fail
    console.log('payment test');
    expect(100).toBe(200);
});


