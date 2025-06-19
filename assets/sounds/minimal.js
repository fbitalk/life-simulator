/**
 * 最小音效数据 - 用于在无法加载外部音效时提供基本音效支持
 */

// 极短的无声WAV文件的Base64编码
const SILENT_WAV = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';

// 创建音效文件并保存到指定路径
function createMinimalSoundFiles() {
    // 基本的音效名称列表
    const soundNames = [
        'click',
        'transition',
        'success',
        'error',
        'achievement',
        'levelup',
        'gamestart',
        'gameover'
    ];
    
    // 如果在浏览器环境中
    if (typeof document !== 'undefined') {
        soundNames.forEach(name => {
            // 从Base64创建Blob
            const blob = dataURItoBlob(SILENT_WAV);
            
            // 使用a标签下载
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = `${name}.wav`;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            
            // 清理
            setTimeout(() => {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(a.href);
            }, 100);
        });
    }
    // 如果在Node.js环境中
    else if (typeof require === 'function') {
        const fs = require('fs');
        const path = require('path');
        
        soundNames.forEach(name => {
            // 将Base64转换为Buffer
            const data = SILENT_WAV.split(',')[1];
            const buffer = Buffer.from(data, 'base64');
            
            // 写入文件
            fs.writeFileSync(path.join(__dirname, `${name}.wav`), buffer);
            console.log(`Created ${name}.wav`);
        });
    }
}

// 辅助函数：将Data URI转换为Blob
function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    
    return new Blob([ab], {type: mimeString});
}

// 如果直接运行此脚本
if (typeof window !== 'undefined' && window.location.pathname.includes('minimal.js')) {
    createMinimalSoundFiles();
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SILENT_WAV, createMinimalSoundFiles };
} 