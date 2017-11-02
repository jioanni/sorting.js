describe('Bubble Sort', function(){

    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('returns a sorted array', function(){
        expect( bubbleSort([4, 3, 2, 5, 1])).toEqual([1, 2, 3, 4, 5]);
    });
    beforeAll(function(){
        spyOn(window, "swap").and.callThrough();
    });
      it("uses a helper function called swap", function() {
          expect(bubbleSort([2]));
          expect(swap.calls.count()).toBeGreaterThan(1);
      });
    
  });

  