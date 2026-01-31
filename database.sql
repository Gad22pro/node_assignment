CREATE TABLE users (
    id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(100),
    email varchar(100) UNIQUE,
    age int(3),
    salary decimal(10, 2),
    is_active boolean DEFAULT true
)