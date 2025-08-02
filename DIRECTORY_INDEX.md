# 📁 Directory Index - Credit Score AI

> **Organized project structure for better maintainability and scalability**

## 🌐 Root Level Files

| File | Purpose | Type |
|------|---------|------|
| `index.html` | Main web application | HTML |
| `README.md` | Project documentation | Markdown |
| `LICENSE` | MIT license | Text |
| `manifest.json` | PWA configuration | JSON |
| `sitemap.xml` | SEO sitemap | XML |
| `robots.txt` | Search engine instructions | Text |
| `package.json` | Project metadata | JSON |
| `requirements.txt` | Python dependencies | Text |
| `_config.yml` | Jekyll configuration | YAML |
| `PROJECT_STRUCTURE.md` | Structure documentation | Markdown |

## 📂 Directory Structure

### `assets/` - Frontend Assets
```
assets/
├── css/
│   └── styles.css          # 🎨 Custom styling (1,200+ lines)
├── js/
│   └── script.js           # ⚡ JavaScript functionality (800+ lines)
└── images/
    └── (placeholder)       # 🖼️ Future image assets
```

**Purpose**: All frontend assets organized by type for easy maintenance and CDN optimization.

### `models/` - Machine Learning Models
```
models/
├── credit_score_model.pkl  # 🤖 Scikit-learn model (Pickle format)
└── credit_score_model.h5   # 🔧 Alternative model format (HDF5)
```

**Purpose**: Trained ML models in different formats for flexibility and compatibility.

### `notebooks/` - Jupyter Notebooks
```
notebooks/
└── credit-scoring-model.ipynb  # 📊 ML development notebook
```

**Purpose**: Data science workflow, model training, and experimentation.

### `data/` - Datasets
```
data/
└── loan_data_1248_with_missing.csv  # 📈 Training dataset (1,248 records)
```

**Purpose**: Raw and processed datasets for model training and validation.

### `docs/` - Documentation
```
docs/
├── CONTRIBUTING.md         # 🤝 Contributing guidelines
└── DEPLOYMENT.md          # 🚀 Deployment instructions
```

**Purpose**: Detailed documentation for developers and contributors.

### `.github/` - GitHub Configuration
```
.github/
└── workflows/
    └── deploy.yml          # 🔄 CI/CD pipeline for automated deployment
```

**Purpose**: GitHub-specific configuration for automation and deployment.

### `.git/` - Version Control
```
.git/
└── (Git repository data)   # 📝 Version control history
```

**Purpose**: Git repository metadata and version history.

## 📊 File Statistics

| Category | Files | Total Size | Lines of Code |
|----------|-------|------------|---------------|
| **Frontend** | 3 files | ~150KB | ~2,000 lines |
| **ML Models** | 2 files | ~50MB | N/A |
| **Data** | 1 file | ~500KB | 1,249 lines |
| **Notebooks** | 1 file | ~2MB | ~500 cells |
| **Documentation** | 6 files | ~100KB | ~1,500 lines |
| **Configuration** | 6 files | ~20KB | ~300 lines |

## 🎯 Access Patterns

### **Development Workflow**
1. **Frontend**: `assets/css/`, `assets/js/`, `index.html`
2. **ML Work**: `notebooks/`, `models/`, `data/`
3. **Documentation**: `docs/`, `README.md`
4. **Deployment**: `.github/workflows/`, `_config.yml`

### **User Experience**
1. **Entry Point**: `index.html`
2. **Assets**: Automatically loaded from `assets/`
3. **SEO**: `sitemap.xml`, `robots.txt`, `manifest.json`

### **Maintenance**
1. **Code Updates**: `assets/js/script.js`, `assets/css/styles.css`
2. **Content Updates**: `index.html`, `README.md`
3. **ML Updates**: `notebooks/`, `models/`
4. **Config Updates**: `_config.yml`, `package.json`

## 🔍 File Dependencies

### **HTML Dependencies**
- `assets/css/styles.css` ← Custom styling
- `assets/js/script.js` ← Functionality
- CDN resources ← Bootstrap, Chart.js, Font Awesome

### **JavaScript Dependencies**
- Chart.js ← Data visualizations
- Bootstrap JS ← UI components
- No local dependencies

### **CSS Dependencies**
- Bootstrap 5.3 ← Base framework
- Google Fonts ← Typography
- Font Awesome ← Icons

### **ML Dependencies**
- `models/*.pkl` ← For prediction logic
- `data/*.csv` ← For reference and testing

## 🚀 Performance Optimization

### **Asset Organization**
- **CSS**: Concatenated in single file
- **JS**: Single optimized file
- **Images**: Future - will be optimized and compressed
- **Models**: Separate from web assets for faster loading

### **Caching Strategy**
- **Static Assets**: Long-term caching
- **HTML**: Short-term caching
- **API Resources**: Appropriate cache headers

### **Loading Strategy**
- **Critical CSS**: Inlined in HTML
- **JavaScript**: Deferred loading
- **Fonts**: Preloaded for performance

## 📱 Mobile Optimization

### **Responsive Assets**
- **CSS**: Mobile-first approach
- **Images**: Future - responsive images
- **JavaScript**: Touch-optimized interactions

### **PWA Support**
- **Manifest**: `manifest.json`
- **Service Worker**: Future enhancement
- **Offline Support**: Planned feature

## 🔐 Security Considerations

### **Asset Security**
- **CSP**: Content Security Policy headers
- **Integrity**: Subresource integrity for CDN
- **HTTPS**: Enforced by GitHub Pages

### **Data Privacy**
- **No PII**: No personal data stored
- **Local Processing**: All predictions client-side
- **Anonymized**: Sample data only

## 📈 Scalability Features

### **Modular Structure**
- **Component-based**: Easy to extend
- **Separation of Concerns**: Clean architecture
- **API-ready**: Can integrate with backend

### **Future Enhancements**
- **Backend API**: For real model serving
- **Database**: For user management
- **Analytics**: For usage tracking
- **A/B Testing**: For optimization

---

## 🛠️ Quick Navigation

| Task | Location |
|------|----------|
| 🎨 **Style Changes** | `assets/css/styles.css` |
| ⚡ **Add Features** | `assets/js/script.js` |
| 📝 **Update Content** | `index.html` |
| 🤖 **ML Updates** | `notebooks/` → `models/` |
| 📖 **Documentation** | `docs/` or `README.md` |
| 🚀 **Deployment** | `.github/workflows/deploy.yml` |

---

**📊 Total Project Size**: ~53MB
**🎯 Key Files**: 23 files across 8 directories
**📱 Mobile Ready**: ✅ Responsive design
**🚀 Deploy Ready**: ✅ GitHub Pages optimized

*Structure optimized for professional development workflow and easy maintenance.*
