/**
 * 音效文件转换脚本
 * 
 * 这个脚本用于将WAV音效文件转换为MP3格式，以便在网页中使用。
 * 使用前需要安装ffmpeg和必要的Node.js包：
 * npm install fluent-ffmpeg
 */

const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');

// 音效文件目录
const soundsDir = __dirname;

// 确保ffmpeg路径设置正确
// ffmpeg.setFfmpegPath('/path/to/ffmpeg'); // 如果ffmpeg不在系统PATH中，取消注释并设置正确路径

// 读取当前目录中的所有WAV文件
fs.readdir(soundsDir, (err, files) => {
    if (err) {
        console.error('读取目录失败:', err);
        return;
    }

    // 筛选出WAV文件
    const wavFiles = files.filter(file => file.toLowerCase().endsWith('.wav'));
    
    if (wavFiles.length === 0) {
        console.log('没有找到WAV文件');
        return;
    }
    
    console.log(`找到 ${wavFiles.length} 个WAV文件，开始转换...`);
    
    // 转换每个WAV文件为MP3
    wavFiles.forEach(wavFile => {
        const inputPath = path.join(soundsDir, wavFile);
        const outputPath = path.join(soundsDir, wavFile.replace('.wav', '.mp3'));
        
        ffmpeg(inputPath)
            .output(outputPath)
            .on('end', () => {
                console.log(`转换完成: ${wavFile} -> ${wavFile.replace('.wav', '.mp3')}`);
            })
            .on('error', (err) => {
                console.error(`转换失败 ${wavFile}:`, err);
            })
            .run();
    });
});

console.log('音效转换已启动，请等待完成...'); 