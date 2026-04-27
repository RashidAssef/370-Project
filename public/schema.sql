-- PawConnect Database Schema

-- USER Table
CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    role ENUM('USER', 'ADMIN') DEFAULT 'USER',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Admin Table (Optional: linked to user_id for extra admin-specific data)
CREATE TABLE Admin (
    admin_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE,
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE
);

-- Reporter Table (Optional: linked to user_id for extra reporter-specific data)
CREATE TABLE Reporter (
    reporter_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE,
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE
);

-- Notification Table
CREATE TABLE Notification (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    is_read BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE
);

-- Location Table
CREATE TABLE Location (
    location_id INT AUTO_INCREMENT PRIMARY KEY,
    city VARCHAR(100),
    area VARCHAR(100),
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6)
);

-- PetProfile Table
CREATE TABLE PetProfile (
    pet_id INT AUTO_INCREMENT PRIMARY KEY,
    species VARCHAR(50) NOT NULL,
    breed VARCHAR(100),
    age INT,
    gender ENUM('MALE','FEMALE','UNKNOWN'),
    color VARCHAR(50),
    distinguishing_marks TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- PetPhoto Table
CREATE TABLE PetPhoto (
    photo_id INT AUTO_INCREMENT PRIMARY KEY,
    pet_id INT,
    photo_url LONGTEXT,
    is_primary BOOLEAN DEFAULT FALSE,
    uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (pet_id) REFERENCES PetProfile(pet_id) ON DELETE CASCADE
);

-- CaseTable
CREATE TABLE CaseTable (
    case_id INT AUTO_INCREMENT PRIMARY KEY,
    reporter_id INT,
    admin_id INT NULL,
    location_id INT,
    pet_id INT,
    case_type ENUM('LOST','FOUND') NOT NULL,
    report_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    description TEXT,
    status ENUM('REPORTED','UNDER_REVIEW','MATCH_FOUND','RECOVERED','CLOSED') DEFAULT 'REPORTED',
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (reporter_id) REFERENCES Reporter(reporter_id) ON DELETE SET NULL,
    FOREIGN KEY (admin_id) REFERENCES Admin(admin_id) ON DELETE SET NULL,
    FOREIGN KEY (location_id) REFERENCES Location(location_id) ON DELETE SET NULL,
    FOREIGN KEY (pet_id) REFERENCES PetProfile(pet_id) ON DELETE SET NULL
);

-- CasePhoto Table
CREATE TABLE CasePhoto (
    photo_id INT AUTO_INCREMENT PRIMARY KEY,
    case_id INT,
    photo_url LONGTEXT,
    is_primary BOOLEAN DEFAULT FALSE,
    uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (case_id) REFERENCES CaseTable(case_id) ON DELETE CASCADE
);

-- LostReport Table
CREATE TABLE LostReport (
    lost_report_id INT AUTO_INCREMENT PRIMARY KEY,
    case_id INT UNIQUE,
    date_time DATETIME,
    reward DECIMAL(10,2),
    FOREIGN KEY (case_id) REFERENCES CaseTable(case_id) ON DELETE CASCADE
);

-- FoundReport Table
CREATE TABLE FoundReport (
    found_report_id INT AUTO_INCREMENT PRIMARY KEY,
    case_id INT UNIQUE,
    date_time DATETIME,
    found_condition VARCHAR(100), -- 'condition' is a reserved keyword in some SQL dialects
    FOREIGN KEY (case_id) REFERENCES CaseTable(case_id) ON DELETE CASCADE
);

-- Matches Table
CREATE TABLE Matches (
    match_id INT AUTO_INCREMENT PRIMARY KEY,
    lost_report_id INT,
    found_report_id INT,
    match_score FLOAT,
    match_status ENUM('PENDING','CONFIRMED','REJECTED') DEFAULT 'PENDING',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lost_report_id) REFERENCES LostReport(lost_report_id) ON DELETE CASCADE,
    FOREIGN KEY (found_report_id) REFERENCES FoundReport(found_report_id) ON DELETE CASCADE
);

-- PERFORMANCE INDEXES
CREATE INDEX idx_pet_species ON PetProfile(species);
CREATE INDEX idx_pet_breed ON PetProfile(breed);
CREATE INDEX idx_case_location ON CaseTable(location_id);
CREATE INDEX idx_case_status ON CaseTable(status);
CREATE INDEX idx_user_email ON User(email);

-- Global System Stats
CREATE TABLE IF NOT EXISTS GlobalStats (
    stat_key VARCHAR(50) PRIMARY KEY,
    stat_value INT DEFAULT 0
);

INSERT IGNORE INTO GlobalStats (stat_key, stat_value) VALUES ('recovered_pets', 0);