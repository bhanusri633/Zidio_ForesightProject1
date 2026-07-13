import pandas as pd

# Show all columns in output
pd.set_option("display.max_columns", None)
pd.set_option("display.width", None)

# Read both sheets
sheet1 = pd.read_excel(
    "Data/online_retail_II 3.xlsx",
    sheet_name="Year 2009-2010"
)

sheet2 = pd.read_excel(
    "Data/online_retail_II 3.xlsx",
    sheet_name="Year 2010-2011"
)

# Remove extra spaces from column names
sheet1.columns = sheet1.columns.str.strip()
sheet2.columns = sheet2.columns.str.strip()

# Make column names consistent
sheet1.rename(columns={"InvoiceDate": "Invoice Date"}, inplace=True)
sheet2.rename(columns={"InvoiceDate": "Invoice Date"}, inplace=True)

# Combine both sheets
df = pd.concat([sheet1, sheet2], ignore_index=True)

# Remove duplicate columns if any
df = df.loc[:, ~df.columns.duplicated()]

# Dataset Information
print("Dataset Shape:", df.shape)

print("\nColumns:")
print(df.columns)

print("\nMissing Values:")
print(df.isnull().sum())

# ---------------- Feature Engineering ----------------

# Convert Invoice Date to datetime
df["Invoice Date"] = pd.to_datetime(df["Invoice Date"])

# Create new features
df["Year"] = df["Invoice Date"].dt.year
df["Month"] = df["Invoice Date"].dt.month
df["Day"] = df["Invoice Date"].dt.day
df["DayOfWeek"] = df["Invoice Date"].dt.day_name()

# Calculate Total Amount
df["TotalAmount"] = df["Quantity"] * df["Price"]

# ---------------- Output ----------------

print("\nFeature Engineering Completed Successfully!")

print("\nFirst 5 Rows (All Columns):")
print(df.head())

print("\nSelected Important Columns:")
print(df[[
    "Invoice",
    "StockCode",
    "Description",
    "Quantity",
    "Price",
    "Customer ID",
    "Invoice Date",
    "Invoice Time",
    "Country",
    "Year",
    "Month",
    "Day",
    "DayOfWeek",
    "TotalAmount"
]].head())

print("\nPrice Column:")
print(df["Price"].head())

print("\nFinal Columns:")
print(df.columns.tolist())

print("\nMissing Values After Feature Engineering:")
print(df.isnull().sum())

print("\nDuplicate Rows:", df.duplicated().sum())

df = df.drop_duplicates()

print("Shape after removing duplicates:", df.shape)

df = df.dropna(subset=["Description"])

df = df.dropna(subset=["Customer ID"])

print("\nMissing Values After Cleaning:")
print(df.isnull().sum())

print("\nFinal Dataset Shape:")
print(df.shape)




# ============================================
# Exploratory Data Analysis (EDA)
# ============================================

import matplotlib.pyplot as plt
import seaborn as sns

plt.style.use("ggplot")

# -----------------------------
# Dataset Information
# -----------------------------
print("\n========== DATASET INFO ==========")
print(df.info())

print("\n========== STATISTICAL SUMMARY ==========")
print(df.describe())

# -----------------------------
# Sales by Country
# -----------------------------
country_sales = df.groupby("Country")["TotalAmount"].sum().sort_values(ascending=False)

print("\nTop 10 Countries by Sales")
print(country_sales.head(10))

plt.figure(figsize=(12,6))
country_sales.head(10).plot(kind="bar")
plt.title("Top 10 Countries by Sales")
plt.xlabel("Country")
plt.ylabel("Total Sales")
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# -----------------------------
# Monthly Sales Trend
# -----------------------------
monthly_sales = df.groupby("Month")["TotalAmount"].sum()

plt.figure(figsize=(10,5))
monthly_sales.plot(marker="o")
plt.title("Monthly Sales Trend")
plt.xlabel("Month")
plt.ylabel("Sales")
plt.grid(True)
plt.tight_layout()
plt.show()

# -----------------------------
# Top 10 Selling Products
# -----------------------------
top_products = df.groupby("Description")["Quantity"].sum().sort_values(ascending=False).head(10)

print("\nTop 10 Products")
print(top_products)

plt.figure(figsize=(12,6))
top_products.plot(kind="bar")
plt.title("Top 10 Selling Products")
plt.xlabel("Product")
plt.ylabel("Quantity Sold")
plt.xticks(rotation=90)
plt.tight_layout()
plt.show()

# -----------------------------
# Top 10 Customers
# -----------------------------
top_customers = df.groupby("Customer ID")["TotalAmount"].sum().sort_values(ascending=False).head(10)

print("\nTop 10 Customers")
print(top_customers)

plt.figure(figsize=(12,6))
top_customers.plot(kind="bar")
plt.title("Top 10 Customers")
plt.xlabel("Customer ID")
plt.ylabel("Purchase Amount")
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# -----------------------------
# Quantity Distribution
# -----------------------------
plt.figure(figsize=(8,5))
plt.hist(df["Quantity"], bins=30)
plt.title("Quantity Distribution")
plt.xlabel("Quantity")
plt.ylabel("Frequency")
plt.tight_layout()
plt.show()

# -----------------------------
# Price Distribution
# -----------------------------
plt.figure(figsize=(8,5))
plt.hist(df["Price"], bins=30)
plt.title("Price Distribution")
plt.xlabel("Price")
plt.ylabel("Frequency")
plt.tight_layout()
plt.show()

# -----------------------------
# Correlation Heatmap
# -----------------------------
plt.figure(figsize=(8,6))

sns.heatmap(
    df[["Quantity","Price","Year","Month","Day","TotalAmount"]].corr(),
    annot=True,
    cmap="coolwarm"
)

plt.title("Correlation Heatmap")
plt.tight_layout()
plt.show()

# -----------------------------
# Save Cleaned Dataset
# -----------------------------
df.to_csv("cleaned_retail_data.csv", index=False)

print("\nCleaned dataset saved successfully!")


# ===============================
# MODEL BUILDING - STEP 1
# ===============================

# Select input features (X)
X = df[["Quantity", "Price", "Year", "Month", "Day"]]

# Select target variable (y)
y = df["TotalAmount"]

print("\nFeatures (X):")
print(X.head())

print("\nTarget (y):")
print(y.head())

print("\nFeature Shape:", X.shape)
print("Target Shape:", y.shape)

# ===============================
# MODEL BUILDING - STEP 2
# Train-Test Split
# ===============================

from sklearn.model_selection import train_test_split

# Split the dataset
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

print("\n========== Train Test Split ==========")
print("Training Features:", X_train.shape)
print("Testing Features :", X_test.shape)
print("Training Target  :", y_train.shape)
print("Testing Target   :", y_test.shape)

# ==========================================
# STEP 3: Train Linear Regression Model
# ==========================================

from sklearn.linear_model import LinearRegression

# Create model
model = LinearRegression()

# Train model
model.fit(X_train, y_train)

print("\n========== Model Training ==========")
print("Linear Regression Model Trained Successfully!")

# ==========================================
# STEP 4: Make Predictions
# ==========================================

y_pred = model.predict(X_test)

print("\nFirst 10 Predictions:")
print(y_pred[:10])

print("\nActual Values:")
print(y_test.iloc[:10].values)

# ==========================================
# STEP 5: Evaluate Model
# ==========================================

from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
    r2_score
)

import numpy as np

mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)

print("\n========== Model Evaluation ==========")
print("MAE :", mae)
print("MSE :", mse)
print("RMSE:", rmse)
print("R² Score:", r2)

# ==========================================
# STEP 6: Save the Model
# ==========================================

import joblib

joblib.dump(model, "Backend/sales_forecast_model.pkl")

print("\nModel saved successfully as sales_forecast_model.pkl")