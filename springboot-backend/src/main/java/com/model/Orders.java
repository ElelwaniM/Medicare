package com.model;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "medorders")
public class Orders {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "OrderId")
    private Long orderId;
    
    @ManyToOne
    @JoinColumn(name = "UserId", nullable = false)
    private Users user;

    @ManyToOne
    @JoinColumn(name = "MedicineId", nullable = false)
    private Medicine medicine;

    @Column(name = "Quantity", nullable = false)
    private Integer quantity;

    @Column(name = "OrderTime", nullable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp orderTime;

    // Constructors, getters, and setters
    public Orders() {
        // Default constructor
    }

    public Orders(Users user, Medicine medicine, Integer quantity) {
        this.user = user;
        this.medicine = medicine;
        this.quantity = quantity;
    }

    // Getters and setters
    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public UserDto getUser() {
        return new UserDto(user.getUserId(), user.getUsername(), user.getAddress(), user.getPaymentInfo(), user.getPhoneNumber(), user.getEmailAddress());
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public Medicine getMedicine() {
        return medicine;
    }

    public void setMedicine(Medicine medicine) {
        this.medicine = medicine;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Timestamp getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(Timestamp orderTime) {
        this.orderTime = orderTime;
    }
}
