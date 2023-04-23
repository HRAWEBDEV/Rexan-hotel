(function homePage() {
 const homeController = (scope) => {
  scope.introductionImages = [
   {
    href: '/src/assets/images/home-page/about-1.jpg',
    objectFit: 'contain',
   },
   {
    href: '/src/assets/images/home-page/about-2.jpg',
    objectFit: 'contain',
   },
   {
    href: '/src/assets/images/home-page/about-3.jpg',
    objectFit: 'contain',
   },
   {
    href: '/src/assets/images/home-page/about-4.jpg',
    objectFit: 'contain',
   },
   {
    href: '/src/assets/images/home-page/about-5.jpg',
    objectFit: 'contain',
   },
  ];
  scope.introImageClicked = (img) => {
   scope.openSlideShow = true;
   scope.introductionImages.forEach((img) => (img.startFrom = false));
   img.startFrom = true;
   scope.introductionImages = [...scope.introductionImages];
  };
  // * time-sharing plans
  scope.timeSharingPlans = [
   {
    title: 'دوره عادی',
    price: '2.000.000',
    indicator: 'opt-ico-period-usualy',
   },
   {
    title: 'دوره متوسط',
    price: '2.000.000',
    indicator: 'opt-ico-period-medium',
   },
   {
    title: 'دوره فوق العاده',
    price: '2.000.000',
    indicator: 'opt-ico-period-perfect',
   },
   {
    title: 'دوره خیلی فوق العاده',
    price: '2.000.000',
    indicator: 'opt-ico-period-wow',
   },
  ].reverse();
  // * room types
  scope.roomTypes = [
   {
    title: 'دو تخته توئین',
   },
   {
    title: 'سوئیت استاندارد',
   },
   {
    title: 'سوئیت جونیور',
   },
   {
    title: 'سوئیت رویال',
   },
  ];
  scope.roomTypes[0].isSelected = true;
  scope.roomClicked = (e, room) => {
   scope.roomTypes.find((room) => room.isSelected).isSelected = false;
   room.isSelected = true;
  };
 };
 wrapperModule.controller('homeController', ['$scope', homeController]);
})();
