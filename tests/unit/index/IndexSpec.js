describe("Hello World Test", function(){
    var IndexController,
        scope;

    beforeEach(module("APPNAME.index"));
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        IndexController = $controller("IndexController", {$scope: scope});
    }));

    describe("IndexController", function(){
        it("Should have a hello message of Hello World", function(){
            expect(scope.hello).toBe("Hello World!");
        })
    });
});