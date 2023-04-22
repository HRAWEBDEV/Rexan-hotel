const { wrapperModule } = (function wrapperModule() {
    const { createStopWatch } = toolsModule;
    const wrapperModule = angular.module('wrapperModule', [
        'layoutModule',
        'componentsModule',
    ]);
    const wrapperController = (scope) => {
        const jqPageLoader = $("[data-page-loader]");
        const jqRefereshLoader = $("[data-referesh-loader]");
        scope.pageLoaderStatus = true;
        scope.pageRefreshLoaderStatus = false;
        const pageLoaderApi = (function pageLoader() {
            const changeLoaderStatus = (isActive) => {
                scope.pageLoaderStatus = isActive;
                jqPageLoader.attr("data-page-loader-active", scope.pageLoaderStatus);
            }
            const activeLoading = () => {
                changeLoaderStatus(true);
            }
            const deactiveLoading = () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        changeLoaderStatus(false);
                        resolve();
                    }, 0.3);
                });
            }
            return {
                activeLoading,
                deactiveLoading
            }
        })();
        const pageRefereshLoaderApi = (function refereshLoader() {
            const { start, stop } = createStopWatch();
            let timeoutId = null;
            const activeReferesher = () => {
                start();
                clearTimeout(timeoutId);
                scope.pageRefreshLoaderStatus = true;
            }
            const deactiveReferesher = () => {
                const ellapsed = stop();
                const duration = ellapsed < 0.5 ? 0.5 - ellapsed : ellapsed;
                return new Promise((resolve, reject) => {
                    timeoutId = setTimeout(() => {
                        scope.$apply(() => {
                            scope.pageRefreshLoaderStatus = false;
                            resolve();
                        });
                    }, duration);
                });
            }
            return {
                activeReferesher,
                deactiveReferesher
            }
        })();
        const setupHttpClientService = (function httpClient() {
            const { activeLoading, deactiveLoading } = pageLoaderApi;
            const { activeReferesher, deactiveReferesher } = pageRefereshLoaderApi;
            const documentReadyCb = () => {
                deactiveLoading();
            }
            const ajaxStartCb = () => {
                activeReferesher();
            }
            const ajaxErrorCb = () => {
                deactiveReferesher();
            }
            const ajaxStopCb = () => {
                deactiveReferesher();
            }
            $(documentReadyCb);
            $(window).on({
                ajaxStart: ajaxStartCb,
                ajaxError: ajaxErrorCb,
                ajaxStop: ajaxStopCb
            });
        })();
    };
    wrapperModule.controller('wrapperController', ['$scope', wrapperController]);
    return { wrapperModule };
})();