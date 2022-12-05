const crates_init = () => {
    return {
        1: ['R', 'S', 'L', 'F', 'Q'],
        2: ['N', 'Z', 'Q', 'G', 'P', 'T'],
        3: ['S', 'M', 'B', 'Q'],
        4: ['T', 'G', 'Z', 'J', 'H', 'C', 'B', 'Q'],
        5: ['P', 'H', 'M', 'B', 'N', 'F', 'S'],
        6: ['P', 'C', 'Q', 'N', 'S', 'L', 'V', 'G'],
        7: ['W', 'C', 'F'],
        8: ['Q', 'H', 'G', 'Z', 'W', 'V', 'P', 'M'],
        9: ['G', 'Z', 'D', 'L', 'C', 'N', 'R']
    };
};
let crates = crates_init();
// const crates = 
// `           [Q]     [G]     [M]    
//             [B] [S] [V]     [P] [R]
//     [T]     [C] [F] [L]     [V] [N]
// [Q] [P]     [H] [N] [S]     [W] [C]
// [F] [G] [B] [J] [B] [N]     [Z] [L]
// [L] [Q] [Q] [Z] [M] [Q] [F] [G] [D]
// [S] [Z] [M] [G] [H] [C] [C] [H] [Z]
// [R] [N] [S] [T] [P] [P] [W] [Q] [G]
//  1   2   3   4   5   6   7   8   9 `;

const commands = [
    "move 1 from 2 to 6",
    "move 3 from 7 to 9",
    "move 7 from 9 to 4",
    "move 2 from 5 to 3",
    "move 3 from 2 to 8",
    "move 14 from 4 to 5",
    "move 1 from 2 to 1",
    "move 1 from 2 to 3",
    "move 3 from 6 to 8",
    "move 3 from 6 to 9",
    "move 1 from 4 to 6",
    "move 5 from 9 to 8",
    "move 9 from 8 to 9",
    "move 3 from 3 to 8",
    "move 8 from 9 to 4",
    "move 2 from 1 to 7",
    "move 4 from 1 to 5",
    "move 2 from 7 to 1",
    "move 1 from 9 to 6",
    "move 7 from 4 to 7",
    "move 1 from 8 to 4",
    "move 1 from 9 to 8",
    "move 2 from 6 to 7",
    "move 7 from 7 to 3",
    "move 10 from 3 to 1",
    "move 1 from 3 to 2",
    "move 1 from 2 to 9",
    "move 1 from 9 to 8",
    "move 15 from 5 to 8",
    "move 1 from 6 to 9",
    "move 2 from 7 to 3",
    "move 11 from 1 to 8",
    "move 1 from 9 to 8",
    "move 1 from 1 to 5",
    "move 3 from 5 to 2",
    "move 2 from 6 to 9",
    "move 1 from 2 to 4",
    "move 2 from 4 to 5",
    "move 1 from 3 to 6",
    "move 5 from 8 to 3",
    "move 12 from 8 to 4",
    "move 2 from 2 to 5",
    "move 12 from 8 to 1",
    "move 1 from 6 to 9",
    "move 10 from 5 to 7",
    "move 3 from 3 to 9",
    "move 6 from 8 to 9",
    "move 2 from 3 to 5",
    "move 8 from 4 to 7",
    "move 1 from 3 to 2",
    "move 6 from 8 to 6",
    "move 8 from 9 to 3",
    "move 2 from 5 to 4",
    "move 1 from 2 to 3",
    "move 2 from 9 to 2",
    "move 1 from 9 to 2",
    "move 1 from 2 to 1",
    "move 2 from 2 to 4",
    "move 5 from 4 to 2",
    "move 3 from 2 to 3",
    "move 2 from 4 to 2",
    "move 18 from 7 to 3",
    "move 3 from 6 to 9",
    "move 1 from 6 to 3",
    "move 1 from 4 to 1",
    "move 1 from 6 to 3",
    "move 6 from 3 to 9",
    "move 2 from 2 to 6",
    "move 26 from 3 to 7",
    "move 2 from 2 to 3",
    "move 2 from 6 to 8",
    "move 3 from 1 to 5",
    "move 8 from 9 to 1",
    "move 1 from 8 to 5",
    "move 1 from 3 to 1",
    "move 2 from 9 to 3",
    "move 1 from 1 to 2",
    "move 12 from 1 to 7",
    "move 1 from 8 to 5",
    "move 2 from 3 to 5",
    "move 1 from 3 to 6",
    "move 2 from 6 to 2",
    "move 7 from 5 to 7",
    "move 1 from 4 to 2",
    "move 15 from 7 to 4",
    "move 1 from 4 to 9",
    "move 1 from 7 to 6",
    "move 14 from 4 to 2",
    "move 1 from 1 to 2",
    "move 5 from 1 to 5",
    "move 4 from 5 to 4",
    "move 1 from 6 to 3",
    "move 4 from 4 to 7",
    "move 1 from 9 to 2",
    "move 1 from 3 to 5",
    "move 2 from 5 to 1",
    "move 1 from 1 to 6",
    "move 2 from 1 to 5",
    "move 9 from 2 to 9",
    "move 1 from 6 to 1",
    "move 1 from 1 to 9",
    "move 1 from 5 to 4",
    "move 1 from 5 to 6",
    "move 4 from 7 to 2",
    "move 1 from 4 to 1",
    "move 18 from 7 to 1",
    "move 17 from 1 to 7",
    "move 4 from 9 to 5",
    "move 1 from 5 to 8",
    "move 1 from 1 to 4",
    "move 2 from 9 to 6",
    "move 3 from 9 to 7",
    "move 1 from 1 to 5",
    "move 1 from 7 to 5",
    "move 16 from 7 to 2",
    "move 1 from 4 to 2",
    "move 1 from 8 to 7",
    "move 1 from 9 to 8",
    "move 1 from 8 to 4",
    "move 3 from 5 to 3",
    "move 15 from 7 to 6",
    "move 7 from 6 to 4",
    "move 9 from 6 to 2",
    "move 2 from 5 to 7",
    "move 2 from 6 to 8",
    "move 4 from 4 to 7",
    "move 2 from 8 to 1",
    "move 11 from 2 to 7",
    "move 1 from 4 to 2",
    "move 2 from 3 to 6",
    "move 3 from 4 to 5",
    "move 12 from 7 to 1",
    "move 1 from 7 to 3",
    "move 31 from 2 to 4",
    "move 3 from 7 to 2",
    "move 1 from 6 to 3",
    "move 1 from 5 to 1",
    "move 1 from 5 to 2",
    "move 2 from 3 to 4",
    "move 1 from 6 to 1",
    "move 1 from 3 to 6",
    "move 1 from 5 to 6",
    "move 1 from 2 to 4",
    "move 11 from 1 to 4",
    "move 5 from 1 to 5",
    "move 1 from 7 to 3",
    "move 3 from 5 to 8",
    "move 1 from 8 to 7",
    "move 1 from 5 to 3",
    "move 2 from 8 to 5",
    "move 2 from 6 to 2",
    "move 2 from 5 to 1",
    "move 1 from 7 to 9",
    "move 1 from 3 to 9",
    "move 2 from 9 to 5",
    "move 1 from 1 to 6",
    "move 1 from 6 to 5",
    "move 1 from 3 to 5",
    "move 13 from 4 to 8",
    "move 5 from 2 to 3",
    "move 3 from 3 to 4",
    "move 1 from 8 to 6",
    "move 4 from 5 to 2",
    "move 1 from 1 to 5",
    "move 1 from 3 to 7",
    "move 2 from 5 to 4",
    "move 11 from 4 to 5",
    "move 1 from 3 to 7",
    "move 15 from 4 to 2",
    "move 1 from 6 to 4",
    "move 19 from 2 to 8",
    "move 8 from 8 to 3",
    "move 2 from 3 to 8",
    "move 7 from 5 to 4",
    "move 6 from 3 to 4",
    "move 8 from 4 to 5",
    "move 7 from 4 to 6",
    "move 2 from 7 to 5",
    "move 9 from 5 to 6",
    "move 13 from 8 to 3",
    "move 3 from 4 to 3",
    "move 6 from 3 to 4",
    "move 6 from 8 to 2",
    "move 4 from 5 to 9",
    "move 5 from 8 to 7",
    "move 4 from 6 to 2",
    "move 5 from 3 to 5",
    "move 1 from 6 to 9",
    "move 8 from 2 to 6",
    "move 1 from 8 to 7",
    "move 1 from 2 to 5",
    "move 1 from 4 to 1",
    "move 3 from 3 to 1",
    "move 1 from 7 to 3",
    "move 4 from 9 to 8",
    "move 6 from 6 to 2",
    "move 2 from 8 to 4",
    "move 1 from 7 to 6",
    "move 3 from 5 to 1",
    "move 4 from 5 to 3",
    "move 6 from 2 to 9",
    "move 4 from 7 to 4",
    "move 2 from 8 to 5",
    "move 2 from 9 to 5",
    "move 4 from 5 to 6",
    "move 1 from 2 to 5",
    "move 8 from 6 to 7",
    "move 18 from 4 to 2",
    "move 2 from 3 to 6",
    "move 6 from 1 to 8",
    "move 8 from 7 to 9",
    "move 9 from 6 to 4",
    "move 1 from 5 to 4",
    "move 5 from 8 to 4",
    "move 1 from 4 to 5",
    "move 1 from 8 to 1",
    "move 8 from 9 to 8",
    "move 3 from 3 to 9",
    "move 5 from 2 to 7",
    "move 1 from 5 to 2",
    "move 2 from 4 to 8",
    "move 11 from 2 to 8",
    "move 1 from 7 to 2",
    "move 2 from 6 to 5",
    "move 1 from 6 to 2",
    "move 4 from 2 to 3",
    "move 2 from 1 to 3",
    "move 5 from 9 to 7",
    "move 1 from 5 to 8",
    "move 6 from 7 to 8",
    "move 7 from 3 to 7",
    "move 1 from 5 to 9",
    "move 3 from 9 to 7",
    "move 1 from 4 to 1",
    "move 1 from 9 to 8",
    "move 8 from 7 to 3",
    "move 1 from 2 to 4",
    "move 1 from 1 to 7",
    "move 9 from 3 to 7",
    "move 7 from 4 to 7",
    "move 8 from 7 to 3",
    "move 1 from 7 to 9",
    "move 13 from 7 to 4",
    "move 1 from 4 to 6",
    "move 11 from 8 to 2",
    "move 5 from 3 to 7",
    "move 1 from 9 to 6",
    "move 7 from 2 to 9",
    "move 2 from 2 to 4",
    "move 4 from 9 to 2",
    "move 17 from 8 to 3",
    "move 3 from 3 to 4",
    "move 1 from 7 to 6",
    "move 5 from 2 to 3",
    "move 8 from 4 to 1",
    "move 2 from 6 to 4",
    "move 1 from 2 to 7",
    "move 1 from 1 to 4",
    "move 1 from 8 to 2",
    "move 2 from 7 to 4",
    "move 7 from 1 to 9",
    "move 16 from 4 to 2",
    "move 1 from 6 to 1",
    "move 2 from 2 to 9",
    "move 6 from 2 to 7",
    "move 1 from 1 to 6",
    "move 3 from 2 to 6",
    "move 10 from 3 to 6",
    "move 6 from 9 to 8",
    "move 3 from 4 to 3",
    "move 6 from 9 to 2",
    "move 4 from 3 to 7",
    "move 10 from 2 to 5",
    "move 2 from 2 to 6",
    "move 3 from 6 to 3",
    "move 1 from 8 to 2",
    "move 1 from 2 to 6",
    "move 5 from 6 to 1",
    "move 3 from 6 to 7",
    "move 5 from 8 to 4",
    "move 3 from 7 to 1",
    "move 2 from 6 to 1",
    "move 2 from 4 to 1",
    "move 2 from 5 to 8",
    "move 1 from 8 to 7",
    "move 1 from 8 to 9",
    "move 8 from 3 to 4",
    "move 11 from 1 to 7",
    "move 1 from 9 to 8",
    "move 1 from 8 to 3",
    "move 3 from 6 to 3",
    "move 1 from 6 to 8",
    "move 3 from 5 to 2",
    "move 1 from 8 to 6",
    "move 2 from 5 to 8",
    "move 3 from 5 to 6",
    "move 3 from 2 to 4",
    "move 2 from 8 to 4",
    "move 22 from 7 to 3",
    "move 12 from 3 to 2",
    "move 9 from 3 to 9",
    "move 1 from 1 to 2",
    "move 2 from 6 to 8",
    "move 2 from 8 to 4",
    "move 2 from 6 to 5",
    "move 11 from 3 to 1",
    "move 18 from 4 to 3",
    "move 3 from 7 to 3",
    "move 1 from 5 to 7",
    "move 3 from 2 to 4",
    "move 2 from 4 to 9",
    "move 6 from 1 to 4",
    "move 1 from 5 to 1",
    "move 10 from 9 to 3",
    "move 27 from 3 to 9",
    "move 6 from 2 to 8",
    "move 5 from 4 to 2",
    "move 3 from 3 to 8",
    "move 1 from 7 to 8",
    "move 10 from 8 to 2",
    "move 5 from 1 to 5",
    "move 1 from 3 to 5",
    "move 1 from 1 to 8",
    "move 14 from 9 to 4",
    "move 6 from 5 to 6",
    "move 11 from 9 to 4",
    "move 6 from 6 to 3",
    "move 1 from 8 to 6",
    "move 2 from 9 to 5",
    "move 1 from 2 to 5",
    "move 8 from 2 to 1",
    "move 12 from 4 to 7",
    "move 1 from 6 to 8",
    "move 14 from 4 to 1",
    "move 1 from 9 to 8",
    "move 1 from 5 to 1",
    "move 2 from 5 to 2",
    "move 11 from 1 to 6",
    "move 11 from 6 to 1",
    "move 1 from 8 to 7",
    "move 1 from 8 to 2",
    "move 12 from 1 to 7",
    "move 1 from 4 to 7",
    "move 5 from 1 to 5",
    "move 5 from 2 to 6",
    "move 1 from 5 to 6",
    "move 1 from 2 to 9",
    "move 6 from 1 to 3",
    "move 19 from 7 to 2",
    "move 1 from 9 to 6",
    "move 9 from 3 to 2",
    "move 9 from 2 to 7",
    "move 3 from 5 to 8",
    "move 1 from 5 to 1",
    "move 3 from 3 to 9",
    "move 7 from 2 to 9",
    "move 15 from 7 to 2",
    "move 10 from 9 to 4",
    "move 4 from 4 to 9",
    "move 1 from 6 to 4",
    "move 1 from 1 to 6",
    "move 26 from 2 to 5",
    "move 1 from 7 to 3",
    "move 6 from 4 to 8",
    "move 3 from 2 to 9",
    "move 6 from 8 to 3",
    "move 4 from 5 to 7",
    "move 1 from 4 to 5",
    "move 2 from 2 to 1",
    "move 6 from 9 to 1",
    "move 3 from 3 to 8",
    "move 3 from 2 to 8",
    "move 3 from 7 to 9",
    "move 6 from 1 to 7",
    "move 2 from 3 to 2",
    "move 2 from 2 to 5",
    "move 1 from 8 to 6",
    "move 4 from 7 to 3",
    "move 10 from 5 to 3",
    "move 4 from 9 to 1",
    "move 6 from 3 to 1",
    "move 1 from 7 to 4",
    "move 4 from 3 to 2",
    "move 1 from 3 to 1",
    "move 13 from 1 to 5",
    "move 1 from 3 to 7",
    "move 1 from 3 to 8",
    "move 4 from 6 to 3",
    "move 1 from 6 to 3",
    "move 7 from 8 to 2",
    "move 1 from 6 to 9",
    "move 2 from 7 to 2",
    "move 1 from 9 to 5",
    "move 2 from 8 to 6",
    "move 1 from 7 to 5",
    "move 1 from 3 to 1",
    "move 30 from 5 to 2",
    "move 1 from 3 to 4",
    "move 2 from 6 to 1",
    "move 5 from 3 to 4",
    "move 2 from 6 to 5",
    "move 5 from 4 to 3",
    "move 1 from 3 to 1",
    "move 4 from 1 to 6",
    "move 1 from 2 to 5",
    "move 2 from 4 to 9",
    "move 4 from 3 to 5",
    "move 1 from 3 to 5",
    "move 1 from 5 to 3",
    "move 6 from 5 to 1",
    "move 2 from 1 to 9",
    "move 4 from 6 to 2",
    "move 1 from 3 to 5",
    "move 1 from 5 to 2",
    "move 1 from 5 to 2",
    "move 8 from 2 to 5",
    "move 4 from 9 to 6",
    "move 3 from 1 to 4",
    "move 3 from 6 to 2",
    "move 2 from 4 to 2",
    "move 1 from 6 to 1",
    "move 1 from 4 to 6",
    "move 2 from 5 to 1",
    "move 1 from 6 to 8",
    "move 3 from 5 to 2",
    "move 2 from 5 to 6",
    "move 1 from 6 to 7",
    "move 1 from 5 to 9",
    "move 1 from 7 to 5",
    "move 3 from 1 to 9",
    "move 3 from 9 to 5",
    "move 31 from 2 to 6",
    "move 1 from 1 to 3",
    "move 1 from 8 to 9",
    "move 30 from 6 to 9",
    "move 2 from 9 to 8",
    "move 13 from 2 to 3",
    "move 4 from 5 to 2",
    "move 1 from 8 to 4",
    "move 1 from 4 to 1",
    "move 1 from 1 to 6",
    "move 5 from 2 to 8",
    "move 1 from 2 to 8",
    "move 26 from 9 to 3",
    "move 18 from 3 to 8",
    "move 1 from 2 to 1",
    "move 12 from 3 to 8",
    "move 1 from 2 to 3",
    "move 3 from 6 to 4",
    "move 1 from 1 to 9",
    "move 11 from 8 to 5",
    "move 1 from 4 to 7",
    "move 9 from 3 to 9",
    "move 1 from 7 to 8",
    "move 11 from 8 to 3",
    "move 11 from 3 to 2",
    "move 11 from 2 to 9",
    "move 19 from 9 to 8",
    "move 3 from 5 to 7",
    "move 2 from 4 to 2",
    "move 2 from 2 to 8",
    "move 29 from 8 to 2",
    "move 5 from 5 to 4",
    "move 1 from 9 to 6",
    "move 2 from 5 to 9",
    "move 1 from 6 to 9",
    "move 7 from 8 to 7",
    "move 1 from 9 to 7",
    "move 6 from 9 to 1",
    "move 1 from 9 to 4",
    "move 1 from 5 to 4",
    "move 15 from 2 to 5",
    "move 3 from 1 to 7",
    "move 5 from 5 to 2",
    "move 1 from 8 to 3",
    "move 1 from 5 to 8",
    "move 2 from 3 to 6",
    "move 1 from 3 to 8",
    "move 9 from 2 to 1",
    "move 1 from 8 to 7",
    "move 1 from 8 to 3",
    "move 10 from 7 to 8",
    "move 4 from 7 to 3",
    "move 1 from 7 to 2",
    "move 1 from 8 to 6",
    "move 3 from 6 to 5",
    "move 6 from 5 to 8",
    "move 3 from 1 to 3",
    "move 8 from 3 to 7",
    "move 3 from 1 to 3",
    "move 4 from 8 to 3",
    "move 1 from 4 to 5",
    "move 4 from 1 to 4",
    "move 1 from 4 to 5",
    "move 1 from 7 to 4",
    "move 4 from 4 to 1",
    "move 2 from 8 to 7",
    "move 6 from 5 to 2",
    "move 2 from 8 to 1",
    "move 6 from 4 to 7",
    "move 1 from 5 to 4",
    "move 5 from 8 to 6",
    "move 1 from 6 to 9",
];

const printCrates = () => {
    let msg = '';
    for (let i = 1; i < 10; i++) {
        msg = `${i}: ${crates[i].toString()}`;
        console.log(msg);


    }
};

const getTopCrates = () => {
    let msg = "";

    for (let i = 1; i < 10; i++)
        msg += crates[i][crates[i].length - 1] ?? ' ';

    console.log(msg);
};


(() => {

    // part 1
    crates = crates_init();

    for (let i = 0; i < commands.length; i++) {

        let cmd = commands[i];

        let amount = cmd.split(' ')[1];
        let source = cmd.split(' ')[3];
        let dest = cmd.split(' ')[5];

        //console.log(`Moving ${amount} from ${source} to ${dest}`);

        for (let n = 0; n < amount; n++)
            // if (crates[source].length > 0)
            crates[dest].push(crates[source].pop());

        //console.log('\n');
    };

    getTopCrates();

    // part 2
    crates = crates_init();
    //printCrates();
    for (let i = 0; i < commands.length; i++) {

        let cmd = commands[i];

        let amount = cmd.split(' ')[1];
        let source = cmd.split(' ')[3];
        let dest = cmd.split(' ')[5];

        //console.log(`Moving ${amount} from ${source} to ${dest}`);
        let cr = [];
        for (let n = 0; n < amount; n++)
            //if (crates[source].length > 0)
            cr.push(crates[source].pop());

        for (let n = 0; n < amount; n++)
            crates[dest].push(cr.pop());
        //printCrates();
    };

    getTopCrates();

})();