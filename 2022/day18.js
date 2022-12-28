import { exec } from "./base.js";


const testinput = `2,2,2
1,2,2
3,2,2
2,1,2
2,3,2
2,2,1
2,2,3
2,2,4
2,2,6
1,2,5
3,2,5
2,1,5
2,3,5`;

const rawinput = `7,2,8
15,14,4
3,12,6
18,9,8
6,13,4
7,16,14
7,2,7
14,7,3
15,6,5
12,7,2
2,7,6
11,10,17
14,8,3
6,16,11
8,4,15
12,10,2
7,5,5
12,3,12
11,2,11
13,16,11
4,6,12
5,2,9
2,10,11
12,17,7
12,4,3
10,8,2
4,6,4
6,6,2
17,9,9
8,8,17
3,7,5
5,5,7
15,11,6
10,10,1
9,11,16
1,7,12
16,16,7
15,12,14
3,9,15
12,5,5
17,11,6
17,12,11
3,4,7
3,7,7
14,16,11
10,9,17
13,6,4
13,6,15
11,13,15
3,14,13
7,14,16
5,8,16
12,5,3
9,17,6
8,16,15
6,11,4
4,15,7
12,2,12
11,17,11
12,3,8
10,3,11
14,12,4
4,11,5
13,18,9
14,7,16
8,8,3
14,10,3
12,15,14
6,5,15
15,15,12
15,15,6
6,5,16
8,18,9
4,15,9
16,4,9
12,15,10
5,15,5
16,14,9
12,9,17
7,12,2
3,8,6
10,12,1
12,18,9
4,5,8
9,13,15
10,5,13
17,14,8
7,16,4
5,5,5
8,17,9
12,16,10
3,7,10
5,11,16
10,4,4
8,1,10
2,10,8
15,5,9
5,13,6
17,11,10
3,6,14
8,15,14
13,11,17
3,11,15
5,13,15
11,17,10
5,6,16
16,14,11
12,9,18
11,9,18
9,17,11
3,6,10
7,17,13
7,11,17
14,14,15
12,9,3
4,13,4
13,3,13
11,4,15
5,4,13
8,2,12
13,2,9
3,11,14
6,2,11
4,8,3
12,6,12
10,15,15
6,10,2
6,6,5
14,17,7
6,5,4
7,12,4
5,3,12
6,15,10
5,15,9
6,3,5
14,14,16
5,5,13
1,8,10
7,8,16
2,7,9
10,15,5
16,12,11
13,16,15
10,15,14
16,6,7
6,16,8
8,18,12
15,4,7
6,17,11
5,15,8
17,12,5
3,13,8
14,6,5
4,13,11
11,15,5
2,7,8
9,5,4
12,16,4
14,11,16
14,3,13
13,6,14
5,15,7
2,6,7
11,3,14
5,13,14
12,2,11
6,12,3
16,5,6
15,10,4
2,6,12
15,12,16
11,15,13
2,8,10
4,4,8
9,8,18
4,12,13
8,12,2
16,11,5
7,16,6
6,3,7
16,15,8
10,15,13
12,3,14
13,4,8
2,7,13
6,6,15
11,16,9
8,16,5
8,12,3
14,14,13
8,15,16
10,14,5
13,7,15
13,7,3
3,12,13
9,5,16
5,9,2
15,12,13
7,16,13
2,8,13
7,2,13
8,10,17
10,5,17
3,12,14
10,17,7
17,8,14
6,2,10
1,9,9
6,5,13
10,9,18
3,10,11
14,3,5
13,13,3
15,13,14
10,16,14
13,9,15
5,4,14
10,16,3
9,7,2
8,8,1
11,18,11
13,11,16
16,5,10
3,6,9
7,6,3
6,17,12
8,13,4
9,8,3
15,5,12
6,8,2
8,17,8
14,5,4
11,1,9
9,13,3
8,4,14
11,16,8
10,17,12
18,8,8
17,7,8
8,17,12
5,14,4
16,10,14
16,7,13
15,9,13
4,7,4
2,10,6
10,4,14
7,16,11
4,10,4
17,9,11
16,7,9
7,15,14
3,11,13
11,3,5
16,3,10
6,2,8
5,2,11
8,16,14
16,8,15
12,13,15
3,8,11
12,4,16
10,10,18
7,3,13
5,7,16
4,11,3
10,17,5
7,9,2
15,3,12
13,12,16
13,4,14
6,11,2
15,10,16
8,7,16
16,16,8
2,11,9
17,10,14
3,5,13
13,17,8
14,18,10
15,3,9
17,5,10
14,12,16
7,7,16
6,17,8
9,16,8
9,3,14
15,14,11
15,14,8
17,10,6
9,2,12
5,14,7
11,4,14
5,16,11
11,5,15
3,6,6
14,16,9
9,16,15
10,4,16
6,6,17
8,2,7
13,6,2
9,16,3
8,3,12
9,16,6
6,17,7
10,2,8
12,2,13
6,15,16
15,6,12
10,4,3
11,1,11
15,9,10
11,2,7
17,6,13
5,10,7
8,9,1
7,13,4
16,5,12
16,12,6
14,15,6
10,6,17
7,2,12
13,5,14
12,12,4
7,10,18
5,4,7
8,10,3
3,5,5
13,13,5
15,8,14
12,11,15
13,16,4
17,12,6
11,13,16
7,5,16
14,4,12
16,8,14
6,16,12
13,2,11
17,7,7
15,7,16
14,3,12
9,13,4
2,8,9
3,5,9
6,3,13
15,12,5
2,9,12
8,15,15
7,16,7
9,6,2
13,4,15
6,15,5
17,13,11
13,4,12
11,12,18
10,14,3
11,18,8
4,14,9
12,11,17
8,3,14
4,9,5
16,7,7
11,7,16
10,13,2
4,6,10
6,15,9
15,13,13
2,6,9
16,13,9
5,16,9
12,14,3
13,10,16
5,9,3
16,11,6
18,10,14
16,6,12
10,10,2
16,10,8
15,13,7
17,11,9
6,14,6
5,11,18
12,17,6
16,12,10
14,15,11
11,17,12
4,5,15
7,2,9
6,9,2
2,6,8
15,10,3
16,5,9
3,5,6
12,6,17
4,15,13
4,3,8
6,16,6
16,13,13
4,11,4
15,14,12
5,5,8
7,3,8
18,11,11
5,11,14
16,12,8
5,6,7
6,9,16
13,3,8
6,10,3
5,5,6
18,11,9
16,7,14
12,16,11
5,12,4
3,11,8
6,10,16
12,2,9
8,5,2
14,11,15
5,3,7
15,6,10
11,12,3
14,16,7
14,10,14
16,5,13
2,14,7
9,11,1
14,16,12
4,6,5
1,9,12
5,17,9
5,13,10
6,12,16
10,12,2
11,16,13
2,4,10
7,3,7
6,16,10
1,10,9
4,12,6
13,14,14
10,7,2
3,7,14
6,17,10
4,4,12
4,14,13
10,17,11
16,11,14
12,13,2
4,8,9
3,12,12
16,13,11
13,14,3
3,5,12
4,13,8
13,11,1
4,7,14
12,5,12
10,4,9
11,16,10
8,16,8
3,14,6
11,8,2
4,13,6
13,7,16
7,9,16
2,9,6
8,13,6
16,4,8
5,4,6
11,15,8
5,5,15
16,8,4
3,6,5
5,14,12
2,5,10
12,2,10
2,8,8
8,4,3
8,13,3
8,14,2
2,10,9
6,4,15
10,13,3
12,4,17
13,16,12
11,7,2
13,15,15
1,10,11
13,7,2
10,3,15
5,12,5
13,14,5
4,16,8
8,15,2
14,15,5
14,5,14
14,15,14
10,7,16
15,4,8
15,14,14
15,6,15
4,6,6
8,1,8
6,12,15
12,5,16
11,9,17
15,6,11
13,15,5
9,1,9
13,12,3
7,5,14
12,10,6
5,16,7
15,16,11
18,9,13
14,9,4
14,2,6
3,4,8
5,3,10
5,14,13
6,7,4
15,15,11
11,16,14
5,9,15
10,5,16
3,9,9
9,12,17
6,14,15
16,9,4
2,15,9
12,14,14
11,5,16
2,5,7
11,16,4
3,14,14
14,4,5
7,2,5
15,13,11
10,13,17
3,4,9
4,15,14
10,7,17
11,7,17
10,3,13
4,16,9
15,11,4
6,16,13
5,6,12
3,6,15
9,17,7
11,17,13
9,10,2
12,4,13
6,14,13
4,11,13
5,10,4
7,1,11
4,5,6
1,11,9
11,15,16
11,17,9
14,17,11
11,6,16
4,4,6
9,4,6
9,11,3
15,15,7
6,4,14
17,13,10
15,10,15
16,13,7
8,13,1
6,5,2
5,17,8
3,6,8
15,4,5
4,11,6
8,6,3
9,12,16
15,8,13
17,12,8
9,1,11
16,6,5
6,8,3
15,6,4
1,12,9
15,5,14
11,8,17
9,15,14
11,14,16
8,13,16
5,4,12
6,2,7
15,10,14
13,17,12
16,13,6
18,9,9
14,12,7
5,15,6
11,9,16
17,7,12
10,16,4
9,2,14
3,13,6
4,11,16
17,10,11
9,14,3
8,9,18
13,2,8
6,15,6
16,3,9
15,16,9
15,12,3
13,7,4
15,13,6
4,14,11
8,6,1
18,10,8
13,9,17
4,14,14
17,16,8
6,14,14
7,16,12
8,15,3
2,12,7
10,17,13
0,10,9
17,8,8
8,14,4
9,9,3
9,7,17
14,11,4
4,8,15
11,8,3
13,15,11
7,9,17
18,7,11
7,17,9
15,8,16
10,11,17
7,2,10
13,13,17
15,9,4
9,16,13
4,12,5
14,6,4
6,16,14
3,12,5
10,17,9
12,17,11
12,12,3
17,9,10
12,3,5
2,7,11
8,6,17
16,13,8
11,1,13
7,13,5
13,14,6
3,14,9
7,7,4
6,3,11
17,6,10
15,4,10
15,7,7
12,16,8
5,10,16
14,15,9
8,16,11
15,4,9
16,6,13
17,13,7
12,14,16
9,17,12
8,8,15
14,6,14
12,9,15
16,10,13
2,14,8
8,5,16
10,11,2
6,14,12
9,1,8
11,5,5
5,17,12
10,14,16
16,12,13
3,8,16
9,11,18
12,17,10
10,8,1
15,16,10
2,13,8
10,1,11
5,13,3
11,15,6
7,3,15
6,4,5
14,14,4
8,18,8
4,15,12
13,10,17
18,10,7
9,15,3
2,9,7
12,16,5
13,13,15
4,3,9
13,4,4
17,11,11
7,16,5
16,8,13
3,4,10
11,5,3
2,14,13
2,9,11
4,9,4
3,7,13
13,16,10
4,10,11
14,5,15
17,11,8
15,9,12
8,8,18
5,8,5
5,14,8
6,13,5
6,2,12
16,11,15
8,7,2
2,9,8
8,4,13
17,11,5
6,15,15
13,14,4
14,10,16
16,15,12
11,16,6
10,3,12
3,10,4
4,10,15
13,15,7
3,8,10
4,14,7
8,9,4
16,11,7
10,18,11
17,9,8
9,18,11
12,8,17
15,13,4
10,7,15
1,8,12
15,4,6
9,13,16
14,9,17
7,16,10
8,17,11
14,11,3
10,14,4
15,4,11
14,14,5
13,3,6
8,13,15
4,7,10
2,10,14
8,5,4
16,4,6
4,12,14
3,7,16
16,11,9
5,6,6
7,8,17
14,3,11
6,9,3
15,13,15
16,11,13
13,16,13
6,6,4
8,11,16
4,5,14
16,4,10
10,16,12
13,4,7
6,15,4
7,15,13
14,12,15
7,12,17
9,11,17
7,16,9
8,8,2
3,12,7
9,4,4
13,9,3
2,5,8
10,7,3
8,4,17
17,13,8
11,4,4
13,17,9
8,3,10
16,6,4
15,8,6
12,15,4
9,18,7
10,13,16
7,14,2
7,15,6
3,14,11
13,15,16
10,16,10
14,13,16
5,8,15
7,9,1
12,13,16
13,10,3
6,15,13
10,9,1
17,8,7
4,10,16
3,8,14
4,14,10
5,15,13
17,12,10
13,8,16
4,15,5
8,16,3
16,15,9
7,14,5
2,10,5
9,16,11
7,5,4
18,10,11
18,13,8
17,8,13
3,9,13
11,9,2
11,17,7
4,13,10
16,13,14
4,16,10
13,5,15
5,12,14
14,5,6
7,4,10
6,14,4
7,15,15
18,11,8
5,10,3
18,7,10
12,1,12
17,12,7
9,3,6
16,9,14
16,7,8
9,6,17
3,11,4
15,5,11
2,12,9
12,16,6
9,16,14
18,10,12
11,7,3
15,13,17
7,5,15
16,11,8
4,9,15
1,9,11
5,12,6
5,10,14
6,1,9
9,9,17
16,8,6
10,9,2
7,14,3
8,4,4
6,14,5
15,6,6
3,12,11
10,3,14
12,10,17
15,8,4
5,6,5
5,15,10
9,3,12
17,5,12
7,4,7
5,3,8
10,3,9
4,7,6
13,4,13
3,10,15
6,11,16
15,8,3
11,13,4
14,12,2
5,14,5
14,9,3
6,3,6
14,12,5
4,2,10
13,13,16
16,13,12
6,11,3
8,15,4
12,16,14
10,6,15
12,12,16
17,9,7
8,14,3
11,13,5
7,3,4
11,13,17
8,10,2
7,7,17
2,9,10
8,16,12
15,14,15
3,15,10
11,18,9
13,3,12
11,4,5
5,11,4
5,17,13
3,12,15
17,8,5
16,9,15
11,17,5
11,11,17
6,13,15
14,5,10
10,12,3
12,8,16
7,7,15
2,7,7
14,5,13
14,7,14
9,15,4
3,6,12
11,5,4
11,11,1
5,2,8
5,14,15
7,2,14
10,3,4
9,2,11
2,8,11
10,2,10
10,12,17
9,4,13
2,12,8
14,7,4
12,18,8
14,16,10
7,14,15
10,16,13
8,2,10
14,13,11
3,13,5
17,9,13
5,5,4
4,5,12
11,13,2
7,17,12
5,6,15
17,7,11
15,4,13
12,10,16
11,8,18
9,4,2
15,7,15
5,14,14
2,7,12
11,16,5
8,4,7
6,9,15
13,16,8
7,3,9
8,12,17
13,14,17
11,16,11
15,3,10
3,9,10
14,6,7
18,8,9
14,4,11
12,4,14
7,12,3
1,7,9
15,11,12
7,15,4
7,6,2
10,5,4
8,3,5
7,7,2
13,5,3
3,10,16
13,6,16
15,7,5
3,7,15
11,16,12
15,12,15
6,7,3
7,5,2
13,11,3
2,12,10
3,15,12
9,5,14
12,16,12
5,4,9
3,5,11
12,5,14
8,15,13
15,9,14
12,7,16
16,9,16
8,16,4
17,10,10
15,11,15
4,11,14
2,12,5
15,8,15
13,4,6
15,15,14
3,4,11
17,7,13
8,10,18
14,2,9
13,17,7
16,7,12
12,6,4
3,8,13
12,16,7
17,9,6
15,5,7
5,11,17
16,9,12
13,12,4
4,7,15
3,6,11
4,6,13
11,5,2
12,14,15
12,15,9
2,10,10
10,5,3
7,7,3
5,6,3
8,1,12
10,1,5
6,4,13
8,17,13
16,6,11
10,16,11
13,5,4
12,17,8
13,3,14
15,5,6
6,11,17
11,8,1
5,9,16
2,4,7
17,12,9
16,6,8
18,8,12
13,17,6
6,9,17
2,5,6
11,3,6
12,2,8
5,4,11
4,17,7
6,3,9
8,4,11
12,6,2
13,16,14
17,11,14
3,14,10
4,6,14
9,2,8
6,10,4
14,7,5
6,16,5
16,10,15
7,18,8
8,11,3
11,6,3
7,10,17
8,15,5
14,14,12
2,12,12
17,7,9
15,5,4
15,11,14
7,1,10
11,10,16
6,14,3
9,9,4
5,14,11
10,17,8
11,6,2
5,13,4
9,16,5
14,15,4
3,11,5
5,7,2
14,9,15
12,9,4
4,4,10
3,9,11
10,2,11
11,11,0
8,5,17
1,9,10
14,5,7
4,4,9
14,4,9
4,6,15
2,11,13
17,8,6
2,11,7
9,14,4
7,4,14
7,13,3
7,6,14
13,16,6
11,10,1
5,12,16
12,4,4
12,12,2
9,10,17
10,1,12
9,8,2
4,7,16
11,18,6
16,10,7
2,8,6
9,3,7
11,10,3
3,13,7
1,11,11
6,7,14
16,6,10
8,12,16
6,3,10
16,10,9
12,12,17
2,9,14
10,3,5
15,7,6
3,9,4
3,13,12
3,8,8
14,4,8
14,13,8
11,9,1
9,1,10
12,10,3
8,17,10
10,17,10
1,7,10
14,16,8
3,9,16
17,10,9
2,12,13
15,5,10
12,4,11
8,6,14
5,15,12
3,15,8
7,17,8
13,17,11
9,15,5
8,6,4
17,8,9
4,13,14
8,5,15
14,6,12
16,5,7
15,7,12
5,6,13
11,12,16
11,8,4
5,17,7
18,9,12
11,1,10
16,12,12
6,15,11
15,13,5
9,14,1
5,10,17
17,11,12
8,14,16
14,4,7
18,12,8
12,15,5
11,2,9
5,7,4
14,15,7
1,12,10
16,10,11
6,4,16
11,17,8
3,7,6
14,2,10
2,11,10
13,14,8
4,15,8
1,8,11
11,13,3
13,5,16
18,9,10
10,3,10
6,2,9
16,9,7
18,8,10
7,6,15
14,8,4
16,16,11
2,11,11
7,4,6
10,10,17
9,1,14
5,11,3
8,1,11
6,15,14
3,11,6
5,12,15
17,10,13
13,8,3
14,12,3
11,12,1
5,2,7
2,8,7
11,6,1
11,15,15
14,4,14
15,5,3
9,7,1
16,6,14
7,8,2
11,2,10
10,13,18
2,13,6
3,3,10
16,8,11
14,6,6
14,14,14
11,15,14
5,16,8
7,4,5
14,13,15
11,3,12
9,6,3
3,6,13
14,8,5
12,18,7
12,9,1
5,11,2
3,10,5
4,7,8
3,12,8
4,16,11
7,15,16
9,2,9
2,11,12
1,10,10
13,15,14
4,14,8
15,3,11
5,8,3
7,18,12
6,7,15
8,2,11
11,15,4
12,14,5
18,6,10
16,6,9
5,7,5
11,11,2
10,1,13
10,3,8
15,10,5
13,3,5
3,15,7
7,3,14
14,6,3
15,3,7
3,8,9
15,12,11
9,2,6
15,12,8
15,11,5
7,14,4
12,13,4
10,15,4
1,6,11
11,15,3
8,14,15
13,12,5
12,1,9
13,2,10
7,12,5
11,3,8
3,11,12
6,7,17
14,13,3
8,14,17
13,14,13
13,7,17
4,8,8
17,9,12
17,9,4
11,14,17
7,2,11
9,11,2
12,6,13
12,10,18
8,17,6
13,16,7
5,10,13
15,15,5
3,3,12
14,10,2
4,9,16
10,2,14
7,15,10
9,4,7
7,6,5
6,12,1
2,11,6
2,6,6
16,8,10
9,5,3
7,6,17
3,13,9
4,14,5
9,14,16
7,15,11
5,9,14
9,2,10
13,9,1
2,11,8
7,16,8
8,6,2
17,9,5
2,7,5
7,6,4
7,4,17
17,6,12
7,15,3
17,12,12
6,16,7
13,11,2
8,7,17
16,10,3
15,7,13
10,14,17
7,16,3
8,10,15
14,15,13
18,9,11
8,3,6
4,12,11
11,7,1
13,5,13
6,7,16
14,9,5
7,17,6
9,17,5
4,5,5
8,3,7
15,12,7
18,11,10
8,2,5
9,6,15
7,12,16
5,16,13
5,7,3
12,3,10
16,4,11
16,11,3
4,8,12
7,4,16
5,13,5
8,9,17
4,8,6
14,4,10
7,3,11
13,13,4
14,3,9
4,17,11
5,5,14
14,13,7
10,18,12
14,12,13
4,9,2
14,10,15
12,7,18
15,14,6
6,6,16
16,9,13
4,8,14
3,13,13
15,4,12
1,11,5
3,16,8
13,2,12
4,5,11
7,1,9
12,2,7
10,4,15
1,8,7
3,4,12
4,3,12
5,14,3
16,5,11
9,13,6
6,14,16
11,12,2
10,14,14
13,9,13
13,5,5
12,18,11
16,6,6
4,11,15
10,14,2
11,2,8
3,3,8
13,5,6
8,4,12
5,16,4
5,7,13
6,12,14
15,6,8
8,2,8
5,16,10
4,7,5
13,13,14
6,1,8
12,8,2
16,10,6
5,5,11
7,4,4
2,9,9
4,3,11
7,13,16
6,1,10
9,17,10
9,14,13
4,14,12
15,12,9
12,11,16
10,6,3
17,5,9
15,9,16
13,15,13
5,6,4
3,9,6
16,14,13
6,5,3
16,9,6
9,12,1
5,4,4
6,5,5
13,15,10
12,8,3
16,14,10
4,5,7
17,4,9
5,17,10
6,4,4
9,2,7
14,15,10
2,14,12
15,15,8
12,15,6
3,14,12
11,4,9
9,4,5
8,3,15
13,12,17
3,6,7
10,6,1
5,4,5
10,18,10
3,12,9
12,6,3
15,5,13
11,16,15
4,2,8
14,10,4
9,16,10
6,3,14
6,10,14
7,10,1
10,17,14
12,5,15
4,4,11
2,8,14
12,17,9
18,10,10
4,13,7
14,10,5
3,7,11
17,7,5
11,2,5
3,14,8
8,5,3
3,7,12
10,3,7
17,6,8
5,15,14
16,14,8
11,6,4
2,10,12
5,5,10
1,7,6
7,6,16
11,5,14
3,10,12
3,13,10
7,15,9
14,12,14
12,13,6
12,6,16
6,4,9
5,11,5
16,11,4
13,17,13
13,17,10
11,14,5
3,9,3
16,7,6
5,16,14
5,3,6
3,5,7
8,3,13
5,14,9
8,15,6
13,3,10
13,3,7
15,14,5
6,9,18
8,12,18
10,4,6
9,17,8
3,9,7
9,13,2
7,5,6
16,8,7
4,15,10
2,11,5
4,14,6
6,16,9
13,10,4
4,4,7
4,10,5
3,14,5
9,18,13
14,17,14
17,8,11
15,12,4
1,12,8
7,4,11
12,3,11
14,13,14
12,15,12
15,2,8
13,17,5
15,9,6
6,6,6
2,14,9
12,18,10
2,13,11
17,12,13
11,18,12
9,4,3
13,9,16
13,12,15
12,2,6
3,5,8
9,12,18
4,15,11
12,4,6
10,16,7
12,17,13
17,7,10
8,16,13
4,10,7
16,7,11
7,4,15
3,11,9
6,12,17
7,10,2
12,16,13
10,15,16
4,10,6
13,15,12
12,15,13
18,8,11
4,4,5
14,2,11
17,11,13
17,6,9
14,3,10
5,8,17
6,2,14
18,8,7
7,7,1
12,1,10
3,12,4
10,9,16
15,6,14
13,18,7
12,15,3
12,15,7
14,6,13
3,9,8
16,4,7
5,17,11
5,10,15
12,9,2
6,13,14
7,5,3
15,15,13
3,8,12
18,12,9
11,10,2
4,4,13
0,9,10
10,6,18
13,6,6
16,12,15
3,8,15
3,14,7
17,10,8
4,9,3
15,11,3
10,1,9
3,5,10
8,6,16
3,6,4
9,16,12
5,14,6
15,16,12
4,11,12
12,17,12
13,15,8
11,3,7
7,10,16
15,6,7
10,17,6
9,17,13
7,15,5
9,3,4
9,3,11
6,13,3
14,14,11
13,4,2
16,4,12
2,5,11
12,15,15
9,12,0
11,2,12
13,4,5
10,8,18
14,5,11
12,10,1
16,15,10
13,4,16
9,8,1
8,11,1
5,3,11
8,4,5
6,4,7
14,16,13
16,10,10
14,13,5
10,5,2
11,3,11
9,8,16
14,8,15
13,8,17
3,9,14
13,9,5
13,11,4
16,8,8
13,18,13
6,9,4
10,8,17
11,2,14
18,8,6
8,3,4
17,13,9
12,6,5
1,7,11
13,15,4
9,15,13
14,13,4
12,1,8
9,15,15
7,18,9
9,16,7
10,7,18
5,2,10
12,13,17
12,7,3
4,5,13
11,14,6
15,15,9
18,13,10
14,7,15
1,6,10
15,10,13
4,12,15
7,5,17
4,13,5
17,15,8
15,7,3
8,3,16
9,14,15
9,12,3
6,4,6
15,7,10
2,13,7
13,14,15
2,9,13
6,13,16
5,6,17
10,13,15
11,11,4
6,4,10
15,5,5
9,10,1
4,12,3
10,1,6
16,14,12
5,3,9
16,8,9
16,8,3
16,11,10
9,8,17
15,4,14
5,4,8
4,8,16
12,3,7
15,5,8
14,14,10
8,7,15
10,15,17
18,13,7
8,17,7
13,18,10
11,6,15
15,7,14
4,8,5
12,12,15
8,5,14
8,7,3
6,2,4
12,3,6
4,12,12
16,12,7
9,3,9
9,10,16
3,13,11
17,10,12
5,10,2
3,7,4
1,7,7
2,13,9
15,13,8
1,13,6
15,13,9
2,12,11
6,6,3
14,17,8
17,8,10
7,3,12
14,10,17
15,8,9
16,12,14
14,8,10
17,11,7
9,4,11
13,7,5
10,16,5
14,16,6
13,14,16
15,7,4
11,3,13
8,2,9
1,10,12
5,9,17
6,15,7
3,8,7
14,11,14
13,8,18
16,14,6
6,17,9
18,7,9
3,10,13
14,3,8
3,11,11
5,8,4
16,14,7
10,8,0
10,12,16
4,15,6
6,9,1
7,2,6
4,9,14
1,8,9
4,6,7
6,8,16
7,3,5
12,13,3
4,9,13
2,13,10
6,10,17
15,13,10
6,8,17
9,10,3
16,9,5
8,13,2
3,7,9
8,2,13
3,9,12
4,14,4
12,11,3
13,7,14
11,2,6
8,11,17
14,9,16
7,4,12
10,11,18
4,5,9
2,6,11
10,2,12
5,12,3
10,6,14
13,15,3
15,17,10
9,4,16
1,12,7
13,6,3
4,17,9
8,3,11
14,14,6
6,5,10
12,7,17
6,13,2
14,16,5
5,4,10
3,11,7
10,5,18
10,11,16
4,7,12
10,1,7
16,15,7
4,16,6
3,12,10
11,6,13
9,10,18
16,10,4
11,6,17
0,9,9
9,3,16
13,9,2
16,3,11
10,15,12
8,3,9
16,7,15
15,11,13
9,3,8
10,2,5
15,3,13
4,13,13
1,11,8
11,14,4
17,6,11
14,6,15
1,8,8
5,8,14
17,14,9
3,10,7
3,10,8
13,4,11
7,11,2
12,8,15
14,11,2
9,14,17
3,10,6
4,9,6
5,8,2
9,18,10
10,7,4
2,13,12
2,12,14
5,16,6
8,5,13
2,14,11
11,18,7
11,18,10
8,10,4
15,9,17
6,6,14
9,9,2
10,18,14
15,14,7
6,4,8
12,14,17
10,15,6
8,2,6
8,3,3
10,14,15
15,14,10
10,8,3
8,4,16
5,11,15
16,8,5
13,5,10
6,12,2
11,4,16
10,6,16
14,6,17
9,2,13
14,2,8
10,4,10
15,9,3
6,18,8
12,14,12
15,8,5
11,12,15
7,9,18
8,9,15
18,12,10
1,10,13
8,6,18
11,7,18
8,17,4
9,4,15
14,5,5
3,10,3
10,1,10
15,16,8
5,9,4
7,1,7
6,3,12
14,8,16
5,8,1
9,13,17
4,12,16
4,4,14
15,6,13
13,13,2
12,16,15
11,10,18
9,3,5
14,9,2
10,18,7
15,17,8
13,9,7
2,10,7
6,8,4
14,17,6
11,7,4
13,18,11
9,1,7
10,18,8
8,8,19
6,4,11
10,3,17
10,10,3
6,15,8
5,16,5
13,4,10
15,17,9
4,16,7
10,2,7
18,5,10
12,5,4
9,7,16
15,13,2
10,16,8
14,5,9
5,13,11
6,2,6
1,13,8
9,6,16
1,9,14
17,5,8
9,2,5
13,3,9
13,3,11
11,12,4
2,5,12
10,16,6
14,13,17
7,3,10
10,4,5
4,10,17
1,11,7
1,10,8
18,10,9
4,3,7
14,8,2
8,14,5
7,11,18
11,14,14
4,11,9
12,14,7
5,9,13
9,6,1
15,11,7
12,3,13
7,17,10
7,17,7
7,17,11
16,16,9
15,17,6
12,4,5
16,9,11
7,1,8
11,3,9
17,15,10
9,7,3
4,6,9
11,12,17
9,15,16
4,12,7
13,10,15
12,11,2
8,12,1
6,11,18
9,6,14
10,18,9
8,15,8
11,14,7
2,10,13
11,7,15
18,11,13
3,9,5
13,9,4
11,17,14
14,6,16
2,12,6
10,16,16
2,8,12
13,13,12
8,7,4
8,18,10
8,7,18
14,14,8
2,14,10
4,12,4
9,7,18
13,12,2
8,11,2
5,7,14
8,2,15
14,8,14
2,8,5
9,5,1
11,5,9
16,11,11
15,16,13
12,7,14
8,16,7
15,14,13
17,14,11
5,5,3
14,17,12
3,16,9
12,4,15
14,14,7
4,12,9
11,2,15
11,9,3
2,9,5
7,8,4
10,5,14
5,7,15
10,12,18
5,15,11
9,16,4
11,8,15
14,10,7
11,3,10
9,12,2
16,13,5
13,2,13
17,14,7
1,7,8
4,3,10
14,3,7
11,3,3
10,11,1
7,9,4
1,11,10
13,7,13
13,15,6
4,10,13
9,15,9
8,15,7
12,14,13
4,8,4
12,13,18
9,13,5
16,12,5
16,10,16
5,10,5
11,14,3
9,17,9
1,10,6
7,8,14
9,13,18
2,6,10
9,15,6
15,15,10
16,15,6
7,9,3
13,2,6
12,2,14
4,16,12
2,11,14
6,8,15
12,14,4
10,8,5
15,13,12
12,1,11
10,6,2
5,6,9
14,3,6
8,1,6
7,18,10
16,7,5
3,8,5
4,11,7
10,2,6
13,16,16`;


const testing = false;
const visualize = true;
const dimensions = {
    x: { min: 999, max: 0 },
    y: { min: 999, max: 0 },
    z: { min: 999, max: 0 },
};
let map = {};
(() => {
    exec(() => {
        let input = parseInput(testing ? testinput : rawinput);
        generateMap(input);
        visualize && visualizeMap();
        console.clear();
        console.log('part 1:', part1(input), 'faces');
        console.log('part 2:', part2(), 'faces');
    });
})();

function part2() {
    let visited = [{ x: dimensions.x.min, y: dimensions.y.min, z: dimensions.z.min }];
    let queue = [{ x: dimensions.x.min, y: dimensions.y.min, z: dimensions.z.min }];
    let faces = 0;
    while (queue.length) {
        let c = queue.shift();

        [
            { x: c.x + 1, y: c.y, z: c.z },
            { x: c.x - 1, y: c.y, z: c.z },
            { x: c.x, y: c.y + 1, z: c.z },
            { x: c.x, y: c.y - 1, z: c.z },
            { x: c.x, y: c.y, z: c.z + 1 },
            { x: c.x, y: c.y, z: c.z - 1 },
        ].forEach(n => {
            if (isOffGrid(n)) return;
            else if (isEmpty(n)) {
                if (!visited.find(x => x.y == n.y && x.z == n.z && n.x == x.x)) {
                    queue.push(n);
                    visited.push(n);
                }
                return;
            }
            else faces++;
        });
    }
    return faces;
}

function isEmpty(c) {
    return map[c.z][c.y][c.x] == null;
}

function isOffGrid(c) {
    return (c.x > dimensions.x.max || c.x < dimensions.x.min ||
        c.y < dimensions.y.min || c.y > dimensions.y.max ||
        c.z > dimensions.z.max || c.z < dimensions.z.min);
}

function part1(cubes = []) {
    for (let cube of cubes) {
        cubes.filter(c => {
            return (
                (c.x == cube.x - 1 && c.y == cube.y && c.z == cube.z) ||
                (c.x == cube.x + 1 && c.y == cube.y && c.z == cube.z) ||
                (c.x == cube.x && c.y == cube.y + 1 && c.z == cube.z) ||
                (c.x == cube.x && c.y == cube.y - 1 && c.z == cube.z) ||
                (c.x == cube.x && c.y == cube.y && c.z == cube.z + 1) ||
                (c.x == cube.x && c.y == cube.y && c.z == cube.z - 1)
            );
        }).forEach(c => {
            c.neighbours++;
        });
    }

    let totalFaces = 0;

    for (let cube of cubes) {
        totalFaces += 6 - cube.neighbours;
    }

    return totalFaces;

}

function visualizeMap() {
    let i = 0;
    for (let z of Object.keys(map)) {
        let msg = '';
        for (let y of Object.keys(map[z])) {
            for (let x of Object.keys(map[z][y])) {
                msg += (map[z][y][x] == null) ? '.' : '#';

            }
            msg += '\n';
        }
        console.clear();
        console.log(msg);
        console.log('Row', ++i, 'of', Object.keys(map).length);
        //console.log(dimensions);
        //console.log(map);
        for (let i = 0; i < 200000000; i++);
    }
}

function generateMap(input) {
    for (let z = dimensions.z.min; z <= dimensions.z.max; z++) {
        map[z] = {};
        for (let y = dimensions.y.min; y <= dimensions.y.max; y++) {
            map[z][y] = {};
            for (let x = dimensions.x.min; x <= dimensions.x.max; x++) {
                map[z][y][x] = null;
            }
        }
    }

    for (let cube of input) {
        map[cube.z][cube.y][cube.x] = true;
    }

}

function parseInput(input) {
    let rows = input.split('\n');
    let result = [];
    for (let r of rows) {
        let [x, y, z] = r.split(',');
        let pos = {
            x: parseInt(x),
            y: parseInt(y),
            z: parseInt(z),
            neighbours: 0
        };
        result.push(pos);

        isMax(pos, 'x');
        isMax(pos, 'y');
        isMax(pos, 'z');
    }

    function isMax(pos, d) {
        if (pos[d] < dimensions[d].min) dimensions[d].min = pos[d];
        else if (pos[d] > dimensions[d].max) dimensions[d].max = pos[d];
    }

    // Expand dimensions by 1
    dimensions.x.max++;
    dimensions.y.max++;
    dimensions.z.max++;
    dimensions.x.min--;
    dimensions.y.min--;
    dimensions.z.min--;

    return result;
}