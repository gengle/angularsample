describe("The 'toEqual' matcher", function () {

    it("works for simple literals and variables", function () {
        var a = 12;
        expect(a).toEqual(12);
    });

    it("should work for objects", function () {
        var foo = {
            a: 12,
            b: 34
        };
        var bar = {
            a: 12,
            b: 34
        };
        expect(foo).toEqual(bar);
    });
});

describe("app", function () {
    var scope;

    beforeEach(module('app'));

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
    }));

    describe("OptionsCtrl", function () {
        var controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller("OptionsCtrl", {
                $scope: scope
            });
        }));

        it("Title should equal hello world", function () {
            expect(scope.title).toBe('Hello, World!');
        });
    });
});