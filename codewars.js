// // Make a program that filters a list of strings and returns a list with only your friends name in it.
// //
// // If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
//
//   function friend(friends){
//
//   var arr = []
//
//    for(i = 0; i < friends.length; i++){
//
//      if(friends[i].length === 4){
//        arr.push(friends[i])
//
//      }
//
//
//
//
//    }
//
//      return arr;
//
// }
// friend(["Kobe", "Shaq", "Carmello"]);
//
//
//
// describe("friend", function() {
//   it("returns a single friend", function() {
//      expect(friend(["Kobe"])).toEqual(["Kobe"]);
//    });
//    it("returns an array of friends", function() {
//       expect(friend(["Kobe", "Shaq"])).toEqual(["Kobe", "Shaq"]);
//     });
//     it("returns an array of friends only if name is equal to four letters", function() {
//        expect(friend(["Kobe", "Shaq", "Carmello"])).toEqual(["Kobe", "Shaq"]);
//      });
// });


// function doubleChar(str) {
//   var arr = [];
//   var string = str.split('');
//   for (i = 0; i < string.length; i++) {
//
//     arr.push(string[i].repeat(2));
//
//
//   }
//   return arr.join('');
// }
// doubleChar("word");
//
//
//
// describe("doubleChar", function() {
//   it("returns a character and repeats it once", function() {
//      expect(doubleChar("A")).toEqual("AA");
//    });
//    it("returns a word and repeats every character in it once", function() {
//       expect(doubleChar("word")).toEqual("wwoorrdd");
//     });
//
//  });


//Given a set of numbers, return the additive inverse of each.
//Each positive becomes negatives, and the negatives become positives.

// const invert = (array) => {
//   let arr = []
// for (i = 0; i < array.length; i++) {
//   if (array[i] === 0){
//       arr.push(array[i])
//     } else {
//     arr.push(Number(-array[i]))
//     }
//   }
//   return arr;
// }
//
//
//
//
//
// describe("invert", function() {
//    it("returns an array of integers and inverts postive to negative and negative to positive", function() {
//       expect(invert([0,1,-2,3,-4,5])).toEqual([0,-1,2,-3,4,-5]);
//    });
// });

// Write a reverseWords function that accepts a string a parameter,
//and reverses each word in the string. Any spaces in the string should be retained.

  function reverseWords(str) {
  return str.split(" ").map((word) => word.split("").reverse().join("")).join(" ");
}



describe("reverseWords", function() {
   it("should reverse a word", function() {
      expect(reverseWords("hi")).toMatch("ih");
   });
   it("should reverse a phrase with spaces", function() {
      expect(reverseWords("hi my name is TaLea")).toBe("ih ym eman si aeLaT");
   });
});

// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
//
// function isPangram (str) {
//   if ( /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(str)) {
//        return true;
//   } else if ( ! /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(str)){
//        return false;
//    } else if (str.match(/[0-9]/) || str.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/)) {
//      return ;
//
//    }
//  }
//  isPangram("The quick brown fox jumps over the lazy dog!");
//
//
// describe("isPangram", function() {
//    it("should check string and detect if its a pangram", function() {
//       expect(isPangram("The quick brown fox jumps over the lazy dog!")).toBe("true");
//    });
//  })
