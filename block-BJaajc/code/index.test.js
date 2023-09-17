const {getfullName,isPalindrome,getCircumfrence,getArea} = require('./index');

test('shivam and rajpoot to equal shivam rajpoot', () => {
    expect(getfullName('shivam', 'rajpoot')).toBe('shivam rajpoot');
  });

test('shivam and rajpoot to equal shivam rajpoot', () => {
    expect(getfullName('shivam', 'rajpoot')).not.toBe('shivam');
  });

  test('if 4 divide by 2 to equal true',()=>{
    expect(isPalindrome(4)).toBe(true)
  })

  test('if 4 divide by 2 to equal true',()=>{
    expect(isPalindrome(4)).not.toBe(false)
  })

test('circumfrence to equal 25',()=>{
   expect(getCircumfrence(2)).toBe(12)
})

test('circumfrence to equal 25',()=>{
   expect(getCircumfrence(2)).not.toBe(13)
})

test('circumfrence to equal 25',()=>{
    expect(getArea(2)).toBe(12)
 })
test('circumfrence to equal 25',()=>{
    expect(getArea(2)).not.toBe(13)
 })