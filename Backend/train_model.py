import pandas as pd

# Read both sheets from the Excel file
sheet1 = pd.read_excel("Data/Copy of online_retail_II 2.xlsx", sheet_name="Year 2009-2010")

sheet2 = pd.read_excel("Data/Copy of online_retail_II 2.xlsx", sheet_name="Year 2010-2011")

print("Sheet 1 Shape:", sheet1.shape)
print("Sheet 2 Shape:", sheet2.shape)

# Combine both sheets into one dataset
df = pd.concat([sheet1, sheet2], ignore_index=True)



# Rename the column in Sheet 2
sheet2.rename(columns={"Invoice Date": "InvoiceDate"}, inplace=True)

df = pd.concat([sheet1, sheet2], ignore_index=True)

print("Combined Dataset Shape:", df.shape)
print(df.columns)

print(df.isnull().sum())

# Display the number of duplicate rows
print("Duplicate Rows:", df.duplicated().sum())

# Show rows where StockCode is missing
print(df[df["StockCode"].isnull()].head())