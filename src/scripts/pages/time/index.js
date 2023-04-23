$(() => {});
(function plansRoute() {
 const { registerFilterSideBar } = toolsModule;
 const { show: showFilters } = registerFilterSideBar();
 const plansController = (scope) => {
  scope.showFiltersClicked = () => {
   showFilters();
  };
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
