(function layoutModule() {
 const layoutModule = angular.module('layoutModule', []);
 (function quickNav() {
  const quickNavDdo = () => {
   const componentLink = (scope, jqContainer) => {};
   const createView = () => {
    return `
    <aside class="master__aside">
     <div class="master__aside-content">
      <nav class="master__quick-nav">
       <ul class="master__quick-list">
        <li class="master__quick-item">
         <comp-link
          class-name="'master__quick-link normal'"
          text="'هتل رکسان کربلا'"
          navigate-to="'#introduction'"
         ></comp-link>
        </li>
        <li class="master__quick-item">
         <comp-link
          class-name="'master__quick-link normal'"
          text="'کشف هتل رکسان'"
          navigate-to="'#discovery'"
         ></comp-link>
        </li>
        <li class="master__quick-item">
         <comp-link
          class-name="'master__quick-link normal'"
          text="'انواع دوره های زمانی'"
          navigate-to="'#times'"
         ></comp-link>
        </li>
        <li class="master__quick-item">
         <comp-link
          class-name="'master__quick-link normal'"
          text="'انواع اتاق های هتل'"
          navigate-to="'#rooms'"
         ></comp-link>
        </li>
        <li class="master__quick-item">
         <comp-link
          class-name="'master__quick-link normal'"
          text="'امکانات هتل'"
          navigate-to="'#facilities'"
         ></comp-link>
        </li>
        <li class="master__quick-item">
         <comp-link
          class-name="'master__quick-link normal'"
          text="'اخبار پروژه رکسان'"
          navigate-to="'#news'"
         ></comp-link>
        </li>
       </ul>
      </nav>
      <ul class="master-aside__socials">
      <li class="master-aside__social">
        <comp-link
         class-name="'master-aside__social-link gold'"
         icon="'opt-telephone-circle'"
        ></comp-link>
       </li>
      <li class="master-aside__social">
        <comp-link
         class-name="'master-aside__social-link gold'"
         icon="'opt-telegram-circle'"
        ></comp-link>
       </li>
       <li class="master-aside__social">
        <comp-link
         class-name="'master-aside__social-link gold'"
         icon="'opt-instagram-circle'"
        ></comp-link>
       </li>
        <li class="master-aside__social">
        <comp-link
         class-name="'master-aside__social-link gold'"
         icon="'opt-facebook-circle'"
        ></comp-link>
       </li>
      </ul>
     </div>
    </aside>
    `;
   };
   return {
    restrict: 'E',
    link: componentLink,
    template: createView(),
   };
  };
  layoutModule.directive('masterAside', quickNavDdo);
 })();
 (function masterHeader() {
  const componentLink = (scope, jqContainer) => {
   const jqMasterNav = jqContainer.find('[data-master-nav]');
   const jqMasterNavCt = jqContainer.find('[data-master-nav-ct]');
   scope.masterNavCtClicked = function () {
    jqMasterNavCt.toggleClass('is-selected');
    jqMasterNav.fadeToggle(300);
   };
   scope.shopCardClicked = () => {
    $('[data-master-card-container]').fadeToggle(200);
   };
   scope.masterNavigation = [
    {
     title: 'هتل رکسان',
     links: [
      'درباره گروه رکسان',
      'درباره هتل',
      'کشف هتل',
      'شرایط تسهیلات تایم شیرینگ',
      'قوانین و شرایط عمومی هتل',
      'شرکای تجاری',
      'همکاری با ما',
     ],
    },
    {
     title: 'واحدهای اقامتی',
     links: [
      'استدیو دو تخته دبل',
      'استدیو دو تخته توئین',
      'سوئیت استاندارد',
      'سوئیت جونیور',
      'سوئیت لوکس',
      'سوئیت رویال',
      'سوئیت پرزیدنتال',
     ],
    },
    {
     title: 'مجموعه های تفریحی',
     links: [
      'استخر آقایان',
      'استخر بانوان',
      'حمام ترکی',
      'ماساژ',
      'سالن ورزشی',
      'اتاق کودک',
     ],
    },
    {
     title: 'رستوران ها',
     links: [
      'رستوران ایرانی',
      'رستوران سنتی',
      'رستوران بین المللی',
      'کلفی شاپ روف گاردن',
      'کافی شاپ لابی',
     ],
    },
    {
     title: 'سالن های همایش',
     links: ['سالن کنفرانس', 'سالن آفی تئاتر', 'اتاق جلسات', 'سالن مجالس'],
    },
    {
     links: [
      'تقویم آنلاین',
      'پیگیری قرارداد',
      'گالری تصاویر',
      'سوالات متداول',
      'اخبار هتل',
      'تماس با ما',
     ],
    },
   ];
   scope.supportedLanguages = [
    {
     Key: 1,
     Value: 'فا',
    },
   ];
   scope.defaultLanguageKey = 1;
  };
  const createView = () => {
   return `
   <header class="master__header" ng-class='{"home-page":from=="home"}'>
    <div class="master__header-dash start">
       <a 
        aria-label='go home'
        class='master-aside__logo'
        href='/'>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1900.6 1531.7" style="enable-background:new 0 0 1900.6 1531.7;" xml:space="preserve">
    <style type="text/css">
	    .st0{fill:var(--cl-gold-accent);}
    </style>
    <title>Rexan_Logo</title>
    <path class="st0" d="M1533.6,1136.4c15.6,2.3,29.3,7,41.2,16.8c10.6,8.6,18.1,19.7,26.5,30c5.7,6.9,11.2,14,17.2,20.6
	    c7.6,8.3,15.8,16.1,23.3,24.5c12.9,14.2,26.1,28.1,39.2,42.1c11.1,11.8,22.3,23.4,33.3,35.3c25.3,27.3,51.6,53.7,78.2,79.7
	    c10.2,10,20.7,19.8,32.6,28c0.5,0.4,1,0.8,1.8,0.4c0.8-1.7,0.3-3.6,0.3-5.4c0-61.7,0-123.4,0.1-185.1c0-8.4,1.9-16.8,0.8-25.2
	    c-1.6-12.4,0.1-25-1.8-37.4c-1.2-7.9-5.1-13.2-13-15.4c-7-2-13.8-4.6-19.9-9.1c35.4-0.2,70.8-1,107.1,0.1
	    c-6.3,7.4-13,12.6-17.3,20.3c-4.4,7.7-6.8,16.5-7,25.4c-0.4,18.3-0.9,36.7,0.1,55c0.8,14.6-0.3,29.3,0.9,43.8
	    c1.2,14-0.3,28,0.9,41.9c1.4,17.2-0.1,34.3,0.9,51.5c1.8,29,0.6,57.9,0.7,86.9c0.1,15.8-0.8,31.7-2,47.4c-0.6,7.7-1,15.6-4.2,23.4
	    c-6.7-0.8-12.4-4.1-18-7.7c-10.1-6.4-19.1-14.2-28.1-22.1c-12.5-11.1-24.2-23-35.7-35.1c-14.6-15.5-29.1-31.2-42.9-47.4
	    c-8-9.4-16.5-18.3-24.6-27.6c-10.3-11.7-20.4-23.6-30.6-35.3c-5.6-6.4-11.4-12.7-17.1-19c-14.4-16-28.9-31.9-44.2-47.2
	    c-14.3-14.3-28.4-28.8-46.3-38.9c-1.4,1.3-0.8,2.8-0.8,4.1c-0.1,12.6,0.4,25.2-0.1,37.8c-2,48.6-0.9,97.1-0.6,145.7
	    c0.1,21,1.1,42.2,5.4,62.9c1.6,7.7,6.8,13.2,11.1,19.2c1.1,1.3,1.8,2.8,2.3,4.4h-81.5c2.4-6.2,5.2-12,7.2-18.2
	    c3.8-12.1,5.8-24.6,7.4-37.1c2.3-18.8,3.1-37.7,4-56.6c1.3-27.7,0.7-55.4,0.4-83c-0.1-9.8-0.1-19.7-0.7-29.5
	    c-1.1-16.8-1.3-33.6-2-50.3c-0.6-13.9-1.3-27.8-1.9-41.7c-0.8-16.3-1.3-32.6-2-48.9C1534,1152.4,1533.9,1144.7,1533.6,1136.4z"/>
    <path class="st0" d="M1087.8,1524.7c4.8-4.2,9-8.2,13.5-11.7c9.6-7.5,16.8-16.9,23.2-27.1c9.4-15.1,14-32.2,20.8-48.5
	    c7.5-18.1,15.1-36.3,22.7-54.4c6.8-16.2,13.6-32.5,20.4-48.7c7.2-17.2,14.5-34.5,21.7-51.7c6.8-16.4,13.4-32.9,20.5-49.2
	    c10.1-23.1,16.4-47.8,27.5-70.5c6.1-12.5,13.5-19.9,27.7-23.5c5.5,9,10.6,18.3,15.1,27.8c5.6,11.9,10.8,23.9,16,35.9
	    c7,16.3,14,32.7,20.7,49.1c9.1,22.2,18,44.5,26.8,66.8c11.3,28.4,22.3,56.8,33.6,85.2c7.7,19.2,15.3,38.5,23.8,57.4
	    c3.8,8.4,6.5,17.4,12,24.8c6.6,9,14.4,17.1,20.9,26.1c3.6,5,9.5,7.5,12.9,13.1H1376c-1.4-12.4-2.6-24.8-5.8-37
	    c-5.3-20.3-12.4-39.8-20.2-59.2c-3.3-8.4-6.5-16.8-9.7-25.3c-1.2-3.2-2.8-4.8-6.8-4.7c-39.9,0.2-79.7,0.2-119.6,0
	    c-3.6,0-5.3,0.9-6.5,4.4c-5.9,17.9-14.5,34.8-20.8,52.5c-5,13.9-9.2,28.1-13.7,42.2c-2.6,8.2-5.2,16.3-7.6,24.5
	    c-0.6,2.2-1.7,2.7-3.7,2.7c-16.1,0-32.2,0.6-48.3-0.3C1105.1,1525.2,1096.7,1525.6,1087.8,1524.7z M1279.1,1240.9
	    c-12.1,8-48.7,93.6-53.4,124.3c31.8-0.6,63.5,2,96.3,0.7L1279.1,1240.9z"/>
    <path class="st0" d="M882.4,1280.8c8.2-13.3,15.9-26,23.7-38.6c10.4-16.9,20.8-33.7,31.3-50.6c5.5-8.9,10.9-17.8,16.5-26.7
	    c1.7-2.8,2.2-5.4,0.8-8.4c-0.1-0.3-0.2-0.6-0.4-0.8c-2.3-3.7,0.7-9.4-3.5-11.8c-3.6-2.1-8.3-2.4-12.2-4.5c-1.9-1-4-1.5-5.8-3.3
	    l121.4,3c-6.4,4.6-13.4,7.6-19.4,12.3c-10.5,8.1-20.3,16.9-29.4,26.4c-13.4,14.4-25.9,29.6-37.5,45.5c-13.1,17.7-25.3,36-36.6,54.9
	    c-8,13.2-15.7,26.6-23.7,39.8c-1.7,2.8-1.6,5-0.2,7.8c9,19,19.9,36.8,31.5,54.3c10.1,15.2,19.8,30.7,30.3,45.7
	    c8.1,11.5,17.1,22.4,25.8,33.5c8.9,11.3,17.9,22.6,26.8,33.9c6.5,8.2,12.9,16.6,19.5,24.7c2.1,2.6,6,3.6,6.6,7.9h-3.2
	    c-28.5,0-57.1,0-85.6,0.1c-3.2,0-4.5-0.9-5.3-4.2c-2-8.7-3.8-17.4-5.8-26c-1.9-7.9-6.8-14.7-11-21.6c-12.7-21.1-25.5-42.2-38.3-63.3
	    c-6.5-10.8-13-21.7-19.5-32.5c-1.5-2.5-2.9-2.4-5.2-0.8c-10.7,7.6-19.8,17.1-27,28.1c-11.1,16.8-22,33.8-31.3,51.6
	    c-9.1,17.4-17,35.5-25.4,53.3c-1,2-1.8,4.2-0.1,6.1c1.2,1.4,0.2,2.3-0.3,3.3c-1.2,2.2-2.5,4.3-4,6.8l-94.1-5.5
	    c3.7-3.4,7.6-4.3,11.1-5.8c22.8-10,40.6-25.3,53.1-47.2c12.2-21.3,26.5-41.3,40.7-61.2c15.7-22,30.7-44.4,42.9-68.7
	    c2.9-5.8,3-10.6-0.4-16.4c-14.3-24.6-28.9-48.9-44.5-72.7c-14.9-22.9-29.5-46-44.2-69c-2.2-3.4-4.2-7-5.9-10.7
	    c-4.7-10-14.9-12.9-23.1-18.3l-23.7-15.7c1.7-1.3,3.9-1.6,5.8-1c7.4,1.7,14.9,0.8,22.3,0.8c22,0.1,43.9,0.8,65.8,1.3
	    c12.9,0.3,25.9-0.1,39,0.9c-4.2,3.3-11.5,5.3-25,6.8c-0.8,4.5-1.6,9.1-3.8,13.3c-1,1.8-0.9,3.9,0.2,5.6c7.4,12.7,14.6,25.4,22,38.1
	    c11.4,19.7,23.6,39,37.7,57C868,1266.4,874.9,1273.3,882.4,1280.8z"/>
    <path class="st0" d="M403.9,1524.6c13.7-16,19-35,21.7-54.7c3.1-22.5,2.5-45.3,1.9-68c-0.4-14.1-1.1-28.2-2-42.2
	    c-0.8-13-1-26-0.6-39c0.6-16.7,0-33.4,1-50c0.9-13,1-26,0.5-39c-0.8-16.5-1-33-3.4-49.5c-1.8-12.5-3.5-25-6.9-37.3
	    c-0.1-1.1-0.1-2.3,0-3.4c74.8,0.1,149.4-2,224.7-0.8c0.7,25-2.3,50-1.8,76.5c-3.9-4.6-4.8-9-6.7-13c-3.5-7-6.6-14.1-9.3-21.4
	    c-1-2.9-2.5-3.1-4.8-3.1c-17.7,0-35.4-0.7-53.1,0.2c-28.7,1.5-57.3,0.2-85.9,0.8c-1.4,0-2.8,0-4.5,0v139.7
	    c10.9-0.7,21.7,1.1,32.4-0.9c1.3-0.1,2.5-0.2,3.8-0.1c17.2,0,34.4-0.3,51.7,0.1c11.8,0.3,23.5-1.5,35.2-1c1.9,0.1,2.9-0.6,4.2-2.3
	    c5.3-7.2,8-15.9,13-23.3c0.4-0.7,0.6-1.4,2-1.8c-1.7,7.2-3.3,14.2-5,21.2c-3.4,13.1-6.9,26.2-10.3,39.3c-0.7,2.7-2,3.2-4.6,3.4
	    c-22.4,1.7-44.8,0.1-67.2,1c-18.3,0.7-36.5,0.7-54.6,0.8c-1.3,1.7-0.8,3.3-0.8,4.8c0,40.8,0,81.6-0.1,122.4c0,4.2,0.9,5.6,5.5,5.9
	    c11.3,0.7,22.5,2.4,33.7,3.5c4.4,0.5,8.8,0.6,13.2,0.9c14.4,0.9,28.9,2,43.3,1c15.8-1,31.5-3,45.8-10.4c12-6.2,21.5-15.2,29.7-25.7
	    c9-11.5,17.2-23.5,27.5-35c-1.2,8.9-3.2,17.7-6,26.2c-2.7,8.5-5.8,16.8-8.7,25.2s-6,16.4-8.8,24.6s-5.5,16.9-8.3,25.6
	    C562.6,1526.3,483.5,1525.7,403.9,1524.6z"/>
    <path class="st0" d="M0,1139.4c16.3-2.3,32.7-4,49.2-5c8.7-0.5,17.4-0.5,26.1-0.7c11.2-0.2,22.4-0.5,33.6,0.1
	    c15.5,0.9,30.9,2.7,46.2,5.4c20.4,3.6,40,9.6,58.3,19.4c22.5,12.1,38.9,29.5,45.4,54.8c3.1,11.8,2.9,24,1.6,36.2
	    c-1.7,14.4-5.3,28.5-10.7,42c-3.6,9-8.6,17.4-14.8,24.8c-11.8,14.8-28.1,23.9-42.6,35.3c-1.1,0.8-2.1,1.7-2.9,2.7
	    c11.3,19.7,24.6,38.2,37.8,56.7c10.6,14.9,22.1,29.2,33.3,43.6c4,5.1,8.5,9.7,12.6,14.7c12.6,15.2,28,27.1,43.9,38.4
	    c7.5,5.3,14.5,11.2,22.4,17.3c-2.6,0.9-5.4,1.1-8.1,0.6c-7.1-1.5-14.3-0.3-21.4-0.9c-22.3-1.9-44.6-3.9-64.7-15.2
	    c-11.8-6.6-21.6-15.4-30.4-25.7c-18.2-21.4-32.3-45.6-48.5-68.4c-12.8-18-25.5-36.1-39.9-52.8c-8.5-9.8-16.8-19.6-27.4-27.3
	    c-0.7-0.6-1.3-1.3-1.8-2c3.8-3.4,7.1-6.3,12.1-7.8c9.8-3,19.5-6.4,29.7-8c7.4-1.1,14.8-1.8,21.9-4.6c11.8-4.7,20-12.9,26.2-23.6
	    c7.9-13.6,13.9-28.2,15.4-43.8c2.5-25.9-3.2-47.8-30.1-62.1c-11.9-6.3-24.7-9.3-38.1-10.7c-9.1-0.9-18.2-1.8-27.4-1.9
	    c-5.9,0-11.6,1.7-17.3,0.9c-3,6.7-1.9,13.7-2.4,20.3c-0.7,9.1-1,18.4-1.4,27.5c-1,21.4-1,42.8-2,64.2c-1.2,26.6-0.8,53.1-0.4,79.7
	    c0.1,11.1,0.1,22.2,0.7,33.3c0.8,15.4,1.4,30.9,3,46.3c2.1,20.8,4.1,41.8,9.5,62.1c1.9,7,4.1,14,8.6,20.5H17
	    c0.5-3.1,3.1-4.9,4.6-7.3c8.7-14,11.7-29.7,14-45.7c1.5-10.5,1.4-21.1,2-31.7c0.4-7,1.3-14,0.6-20.8c-1.3-12.9,0-25.8-0.9-38.6
	    c-1.9-27.8-1.4-55.7-0.6-83.5c0.8-29.1,0.3-58.2,0.6-87.3c0.2-17.7-1.5-35.3-2.8-53c-0.1-1.4-0.8-2.7-2-3.5
	    c-9.8-6.9-20.8-11.2-32.4-13.9L0,1139.4z"/>
    <path class="st0" d="M1252.2,873.6H717.5c5.3,13.7,3.3,26.3-5.6,37.4c-5.8,7.3-13.8,12.1-23.2,13.1c-23.7,2.4-40.5-12-42.7-35.3
	    c-0.7-6.9,1.8-13.8,5.5-20c3.9-6.4,9.4-10.8,15.9-14.3s13.7-3.1,21-3V291.6c-15,1.1-32.6-5.4-40.1-24.4c-4.8-12.1-0.7-31.1,8.8-38.9
	    c15.7-12.9,31.3-13.4,46.9-4c14,8.5,18.9,25.1,13.7,45.2h535.1c-6.3-14.1-3.5-26.8,5.2-38.2c6.1-7.9,14.9-12.2,24.7-13
	    c25-2,41.6,16.5,41,37c-0.7,23.5-19.7,37.8-42.3,36.3v560c15.3-1.6,28.1,3.5,36.6,16.8c4.2,6.6,6.6,14.2,5.6,22.3
	    c-3.3,27.6-27.2,36.4-44.7,33.1C1259.8,920.1,1243.1,898.6,1252.2,873.6z M1267.6,571.6c0-93.4,0-186.8,0.1-280.3c0-6-1.5-7.3-7-7.3
	    H709.3c-6.3,0-7,0.8-7,7.1c0,186.7,0,373.3,0,560c0,6.1,1.7,7.8,7.9,7.8h549.5c6.4,0,8-1.7,8-8.2
	    C1267.7,757.8,1267.6,664.7,1267.6,571.6L1267.6,571.6z"/>
    <path class="st0" d="M812.6,559.2c22.5,3.9,41.4,12.1,55.7,29.9c9.6,12,19.5,23.8,29.4,35.6c11.1,13.2,21.7,26.8,32.7,40.1
	    c9.8,11.9,19.8,23.6,29.6,35.5c9.4,11.4,18.4,23,27.8,34.4c9.7,11.8,19.6,23.4,29.3,35.1c9.9,12,19.6,24,30.1,36.9
	    c-10.5-1.4-20.7-4-30.6-7.9c-20.6-8.1-37-21.9-51.5-38.1c-9.8-11-18.3-23-26.5-35.3c-15.8-23.8-33-46.7-50.5-69.3
	    c-14-18-27.9-36.2-41.9-54.3C835.2,587.7,824.1,573.8,812.6,559.2z"/>
    <path class="st0" d="M961.6,581.7c21.1,29.9,42.7,58.9,64.5,87.7c11.3,14.9,22.9,29.4,34.8,43.8c16.4,20,33.6,39.2,52.4,56.8
	    c15.6,14.4,32,27.8,49.2,40.2c0.8,0.6,1.6,1.4,3.4,3c-11-0.6-20.7,0.2-30.4-0.9c-11.4-1.3-22.6-3.1-33.5-6.6
	    c-19.6-6.3-36.8-16.8-52.4-30.2c-20.9-18.1-37.4-39.9-53.6-62c-21.8-29.8-42.7-60.1-64.7-89.7c-11.6-15.6-23.7-30.9-37.1-45.2
	    c-6.2-6.6-14.5-9.8-21.9-14.4c-5-3.1-8.8-7.5-13.3-12.3c9-0.7,17.3-1.1,25.5-2.1c21.6-2.5,43-5.7,63.2-14.5
	    c17.3-7.5,31.4-18.5,39.1-36.1c5.4-12.5,6.2-25.6,4.7-39.2c-1.4-11.8-4.1-23.4-7.9-34.6c-3.6-11-8.5-21.2-16.7-29.5
	    c-9-9.1-20.1-14.1-32.5-16.4c-8.4-1.5-17-1.4-25.4-2.1c-13-1.1-26.1,0-39-0.9c-21.2-1.4-41.3-6.8-58.3-20.4
	    c-2.3-1.9-4.4-4.1-7.1-6.7c4-0.9,8-1.3,12.1-1.3c8.7-0.1,17.4-0.9,26.1-1.4c20.3-1.3,40.7-0.8,61-0.7c26.6,0.2,52.9,3.7,77.8,13.5
	    c11.2,4.2,21.5,10.3,30.6,18.1c17.3,15.2,26.5,34.2,30,56.7c1.8,10.5,2.3,21.1,1.6,31.7c-1,15.1-4.8,30-11.2,43.7
	    c-7.4,15.7-16.3,30.4-29.4,42.1c-8.8,7.9-18.9,13.8-28.5,20.7C970.3,575.8,966,578.7,961.6,581.7z"/>
    <path class="st0" d="M917.7,47.3c12.2-1.5,23.5-1.8,34.5-4.3c6.8-1.5,12.7-3.1,15.6-11.1c3.4-9.2,7.7-18.1,12.9-26.5
	    c1.2-1.9,2.1-3.9,4.8-5.5c2.6,5.6,5.1,11.2,7.7,16.7s5.4,11.3,8.2,16.8c4,8,12.1,8.1,19.3,9.4c9.8,1.8,19.7,2.8,30.4,4.3
	    c-3.5,3.7-5.8,7.4-9.3,10.4c-7.3,6.1-14.1,12.8-20.8,19.5c-3.3,3.3-2.2,7.7-1.6,11.7c2,11.7,4.2,23.3,6.2,35c0,0.6-0.2,1.1-0.4,1.6
	    c-9.6-4.1-19.2-8.3-27.4-14.3c-11.1-8.3-20.1-4.2-29.9,1.6c-7.8,4.6-15.5,9.4-24.5,12.6c-0.3-7,2.3-13.1,3.1-19.5
	    c0.9-6.8,2.6-13.5,2.7-20.5c0.2-4.1-1.5-8.1-4.6-10.8c-7.8-7.5-15.4-15.3-23-22.9C920.4,50.3,919.4,49.1,917.7,47.3z"/>
    <path class="st0" d="M1301.9,214.7c2-10.4,4-19.8,5.5-29.3c0.8-5.5,2.1-11.1,0.5-16.7c-0.6-2-1.7-3.7-3.2-5.1
	    c-8.1-7.8-16.3-15.6-24.4-23.4c-1.1-1-2.6-1.8-2.9-4c4.5-0.5,9-0.9,13.4-1.4c9.3-0.9,18.6-1.7,27.7-4.6c3-0.9,5.5-3.1,6.7-5.9
	    c5.7-11.3,10.2-23.2,17.2-33.8c0.4-0.6,0.8-1.4,1.7-2.9c3,6.5,5.4,11.9,7.8,17.2c3,6.7,6.3,13.3,10,19.6c1.4,2.4,3.8,4.2,6.5,4.9
	    c10.8,3.2,22,4.7,33.2,5.6c2.6,0.2,5.3,0.7,8.4,1.1c-3.8,6.5-9.5,11-14.6,15.9c-4.7,4.5-9.8,8.4-14.4,12.9
	    c-2.9,2.9-3.7,6.7-2.9,10.9c2.3,11.1,4.3,22.4,6.4,33.5c0.1,1.7,0.1,3.4,0,5.2c-9.4-4-17.7-8.9-26.2-13.5c-3.6-2-7.1-3.9-10.8-5.7
	    c-5-2.4-9,0.4-13.1,2.6C1323.8,203.3,1313.7,209.6,1301.9,214.7z"/>
    <path class="st0" d="M827.9,151c-9.3-2.8-16.6-8.1-24.5-12c-4.8-2.4-9.4-5-14.1-7.4c-3.4-1.7-6.5,0.3-9.3,1.8
	    c-10.3,5.3-20.5,10.8-30.7,16.2c-1.1,0.6-2.2,1-4.3,2c1.3-6.6,2.4-12.5,3.5-18.4c1.5-8.5,3.7-17,2.6-25.8c-0.2-2.7-1.5-5.2-3.4-7
	    c-8.1-7.8-16.3-15.6-24.4-23.4c-1.1-1-2.7-1.8-2.7-3.9c7.3-0.8,14.6-1.3,21.9-2.3c6-0.8,12-1.8,18-3.2c7.3-1.7,9.1-8.4,11.6-14.2
	    c3.9-8.7,8.2-17.2,12.9-25.5c0.5-0.8,1.1-1.6,2.2-3.3c2.6,5.8,4.7,10.6,7,15.2c3.3,6.9,6.7,13.8,10.2,20.6c2.3,4.5,6.6,5.6,11.1,6.7
	    c10.2,2.4,20.6,4,31,4.6c2.2,0.2,4.3,0.7,6.7,1.1c-2.9,5.6-7.8,9.3-12,13.4c-5.2,5-10.7,9.8-16.3,14.4c-4.3,3.6-4.6,8.1-3.5,12.9
	    C824.1,125.9,826.1,138.1,827.9,151z"/>
    <path class="st0" d="M627.3,87.2c4.7,9.7,9.8,18.9,13.5,28.6c3.8,9.8,11.4,12.8,20.5,14.2c10.3,1.5,20.7,2.8,31.5,4.3
	    c-2.7,3.8-5.2,7.4-8.5,10.2c-6.4,5.4-12.4,11.2-18.7,16.7c-5.1,4.5-5.7,9.4-4.3,15.5c2.8,11.6,4.6,23.5,6.5,35.8
	    c-8.8-2.5-15.8-7.6-23.3-11.4c-5.3-2.7-10.5-5.5-15.8-8.2c-3.2-1.6-5.8,0.4-8.4,1.7c-11,5.6-21.8,11.5-32.8,17.2
	    c-0.5,0.2-1.1,0.4-1.6,0.6c-1.1-5.4,1.3-10.2,2-15.2c1.1-8.4,3.5-16.6,3.4-25.1c0.2-4-1.4-7.8-4.3-10.5
	    c-7.9-7.6-15.6-15.5-23.4-23.3c-1.1-1.1-2.1-2.3-3.7-4c5.5-0.5,10.3-0.9,15-1.5c9.6-1.1,19.3-1.5,28.3-5.6c2-0.9,3.5-2.4,4.4-4.4
	    c5.4-10.2,9.3-21.2,15.5-31C624.1,90.1,625.5,88.4,627.3,87.2z"/>
    <path class="st0" d="M1136.7,152.7c0.4-6.3,1.8-12.5,3.2-18.6c1.9-8,2.7-16.2,2.5-24.3c0-2.1-0.9-4-2.4-5.4
	    c-8.3-7.8-15.6-16.7-24.7-23.8c-1.4-1.1-2.2-3-3.4-4.7c10.5-2,20.8-2.8,31-3.8c12.1-1.2,17.6-8.3,21.4-18.4
	    c3.4-9.1,8.2-17.5,14-26.3c2.5,5.4,4.8,10.2,7.1,15c3.3,6.9,6.6,13.8,10,20.7c3.1,6.2,9.8,6.4,15.3,7.6c10.8,2.3,21.8,3.7,32.8,4.2
	    c0.1,2.1-1,3.5-2.3,4.8c-7.9,8-16.1,15.7-24.7,22.9c-4.4,3.7-5,8.6-3.9,14.1c2.3,11.1,4.3,22.4,6.3,33.5c0,1.2-0.1,2.3-0.3,3.5
	    c-6.1-3-11.9-5.7-17.5-8.6c-5.9-3.1-11.7-6.6-17.6-9.8c-3.5-2-7.8-2-11.3,0c-10.2,5.4-20.4,10.9-30.6,16.3
	    C1140.1,152.2,1138.8,153.4,1136.7,152.7z"/>
</svg>

       </a>
    </div>
    <div class="master__header-dash end">
     <comp-link
      type="'link'"
      class-name="'gold'"
      text="'پنل ادمین'"
      navigate-to="'/Desktop/Login/Index?AutoRedirect=false'"
      class="master__sign-in-ct"
     ></comp-link>
     <comp-link
      type="'link'"
      class-name="'gold'"
      text="'ورود / ثبت نام'"
      class="master__sign-in-ct"
     ></comp-link>
     <comp-link
      type="'link'"
      class-name="'gold'"
      text="'خرید دوره'"
      navigate-to="'/public/Time'"
      class="master__sign-buy-ct"
     ></comp-link>
     <comp-select
        class="master-language__ct"
        model-value="defaultLanguageKey"
        data="supportedLanguages"
        ng-if="false"
        ></comp-select>
    <comp-button
      data-master-nav-ct
      class='master-nav__ct'
      type="'link'"
      class-name="'gold'"
      icon="'opt-menu-bars'"
      ng-click='masterNavCtClicked()'
     ></comp-button>
    <comp-button
      class='master-shop-card__ct'
      type="'link'"
      icon="'opt-shopping-cart'"
      ng-click='shopCardClicked()'
      ng-if="from=='rooms'"
     ></comp-button>
    </div>
    <div data-master-nav class="master__nav-container">
        <div class="master__nav-tools">
            <comp-link
                  type="'link'"
                  class-name="'gold'"
                  text="'ورود / ثبت نام'"
                 ></comp-link>
            <comp-link
                type="'link'"
                class-name="'gold'"
                text="'خرید دوره'"
                navigate-to="'/TS/Time/Index'"
                ></comp-link>
        </div>
        <nav class="master__nav">
            <div class="master__nav-category" ng-repeat="nav in masterNavigation">
                <h3 ng-if="nav.title" class="master__nav-category-title">{{nav.title}}</h3>
                <ul class="master__nav-category-list">
                    <li class="master__nav-category-item" ng-repeat="link in nav.links">
                         <comp-link
                          class-name="'master__nav-category-link normal'"
                          text="link"
                         ></comp-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
   </header>
   `;
  };
  const headerDdo = () => {
   return {
    restrict: 'E',
    template: createView(),
    link: componentLink,
    scope: {
     from: '<?',
    },
   };
  };
  layoutModule.directive('masterHeader', headerDdo);
 })();
 (function masterFooter() {
  const footerDdo = () => {
   const componentLink = (scope, jqContainer) => {};
   const createView = () => {
    return `
    <footer class="master__footer">
      <section class="master__footer-top">
      <div class="master__footer-top-links">
         <div class="ms__footer-nav">
        <h3 class="ms__footer-nav-title"> هتل رکسان </h3>
        <ul class="ms__footer-nav-list">
         <li class="ms__footer-nav-item">
          <comp-link
           class-name="'ms__footer-nav-link normal'"
           text="'هلدینگ رکسان'"
          ></comp-link>
         </li>
         <li class="ms__footer-nav-item">
          <comp-link
           class-name="'ms__footer-nav-link normal'"
           text="'درباره هتل'"
          ></comp-link>
         </li>
         <li class="ms__footer-nav-item">
          <comp-link
           class-name="'ms__footer-nav-link normal'"
           text="'کشف هتل'"
          ></comp-link>
         </li>
         <li class="ms__footer-nav-item">
          <comp-link
           class-name="'ms__footer-nav-link normal'"
           text="'شرایط تسهیلات تایم شیرینگ'"
          ></comp-link>
         </li>
         <li class="ms__footer-nav-item">
          <comp-link
           class-name="'ms__footer-nav-link normal'"
           text="'قوانین و شرایط عمومی هتل'"
          ></comp-link>
         </li>
        </ul>
       </div>
       <ul class="ms__footer-quick-nav">
        <li class="ms__footer-quick-item">
         <comp-link
          class-name="'ms__footer-quick-link normal'"
          text="'امکانات هتل'"
         ></comp-link>
        </li>
        <li class="ms__footer-quick-item">
         <comp-link
          class-name="'ms__footer-quick-link normal'"
          text="'واحدهای اقامتی'"
         ></comp-link>
        </li>
        <li class="ms__footer-quick-item">
         <comp-link
          class-name="'ms__footer-quick-link normal'"
          text="'تقویم آنلاین'"
         ></comp-link>
        </li>
        <li class="ms__footer-quick-item">
         <comp-link
          class-name="'ms__footer-quick-link normal'"
          text="'پیگیری قرارداد'"
         ></comp-link>
        </li>
       </ul>
       <ul class="ms__footer-quick-nav">
        <li class="ms__footer-quick-item">
         <comp-link
          class-name="'ms__footer-quick-link normal'"
          text="'اخبار هتل'"
         ></comp-link>
        </li>
        <li class="ms__footer-quick-item">
         <comp-link
          class-name="'ms__footer-quick-link normal'"
          text="'همکاری با ما'"
         ></comp-link>
        </li>
        <li class="ms__footer-quick-item">
         <comp-link
          class-name="'ms__footer-quick-link normal'"
          text="'تماس با ما'"
         ></comp-link>
        </li>
       </ul>

      </div>
       <div class="master__footer-partners">
        <a href="" class="master__footer-partner">
         <img src="/TS/wwwroot/assets/images/alrawadatain-logo.png" alt="company logo"/>
        </a>
        <a href="" class="master__footer-partner">
         <img src="/TS/wwwroot/assets/images/rh-logo.png" alt="company logo"/>
        </a>
       </div>
      </section>
      <section class="master__footer-middle">
       <div class="master__footer-contact">
        <div class="ms__footer-nav">
         <h3 class="ms__footer-nav-title">تماس با ما</h3>
         <ul class="ms__footer-nav-list">
          <li class="ms__footer-nav-item util-mar-b-4x">
           <span>آدرس:‌ </span>
           <span>تهران - یوسف آباد - خیابان 14 (شهید سپهری) پلاک 3 - طبقه اول</span>
          </li>
          <li class="ms__footer-nav-item util-mar-b-small">
           <span>تلفن:‌ </span>
           <span>09128880244</span>
          </li>
          <li class="ms__footer-nav-item">
           <span>دورنگار:‌ </span>
           <span>021-86124161</span>
          </li>
         </ul>
        </div>
        <div class="master__footer-e">
         <a href="" class=""></a>
         <div class="master__footer-socials">
          <a href="" class="master__footer-social">
           <i class="opt-a-telegram-plane"></i>
          </a>
          <a href="" class="master__footer-social">
           <i class="opt-a-instagram"></i>
          </a>
          <a href="" class="master__footer-social">
           <i class="opt-a-facebook-f"></i>
          </a>
         </div>
        </div>
       </div>
       <div class="master__footer-map">
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d6722.185248097731!2d44.02875085126182!3d32.60371496710537!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d32.6065696!2d44.0261649!4m5!1s0x15596be147b8cdc9%3A0xf6c5daaaaea111f0!2z2qnYsdio2YTYpyA1NjAwMdiMINi52LHYp9mC!3m2!1d32.6027147!2d44.0196987!5e0!3m2!1sfa!2s!4v1678393894713!5m2!1sfa!2s"
           style="border: 0"
           allowfullscreen=""
           loading="lazy"
           referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
       </div>
      </section>
      <section class="master__footer-rights">
       <span> تمامی حقوق این وبسایت متعلق به شرکت رکسان است</span>
      </section>
     </footer>
    `;
   };
   return {
    restrict: 'E',
    template: createView(),
    link: componentLink,
    scope: {},
   };
  };
  layoutModule.directive('masterFooter', footerDdo);
 })();
 (function masterBreadcrumb() {
  const breadcrumbDdo = () => {
   const componentLink = (scope, jqContainer) => {};
   const createView = () => {
    return ` 
    <nav 
        aria-label='breadcurmb navigation' 
        class="master__breadcrumb-nav">
        <ul class="master__breadcrumb-list">
        <li class="master__breadcrumb-item"
            ng-repeat="route in routes"
            >
                <a 
                    href="{{route.href}}"
                    class="master__breadcrumb-link">
                    {{route.title}}
                </a>
            </li>
        </ul>
     </nav>`;
   };
   return {
    restrict: 'E',
    template: createView(),
    link: componentLink,
    scope: {
     routes: '<?',
    },
   };
  };
  layoutModule.directive('masterBreadcrumb', breadcrumbDdo);
 })();
})();
