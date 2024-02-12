package com.model;

import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "medicines")
public class Medicine {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name ="MedicineId")
    private Long medicineId;
	
	
	@Column(name ="product_Name")
    private String productName;
	
	@Column(name ="pharma_Company")
    private String pharmaCompany;
	
	@Column(name ="Dosage")
    private String dosage;
	
	@Column(name ="Quantity")
    private int quantity;
	
	
	@Column(name ="Price")
    private double price;
	
	@Column(name ="Is_Active")
	@JsonInclude(JsonInclude.Include.NON_NULL)
    private String isActive;
	
	@Column(name ="Description")
    private String description;

    public Medicine() {
        // Default constructor
    }

    public Medicine(String productName, String pharmaCompany, String dosage, int quantity, double price, String isActive ,String description) {
        this.productName = productName;
        this.pharmaCompany = pharmaCompany;
        this.dosage = dosage;
        this.quantity = quantity;
        this.price = price;
        this.isActive = isActive;
        this.description=description;
    }

    public Long getMedicineId() {
        return medicineId;
    }

    public void setMedicineId(Long medicineId) {
        this.medicineId = medicineId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getPharmaCompany() {
        return pharmaCompany;
    }

    public void setPharmaCompany(String pharmaCompany) {
        this.pharmaCompany = pharmaCompany;
    }

    public String getDosage() {
        return dosage;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
        
        
   
}
    public String getIsActive() {
        return isActive;
    }

    public void setIsActive(String isActive) {
        this.isActive = isActive;
    }
    
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
