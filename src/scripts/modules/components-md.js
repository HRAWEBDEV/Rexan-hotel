(function componentsModule() {
    const componentModule = angular.module('componentsModule', []);
    (function buttonComponent() {
        const btnDdo = () => {
            const componentLink = (scope, jqContainer) => {
                scope.btnClicked = (e) => {
                    scope.onClick && scope.onClick(e, scope.clickOverload);
                };
            };
            const createView = () => {
                return `
        <a type="{{type||''}}" class="comp-btn"
            ng-href="{{navigateTo || '#'}}"
            ng-class="[className,type,{'no-hover':noHover,'no-focus':noFocus}]"
            ng-click="btnClicked($event)"
            tabindex="0"
        >
         <div class="comp-btn__info">
          <i class="comp-btn__icon" ng-class="[icon]" ng-if="icon"></i>
          <span class="comp-btn__txt" ng-if="text">{{text}}</span>
         </div>
         <div class="comp-btn__ext" ng-if="logo">
          <i class="comp-btn__logo opt-ico-r"></i>
         </div>
        </a>
    `;
            };
            return {
                restrict: 'E',
                template: createView(),
                link: componentLink,
                scope: {
                    text: '<?',
                    icon: '<?',
                    logo: '<?',
                    className: '<?',
                    noHover: '<?',
                    noFocus: '<?',
                    type: '<?',
                    navigateTo: '<?',
                    onClick: '<?',
                    clickOverload: "<?"
                },
            };
        };
        componentModule.directive('compLink', btnDdo);
    })();
    (function imageComponent() {
        const imageDdo = () => {
            const componentLink = (scope, jqContainer) => {
                const componentUi = () => {
                    const jqImageEl = jqContainer.find('[data-comp-image]');
                    const jqLoaderWrapper = jqContainer.find('[data-comp-image-wrapper]');
                    const imageOnLoad = () => {
                        jqLoaderWrapper.fadeOut(200);
                    };
                    const imageOnError = () => {
                        jqLoaderWrapper.fadeOut(200);
                    };
                    jqImageEl.on('load', imageOnLoad);
                    jqImageEl.on('error', imageOnLoad);
                };
                const controller = () => {
                    componentUi();
                    scope.imageSrc = scope.href;
                };
                controller();
            };
            const createView = () => {
                return `
    <div class='comp-image__wrapper'>
     <picture class='comp-image__picture'>
      <img loading="lazy" data-comp-image class='comp-image' 
      ng-src='{{imageSrc}}' ng-class='[className]' 
      alt='{{alt}}' draggable="false"/>
     </picture>
     <div data-comp-image-wrapper class='comp-image__loading-wrapper'>
      <svg class="comp-image__loading" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
         <path class="loading-circle" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" stroke="none">
           <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51"></animateTransform>
         </path>
      </svg>
     </div>
    </div>
    `;
            };
            return {
                restrict: 'E',
                template: createView(),
                link: componentLink,
                scope: {
                    href: '<?',
                    alt: '<?',
                    className: '<?',
                },
            };
        };
        componentModule.directive('compImage', imageDdo);
    })();
    (function modalComponent() {
        const componentLink = (scope, jqContainer) => {
            const jqDialog = jqContainer.find('[data-comp-modal-dialog]');
            const dialogEl = jqDialog.get(0);
            const closeModal = () => {
                dialogEl.close();
            }
            const openModal = () => {
                dialogEl.showModal();
            }
            // events
            jqDialog.on('click', '[data-btn-role="close-modal"]', closeModal);
            scope.$watch("width", (oldValue, newValue) => {
                const setModalWidth = () => {
                    jqDialog.css({
                        "--comp-modal-width": `${scope.width}`
                    });
                }
                newValue && setModalWidth();
            })
            // reveal api
            scope.getApi && scope.getApi({
                openModal,
                closeModal
            });
        };
        const modalDdo = () => {
            const createView = () => {
                return `
                <dialog
                    data-comp-modal-dialog
                    class="comp-modal__dialog"
                    ng-class='{"no-scroll":deactiveBodyScroll}'
                >
                    <header class="comp-modal__header">
                    <div class="comp-modal__info">
                        <h4>{{modalTitle}}</h4>
                    </div>
                    <div class="comp-modal__dash">
                        <button data-btn-role="close-modal" type="button">
                            <i class="opt-times-circle"></i>
                        </button>
                    </div>
                    </header>    
                    <main class="comp-modal__body">
                        <ng-transclude></ng-transclude>
                    </main>    
                </dialog>
                  `;
            };
            return {
                restrict: 'E',
                template: createView(),
                link: componentLink,
                transclude: true,
                scope: {
                    getApi: "<?",
                    width: "<?",
                    deactiveBodyScroll: "<?",
                    modalTitle: "<?"
                },
            };
        };
        componentModule.directive('compModal', modalDdo);
    })();
    (function selectComponent() {
        const componentLink = (scope, jqContainer) => {
            scope.openOnTop = false;
            scope.selectMaxHeight = 15;
            scope.isSelectListExpanded = false;
            scope.activeClear = scope.activeClear == undefined ? true : scope.activeClear;
            const jqSelectWrapper = jqContainer.find("[data-comp-select-wrapper]");
            const closeSelect = () => {
                scope.$apply(() => {
                    removeWinWatcher();
                    scope.isSelectListExpanded = false;
                })
            }
            const toggleSelectList = () => {
                scope.openOnTop = false;
                removeWinWatcher();
                // * is open
                if (!scope.isSelectListExpanded) {
                    addWinWatcher();
                    const selectBottomOffset = $(document).height() - (jqSelectWrapper.offset().top + jqSelectWrapper.height());
                    const documentFontSize = Number($(document).find("body").css("font-size").replace("px", ""));
                    if (documentFontSize * 17 >= selectBottomOffset) scope.openOnTop = true;
                }
                scope.isSelectListExpanded = !scope.isSelectListExpanded;
            }
            const selectWinWatcher = (e) => {
                const jqTargetContainer = $(e.target).closest(jqContainer.get(0));
                if (jqTargetContainer.length == 0) closeSelect();
            }
            const addWinWatcher = () => {
                $(window).on("click", selectWinWatcher);
            }
            const removeWinWatcher = () => {
                $(window).off("click", selectWinWatcher);
            }
            scope.selectChanged = (e) => {
                scope.selectedOption = scope.data.find((item) => item.Key == scope.modelValue);
                scope.onChange && scope.onChange(e);
            }
            scope.selectClicked = () => {
                toggleSelectList();
            };
            scope.itemClicked = (e, item) => {
                scope.modelValue = item.Key;
                toggleSelectList();
            }
            scope.selectClearClicked = () => {
                scope.modelValue = undefined;
            }
            scope.$watch('modelValue', function (oldValue, newValue) {
                if (oldValue == newValue) return;
                scope.selectChanged();
            });

        };
        const createComboView = () => {
            return `
          <fieldset
            data-comp-select-wrapper
            ng-class="{'open-on-top':openOnTop}"
            aria-expanded='{{isSelectListExpanded}}'
            class='comp-input__fieldset select'>
            <div class='comp-input' ng-click='selectClicked($event)' tabindex="0">
                {{selectedOption.Value}}
            </div>
            <select ng-model="modelValue" class='comp-input__select'>
              <option ng-repeat='item in data' ng-value='item.Key'>{{item.Value}}</option>
            </select>
            <label class='comp-input__label'>
                {{label}}
            </label>
            <div class="comp-input__tools">
                 <button
                    class='comp-input__tool util-hover-cl--red'
                    ng-if='activeClear && (modelValue || modelValue == 0)' ng-click='selectClearClicked()'
                  >
                    <i class='opt-trash-can'></i>
                 </button>
                 <i class='opt-arrow-down'></i>
            </div>
            <div class='comp-combo__options' ng-if='isSelectListExpanded'>
                <ul class='comp-combo__list'>
                  <li class='comp-combo__item'
                    ng-repeat='item in data'
                    ng-click="itemClicked($event,item)">
                        {{item.Value}}
                  </li>
                </ul>
            </div>
          </fieldset>
            `;
        }
        const createSelectView = () => {
            return `
      <fieldset class='comp-fmel__wrapper'
            ng-class="{'open-on-top':openOnTop}"
            aria-expanded='{{isSelectListExpanded}}'
      >
        <label class='comp-fmel__label'>
         {{label}}
        </label>
        <select ng-model="modelValue" class='comp-select' ng-change="selectChanged($event)">
          <option ng-repeat="item in data" ng-value="item.Key">{{item.Value}}</option>
        </select>
        <div data-comp-select-wrapper class='comp-fmel__input-wrapper'>
          <div ng-click="selectClicked()" class='comp-fmel__input' tabindex="0">
              {{selectedOption.Value}}
          </div>
          <div class='comp-fmel__indicator'>
            <i class='opt-arrow-down'></i>
          </div>
          <div class='comp-select__options'
            ng-if='isSelectListExpanded'
            >
            <ul class='comp-select__list'>
              <li class='comp-select__item' ng-click="itemClicked($event,item)" ng-repeat="item in data">{{item.Value}}
              </li>
            </ul>
          </div>
        </div>
      </fieldset>
    `;
        };
        const getSelectFactoryObject = (type) => {
            return () => {
                return {
                    restrict: 'E',
                    template: type == "combo" ? createComboView() : createSelectView(),
                    link: componentLink,
                    scope: {
                        label: "<?",
                        data: "<?",
                        modelValue: "=",
                        onChange: "<?",
                        activeClear: "<?"
                    }
                }
            }
        }
        componentModule.directive("compCombo", getSelectFactoryObject("combo"));
        componentModule.directive('compSelect', getSelectFactoryObject());
    })();
    (function checkBox() {
        const checkBoxDdo = () => {
            const componentLink = (scope, jqContainer) => {
                scope.checkClicked = function (e) {
                    scope.onClick && scope.onClick(e, scope.overload);
                }
                scope.checkedChanged = function () {
                    scope.onChange && scope.onChange(scope.overload, scope.modelValue);
                }
            };
            const createTemplate = () => {
                return `
    <fieldset class='comp-check__fieldset'>
      <input class='comp-check'
       id="{{id}}"
       type='checkbox'
       ng-model='modelValue'
       ng-click='checkClicked($event)'
       ng-change='checkedChanged()'
       />
      <label class='comp-check__label' for="{{id}}">{{label}}</label>
    </fieldset>
    `;
            };
            return {
                restrict: 'E',
                template: createTemplate(),
                link: componentLink,
                scope: {
                    label: '<?',
                    modelValue: '=',
                    id: '<?',
                    onClick: '<?',
                    onChange: '<?',
                    overload: '<?'
                },
            };
        };
        componentModule.directive('compCheckbox', checkBoxDdo);
    })();
    (function radioBox() {
        const radioBoxDdo = () => {
            const componentLink = (scope, jqContainer) => {
                scope.radioClicked = function (e) {
                    scope.onClick && scope.onClick(e, scope.overload);
                }
                scope.radioChanged = function () {
                    scope.onChange && scope.onChange(scope.overload);
                }
            };
            const createTemplate = () => {
                return `
    <fieldset class='comp-check__fieldset'>
      <input class='comp-radio'
           id="{{id}}"
           type='radio'
           ng-model='modelValue'
           ng-click='radioClicked($event)'
           ng-change='radioChanged()'
           name="{{name}}"
       />
      <label class='comp-check__label' for="{{id}}">{{label}}</label>
    </fieldset>
    `;
            };
            return {
                restrict: 'E',
                template: createTemplate(),
                link: componentLink,
                scope: {
                    label: '<?',
                    modelValue: '=',
                    id: '<?',
                    onClick: '<?',
                    overload: '<?',
                    name: '<?',
                    onChange:'<?'
                },
            };
        };
        componentModule.directive('compRadio', radioBoxDdo);
    })();
    (function linkComponent() {
        const btnDdo = () => {
            const componentLink = (scope, jqContainer) => {
                scope.btnClicked = (e) => {
                    scope.onClick && scope.onClick(e, scope.overload, scope.overload2);
                    //if (scope.clicked ? scope.clicked(e, scope.overload) : false) return;
                };
            };
            const createView = () => {
                return `
    <button type="{{type||'button'}}" class="comp-btn"
    ng-class="[className,type,{'no-hover':noHover,'no-focus':noFocus}]"
    ng-click="btnClicked($event)"
    tabindex="0"
    >
     <div class="comp-btn__info">
      <i class="comp-btn__icon" ng-class="[icon]" ng-if="icon"></i>
      <span class="comp-btn__txt" ng-if="text">{{text}}</span>
     </div>
     <div class="comp-btn__ext" ng-if="logo">
      <i class="comp-btn__logo opt-ico-r"></i>
     </div>
    </button>
    `;
            };
            return {
                restrict: 'E',
                template: createView(),
                link: componentLink,
                scope: {
                    text: '<?',
                    icon: '<?',
                    logo: '<?',
                    className: '<?',
                    noHover: '<?',
                    noFocus: '<?',
                    type: '<?',
                    navigateTo: '<?',
                    onClick: '<?',
                    overload: '<?',
                    overload2: '<?'
                },
            };
        };
        componentModule.directive('compButton', btnDdo);
    })();
    (function imageSlider() {
        const sliderDdo = () => {
            const componentLink = (scope, jqContainer) => {
                scope.activeController = scope.activeController == undefined ? true : scope.activeController;
                scope.activeIndicator = scope.activeController == undefined ? true : scope.activeController;
                scope.slidesCount = 0;
                scope.sliderState = 0;
                scope.sliderTimerId = null;
                const jqSlideContainer = $(jqContainer).find("[data-comp-slider-container]");
                const changeSliderState = (newState) => {
                    jqSlideContainer.css("--slider-state", newState);
                }
                const changeSlide = (action) => {
                    if (action == 'next') {
                        scope.sliderState = scope.slidesCount - 1 > scope.sliderState ? scope.sliderState + 1 : 0;
                    } else if (action == 'prev') {
                        scope.sliderState = scope.sliderState > 0 ? scope.sliderState - 1 : scope.slidesCount - 1;
                    }
                    changeSliderState(scope.sliderState);
                }
                const deactiveTimer = () => {
                    clearInterval(scope.sliderTimerId);
                }
                const activeTimer = () => {
                    deactiveTimer();
                    scope.sliderTimerId = setInterval(() => {
                        scope.$apply(() => {
                            changeSlide("next");
                        });
                    }, scope.timerDuration || 6000);
                }
                scope.controllerClicked = (action) => {
                    deactiveTimer();
                    changeSlide(action);
                }
                scope.slideSelectClicked = (index) => {
                    deactiveTimer();
                    scope.sliderState = index;
                    changeSliderState(index);
                }
                scope.$watch("images", (oldValue, newValue) => {
                    if (!Array.isArray(newValue)) return;
                    scope.slidesCount = newValue.length;
                });
                scope.$watch("activeTimer", (oldValue, newValue) => {
                    if (newValue) {
                        activeTimer();
                        return;
                    }
                    deactiveTimer();
                });
            }
            const createTemplate = () => {
                return `
                    <div
                        data-comp-slider-container
                        class='comp-image__slider-container'
                        role='image slider'
                        aria-label='image slider'
                        ng-class = ""
                    >
                        <div
                            class='comp-image__slider-wrapper'
                        >
                            <div class='comp-image__slider-rail'>
                                <a  
                                    role='slider slide'
                                    ng-repeat='img in images'
                                    class='comp-image__slide'>
                                 <comp-image
                                    role='slider image'
                                    href='img.href'
                                    alt='img.alt'
                                    class-name='img.className'
                                 ></compImage>
                                </a>
                            </div>
                            <button
                                type="button"
                                ng-click='controllerClicked("prev")'
                                role='slider controll'
                                class='comp-image__slider-ct start'
                                ng-if="slidesCount > 1"
                            >   
                                <i class='opt-arrow-right'></i>
                            </button>
                            <button
                                type="button"
                                ng-click='controllerClicked("next")'
                                role='slider controll'
                                class='comp-image__slider-ct end'
                                ng-if="slidesCount > 1"
                            >
                                <i class='opt-arrow-left'></i>
                            </button>
                            <div class='comp-image__slider-indicators' ng-if="slidesCount > 1">
                                <button 
                                    ng-repeat='img in images'
                                    type='button'
                                    role='slider controll'
                                    class='comp-image__slider-indicator'
                                    ng-click='slideSelectClicked($index)'
                                    ng-class='{"is-selected":$index == sliderState}'  
                                >
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
            return {
                restrict: "E",
                link: componentLink,
                template: createTemplate(),
                scope: {
                    images: "<?",
                    activeController: "<?",
                    activeIndicator: "<?",
                    activeTimer: "<?",
                    timerDuration: "<?"
                }
            }
        }
        componentModule.directive("compImgSlider", sliderDdo);
    })();
})();
