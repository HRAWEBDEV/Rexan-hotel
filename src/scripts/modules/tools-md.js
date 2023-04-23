const toolsModule = (function moduleWrapper() {
 'use strict';
 const registerFilterSideBar = () => {
  const jqRoomFilterContainer = $('[data-comp-filter-container]');
  const jqRoomFilterForm = $('[data-comp-filter-form]');
  const onFilterBtnClick = function (e) {
   const activeStateClass = 'is-expanded';
   const isExpanded = $(this).hasClass(activeStateClass);
   const jqList = $(this).siblings('[data-comp-filter-list]');
   if (isExpanded) {
    $(this).removeClass(activeStateClass);
    jqList.slideUp(100);
    return;
   }
   // *
   const jqAllExpandedBtns = $(e.delegateTarget)
    .find('[data-comp-filter-btn]')
    .filter(`.${activeStateClass}`);
   jqAllExpandedBtns.each(function () {
    $(this).removeClass(activeStateClass);
    $(this).siblings('[data-comp-filter-list]').slideUp(100);
   });
   $(this).addClass(activeStateClass);
   jqList.slideDown(100);
  };
  const toggleFiltersVisible = (action) => {
   if (action == 'hide') {
    jqRoomFilterContainer.removeClass('is-visble');
    return;
   }
   jqRoomFilterContainer.addClass('is-visble');
  };
  const hideFiltersClicked = () => {
   toggleFiltersVisible('hide');
  };
  const showFiltersClicked = () => {
   toggleFiltersVisible('hide');
  };
  jqRoomFilterForm.on('click', '[data-comp-filter-hide]', hideFiltersClicked);
  jqRoomFilterForm.on('click', '[data-comp-filter-btn]', onFilterBtnClick);
  return {
   show: showFiltersClicked,
   hide: hideFiltersClicked,
  };
 };
 const createInsersectionObserver = (observerOptions) => {
  let observer = null;
  let observerSubscribers = [];
  const addSubscriber = (target, callBack) => {
   observerSubscribers.push({ target, callBack });
   observer.observe(target);
  };
  const removeSubscriber = (target, callBack) => {
   observerSubscribers = observerSubscribers.filter((subscriber) => {
    if (subscriber.target.isEqualNode(target)) {
     return callBack ? subscriber.callBack != callBack : false;
    }
    return true;
   });
  };
  const removeAllSubscribers = () => {
   observerSubscribers = [];
  };
  const observerCallBack = (entries, observer) => {
   entries.forEach((entry) => {
    const { target } = entry;
    observerSubscribers.forEach(
     (subscriber) =>
      subscriber.target.isEqualNode(target) &&
      subscriber.callBack(entry, observer)
    );
   });
  };
  const observerCallBackWrapper = () => {
   return observerCallBack;
  };
  observer = new IntersectionObserver(
   observerCallBackWrapper(),
   observerOptions
  );
  // * api
  return {
   addSubscriber,
   removeSubscriber,
   removeAllSubscribers,
  };
 };
 const router = (() => {
  const orgin = window.location.origin;
  const getSearchParams = () => {
   return new URL(window.location.href).searchParams;
  };
  const getQueries = (searchParams) => {
   const query = {};
   searchParams.forEach((value, key, parent) => {
    const queryDefinedKeys = Object.getOwnPropertyNames(query);
    if (queryDefinedKeys.includes(key)) {
     if (Array.isArray(query[key])) return void query[key].push(value);
     query[key] = [query[key], value];
    } else {
     query[key] = value;
    }
   });
   return query;
  };
  const navigateTo = (path) => {
   window.location.href = `${orgin}${path}`;
  };
  const pushState = (data, unused, url) => {
   history.pushState(data, unused, url);
   return getQueries(getSearchParams());
  };
  return {
   navigateTo,
   query: getQueries(getSearchParams()),
   getSearchParams,
   pushState,
  };
 })();
 const createStopWatch = () => {
  let startTime = 0;
  let endTime = 0;
  const start = () => {
   startTime = Date.now();
  };
  const stop = () => {
   endTime = Date.now();
   return (endTime - startTime) / 1000;
  };
  return {
   start,
   stop,
  };
 };
 return {
  createInsersectionObserver,
  router,
  createStopWatch,
  registerFilterSideBar,
 };
})();
