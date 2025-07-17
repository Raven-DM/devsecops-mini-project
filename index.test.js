const sum = require('./index');

test('Menambahkan 1 + 2 - 1sama dengan 2', () => {
    expect(sum(1, 2, 1)).toBe(2);
});
