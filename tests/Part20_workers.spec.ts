//workers: processes --> nodeJS
//sequence or parallel mode

//workers = 1 : sequence mode
//workers = 4 : parallel mode

//default worker count: cpu core = 8 / 2 = 4

//cpu core = 1; w=4 : sequence 

//fullyParallel = true, w=4
//total tcs = 82 (test case pool)
//all the files and their test cases also will start running in the parallel mode
//make sure that all the test cases are independent

//tc1: order id = 123
//tc2: oder id = 123

//fullyParallel = false, w=4
//w1 -- file 1 (10 tcs) -- 10 tcs will run in the sequential mode
//w2 -- file 2(5 tcs) -- 5 tcs will run in the sequential mode
//w3 -- file 3
//w4 -- file 4

//AAA --> 

//CRUD:
//delete a user:
//tc1: create a user: 101
//tc2: get the user : 101
//tc3: delete the user: 101

//tc:  AAA
//step1: create a user: 101
//step2: get the user : 101
//step3: delete the user: 101 + assertion