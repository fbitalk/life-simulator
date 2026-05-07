// js/ui/MobileAdapter.js
// 移动端适配——从 ui-effects.js 的 mobileAdapter 对象提取
export class MobileAdapter {
    init() {
        this._detectAndApply();
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => this._detectAndApply(), 150);
        });
    }

    _detectAndApply() {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            || window.innerWidth <= 768;

        if (isMobile) {
            document.body.classList.add('mobile-device');
            if (window.innerHeight > window.innerWidth) {
                document.body.classList.add('portrait');
                document.body.classList.remove('landscape');
            } else {
                document.body.classList.add('landscape');
                document.body.classList.remove('portrait');
            }
            this._optimizeTouch();
        } else {
            document.body.classList.add('desktop-device');
            document.body.classList.remove('mobile-device', 'portrait', 'landscape');
        }
    }

    _optimizeTouch() {
        document.addEventListener('touchstart', () => {}, { passive: true });
    }
}
