# Contributing to Credit Score AI

We welcome contributions to the Credit Score AI project! This document provides guidelines for contributing.

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Git
- Basic knowledge of HTML, CSS, JavaScript
- Understanding of machine learning concepts

### Development Setup

1. **Fork the Repository**
   ```bash
   git clone https://github.com/your-username/Credit-Score-Modelling.git
   cd Credit-Score-Modelling
   ```

2. **Set Up Python Environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Test Local Development**
   ```bash
   python -m http.server 8000
   # Visit: http://localhost:8000
   ```

## 🎯 How to Contribute

### 1. **Bug Reports**
- Use the [issue tracker](https://github.com/rohan911438/Credit-Score-Modelling/issues)
- Include steps to reproduce
- Provide browser and OS information
- Include screenshots if applicable

### 2. **Feature Requests**
- Use the [issue tracker](https://github.com/rohan911438/Credit-Score-Modelling/issues)
- Describe the feature clearly
- Explain the use case
- Consider the impact on existing functionality

### 3. **Code Contributions**

#### Branch Naming Convention
- `feature/description` - New features
- `bugfix/description` - Bug fixes
- `enhancement/description` - Improvements
- `docs/description` - Documentation updates

#### Pull Request Process
1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Update documentation if needed
5. Submit a pull request

## 📝 Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Include proper ARIA labels for accessibility
- Maintain consistent indentation (2 spaces)
- Use meaningful class and ID names

### CSS
- Follow BEM methodology for class naming
- Use CSS custom properties for theming
- Ensure responsive design
- Optimize for performance

### JavaScript
- Use modern ES6+ syntax
- Include proper error handling
- Add comments for complex logic
- Follow functional programming principles

### Python (Notebook)
- Follow PEP 8 style guide
- Include docstrings for functions
- Use meaningful variable names
- Add comments for ML concepts

## 🧪 Testing Guidelines

### Manual Testing Checklist
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on different screen sizes (mobile, tablet, desktop)
- [ ] Verify form validation works correctly
- [ ] Check accessibility with screen readers
- [ ] Test with different input values
- [ ] Verify error handling

### Performance Testing
- [ ] Check page load times
- [ ] Verify smooth animations
- [ ] Test with slow network connections
- [ ] Monitor memory usage

## 📋 Issue Labels

| Label | Description |
|-------|-------------|
| `bug` | Something isn't working |
| `enhancement` | New feature or request |
| `documentation` | Improvements to docs |
| `good first issue` | Good for newcomers |
| `help wanted` | Extra attention needed |
| `priority: high` | High priority items |
| `priority: low` | Low priority items |

## 🔧 Development Guidelines

### Adding New Features

1. **Machine Learning Features**
   - Update the notebook with new algorithms
   - Ensure model compatibility
   - Update the JavaScript prediction logic
   - Add appropriate documentation

2. **UI Features**
   - Maintain consistent design language
   - Ensure responsive behavior
   - Add proper accessibility features
   - Include loading states and error handling

3. **Analytics Features**
   - Use Chart.js for consistency
   - Ensure data accuracy
   - Add proper legends and labels
   - Make charts responsive

### File Organization

```
Credit-Score-Modelling/
├── 📄 Frontend Files
│   ├── index.html          # Main application
│   ├── styles.css          # Styling
│   └── script.js           # Functionality
├── 🤖 ML Files
│   ├── *.ipynb            # Jupyter notebooks
│   ├── *.pkl              # Trained models
│   └── *.csv              # Datasets
├── 📖 Documentation
│   ├── README.md          # Main documentation
│   ├── CONTRIBUTING.md    # This file
│   └── LICENSE            # License info
└── ⚙️ Configuration
    ├── _config.yml        # GitHub Pages config
    ├── package.json       # Project metadata
    └── requirements.txt   # Python dependencies
```

## 🚀 Deployment

### GitHub Pages
- All changes to `main` branch auto-deploy
- Test locally before pushing
- Ensure all assets are properly linked
- Check for broken links after deployment

### Custom Domains
- Update CNAME file for custom domains
- Ensure HTTPS is enabled
- Test domain propagation

## 📚 Resources

### Learning Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Chart.js Documentation](https://www.chartjs.org/docs/)
- [Scikit-learn Documentation](https://scikit-learn.org/stable/)

### Tools
- [VS Code](https://code.visualstudio.com/) - Recommended editor
- [GitHub Desktop](https://desktop.github.com/) - Git GUI
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance testing

## 🤝 Community

### Communication
- Use GitHub Discussions for general questions
- Use Issues for bug reports and feature requests
- Be respectful and constructive in all interactions

### Recognition
Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Credit Score AI! 🙏

For questions, reach out via [GitHub Issues](https://github.com/rohan911438/Credit-Score-Modelling/issues) or [GitHub Discussions](https://github.com/rohan911438/Credit-Score-Modelling/discussions).
