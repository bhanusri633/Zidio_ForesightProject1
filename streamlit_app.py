import streamlit as st
import joblib
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Configure the page
st.set_page_config(
    page_title="Sales Forecasting Dashboard",
    page_icon="📊",
    layout="wide"
)

# Load model
model = joblib.load("Backend/sales_forecast_model.pkl")

# Load Dataset
data = pd.read_csv("Data/cleaned_retail_data.csv")

# Sidebar
st.sidebar.title("📋 Project Information")
st.sidebar.write("""
### Sales Forecasting Project

This dashboard predicts sales using a trained Linear Regression model.

**Features**
- Sales Prediction
- Interative Dashboard
- Data Visualization
- Machine Learning

Dataset:
Online Retail Dataset (UCI)
""")

# Title
st.title("📊 Sales Forecasting Dashboard")

# Description
st.write("Predict future sales using Machine Learning and explore historical sales trends.!")

st.divider()

# Dashboard KPIs

col1, col2, col3, col4 = st.columns(4)

total_sales = data["TotalAmount"].sum()

total_orders = len(data)

total_countries = data["Country"].nunique()

avg_order = data["TotalAmount"].sum() / len(data)

with col1:
    st.metric("💰 Total Sales", f"₹ {total_sales:,.0f}")
with col2:
    st.metric("📦 Total Orders", total_orders)
with col3:
    st.metric("🌍 Countries", total_countries)
with col4:
    st.metric("🛒 Avg Orders Value", f"₹ {avg_order:,.2f}")

# Line separator
st.divider()

# Input Section
st.subheader("📝 Predict Future Sales")

col1, col2 = st.columns(2)

with col1:
    quantity = st.number_input("Quantity", min_value=1, value=10)
    year = st.number_input("Year", min_value=2010, max_value=2030, value=2011)
    day = st.number_input("Day", min_value=1, max_value=31, value=15)

with col2:
    price = st.number_input("Price", min_value=0.0, value=100.0)
    month = st.number_input("Month", min_value=1, max_value=12, value=7)

predict = st.button("Predict Sales")

if predict:
    input_data = np.array([[quantity, price, year, month, day]])

    prediction = model.predict(input_data)

    prediction[0] = max(0, prediction[0])

    st.divider()

    st.subheader("📈 Prediction Result")

    st.metric(
        label="Predicted Sales",
        value=f"₹ {prediction[0]:.2f}"
    )

        # Display Prediction Status
    st.success("✔ Prediction Generated Successfully")

    # Display Entered Details
    st.info(f"""
    **Prediction Summary**

    • Quantity : {quantity}

    • Price : ₹ {price:.2f}

    • Date : {day}-{month}-{year}
    """)

    # Chart starts here
st.divider()
col1, col2 = st.columns(2)
with col1:
    st.subheader("📊 Top 10 Countries by Sales")

    top_countries = (
        data.groupby("Country")["TotalAmount"]
        .sum()
        .sort_values(ascending=False)
        .head(10)
    )

    fig, ax = plt.subplots(figsize=(10,5))

    top_countries.plot(
        kind="bar",
        ax=ax,
        color="royalblue"
    )

    ax.set_xlabel("Country")
    ax.set_ylabel("Total Sales")
    ax.set_title("Top 10 Countries by Sales")

    st.pyplot(fig)

with col2:
    st.subheader("📈 Monthly Sales Trend")

    monthly_sales = (
        data.groupby("Month")["TotalAmount"]
        .sum()
    )

    fig2, ax2 = plt.subplots(figsize=(10,5))

    monthly_sales.plot(
        kind="line",
        marker="o",
        linewidth=3,
        ax=ax2
    )

    ax2.set_xlabel("Month")
    ax2.set_ylabel("Total Sales")
    ax2.set_title("Monthly Sales Trend")

    st.pyplot(fig2)

    # Top 10 selling products chart
st.divider()
col3, col4 = st.columns(2)
with col3:
    st.subheader("📦 Top 10 Selling Products")

    top_products = (
        data.groupby("Description")["Quantity"]
        .sum()
        .sort_values(ascending=False)
        .head(10)
    )

    fig3, ax3 = plt.subplots(figsize=(10,6))

    top_products.plot(
        kind="barh",
        ax=ax3,
        fontsize=10,
        color="darkorange"
    )

    ax3.set_xlabel("Quantity Sold")
    ax3.set_ylabel("Product")
    ax3.set_title("Top 10 Selling Products")

    st.pyplot(fig3)

    # Pie chat
with col4:
    st.subheader("🥧 Sales Distribution by Top 5 Countries")

    country_sales = (
        data.groupby("Country")["TotalAmount"]
        .sum()
        .sort_values(ascending=False)
        .head(5)
    )

    fig4, ax4 = plt.subplots(figsize=(4,4))

    ax4.pie(
        country_sales,
        labels=country_sales.index,
        autopct="%1.1f%%",
        explode=[0.05]*5,
        textprops={"fontsize":4},
        startangle=90
    )

    ax4.set_title("Sales Distribution")

    st.pyplot(fig4)


st.markdown("""
<hr style="border:1px solid #d3d3d3; width:100%;">
""", unsafe_allow_html=True)

st.markdown("""
<div style='text-align:center; color:gray;'>

### 📊 Sales Forecasting Dashboard

Machine Learning Project using Linear Regression

**Developed by Bhanusri Dasoju** | © 2026

</div>
""", unsafe_allow_html=True)