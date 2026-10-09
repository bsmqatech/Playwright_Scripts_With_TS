
//hooks: before(setup) and after(teardown)

import { test } from '@playwright/test';

//1
//Runs ONCE before all tests in the test file
test.beforeAll(async () => {
    console.log('Before All -- connect to the DB');
    //user creation
    //admin settings
    //uploading test data
});

//2
//Runs before each test
test.beforeEach(async () => {
    console.log('Before Each -- login to the app');
});

//Runs after each test
test.afterEach(async () => {
    console.log('After Each -- logout from the app');
});

//Runs ONCE after all tests in the test file
test.afterAll(async () => {
    console.log('After All -- disconnect to the DB');
    //delete user
    //reset admin settings
    //delete the test data
});

test('title test', async () => {
    console.log('title test');
});

test('home page test', async () => {
    console.log('home page test');
});

test('payment page test', async () => {
    console.log('payment page test');
});

test('cart page test', async () => {
    console.log('cart page test');
});

test('search page test', async () => {
    console.log('search page test');
});
