(function plansRoute() {
 const plansController = (scope) => {
  scope.routes = [
   {
    title: 'هتل رکسان',
    href: '',
   },
   {
    title: 'خرید دوره',
    href: '',
   },
  ];
  scope.times = [
   {
    title: 'دوره سیزدهم',
    startDate: 2,
    endDate: 5,
   },
   {
    title: 'دوره سیزدهم',
    startDate: 2,
    endDate: 5,
   },
   {
    title: 'دوره سیزدهم',
    startDate: 2,
    endDate: 5,
   },
   {
    title: 'دوره سیزدهم',
    startDate: 2,
    endDate: 5,
   },
  ];
 };
 wrapperModule.controller('plansController', ['$scope', plansController]);
})();
