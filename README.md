# Credit Scoring Model

A machine learning project that predicts loan default risk using borrower financial data and credit history. This project implements multiple classification algorithms to assess creditworthiness and help in loan approval decisions.

## 📋 Table of Contents

- [Overview](#overview)
- [Dataset](#dataset)
- [Features](#features)
- [Models](#models)
- [Installation](#installation)
- [Usage](#usage)
- [Results](#results)
- [Model Interpretability](#model-interpretability)
- [Files Structure](#files-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)

## 🎯 Overview

This credit scoring model analyzes borrower characteristics to predict the likelihood of loan default. The project uses machine learning techniques including data preprocessing, feature engineering, model training, and evaluation to build a robust credit risk assessment system.

**Key Objectives:**
- Predict loan default probability
- Compare multiple ML algorithms performance
- Provide model interpretability using SHAP values
- Deploy a reusable prediction function

## 📊 Dataset

The model uses loan data with the following characteristics:

- **Dataset**: `loan_data_1248_with_missing.csv`
- **Size**: 1,248 loan records
- **Target Variable**: `defaulted` (0 = No Default, 1 = Default)

### Raw Features:
- `income`: Borrower's annual income
- `loan_amount`: Requested loan amount
- `term`: Loan term in months (36 or 60)
- `credit_history`: Credit history score (0.0 or 1.0)
- `defaulted`: Target variable indicating loan default

## 🔧 Features

### Data Preprocessing:
- **Missing Value Imputation**: 
  - Income: Filled with median
  - Loan Amount: Filled with median
  - Credit History: Filled with mode
- **Feature Engineering**:
  - Log transformation for skewed variables (`log_income`, `log_loan_amount`)
  - Binary encoding for loan term (`term_binary`)
  - Standardization of numerical features

### Final Feature Set:
- `log_income`: Log-transformed income
- `log_loan_amount`: Log-transformed loan amount
- `term_binary`: Binary encoded loan term
- `credit_history`: Credit history score

## 🤖 Models

The project implements and compares three classification algorithms:

1. **Logistic Regression**: Linear baseline model
2. **Decision Tree**: Non-linear rule-based classifier
3. **Random Forest**: Ensemble method with 100 estimators

### Model Evaluation:
- Accuracy Score
- Classification Report (Precision, Recall, F1-Score)
- ROC Curve and AUC Score
- SHAP Values for interpretability

## 🚀 Installation

1. **Clone or download** the project files
2. **Install required dependencies**:
```bash
pip install pandas numpy matplotlib seaborn scikit-learn shap joblib h5py
```

3. **Ensure the following files are in your working directory**:
   - `credit-scoring-model (2).ipynb`
   - `loan_data_1248_with_missing.csv`

## 💡 Usage

### Running the Notebook:
1. Open `credit-scoring-model (2).ipynb` in Jupyter Notebook or VS Code
2. Run all cells sequentially to:
   - Load and preprocess data
   - Train multiple models
   - Evaluate model performance
   - Generate visualizations
   - Save trained models

### Using the Trained Model:
```python
import joblib
import pandas as pd

# Load the saved model
model = joblib.load('credit_score_model.pkl')

# Prepare input data (ensure proper preprocessing)
input_data = pd.DataFrame({
    'log_income': [11.2],  # Log-transformed and scaled
    'log_loan_amount': [9.8],  # Log-transformed and scaled
    'term_binary': [1],  # 1 for 60 months, 0 for 36 months
    'credit_history': [1.0]  # Credit history score
})

# Make prediction
prediction = model.predict(input_data)
probability = model.predict_proba(input_data)

print(f"Prediction: {prediction[0]}")
print(f"Default Probability: {probability[0][1]:.4f}")
```

### Using the Prediction Function:
```python
# Use the built-in prediction function
prediction, probability = predict_credit_score(input_data)
```

## 📈 Results

The models are evaluated on multiple metrics:

- **Accuracy**: Overall prediction accuracy
- **Precision**: Ability to correctly identify defaults
- **Recall**: Ability to catch all actual defaults
- **F1-Score**: Harmonic mean of precision and recall
- **AUC-ROC**: Area under the ROC curve

### Visualizations Include:
- Income and loan amount distributions
- Loan term distribution
- Credit history vs default analysis
- Feature correlation heatmap
- ROC curves for model performance

## 🔍 Model Interpretability

The project uses **SHAP (SHapley Additive exPlanations)** to provide:
- Feature importance rankings
- Individual prediction explanations
- Model behavior insights

SHAP plots help understand:
- Which features contribute most to predictions
- How feature values influence default probability
- Model decision-making process

## 📁 Files Structure

```
Credit Score/
│
├── credit-scoring-model (2).ipynb    # Main Jupyter notebook
├── loan_data_1248_with_missing.csv   # Raw dataset
├── credit_score_model.pkl            # Trained model (Pickle format)
├── credit_score_model.h5             # Trained model (HDF5 format)
└── README.md                         # Project documentation
```

## 📦 Dependencies

- **pandas**: Data manipulation and analysis
- **numpy**: Numerical computing
- **matplotlib**: Data visualization
- **seaborn**: Statistical data visualization
- **scikit-learn**: Machine learning library
- **shap**: Model interpretability
- **joblib**: Model serialization
- **h5py**: HDF5 file format support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 Notes

- The model uses log transformation to handle skewed income and loan amount distributions
- Feature scaling is applied to improve model performance
- Both PKL and H5 model formats are saved for flexibility
- SHAP analysis provides insights into model decision-making

## ⚠️ Important Considerations

- **Data Privacy**: Ensure compliance with data protection regulations
- **Model Validation**: Regular retraining recommended as market conditions change
- **Bias Assessment**: Monitor for potential bias in lending decisions
- **Feature Updates**: Consider additional features like employment history, debt-to-income ratio

---

**Last Updated**: August 2025
**Python Version**: 3.x
**Model Type**: Binary Classification
**Domain**: Financial Risk Assessment
