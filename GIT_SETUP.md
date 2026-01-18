# Git 推送设置指南

## 身份验证问题

GitHub 已不再支持密码认证，需要使用 Personal Access Token (PAT) 或 SSH 密钥。

## 方案一：使用 Personal Access Token（推荐）

### 1. 创建 Personal Access Token

1. 访问 GitHub：https://github.com/settings/tokens
2. 点击 "Generate new token" → "Generate new token (classic)"
3. 设置：
   - **Note**: `life-simulator-push`
   - **Expiration**: 选择过期时间（建议 90 天或自定义）
   - **Scopes**: 勾选 `repo`（完整仓库访问权限）
4. 点击 "Generate token"
5. **重要**：复制生成的 token（只显示一次！）

### 2. 使用 Token 推送

```bash
# 方法 A：在推送时输入用户名和 token
git push -u origin main
# Username: fbitalk
# Password: <粘贴你的 token>

# 方法 B：将 token 保存到凭据管理器（推荐）
git config --global credential.helper store
git push -u origin main
# 输入一次后会自动保存
```

### 3. 或者直接修改远程 URL（包含 token）

```bash
git remote set-url origin https://<你的token>@github.com/fbitalk/life-simulator.git
git push -u origin main
```

## 方案二：使用 SSH 密钥（更安全）

### 1. 生成 SSH 密钥

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
# 按 Enter 使用默认路径
# 设置密码（可选）
```

### 2. 添加 SSH 密钥到 GitHub

1. 复制公钥内容：
   ```bash
   cat ~/.ssh/id_ed25519.pub
   # Windows: type C:\Users\你的用户名\.ssh\id_ed25519.pub
   ```

2. 访问 GitHub：https://github.com/settings/keys
3. 点击 "New SSH key"
4. 粘贴公钥内容，保存

### 3. 修改远程 URL 为 SSH

```bash
git remote set-url origin git@github.com:fbitalk/life-simulator.git
git push -u origin main
```

## 方案三：使用 GitHub CLI

```bash
# 安装 GitHub CLI
# Windows: winget install GitHub.cli

# 登录
gh auth login

# 推送
git push -u origin main
```

## 快速命令参考

```bash
# 检查远程仓库
git remote -v

# 查看当前分支
git branch

# 查看状态
git status

# 添加文件
git add .

# 提交
git commit -m "你的提交信息"

# 推送
git push -u origin main
```

## 后续更新流程

```bash
# 1. 修改文件后
git add .
git commit -m "更新描述"
git push
```

