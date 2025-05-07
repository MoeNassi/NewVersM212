import pandas as pd
import os
import uuid
import tkinter as tk
from tkinter import messagebox

file_name = "stock.xlsx"

def save_name():
    name = name_entry.get().strip()
    
    if not name:
        messagebox.showerror("Error", "Name cannot be empty!")
        return

    guid = str(uuid.uuid4())

    if os.path.exists(file_name):
        df = pd.read_excel(file_name, engine="openpyxl")
    else:
        df = pd.DataFrame(columns=["GUID", "Name"])

    new_entry = pd.DataFrame({"GUID": [guid], "Name": [name]})

    df = pd.concat([df, new_entry], ignore_index=True)

    df.to_excel(file_name, index=False, engine="openpyxl")

    messagebox.showinfo("Success", f"Name '{name}' with GUID saved!")
    name_entry.delete(0, tk.END)

def get_sum():
    df = pd.read_excel(file_name)

    messagebox.showinfo("Success", f"Total Stock: {len(df)}")

root = tk.Tk()
root.title("Name Entry App")
root.geometry("400x200")

tk.Label(root, text="Enter Name:", font=("Arial", 12)).pack(pady=10)
name_entry = tk.Entry(root, font=("Arial", 12), width=30)
name_entry.pack(pady=5)

save_button = tk.Button(root, text="Save Name", font=("Arial", 12), command=save_name)
save_button.pack(pady=10)
save_button = tk.Button(root, text="Get Sum", font=("Arial", 12), command=get_sum)
save_button.pack(pady=10)
root.mainloop()