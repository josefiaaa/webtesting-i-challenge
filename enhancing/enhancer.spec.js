const enhancer = require('./enhancer.js');
// test away!

// Test Repair
it('repairs weapon\'s durabilty', () => {
    expect(enhancer.repair(item)).toBe(item.durability === 100)
})

// Test Succeed
it('if enhancement is less than 20, increase by 1', () => {
    expect(enhancer.succeed(item)).toBe(item.enhancement++ || item.enhancement)
})

// Test Fail
it ('enhancement fails', () => {
    expect(enhancer.fail(item)).toBe((item.durability =- 5) || (item.durability =- 10 && item.enhancement--) || (item.durability =- 1) )
})


const item = {
    durability: 72,
    enhancement: 9,
    name: 'hammer'
}