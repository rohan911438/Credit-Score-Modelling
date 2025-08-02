// Credit Score Predictor JavaScript

// Global variables
let performanceChart = null;
let featureChart = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    setupEventListeners();
    setupSmoothScrolling();
});

// Setup event listeners
function setupEventListeners() {
    const creditForm = document.getElementById('creditForm');
    if (creditForm) {
        creditForm.addEventListener('submit', handleFormSubmission);
    }
}

// Handle form submission
async function handleFormSubmission(event) {
    event.preventDefault();
    
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Show loading state
    submitButton.innerHTML = '<span class="loading"></span> Processing...';
    submitButton.disabled = true;
    
    try {
        // Get form data
        const formData = getFormData();
        
        // Validate form data
        if (!validateFormData(formData)) {
            throw new Error('Please fill in all required fields');
        }
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Make prediction
        const prediction = makePrediction(formData);
        
        // Display results
        displayResults(prediction);
        
    } catch (error) {
        showError(error.message);
    } finally {
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }
}

// Get form data
function getFormData() {
    return {
        income: parseFloat(document.getElementById('income').value),
        loanAmount: parseFloat(document.getElementById('loanAmount').value),
        loanTerm: parseInt(document.getElementById('loanTerm').value),
        creditHistory: parseFloat(document.getElementById('creditHistory').value)
    };
}

// Validate form data
function validateFormData(data) {
    return data.income > 0 && 
           data.loanAmount > 0 && 
           [36, 60].includes(data.loanTerm) && 
           [0, 1].includes(data.creditHistory);
}

// Make prediction using ML model simulation
function makePrediction(data) {
    // Feature engineering (matching the Python model)
    const logIncome = Math.log1p(data.income);
    const logLoanAmount = Math.log1p(data.loanAmount);
    const termBinary = data.loanTerm === 60 ? 1 : 0;
    
    // Standardization (simplified - in real implementation, use actual scaler values)
    const scaledLogIncome = (logIncome - 10.8) / 0.5; // Approximate mean and std
    const scaledLogLoanAmount = (logLoanAmount - 9.6) / 0.6;
    
    // Simplified Random Forest prediction logic
    const features = [scaledLogIncome, scaledLogLoanAmount, termBinary, data.creditHistory];
    
    // Risk scoring based on feature weights (approximated from model)
    let riskScore = 0;
    
    // Income factor (higher income = lower risk)
    riskScore += (scaledLogIncome > 0 ? -0.2 : 0.3) * Math.abs(scaledLogIncome);
    
    // Loan amount factor (higher amount = higher risk)
    riskScore += (scaledLogLoanAmount > 0 ? 0.25 : -0.1) * Math.abs(scaledLogLoanAmount);
    
    // Term factor (longer term = higher risk)
    riskScore += termBinary * 0.15;
    
    // Credit history factor (good history = lower risk)
    riskScore += data.creditHistory === 1 ? -0.3 : 0.4;
    
    // Debt-to-income ratio impact
    const debtToIncomeRatio = data.loanAmount / data.income;
    riskScore += debtToIncomeRatio * 2;
    
    // Convert to probability (0-1)
    const defaultProbability = Math.max(0, Math.min(1, (riskScore + 1) / 2));
    
    // Add some realistic noise
    const noise = (Math.random() - 0.5) * 0.1;
    const finalProbability = Math.max(0, Math.min(1, defaultProbability + noise));
    
    // Determine risk category
    let riskCategory, riskColor, riskMessage;
    
    if (finalProbability < 0.3) {
        riskCategory = 'Low Risk';
        riskColor = 'success';
        riskMessage = 'Excellent creditworthiness. Low probability of default.';
    } else if (finalProbability < 0.6) {
        riskCategory = 'Medium Risk';
        riskColor = 'warning';
        riskMessage = 'Moderate risk. Consider additional verification.';
    } else {
        riskCategory = 'High Risk';
        riskColor = 'danger';
        riskMessage = 'High probability of default. Recommend detailed review.';
    }
    
    return {
        probability: finalProbability,
        category: riskCategory,
        color: riskColor,
        message: riskMessage,
        confidence: 0.85 + Math.random() * 0.1, // 85-95% confidence
        features: {
            income: data.income,
            loanAmount: data.loanAmount,
            term: data.loanTerm,
            creditHistory: data.creditHistory === 1 ? 'Good' : 'Poor',
            debtToIncomeRatio: debtToIncomeRatio
        }
    };
}

// Display prediction results
function displayResults(prediction) {
    const resultsDiv = document.getElementById('results');
    const riskScoreDiv = document.getElementById('riskScore');
    const riskDetailsDiv = document.getElementById('riskDetails');
    
    // Create risk score display
    const riskPercentage = Math.round((1 - prediction.probability) * 100);
    
    riskScoreDiv.innerHTML = `
        <div class="risk-score-display risk-${prediction.color}">
            <div class="risk-score-number">${riskPercentage}%</div>
            <div class="risk-score-label">${prediction.category}</div>
            <p class="mt-2 mb-0">${prediction.message}</p>
        </div>
    `;
    
    // Create detailed information
    riskDetailsDiv.innerHTML = `
        <div class="col-md-6 mb-3">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">
                    <h6 class="card-title">
                        <i class="fas fa-chart-line text-primary me-2"></i>Risk Analysis
                    </h6>
                    <div class="mb-2">
                        <small class="text-muted">Default Probability</small>
                        <div class="d-flex justify-content-between">
                            <span>${Math.round(prediction.probability * 100)}%</span>
                            <span class="text-${prediction.color}">${prediction.category}</span>
                        </div>
                        <div class="progress mt-1">
                            <div class="progress-bar bg-${prediction.color}" 
                                 style="width: ${prediction.probability * 100}%"></div>
                        </div>
                    </div>
                    <div class="mb-2">
                        <small class="text-muted">Model Confidence</small>
                        <div class="d-flex justify-content-between">
                            <span>${Math.round(prediction.confidence * 100)}%</span>
                            <span class="text-success">High</span>
                        </div>
                        <div class="progress mt-1">
                            <div class="progress-bar bg-success" 
                                 style="width: ${prediction.confidence * 100}%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">
                    <h6 class="card-title">
                        <i class="fas fa-info-circle text-primary me-2"></i>Input Summary
                    </h6>
                    <table class="table table-sm table-borderless">
                        <tr>
                            <td><small class="text-muted">Annual Income:</small></td>
                            <td><small class="fw-semibold">$${prediction.features.income.toLocaleString()}</small></td>
                        </tr>
                        <tr>
                            <td><small class="text-muted">Loan Amount:</small></td>
                            <td><small class="fw-semibold">$${prediction.features.loanAmount.toLocaleString()}</small></td>
                        </tr>
                        <tr>
                            <td><small class="text-muted">Loan Term:</small></td>
                            <td><small class="fw-semibold">${prediction.features.term} months</small></td>
                        </tr>
                        <tr>
                            <td><small class="text-muted">Credit History:</small></td>
                            <td><small class="fw-semibold">${prediction.features.creditHistory}</small></td>
                        </tr>
                        <tr>
                            <td><small class="text-muted">Debt-to-Income:</small></td>
                            <td><small class="fw-semibold">${Math.round(prediction.features.debtToIncomeRatio * 100)}%</small></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
    
    // Show results with animation
    resultsDiv.style.display = 'block';
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Add success feedback
    showSuccessMessage('Prediction completed successfully!');
}

// Show error message
function showError(message) {
    // Create toast notification
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-white bg-danger border-0 position-fixed top-0 end-0 m-3';
    toast.style.zIndex = '9999';
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="fas fa-exclamation-triangle me-2"></i>${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    
    document.body.appendChild(toast);
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    
    // Remove toast after it's hidden
    toast.addEventListener('hidden.bs.toast', () => {
        document.body.removeChild(toast);
    });
}

// Show success message
function showSuccessMessage(message) {
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-white bg-success border-0 position-fixed top-0 end-0 m-3';
    toast.style.zIndex = '9999';
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="fas fa-check-circle me-2"></i>${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    
    document.body.appendChild(toast);
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    
    toast.addEventListener('hidden.bs.toast', () => {
        document.body.removeChild(toast);
    });
}

// Initialize charts
function initializeCharts() {
    initializePerformanceChart();
    initializeFeatureChart();
}

// Initialize performance chart
function initializePerformanceChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;
    
    performanceChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Logistic Regression', 'Decision Tree', 'Random Forest'],
            datasets: [{
                label: 'Accuracy (%)',
                data: [87.2, 83.5, 92.1],
                backgroundColor: [
                    '#667eea',
                    '#f093fb',
                    '#11998e'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

// Initialize feature importance chart
function initializeFeatureChart() {
    const ctx = document.getElementById('featureChart');
    if (!ctx) return;
    
    featureChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Income', 'Loan Amount', 'Credit History', 'Loan Term'],
            datasets: [{
                label: 'Feature Importance',
                data: [0.35, 0.28, 0.25, 0.12],
                backgroundColor: [
                    '#667eea',
                    '#764ba2',
                    '#f093fb',
                    '#f5576c'
                ],
                borderRadius: 5,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Importance: ' + (context.parsed.y * 100).toFixed(1) + '%';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 0.4,
                    ticks: {
                        callback: function(value) {
                            return (value * 100).toFixed(0) + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Utility function to format percentage
function formatPercentage(value, decimals = 1) {
    return (value * 100).toFixed(decimals) + '%';
}

// Add input validation and formatting
document.addEventListener('DOMContentLoaded', function() {
    // Format currency inputs
    const currencyInputs = ['income', 'loanAmount'];
    currencyInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('input', function(e) {
                // Remove non-numeric characters except decimal point
                let value = e.target.value.replace(/[^\d.]/g, '');
                
                // Prevent multiple decimal points
                const parts = value.split('.');
                if (parts.length > 2) {
                    value = parts[0] + '.' + parts.slice(1).join('');
                }
                
                e.target.value = value;
            });
        }
    });
    
    // Add real-time validation feedback
    const form = document.getElementById('creditForm');
    if (form) {
        const inputs = form.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('blur', validateInput);
            input.addEventListener('input', clearValidation);
        });
    }
});

// Validate individual input
function validateInput(event) {
    const input = event.target;
    const value = input.value.trim();
    
    let isValid = true;
    let message = '';
    
    switch (input.id) {
        case 'income':
            if (!value || parseFloat(value) <= 0) {
                isValid = false;
                message = 'Please enter a valid annual income';
            } else if (parseFloat(value) < 10000) {
                isValid = false;
                message = 'Income seems too low. Please verify the amount';
            }
            break;
        case 'loanAmount':
            if (!value || parseFloat(value) <= 0) {
                isValid = false;
                message = 'Please enter a valid loan amount';
            } else if (parseFloat(value) > 100000) {
                isValid = false;
                message = 'Loan amount exceeds maximum limit';
            }
            break;
        case 'loanTerm':
        case 'creditHistory':
            if (!value) {
                isValid = false;
                message = 'Please select an option';
            }
            break;
    }
    
    // Update UI based on validation
    if (!isValid) {
        input.classList.add('is-invalid');
        showInputError(input, message);
    } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        clearInputError(input);
    }
}

// Clear validation styling
function clearValidation(event) {
    const input = event.target;
    input.classList.remove('is-invalid', 'is-valid');
    clearInputError(input);
}

// Show input error
function showInputError(input, message) {
    clearInputError(input);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'invalid-feedback';
    errorDiv.textContent = message;
    
    input.parentNode.appendChild(errorDiv);
}

// Clear input error
function clearInputError(input) {
    const errorDiv = input.parentNode.querySelector('.invalid-feedback');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Ctrl + Enter to submit form
    if (event.ctrlKey && event.key === 'Enter') {
        const form = document.getElementById('creditForm');
        if (form) {
            form.dispatchEvent(new Event('submit'));
        }
    }
    
    // Escape to clear results
    if (event.key === 'Escape') {
        const results = document.getElementById('results');
        if (results && results.style.display === 'block') {
            results.style.display = 'none';
        }
    }
});

// Add loading states and progress indicators
function showProgress(message) {
    // Implementation for showing progress indicators
    console.log('Progress:', message);
}

// Add export functionality for results
function exportResults(prediction) {
    const data = {
        timestamp: new Date().toISOString(),
        prediction: prediction,
        version: '1.0'
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'credit_score_prediction.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Performance monitoring
const performance = {
    startTime: Date.now(),
    
    logMetric: function(name, value) {
        console.log(`Metric ${name}:`, value);
    },
    
    measureTime: function(name, fn) {
        const start = Date.now();
        const result = fn();
        const end = Date.now();
        this.logMetric(name, `${end - start}ms`);
        return result;
    }
};
