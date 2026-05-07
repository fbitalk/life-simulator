// js/ui/ModalManager.js
// 自定义模态弹窗——替代原生 alert/confirm
export class ModalManager {
    showAlert(message, icon = '⚠️') {
        return new Promise((resolve) => {
            document.getElementById('customModalIcon').textContent = icon;
            document.getElementById('customModalMessage').textContent = message;
            document.getElementById('customModalButtons').innerHTML =
                '<button class="modal-btn-confirm" id="modalConfirmBtn">确定</button>';
            document.getElementById('customModalOverlay').style.display = 'flex';
            document.getElementById('modalConfirmBtn').onclick = () => {
                document.getElementById('customModalOverlay').style.display = 'none';
                resolve(true);
            };
        });
    }

    showConfirm(message, icon = '❓') {
        return new Promise((resolve) => {
            document.getElementById('customModalIcon').textContent = icon;
            document.getElementById('customModalMessage').textContent = message;
            document.getElementById('customModalButtons').innerHTML =
                '<button class="modal-btn-cancel" id="modalCancelBtn">取消</button>' +
                '<button class="modal-btn-confirm" id="modalConfirmBtn">确定</button>';
            document.getElementById('customModalOverlay').style.display = 'flex';

            document.getElementById('modalConfirmBtn').onclick = () => {
                document.getElementById('customModalOverlay').style.display = 'none';
                resolve(true);
            };
            document.getElementById('modalCancelBtn').onclick = () => {
                document.getElementById('customModalOverlay').style.display = 'none';
                resolve(false);
            };
            document.getElementById('customModalOverlay').onclick = (e) => {
                if (e.target === e.currentTarget) {
                    document.getElementById('customModalOverlay').style.display = 'none';
                    resolve(false);
                }
            };
        });
    }
}
