$(() => {
 const { registerFilterSideBar } = toolsModule;
 registerFilterSideBar();
});
(function roomsPage() {
 // * filters slide down
 const query = new URL(window.location.href).searchParams;
 // * posible queries TimeId ,TimeTypeId, RoomTypeId, FloorId
 const toggleRoomExtra = (() => {
  // * rooms extra toggle
  const jqRoomsList = $('[data-rooms-card-list]');
  const extraBtnClicked = function (e) {
   const jqTargetBtn = $(e.currentTarget).closest('[data-extra-ct]');
   const jqRoomCard = jqTargetBtn.closest('[data-room-card]');
   const extraTarget = jqTargetBtn.attr('data-extra-ct');
   const selectedStateClass = 'is-selected';
   const isSelected = jqTargetBtn.hasClass(selectedStateClass);
   const jqTargetExtra = jqRoomCard.find(`[data-card-extra='${extraTarget}']`);
   if (isSelected) {
    jqTargetBtn.removeClass(selectedStateClass);
    jqTargetExtra.slideUp(100);
    return;
   }
   const jqSelectedExtraBtns = jqRoomsList
    .find('[data-extra-ct]')
    .filter(`.${selectedStateClass}`)
    .each(function () {
     $(this).removeClass(selectedStateClass);
     const extraTarget = $(this).attr('data-extra-ct');
     const jqTargetExtra = jqRoomCard.find(
      `[data-card-extra='${extraTarget}']`
     );
     jqTargetExtra.slideUp(100);
    });
   jqTargetBtn.addClass(selectedStateClass);
   jqTargetExtra.slideDown(100);
  };
  return extraBtnClicked;
 })();
 const { createInsersectionObserver } = toolsModule;
 const elMasterMain = document.querySelector('[data-master-main]');
 const elMasterFooter = document.querySelector('master-footer');
 const lazyLoadingObserver = createInsersectionObserver({
  root: elMasterMain,
  threshold: [0, 0.25, 0.5, 0.75, 1],
 });
 const roomsController = async (scope) => {};
 wrapperModule.controller('roomsController', ['$scope', roomsController]);
})();
