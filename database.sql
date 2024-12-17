CREATE DATABASE IF NOT EXISTS shopie_clone;
USE shopie_clone;

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image VARCHAR(255) NOT NULL
);

INSERT INTO products (name, description, price, image) VALUES
('Product 1', 'Description for product 1', 10.99, 'https://via.placeholder.com/100'),
('Product 2', 'Description for product 2', 15.49, 'https://via.placeholder.com/100');
